import repoFactory from "@/util/repoFactory";

const videoRepo = repoFactory.get("videoRepo");

const videoService = () => {
  const getVideo = (employeeId) => {
    return videoRepo.getVideo();
  };

  const addVideo = (payload, hasPDF = false, hasVideo = false) => {
    return videoRepo.addVideo(payload, hasPDF, hasVideo);
  };
  
  return { getVideo,addVideo};
};

export { videoService as useVideoService };
