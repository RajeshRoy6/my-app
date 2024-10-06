import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const DisplayComponent: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form.formData);
  return (
    <div className="container">
      <h1>Submitted Data</h1>
      <p>text: {formData.text}</p>
      <p>password: {formData.password}</p>
      <p>Email: {formData.email}</p>
      <p>number: {formData.number}</p>
      <p>date: {formData.date}</p>
      <p>select: {formData.select}</p>
      <p>Checkbox: {formData.checkbox ? "Checked" : "Unchecked"}</p>
      <p>radio: {formData.radio}</p>
      <p>textarea: {formData.textarea}</p>
      <p>File: {formData.file ? formData.file.name : "No file uploaded"}</p>
    </div>
  );
};

export default DisplayComponent;
