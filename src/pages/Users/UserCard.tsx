import React from "react";

type Article = {
  creatorName: string;
  creatorEmail: string;
  pseodonym: string;
  img: string;
  title: string;
  body: string;
  important: boolean;
  category: string;
  id: string;
};
type Props = {
  user: { name: string; email: string };
  userNotAlone: boolean;
  handleChangeUser: (param: any) => void;
  handleDeleteUser: (param: any) => void;
  editModeToggler: (param: any) => void;
  editMode: boolean;
  articles: Article[];
};

const UserCard = ({
  user,
  userNotAlone,
  handleChangeUser,
  handleDeleteUser,
  editModeToggler,
  editMode,
  articles
}: Props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg card-wrap">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div
          className="p-2 mt-4 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="font-semibold mr-2 text-left flex-auto">
            This user has
          </span>
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            {
              articles.filter(
                (article: Article) => article.creatorEmail === user.email
              ).length
            }
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            articles
          </span>
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{user.email}
        </span>
      </div>
      {!userNotAlone && (
        <div className="px-6 py-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-red-700 mr-2">
            If you want to delete this user, you need to create at leas one more
            user
          </span>
        </div>
      )}

      <div className="px-6 py-4 flex justify-between">
        <button
          id={user.email}
          disabled={editMode}
          onClick={(e: any) => handleChangeUser(e.target.id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Select
        </button>
        <button
          onClick={(e: any) => editModeToggler(e.target.id)}
          disabled={editMode}
          id={user.email}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Edit
        </button>
        {userNotAlone && (
          <button
            id={user.email}
            disabled={!userNotAlone && editMode}
            onClick={(e: any) => handleDeleteUser(e.target.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
