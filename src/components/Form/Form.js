import React from "react";
import './Form.css'

const Form = () => {
  return (
    <section className="form_wrapper">
      <form target="form-iframe">
        <h4>Can you please provide your personal details?</h4>
        <label className="" htmlFor="">
          <div className="fs-lg ml-1">Name</div>
          <input
            // onChange={() => dispatch({ type: "1500-4000" })}
            type="input"
            id="EnterName"
          />
        </label>
        <label className="" htmlFor="">
          <div className="fs-lg ml-1">Date of birth</div>
          <input
            // onChange={() => dispatch({ type: "1500-4000" })}
            type="calender"
            id="EnterDOB"
          />
        </label>
        <label className="" htmlFor="">
          <div className="fs-lg ml-1">Contact Number</div>
          <input
            // onChange={() => dispatch({ type: "1500-4000" })}
            type="tel"
            id="EnterPhoneNumber"
          />
        </label>
        <label className="chooseCountry" htmlFor="country">
          <div className="fs-lg ml-1">Country</div>
          <select
            // onChange={() => dispatch({ type: "1500-4000" })}

            id="country"
          ></select>
        </label>

        <label className="chooseState" htmlFor="state">
          <div className="fs-lg ml-1">State</div>
          <select
            // type="email"
            // onChange={() => dispatch({ type: "1500-4000" })}

            id="state"
          ></select>
        </label>

        <label className="chooseCountry" htmlFor="country">
          <div className="fs-lg ml-1">Email</div>
          <input
            type="email"
            // onChange={() => dispatch({ type: "1500-4000" })}

            id="country"
          ></input>
        </label>

        <button>Submit</button>
      </form>
      <iframe
        // src="https://example.org"
        name="form-iframe"
        // width="auto"
        height="100%"
      ></iframe>
    </section>
  );
};

export { Form };
