import { axiosClient } from './axiosClient';

const UserApi = {
    getAll() {
        const url = `/user`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/user/${id}`;
        return axiosClient.get(url);
    },
    add(user) {
        const url = `/signup`;
        return axiosClient.post(url, user);
    },
    remove(id) {
        const url = `/user/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/user/${id}`;
        return axiosClient.put(url, data);
    },
    login(user) {
        const url = `/signin`;
        console.log(url);
        return axiosClient.post(url, user);
    },
}
export default UserApi;