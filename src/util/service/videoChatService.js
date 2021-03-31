import repoFactory from "@/util/repoFactory";

const videoRepo = repoFactory.get("videoChatRepo");

//TO BE CHANGED
const service = () => {
  const getToken = (sid) => {
    return videoRepo.post(sid);
  };
  const getSub = (sid) => {
    return videoRepo.getSub(sid);
  };
  return { getToken, getSub };
};

export { service as useVCService };
