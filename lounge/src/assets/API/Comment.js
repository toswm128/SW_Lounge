import axios from "axios";
import { SERVER } from "../../Config/config.json";

class Comment {
  postComment = async (name, board_id, content, password, kakao) => {
    try {
      const body = {
        name, // 답변자, 댓글 작성자 닉네임
        board_id, // 댓글을 작성한 게시판의 id값
        content, // 댓글 내용
        password, // 댓글 수정 시 필요한 비밀번호
        kakao, // 글 수정 시 사용할 비밀번호, bool값
      };

      await axios.post(`${SERVER}/board/comment/post/`, body);
    } catch (error) {
      console.log(error);
    }
  };
  updateComment = async (name, board_id, content, password, kakao, id) => {
    try {
      const body = {
        name, // 답변자, 댓글 작성자 닉네임
        board_id, // 댓글을 작성한 게시판의 id값
        content, // 댓글 내용
        password, // 댓글 수정 시 필요한 비밀번호
        kakao, // 글 수정 시 사용할 비밀번호, bool값
      };

      await axios.put(`${SERVER}/board/comment/${id}/`, body);
    } catch (error) {
      if (error.response.status === 400) {
        alert("이름과 내용을 입력해주세요");
      }
    }
  };
  delectComment = async id => {
    try {
      await axios.delete(`${SERVER}/board/comment/${id}/`);
    } catch (err) {
      console.log(err);
    }
  };
}

export default new Comment();
