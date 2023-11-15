import React from "react";
import { Form } from "../components/Form";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchPostToken } from "../tools/fetchPostToken";

export default function FormPage() {
  
  

  return (
    <div className="wrapper ">
      <div className="container">
        <div className="cards__blok">
          <h2 style={{ marginTop: "10px" }}>Пожалуйста зарегистрируйтесь</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}
