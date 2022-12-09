import React, { useEffect, useState } from "react";
import { inputFieldsData } from "../../data/data";
import { fetchCountries } from "../../fetchCountries/fetchCountries";
import { Submit } from "../Submit/Submit";
import { BsAsterisk } from "react-icons/bs";
import "./Form.css";
import { validate } from "../../validators/validators";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);

  const {
    states,
    userSelectCountry,
    chooseInputHandler,
    submitHandler,
    formData,
    userSelectState,
  } = useForm(validate);
  // console.log("formData", formData);

  useEffect(() => {
    const countriesData = async () => {
      const data = await fetchCountries();
      // console.log("data", data)
      setCountryList(data);
    };
    countriesData();
  }, []);

  useEffect(() => {
    if (findCountry) {
      setStateList(findCountry?.states);
    } else {
      setStateList([]);
    }
  }, [formData.country]);

  console.log(stateList);
  const findCountry = countryList.find(
    (eachCountry) => eachCountry.name === formData.country
  );
  console.log("findCountry", findCountry);

  // console.log(findCountry);
  // findCountry.states;

  return (
    <section className="form_wrapper">
      <form
        target="form-iframe"
        className="form-content"
        onSubmit={submitHandler}
      >
        <h1 className="title" style={{ fontWeight: "normal" }}>
          Can you please provide your personal details?
        </h1>
        {inputFieldsData.map((item) => {
          const { name, type, label } = item;
          return type === "select" ? (
            <label className="chooseCountry" htmlFor={name} key={uuidv4()}>
              <div
                className="fs-lg ml-1"
                style={{ marginTop: "0.5rem", fontWeight: "bold" }}
              >
                {label}
                <BsAsterisk
                  size={8}
                  style={{ color: "red", marginLeft: "0.1rem" }}
                />
              </div>
              <select
                value={formData.country ? formData.country : "Select"}
                onChange={
                  name === "country"
                    ? (e) => userSelectCountry(countryList, e.target.value)
                    : chooseInputHandler
                }
                // data={name === "country" ? countryList : states}
                {...item}
                id={name}
                // required
                style={{
                  width: "100%",
                  border: "1px solid red",
                  padding: "8px 10px",
                  borderRadius: "4px",
                }}
              >
                <option value=""></option>
                {countryList.map((eachCountry) => {
                  return (
                    <option key={eachCountry.capital} value={eachCountry.name}>
                      {eachCountry.name}
                    </option>
                  );
                })}
              </select>
            </label>
          ) : (
            <label className="" htmlFor={name} key={uuidv4()}>
              <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
                {label}
                <BsAsterisk
                  size={8}
                  style={{ color: "red", marginLeft: "0.2rem" }}
                />
              </div>
              <input
                className="input"
                key={name}
                onChange={(e)=>{chooseInputHandler(e.target.value)}}
                {...item}
                type={type}
                id={name}
                // required
                style={{
                  width: "100%",
                  border: "1px solid red",
                  padding: "8px 10px",
                  borderRadius: "4px",
                }}
              />
            </label>
          );
        })}
        <label className="" htmlFor="">
          <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
            {/* {label} */}
            State
            <BsAsterisk
              size={8}
              style={{ color: "red", marginLeft: "0.2rem" }}
            />
          </div>
          <select
            className="input"
            key="state"
            value={formData.state ? formData.state : "Select"}
            onChange={(e) => {
              userSelectState(e.target.value);
            }}
            // {...item}
            type="select"
            id="name"
            // required
            style={{
              width: "100%",
              border: "1px solid red",
              padding: "8px 10px",
              borderRadius: "4px",
            }}
          >
            {/* {findCountry
              ? stateList.map((eachState) => {
                  return <option key={uuidv4()}>{eachState.states}</option>;
                })
              : } */}

            {stateList.length === 0 ? (
              <>"No States here"</>
            ) : (
              <>
                {stateList.map((everyState) => {
                  return (
                    <option key={everyState.code} value={everyState.name}>
                      {everyState?.name}
                    </option>
                  );
                })}
              </>
            )}
          </select>
        </label>

        <Submit />
      </form>
    </section>
  );
};

export { Form };
