import Board from "./Board";
import Detail from "./Detail";
import Comment from "./Comment";

class CustomAPI {
  Board = () => {
    Board();
  };
  Detail = () => {
    Detail();
  };
  Comment = () => {
    return Comment;
  };
}

export default new CustomAPI();
