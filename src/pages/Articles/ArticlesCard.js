import React from "react";

const Articlescard = ({ article }) => {
  return (
    <div
      className={`m-5 max-w-md w-full max-h-md flex ${
        article.important ? "border-2 border-red-500" : null
      }`}
    >
      <div
        className="h-48 h-auto w-48 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center border-r border-b border-l border-gray-400 lg:border-r-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r"
        style={{
          backgroundImage: `url(${article.img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      <div className="w-full h-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            {article.category}
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">
            {article.title}
          </div>
          <p className="text-gray-700 text-base">{article.body}</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={article.img} />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{article.creatorName}</p>
            <p className="text-gray-600">{article.pseudonym}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articlescard;
