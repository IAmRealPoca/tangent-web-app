import repoFactory from "@/util/repoFactory";

const videoRepo = repoFactory.get("videoRepo");

const videoService = () => {
  const getVideo = (employeeId) => {
    return videoRepo.getVideo();
  };

  const addVideo = (payload) => {
    return videoRepo.addVideo(payload);
  };
  
  return { getVideo,addVideo};
};

export { videoService as useVideoService };
