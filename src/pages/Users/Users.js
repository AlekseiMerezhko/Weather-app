import React, { useState } from "react";
import Swal from "sweetalert2";

import AddUserForm from "../../components/Forms/UserForm/AddUserForm";
import UserCard from "./UserCard";
const Users = props => {
  console.log("props", props);
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
      console.log("Need to change");
    }
  };
  return (
    <div>
      <AddUserForm allUsers={props.user.users} addUser={props.addUser} />
      <div className="flex justify-around flex-wrap">
        {props.user.users.map(user => (
          <UserCard
            handleDeleteUser={handleDeleteUser}
            userNotAlone={userNotAlone}
            key={user.email}
            user={user}
            handleChangeUser={handleChangeUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
