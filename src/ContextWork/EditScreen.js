import { Button } from "antd";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../ContextWork/ContextAPI/GlobalState";

const EditScreen = () => {
  const history = useHistory();
  const { mgs, user } = useContext(GlobalContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <div>
        <input
          style={{
            width: "400px",
            marginBottom: "10px",
          }}
        />
      </div>
      <div>
        <Button
          style={{
            marginRight: "10px",
            backgroundColor: "yellow",
          }}
        >
          Submit
        </Button>
        <Button
          style={{
            marginRight: "10px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={() => {
            history.push("/home");
          }}
        >
          Cancel
        </Button>
      </div>
      <div>Hello</div>
      <div>
        {" "}
        {user.map((users) => (
          <div key={users.id}> {users.name} </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default EditScreen;
