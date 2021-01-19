import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./ContextDesign/GlobalState";
import ViewHeader from "../ContextFile/ViewHeader";

const HomeDesign = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <div>
      <ViewHeader />
      <div style={{ marginTop: "30px" }}></div>
      {users.map(({ name, id }) => (
        <div
          style={{
            display: "flex",
            width: "500px",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "auto",
            border: "1px solid lightgray",
            height: "50px",
            padding: "0 20px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
          key={id}
        >
          <div> {name}</div>
          <div>
            <Button
              style={{
                marginRight: "10px",
                backgroundColor: "yellow",
                fontWight: "bold",
                fontFamily: "Poppins",
              }}
            >
              <Link to={`/edit/${id}`}> Edit</Link>
            </Button>
            <Button
              style={{
                color: "white",
                backgroundColor: "red",
                fontWight: "bold",
                fontFamily: "Poppins",
              }}
              onClick={() => {
                // removeUser(id);
                console.log(id);
                removeUser(id);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeDesign;
