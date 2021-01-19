import { Button } from "antd";
import React from "react";
// import { useHistory } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import { useHistory, Link } from "react-router-dom";

const config = {
  // reference: new Date().getTime(),
  // email: "user@example.com",
  // amount: ,
  // publicKey: "pk_test_dsdfghuytfd2345678gvxxxxxxxxxx",
};

const onSuccess = (reference) => {
  console.log(reference);
  // alert("Thank you for your generous supply, God bless you");
};

const onClose = () => {
  alert("Opppsss! Sorry about that, would you love to try again?");
  console.log("closed");
};

export const PaystackHookExample = () => {
  const history = useHistory();
  const [input, setInput] = React.useState(0);
  const initializePayment = usePaystackPayment({
    reference: new Date().getTime(),
    email: "user@example.com",
    amount: input,
    publicKey: "pk_test_f747091150685438ae86d5a98b5df3c60275f367",
  });

  return (
    <div
      style={{
        fontFamily: "Poppins",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "60px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        {" "}
        You've entered the sum of ₦{input / 100}{" "}
      </div>
      <input
        placeholder="How much would you love to give?"
        style={{
          width: "400px",
          padding: "10px 20px",
          marginBottom: "10px",
        }}
        type="Number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <div>
        <Button
          style={{
            backgroundColor: "green",
            color: "white",
            width: "300px",
          }}
          onClick={() => {
            initializePayment(onSuccess, onClose);
            history.push("/home_design");
          }}
        >
          Pay Now!
        </Button>
      </div>
    </div>
  );
};
