import axios from "axios";
const URL = "https://randomuser.me/api/?results=100"

export default {
    getData() {
        return axios.get(URL);
    }
}