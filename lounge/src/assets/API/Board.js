import axios from "axios";
import { SERVER } from "../../Config/config.json";

class Board {
  getBoard = async () => {
    try {
      const response = axios.get(`${SERVER}board`);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  postBoard = async ({
    title,
    content,
    writer,
    language,
    password,
    tag1,
    tag2,
    tag3,
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
      axios.post(`${SERVER}board/`, body);
    } catch (err) {
      console.log(err);
    }
  };
}

export default new Board();
