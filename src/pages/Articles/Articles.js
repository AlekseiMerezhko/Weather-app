import React, { useState } from "react";
import ArticlesCard from "./ArticlesCard";
import AddArticleModal from "../../components/Modals/AddArticleModal";

const Articles = props => {
  const [addArticleModal, setAddArticleModal] = useState(false);

  const openAddArticleModal = () => {
    setAddArticleModal(true);
  };
  const closeAddArticleModal = () => {
    setAddArticleModal(false);
  };

  return (
    <div className="lg:w-3/4 w-full m-auto">
      <div>
        <button
          onClick={openAddArticleModal}
          className="btn bg-blue-500 rounded text-white p-2"
        >
          Add Article
        </button>
      </div>
      <div className="p-2 flex flex-wrap justify-center">
        {props.articles.map(article => (
          <ArticlesCard article={article} key={article.id} />
        ))}
      </div>
      <AddArticleModal
        addArticle={props.addArticle}
        closeModal={closeAddArticleModal}
        modalIsOpen={addArticleModal}
      />
    </div>
  );
};

export default Articles;
