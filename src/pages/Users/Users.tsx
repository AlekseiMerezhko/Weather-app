import React, { useState } from "react";
import Swal from "sweetalert2";

import AddUserForm from "../../components/Forms/UserForm/AddUserForm";
import UserCard from "./UserCard";
import UserDeleteModal from "../../components/Modals/UserDeleteModal";
type User = {
  email: string;
  name: string;
};
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

type Users = User[];

type EditMode = {
  active: boolean;
  name: string;
  email: string;
};

type StoreUser = {
  users: User[];
  currentUser: User;
  editMode: EditMode;
};

type Props = {
  users: Users;
  user: StoreUser;

  articles: { articles: Article[] };

  editUserStart: (object: { editMode: EditMode }) => void;
  addUser: () => void;
  editModeEnd: () => void;
  changeUser: (currentUser: any) => void;
  deleteUser: (users: { users: User[] }) => void;
  editUserEnd: (user: {
    users: User[];
    currentUser: User;
    editMode: EditMode;
  }) => void;
  deleteArticle: (articles: { articles: Article[] }) => void;
};

const Users = ({
  user,
  changeUser,
  deleteUser,
  deleteArticle,
  articles,
  editUserStart,
  editUserEnd,
  editModeEnd,
  addUser
}: Props) => {
  const [modalIsOpen, setModal] = useState(false);
  const userNotAlone = user.users.length > 1;

  const handleChangeUser = (userId: string) => {
    const currentUser = user.users.find((user: User) => user.email === userId);
    if (user.currentUser.email === userId) {
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "This user already selected!"
      });
    } else {
      changeUser({ currentUser });
    }
  };

  const handleDeleteUser = (userId: string) => {
    const allUsers = user.users.filter((user: User) => user.email !== userId);
    const currentUser = user.currentUser.email;
    const newArticlesArray = articles.articles.filter(
      (article: Article) => article.creatorEmail !== userId
    );
    if (userId !== currentUser) {
      deleteUser({ users: allUsers });
      deleteArticle({ articles: newArticlesArray });
    } else {
      openModal();
    }
  };

  const editModeToggler = (userId: string) => {
    const currentUser: any = user.users.find(
      (user: User) => user.email === userId
    );
    editUserStart({
      editMode: {
        active: true,
        name: currentUser.name,
        email: currentUser.email
      }
    });
  };

  const handleEditUser = (users: Users, currentUser: User) => {
    editUserEnd({
      users,
      currentUser,
      editMode: { active: false, name: "", email: "" }
    });
  };

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  return (
    <div>
      <AddUserForm
        handleEditUser={handleEditUser}
        editModeEnd={editModeEnd}
        editMode={user.editMode}
        currentUser={user.currentUser}
        allUsers={user.users}
        addUser={addUser}
      />
      <div className="flex md:justify-between justify-center flex-wrap mt-4">
        {user.users.map((userList: User | any) => (
          <UserCard
            articles={articles.articles}
            editMode={user.editMode.active}
            editModeToggler={editModeToggler}
            handleDeleteUser={handleDeleteUser}
            userNotAlone={userNotAlone}
            key={userList.email}
            user={userList}
            handleChangeUser={handleChangeUser}
          />
        ))}
      </div>
      <UserDeleteModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default Users;
