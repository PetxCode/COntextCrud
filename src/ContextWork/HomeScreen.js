import { Button } from "antd";
import React, { createContext } from "react";
import ViewHeader from "../ContextFile/ViewHeader";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <ViewHeader />

      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 20px",
            height: "50px",
            width: "80%",
            alignItems: "center",
            border: "1px solid lightblue",
            margin: "auto",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          <div>User 1</div>
          <div>
            <Button
              style={{
                marginRight: "10px",
                backgroundColor: "yellow",
                fontWeight: "bold",
              }}
            >
              <Link to="/edit/1">Edit</Link>
            </Button>
            <Button
              style={{
                backgroundColor: "red",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
