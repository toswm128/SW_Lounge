import axios from "axios";
import { SERVER } from "../../Config/config.json";

class Detail {
  getDetail = async id => {
    try {
      const response = await axios.get(`${SERVER}board/detail/${id}`);
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  updateBoard = async ({
    title,
    content,
    writer,
    language,
    password,
    tag1,
    tag2,
    tag3,
    id,
  }) => {
    const body = {
      title,
      content,
      writer,
      language,
      password,
      tag1,
      tag2,
      tag3,
    };
    try {
      await axios.put(`${SERVER}board/detail/${id}/`, body);
    } catch (err) {
      console.log(err);
    }
  };
  deleteDetail = async id => {
    try {
      const response = await axios.delete(`${SERVER}board/detail/${id}`);
      return response;
    } catch (err) {
      console.log(err);
    }
  };
}

export default new Detail();
