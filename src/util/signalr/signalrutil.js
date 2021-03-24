import * as signalr from "@microsoft/signalr";

const signalRUtil = () => {
  const hubConnect = (username) => {
    const baseURL = process.env.VUE_APP_BASE_URL;
    const conn = new signalr.HubConnectionBuilder()
      .withUrl(`${baseURL}/notifications?username=${username}`)
      .withAutomaticReconnect()
      .build();

    conn
      .start()
      .then((resp) => {
        console.log("Server conn noti connected!");
        conn
          .invoke("GetConnectionId")
          .then((identifi) => {
            console.log("identifi :>> ", identifi);
          })
          .catch((err1) => {
            console.log("err identifi :>> ", err1);
          });
      })
      .catch((err2) => {
        console.log("err connection :>> ", err2);
      });
    return conn;
  };
  return { hubConnect };
};

export { signalRUtil as useSignalR };
