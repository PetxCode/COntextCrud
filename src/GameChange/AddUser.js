import { Button } from "antd";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "./ContextDesign/GlobalState";
import { v4 as uuid } from "uuid";

const AddUsers = () => {
  const history = useHistory();
  const { removeUser } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);

  const AddUsers = () => {
    const newUser = {
      id: uuid(),
      name: name,
    };

    addUser(newUser);
    history.push("/home_design");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "600px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "40px",
        fontFamily: "Poppins",
      }}
    >
      <div>Add User Page</div>
      <input
        style={{
          width: "500px",
          padding: "0 10px",
          marginTop: "50px",
        }}
        placeholder="Add User"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <Button
          style={{
            marginRight: "10px",
            backgroundColor: "yellow",
            fontWight: "bold",
            fontFamily: "Poppins",
            width: "90px",
          }}
          onClick={() => {
            AddUsers();
          }}
        >
          Add User
        </Button>
        <Button
          style={{
            color: "white",
            backgroundColor: "red",
            fontWight: "bold",
            fontFamily: "Poppins",
            width: "90px",
          }}
          onClick={() => {
            history.push("/home_design");
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default AddUsers;
