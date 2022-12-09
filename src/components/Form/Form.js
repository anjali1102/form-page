import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <section className="form_wrapper">
      <form target="form-iframe" className="form-content">
        <h4>Can you please provide your personal details?</h4>
        <label className="" htmlFor="">
          <div className="fs-lg ml-1">Name</div>
          <input
            className="input"
            // onChange={() => dispatch({ type: "1500-4000" })}
            type="text"
            id="EnterName"
            style={{
              width: "100%",
              border: "1px solid red",
              padding: "8px 10px",
              borderRadius: "4px",
            }}
          />
        </label>
        <label className="" htmlFor="">
          <div className="fs-lg ml-1">Date of birth</div>
          <input
            className="input"
            // onChange={() => dispatch({ type: "1500-4000" })}
            type="date"
            id="EnterDOB"
            style={{
              width: "100%",
              border: "1px solid red",
              padding: "8px 10px",
              borderRadius: "4px",
            }}
          />
        </label>
        <label className="" htmlFor="">
          <div className="fs-lg ml-1">Contact Number</div>
          <input
            className="input"
            // onChange={() => dispatch({ type: "1500-4000" })}
            type="number"
            id="EnterPhoneNumber"
            style={{
              width: "100%",
              border: "1px solid red",
              padding: "8px 10px",
              borderRadius: "4px",
            }}
          />
        </label>
        <label className="chooseCountry" htmlFor="country">
          <div className="fs-lg ml-1">Country</div>
          <select
            // onChange={() => dispatch({ type: "1500-4000" })}

            id="country"
            style={{
              width: "100%",
              border: "1px solid red",
              padding: "8px 10px",
              borderRadius: "4px",
            }}
          ></select>
        </label>

        <label className="chooseState" htmlFor="state">
          <div className="fs-lg ml-1">State</div>
          <select
            // type="email"
            // onChange={() => dispatch({ type: "1500-4000" })}

            id="state"
            style={{
              width: "100%",
              border: "1px solid red",
              padding: "8px 10px",
              borderRadius: "4px",
            }}
          ></select>
        </label>

        <label className="chooseCountry" htmlFor="country">
          <div className="fs-lg ml-1">Email</div>
          <input
            className="input"
            type="email"
            // onChange={() => dispatch({ type: "1500-4000" })}

            id="country"
            style={{
              width: "100%",
              border: "1px solid red",
              padding: "8px 10px",
              borderRadius: "4px",
            }}
          ></input>
        </label>

        <div>
          <button
            className="submit-btn"
            style={{
              backgroundColor: "rgb(15, 125, 124)",
              padding: "10px 12px",
              border: "none",
              color: "white",
              borderRadius: "4px",
              fontWeight: "700",
              marginTop: "20px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export { Form };
