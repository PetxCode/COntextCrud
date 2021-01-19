import { Button } from "antd";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

const AddScreen = () => {
  const history = useHistory();
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
          Add User
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
          Cancel Task
        </Button>
      </div>
    </div>
  );
};

export default AddScreen;
