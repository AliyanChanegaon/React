import { useState } from "react";
import Form from "./Component/Form";
import "./styles.css";

const initialValue = {
  userName: "",
  gender: "",
  role: "",
  marritalStatus: false
};

export default function App() {
  return (
    <>
      <Form />
    </>
  );
}
