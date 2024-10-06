import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const DisplayComponent: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form.formData);
  return (
    <div className="data-container">
      <h1 className="data-header">Submitted Data</h1>
      <div className="data-form">
        <div className="data-field">
          <p className="data-label">Name:</p>
          <p className="data-value text-value">{formData.name}</p>
        </div>
        <div className="data-field">
          <p className="data-label">Password:</p>
          <p className="data-value password-value">{formData.password}</p>
        </div>
        <div className="data-field">
          <p className="data-label">Email:</p>
          <p className="data-value email-value">{formData.email}</p>
        </div>
        <div className="data-field">
          <p className="data-label">Date:</p>
          <p className="data-value date-value">{formData.date}</p>
        </div>
        <div className="data-field">
          <p className="data-label">Select:</p>
          <p className="data-value select-value">{formData.select}</p>
        </div>

        <div className="data-field">
          <p className="data-label radio-label">Gender:</p>
          <p className="data-value radio-value">{formData.gender}</p>
        </div>
        <div className="data-field">
          <p className="data-label textarea-label">Textarea:</p>
          <p className="data-value textarea-value">{formData.textarea}</p>
        </div>
        <div className="data-field">
          <p className="data-label file-label">File:</p>
          <p className="data-value file-value">
            {formData.file ? formData.file.name : "No file uploaded"}
          </p>
        </div>
        <div className="data-field">
          <p className="data-label">Number:</p>
          <p className="data-value number-value">{formData.number}</p>
        </div>
        <div className="data-field">
          <p className="data-label checkbox-label">Checkbox:</p>
          <p className="data-value checkbox-value">
            {formData.checkbox ? "Checked" : "Unchecked"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayComponent;
