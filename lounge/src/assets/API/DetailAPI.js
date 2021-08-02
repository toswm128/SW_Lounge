import axios from "axios";
import { SERVER } from "../../Config/config.json";

class Detail {
  getDetail = async id => {
    try {
      const response = axios.get(`${SERVER}board/detail/${id}`);
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  putDetail = async (id, { body }) => {
    try {
      const response = axios.put(`${SERVER}board/detail/${id}`, body);
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  deleteDetail = async id => {
    try {
      const response = axios.delete(`${SERVER}board/detail/${id}`);
      return response;
    } catch (err) {
      console.log(err);
    }
  };
}

export default new Detail();
