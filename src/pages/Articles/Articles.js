import React, { useState } from "react";
import ArticlesCard from "./ArticlesCard";
import AddArticleModal from "../../components/Modals/AddArticleModal";

const Articles = props => {
  const { articles } = props.articles;
  const { currentUser } = props.user;
  const [addArticleModal, setAddArticleModal] = useState(false);

  const openAddArticleModal = () => {
    setAddArticleModal(true);
  };
  const closeAddArticleModal = () => {
    setAddArticleModal(false);
  };

  return (
    <div className=" w-full m-auto flex flex-col">
      <div>
        <button
          onClick={openAddArticleModal}
          className="btn bg-blue-500 rounded text-white p-2"
        >
          Add Article
        </button>
      </div>
      <div className="p-2 flex flex-wrap flex-row items-stretch justify-center">
        {articles.map(article => (
          <ArticlesCard article={article} key={article.id} />
        ))}
      </div>
      <AddArticleModal
        currentUser={currentUser}
        addArticle={props.addArticle}
        closeModal={closeAddArticleModal}
        modalIsOpen={addArticleModal}
      />
    </div>
  );
};

export default Articles;
