import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home-page.css";

const HomePage = () => {
  const [token, setToken] = useState("");
  const [formId, setFormId] = useState("");
  const handleTokenTextChange = (e) => {
    console.log(e);
    const value = e.target?.value ?? "";
    setToken(value);
  };
  const handleFormIdTextChange = (e) => {
    const value = e.target?.value ?? "";
    setFormId(value);
  };
  return (
    <div className="homepage-container">
      <input
        type="text"
        onBlur={handleTokenTextChange}
        id="token"
        name="token"
        placeholder="Enter token"
        className="input-field"
      />
      <input
        type="text"
        onBlur={handleFormIdTextChange}
        id="formId"
        name="formId"
        placeholder="Enter form id"
        className="input-field"
      />
      <div className="button-group">
        <Link to={`/builder/${formId}/${token}`} className="action-button">
          Go to Form builder
        </Link>
        <Link to={`/preview/${formId}`} className="action-button">
          Go to Workflow preview
        </Link>
      </div>
      <div className="visited-forms">
        <h3>Visited Forms</h3>
        <ul>
          <li>
            <span className="form-id">form id</span>
            <button className="secondary-button">Builder</button>
            <button className="secondary-button">Preview</button>
          </li>
          <li>
            <span className="form-id">form id</span>
            <button className="secondary-button">Builder</button>
            <button className="secondary-button">Preview</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
