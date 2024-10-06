import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setFormData } from "../redux/formSlice";
import { useDispatch } from "react-redux";

interface Errors {
  text?: string;
  password?: string;
  email?: string;
  number?: string;
  date?: string;
  select?: string;
  checkbox?: string;
  radio?: string;
  textarea?: string;
  file?: string;
}

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

  const [errors, setErrors] = useState<Errors>({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {};

    // Validation checks
    if (!text.trim()) newErrors.text = "Full name is required";
    if (!password.trim()) newErrors.password = "Password is required";
    if (!email.includes("@")) newErrors.email = "Valid email is required";
    if (number <= 0) newErrors.number = "Please enter Phone number";
    if (!date) newErrors.date = "Date is required";
    if (!select) newErrors.select = "Please select an option";
    if (!radio) newErrors.radio = "Please choose a gender option";
    if (!textarea.trim()) newErrors.textarea = "Textarea is required";
    if (!file) newErrors.file = "Please upload a file";
    if (!checkbox) newErrors.checkbox = "You must agree to the terms";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="textInput" className="hide">
              Full Name:
            </label>
            <input
              id="textInput"
              type="text"
              placeholder="Full Name"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {errors.text && <p className="error">{errors.text}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="passwordInput" className="hide">
              Password:
            </label>
            <input
              id="passwordInput"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="emailInput" className="hide">
              Email:
            </label>
            <input
              id="emailInput"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="dateInput" className="hide">
              Date:
            </label>
            <input
              id="dateInput"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && <p className="error">{errors.date}</p>}
          </div>

          <div className="group">
            <div className="form-group">
              <label htmlFor="selectInput" className="hide">
                Select:
              </label>
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
              {errors.select && <p className="error">{errors.select}</p>}
            </div>


            <div className="form-group  gender-err">

            <div className="gender">
              <label>Gender:</label>
              <div className="radio-group">
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
              <div>{errors.radio && <p className="error">{errors.radio}</p>}</div>
              
            </div>


          </div>
        </div>

        <div className="form-group">
          <label htmlFor="textareaInput" className="hide">
            Textarea:
          </label>
          <textarea
            id="textareaInput"
            placeholder="Text Area"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          />
          {errors.textarea && <p className="error">{errors.textarea}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="fileInput" className="hide">
            File:
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
          {errors.file && <p className="error">{errors.file}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="numberInput">Phone Number:</label>
          <input
            id="numberInput"
            type="number"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            min="0"
          />
          {errors.number && <p className="error">{errors.number}</p>}
        </div>

        <div className="checkbox">
          <label htmlFor="checkboxInput" className="hide">
            Checkbox:
          </label>
          <input
            id="checkboxInput"
            type="checkbox"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />
          <p>
            I agree to all statements in the <span>Terms of Service.</span>
          </p>
          {errors.checkbox && <p className="error">{errors.checkbox}</p>}
        </div>

        <div className="form-row full-width">
          <button type="submit" className="submit-button">
            Next
          </button>
        </div>
      </form>

      <div className="api">
        <hr />
        <h2>API Call</h2>
        <button onClick={handleClick} className="api-button">
          Fetch Api
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
