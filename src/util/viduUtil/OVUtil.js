import { OpenVidu } from "openvidu-browser";
import { useVCService } from "@/util/service/videoChatService";
export const OVUtil = () => {
  const data = {
    OV: undefined,
    session: undefined,
    mainStreamManager: undefined,
    publisher: undefined,
    subscribers: [],
    mySessionId: "NyamSed",
    myUserName: "Participant" + Math.floor(Math.random() * 100),
  };
  const joinSession = async () => {
    let num = 0;
    // --- Get an OpenVidu object ---
    data.OV = new OpenVidu();

    // --- Init a session ---
    data.session = data.OV.initSession();

    // --- Specify the actions when events take place in the session ---

    // On every new Stream received...
    data.session.on("streamCreated", ({ stream }) => {
      // console.log("Tao la steram: ", stream);
      const subscriber = data.session.subscribe(stream);
      data.subscribers.push(subscriber);
    });

    // On every Stream destroyed...
    data.session.on("streamDestroyed", ({ stream }) => {
      const index = data.subscribers.indexOf(stream.streamManager, 0);
      if (index >= 0) {
        data.subscribers.splice(index, 1);
      }
    });
    data.session.on("connectionCreated", (event) => {
      console.warn("data is sum event when connectionCreated: ", event);
      console.warn("Num ", num++);
    });
    data.session.on("connectionDestroyed", (event) => {
      console.warn("data is sum event when connectionDestroyed: ", event);
    });

    // --- Connect to the session with a valid user token ---

    // 'getToken' method is simulating what your server-side should do.
    // 'token' parameter should be retrieved and returned by your own backend
    const token = await getToken2(data.mySessionId);
    const session = await data.session.connect(token, {
      clientData: data.myUserName,
    });
    try {
      // --- Get your own camera stream with the desired properties ---
      const publisher = data.OV.initPublisher(undefined, {
        audioSource: undefined, // The source of audio. If undefined default microphone
        videoSource: undefined, // The source of video. If undefined default webcam
        publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
        publishVideo: true, // Whether you want to start publishing with your video enabled or not
        resolution: "640x480", // The resolution of your video
        frameRate: 40, // The frame rate of your video
        insertMode: "APPEND", // How the video is inserted in the target element 'video-container'
        mirror: false, // Whether to mirror your local video or not
      });

      // console.log("publisher init: ", publisher);

      data.mainStreamManager = publisher;
      data.publisher = publisher;

      // console.log("data publisher init: ", data.publisher);

      // --- Publish your stream ---

      data.session.publish(data.publisher);
    } catch (error) {
      console.log(
        "There was an error connecting to the session:",
        error.code,
        error.message
      );
    }

    window.addEventListener("beforeunload", leaveSession);

    console.warn("Data frmom Util: ", data);
    console.warn("Data publisher from Util: ", data.publisher);

    return data;
  };

  const leaveSession = () => {
    // --- Leave the session by calling 'disconnect' method over the Session object ---
    if (data.session) data.session.disconnect();

    data.session = undefined;
    data.mainStreamManager = undefined;
    data.publisher = undefined;
    data.subscribers = [];
    data.OV = undefined;

    window.removeEventListener("beforeunload", leaveSession);

  };

  const updateMainVideoStreamManager = (stream) => {
    if (data.mainStreamManager === stream) return;
    data.mainStreamManager = stream;
  };

  const getToken2 = (sessionId) => {
    const VCService = useVCService();
    const session = {
      recordingMode: "ALWAYS",
      customSessionId: sessionId,
    };
    return VCService.getToken(session);
  };
  return { joinSession, updateMainVideoStreamManager, leaveSession };
};
