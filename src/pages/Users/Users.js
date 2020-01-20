import React, { useState } from "react";
import Swal from "sweetalert2";

import AddUserForm from "../../components/Forms/UserForm/AddUserForm";
import UserCard from "./UserCard";
import UserDeleteModal from "../../components/Modals/UserDeleteModal";

const Users = props => {
  const [modalIsOpen, setModal] = useState(false);

  const userNotAlone = props.user.users.length > 1;

  const handleChangeUser = userId => {
    const currentUser = props.user.users.find(user => user.email === userId);
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

  const handleDeleteUser = userId => {
    const allUsers = props.user.users.filter(user => user.email !== userId);
    const currentUser = props.user.currentUser.email;
    if (userId !== currentUser) {
      props.deleteUser({ users: allUsers });
    } else {
      openModal();
    }
  };

  const editModeToggler = userId => {
    const currentUser = props.user.users.find(user => user.email === userId);
    props.editUserStart({
      editMode: {
        active: true,
        name: currentUser.name,
        email: currentUser.email
      }
    });
  };

  const handleEditUser = (users, currentUser) => {
    props.editUserEnd({
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
        editModeEnd={props.editModeEnd}
        editMode={props.user.editMode}
        currentUser={props.user.currentUser}
        allUsers={props.user.users}
        addUser={props.addUser}
      />
      <div className="flex justify-around flex-wrap">
        {props.user.users.map(user => (
          <UserCard
            editMode={props.user.editMode.active}
            editModeToggler={editModeToggler}
            openModal={openModal}
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
