import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const ReactWindowTableComponent = props => {
  const [articles, setArticle] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({
        title: `Title ${i}`,
        author: `Author ${i}`,
        views: `Views ${i}`,
        id: i
      });
    }
    setArticle(arr);
    setData(arr.slice(0, 10));
  }, []);
  const handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * 10);
    const newArr = articles.slice(offset, offset + 10);
    setData(newArr);
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <p>
        ReactWindowTableComponent{" "}
        <span className="text-red-500 text-4xl">{props.location.state.id}</span>
      </p>
      <p>
        Query Params{" "}
        <span className="text-red-500 text-4xl">{props.location.search}</span>
      </p>

      <div className="w-full overflow-x-auto flex flex-col items-center">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Views</th>
            </tr>
          </thead>
          <tbody>
            {data.map(article => (
              <tr key={article.id}>
                <td className="border px-4 py-2">{article.title}</td>
                <td className="border px-4 py-2">{article.author}</td>
                <td className="border px-4 py-2">{article.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          // breakClassName={"break-me"}
          pageCount={10}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"flex py-5 flex-wrap"}
          pageClassName={
            "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer ml-1 mr-1"
          }
          breakClassName={
            "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          }
          previousClassName={
            "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          }
          nextClassName={
            "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          }
          disabledClassName={"bg-blue-900"}
          activeClassName={"bg-blue-700"}
        />
      </div>
    </div>
  );
};

export default ReactWindowTableComponent;
