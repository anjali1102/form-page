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
    userSelectCountry,
    chooseInputHandler,
    submitHandler,
    formData,
    userSelectState,
  } = useForm(validate);

  useEffect(() => {
    const countriesData = async () => {
      const data = await fetchCountries();
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

  const findCountry = countryList.find(
    (eachCountry) => eachCountry.name === formData.country
  );

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
            <label className="chooseCountry" htmlFor={name}>
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
                {...item}
                id={name}
                style={{
                  width: "100%",
                  border: "1px solid black",
                  padding: "8px 10px",
                  borderRadius: "4px",
                }}
              >
                <option value=""></option>
                {countryList.map((eachCountry) => {
                  return (
                    <option key={uuidv4()} value={eachCountry.name}>
                      {eachCountry.name}
                    </option>
                  );
                })}
              </select>
            </label>
          ) : (
            <label className="" htmlFor={name}>
              <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
                {label}
                <BsAsterisk
                  size={8}
                  style={{ color: "red", marginLeft: "0.2rem" }}
                />
              </div>
              <input
                className="input"
                onChange={(e) => {
                  chooseInputHandler(e);
                }}
                {...item}
                type={type}
                id={name}
                style={{
                  width: "100%",
                  border: "1px solid black",
                  padding: "8px 10px",
                  borderRadius: "4px",
                }}
              />
            </label>
          );
        })}
        <label className="" htmlFor="">
          <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
            State
            <BsAsterisk
              size={8}
              style={{ color: "red", marginLeft: "0.2rem" }}
            />
          </div>
          <select
            className="input"
            value={formData.state ? formData.state : "Select"}
            onChange={(e) => {
              userSelectState(e.target.value);
            }}
            type="select"
            id="name"
            style={{
              width: "100%",
              border: "1px solid black",
              padding: "8px 10px",
              borderRadius: "4px",
            }}
          >
            {stateList.length === 0 ? (
              <>"No States here"</>
            ) : (
              <>
                <option value=""></option>
                {stateList.map((everyState) => {
                  return (
                    <option key={uuidv4()} value={everyState.name}>
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
