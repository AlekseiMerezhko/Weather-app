import React, { useState } from "react";
import ArticlesCard from "./ArticlesCard";
import AddArticleModal from "../../components/Modals/AddArticleModal";

type Article = {
  img: string;
  important: boolean;
  category: string;
  title: string;
  body: string;
  creatorName: string;
  pseudonym: string;
  id: string;
};
type User = {
  currentUser: {
    email: string;
    name: string;
  };
};
type Articles = any;

type AddArticle = () => void;

type Props = {
  articles: Articles;
  user: User;
  addArticle: AddArticle;
};

const Articles = ({ articles: articlesArray, user, addArticle }: Props) => {
  const { articles } = articlesArray;
  const { currentUser } = user;
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
        {articles.map((article: Article) => (
          <ArticlesCard article={article} key={article.id} />
        ))}
      </div>
      <AddArticleModal
        currentUser={currentUser}
        addArticle={addArticle}
        closeModal={closeAddArticleModal}
        modalIsOpen={addArticleModal}
      />
    </div>
  );
};

export default Articles;
