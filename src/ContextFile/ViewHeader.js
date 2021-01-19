import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

const ViewHeader = () => {
  return (
    <div>
      <Header
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "bold",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: "lightblue",
            color: "white",
            fontFamily: "Poppins",
            textTransform: "uppercase",
          }}
        >
          <Link to="/payment"> Donate </Link>
        </Button>
        <div>
          <Link
            to="/add_user"
            style={{
              cursor: "pointer",
              color: "white",
            }}
          >
            Add Users
          </Link>
        </div>
      </Header>
    </div>
  );
};

export default ViewHeader;
