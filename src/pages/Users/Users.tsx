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

type Users = [{ name: string; email: string }];
type CurrentUser = { name: string; email: string };

const Users = (props: any) => {
  const [modalIsOpen, setModal] = useState(false);
  const userNotAlone = props.user.users.length > 1;

  const handleChangeUser = (userId: string) => {
    const currentUser = props.user.users.find(
      (user: User) => user.email === userId
    );
    if (props.user.currentUser.email === userId) {
      Swal.fire({
        icon: "info",
        title: "Oops...",
        text: "This user already selected!"
      });
    } else {
      props.changeUser({ currentUser });
    }
  };

  const handleDeleteUser = (userId: string) => {
    const allUsers = props.user.users.filter(
      (user: User) => user.email !== userId
    );
    const currentUser = props.user.currentUser.email;
    const newArticlesArray = props.articles.articles.filter(
      (article: Article) => article.creatorEmail !== userId
    );
    if (userId !== currentUser) {
      props.deleteUser({ users: allUsers });
      props.deleteArticle({ articles: newArticlesArray });
    } else {
      openModal();
    }
  };

  const editModeToggler = (userId: string) => {
    const currentUser = props.user.users.find(
      (user: User) => user.email === userId
    );
    props.editUserStart({
      editMode: {
        active: true,
        name: currentUser.name,
        email: currentUser.email
      }
    });
  };

  const handleEditUser = (users: Users, currentUser: CurrentUser) => {
    props.editUserEnd({
      users,
      currentUser,
      editMode: { active: false, name: "", email: "" }
    });
  };

  const closeModal = () => {
    setModal(false);
    const ModalDnD: any = document.getElementById("ModalDnD");
    ModalDnD.style.display = "none";
  };

  const openModal = () => {
    setModal(true);
  };

  return (
    <div>
      <AddUserForm
        handleEditUser={handleEditUser}
        editModeEnd={props.editModeEnd}
        editMode={props.user.editMode}
        currentUser={props.user.currentUser}
        allUsers={props.user.users}
        addUser={props.addUser}
      />
      <div className="flex md:justify-between justify-center flex-wrap mt-4">
        {props.user.users.map((user: User) => (
          <UserCard
            articles={props.articles.articles}
            editMode={props.user.editMode.active}
            editModeToggler={editModeToggler}
            handleDeleteUser={handleDeleteUser}
            userNotAlone={userNotAlone}
            key={user.email}
            user={user}
            handleChangeUser={handleChangeUser}
          />
        ))}
      </div>
      <UserDeleteModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default Users;
