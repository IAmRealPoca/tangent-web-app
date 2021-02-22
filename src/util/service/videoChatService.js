import repoFactory from "@/util/repoFactory";

const videoRepo = repoFactory.get("videoChatRepo");

//TO BE CHANGED
const service = () => {
    const getToken = (sid) => {
        return videoRepo.post(sid);
    }
    return {getToken}
}

export { service as useVCService }