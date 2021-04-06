import repoFactory from "@/util/repoFactory";

const videoRepo = repoFactory.get("videoChatRepo");

/**
 * Service for OpenVidu
 * @returns {{getSub: (function(*=): *), getToken: (function(*=): *)}}
 */
const service = () => {
  /**
   * Get Token to init call
   * @param {string} sid
   * @returns {*}
   */
  const getToken = (sid) => {
    return videoRepo.post(sid);
  };
  const getSub = (sid) => {
    return videoRepo.getSub(sid);
  };
  return { getToken, getSub };
};

export { service as useVCService };
