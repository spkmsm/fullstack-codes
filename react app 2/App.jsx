import React, { useState } from "react";
import Contact from "./Contact";
import "./App.css";
import { Modal, Drawer, notification, Form, Input, Button } from "antd";
import {HashLink} from 'react-router-hash-link'

const App = () => {
  const [show, setShow] = useState(false);

  const [form] = Form.useForm();
  const handleFinish = (values) => {
    console.log(values, "lhkl");
  };
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <HashLink to="#next">
        <h1>go</h1>
        </HashLink>
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="next"
      >
        reached
      </div>
    </>
  );
};

export default App;
