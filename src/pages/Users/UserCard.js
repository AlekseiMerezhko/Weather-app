import React from "react";

const UserCard = ({
  user,
  userNotAlone,
  handleChangeUser,
  handleDeleteUser
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{user.email}
        </span>
      </div>
      {!userNotAlone ? (
        <div className="px-6 py-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-red-700 mr-2">
            If you want to delete this user, you need to create at leas one more
            user
          </span>
        </div>
      ) : null}

      <div className="px-6 py-4 flex justify-between">
        <button
          id={user.email}
          onClick={e => handleChangeUser(e.target.id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Select
        </button>
        {userNotAlone ? (
          <button
            id={user.email}
            disabled={!userNotAlone}
            onClick={e => handleDeleteUser(e.target.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default UserCard;
