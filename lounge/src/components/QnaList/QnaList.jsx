import React, { useState } from "react";
import Search from "../Search/Search";

import "./QnaList.css";

const QnaList = ({ qnaList, searchValue, searcher }) => {
  return (
    <div className="qna">
      <div className="content">
        <div className="q-title">Q&A</div>
        <div className="q-allBorad">전체 게시글: {qnaList.length}</div>
        <div className="q-content">
          <table className="q-list">
            <colgroup>
              <col width="5%" />
              <col width="50%" />
              <col width="10%" />
              <col width="15%" />
              <col width="5%" />
              <col width="15%" />
            </colgroup>

            <thead>
              <tr>
                <th>NO.</th>
                <th>Title</th>
                <th>Writer</th>
                <th>KeyWord</th>
                <th>language</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {searchValue.value !== ""
                ? qnaList
                    .filter(
                      qna =>
                        (searcher.value === "제목" &&
                          qna.title.includes(searchValue.value)) ||
                        (searcher.value === "작성자" &&
                          qna.writer.includes(searchValue.value)) ||
                        (searcher.value === "태그" &&
                          qna.tags
                            .map(tag => {
                              return tag;
                            })
                            .includes(searchValue.value)) ||
                        (searcher.value === "언어" &&
                          qna.language.includes(searchValue.value))
                    )
                    .map((current, index) => (
                      <tr key={index}>
                        <td>{current.id}</td>
                        <td className="q-l-title">{current.title}</td>
                        <td>{current.writer}</td>
                        <td className="q-l-tags">
                          {current.tags.map((tag, key) => (
                            <span key={key}>{tag}</span>
                          ))}
                        </td>
                        <td>{current.language}</td>
                        <td>{current.date}</td>
                      </tr>
                    ))
                : qnaList.map((current, index) => (
                    <tr key={index}>
                      <td>{current.id}</td>
                      <td className="q-l-title">{current.title}</td>
                      <td>{current.writer}</td>
                      <td className="q-l-tags">
                        {current.tags.map((tag, key) => (
                          <span key={key}>{tag + " "}</span>
                        ))}
                      </td>
                      <td>{current.language}</td>
                      <td>{current.date}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
          <Search searchValue={searchValue} searcher={searcher} />
        </div>
      </div>
    </div>
  );
};

export default QnaList;
