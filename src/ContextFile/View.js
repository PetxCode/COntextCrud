import React, { useState, useReducer } from "react";
import { Button } from "antd";

const initState = {
  counter: 0,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "A":
      return {
        counter: state.counter + 1,
      };

    case "B":
      return {
        counter: state.counter - 1,
      };

    case "C":
      return {
        counter: action.payload,
      };

    default:
      return state;
  }
};

const View = () => {
  const [state, dispatch] = useReducer(AppReducer, initState);
  const [input, setInput] = useState(0);
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: "auto",
        }}
      >
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            dispatch({
              type: "C",
              payload: input,
            });
          }}
        >
          Init Count
        </Button>
      </div>
      <div> {state.counter} </div>
      <div>
        <Button
          onClick={() => {
            dispatch({
              type: "B",
            });
          }}
        >
          Decrease
        </Button>
        <Button
          onClick={() => {
            dispatch({
              type: "A",
            });
          }}
        >
          Increase
        </Button>
      </div>
    </div>
  );
};

export default View;
