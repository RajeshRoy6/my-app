import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setFormData } from "../redux/formSlice";
import { useDispatch } from "react-redux";

const FormComponent: React.FC = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState("");
  const [select, setSelect] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("");
  const [textarea, setTextarea] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      text,
      password,
      email,
      number,
      date,
      select,
      checkbox,
      radio,
      textarea,
      file,
    };
    dispatch(setFormData(formData));
    navigate("/display");
  };

  const handleClick = () => {
    navigate("/api");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="textInput">Text: </label>
          <input
            id="textInput"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passwordInput">Password: </label>
          <input
            id="passwordInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="emailInput">Email: </label>
          <input
            id="emailInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numberInput">Number: </label>
          <input
            id="numberInput"
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="dateInput">Date: </label>
          <input
            id="dateInput"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="selectInput">Select: </label>
          <select
            id="selectInput"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="">Select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="checkboxInput">Checkbox: </label>
          <input
            id="checkboxInput"
            type="checkbox"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />
        </div>
        <div>
          <label>Radio: </label>
          <div>
            <input
              id="radioOption1"
              type="radio"
              value="option1"
              checked={radio === "option1"}
              onChange={(e) => setRadio(e.target.value)}
            />
            <label htmlFor="radioOption1">Option 1</label>
            <input
              id="radioOption2"
              type="radio"
              value="option2"
              checked={radio === "option2"}
              onChange={(e) => setRadio(e.target.value)}
            />
            <label htmlFor="radioOption2">Option 2</label>
          </div>
        </div>
        <div>
          <label htmlFor="textareaInput">Textarea: </label>
          <textarea
            id="textareaInput"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fileInput">File: </label>
          <input
            id="fileInput"
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
        <button type="submit">Next</button>
      </form>
      <div className="api">
        <hr/>
        <h3>API Call</h3>
        <button onClick={handleClick}>Fetch Api</button>
      </div>
    </div>
  );
};

export default FormComponent;
