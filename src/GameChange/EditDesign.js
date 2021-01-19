import { Button } from "antd";
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "./ContextDesign/GlobalState";
import { v4 as uuid } from "uuid";

const EditDesign = (props) => {
  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const [input, setInput] = useState("");

  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });

  const currentID = props.match.params.id;

  // const onChange = () =>{
  //   ...selectedUser, [e.target.name]:e.target.value
  // }

  // const onEnter = () => {
  //   editUser(selectedUser);
  // };

  useEffect(() => {
    const userID = currentID;
    const selectedUser = users.find((user) => user.id === userID);
    setSelectedUser(selectedUser);
  }, [currentID, users]);

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
      <div>Editing Page</div>
      <input
        style={{
          width: "500px",
          marginTop: "50px",
          padding: "0 10px",
        }}
        placeholder="Edit Name"
        value={selectedUser.name}
        name="name"
        onChange={(e) => {
          setSelectedUser({
            ...selectedUser,
            [e.target.name]: e.target.value,
          });
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
            // onEnter();
            editUser(selectedUser);
            history.push("/home_design");
          }}
        >
          Enter
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

export default EditDesign;
