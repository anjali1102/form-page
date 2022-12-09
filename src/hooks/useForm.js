import React, { useState } from "react";
import { fetchState } from "../validators/validators";

export const useForm = (options) => {
  // console.log("options", options);
  const [formData, setFormData] = useState({});
  // const [states, setStates] = useState([]);

  const userSelectCountry = async (countryList, countryName) => {
    const response = await fetchState(countryList, countryName);
    // console.log("response userSlectCountry", response);
    setFormData({ ...formData, country: countryName });
    // setStates(response);
  };

  const userSelectState = async (stateDetails) => {
    setFormData({ ...formData, state: stateDetails });
  };

  const chooseInputHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const validations = options?.validators;
    if (validations) {
      let valid = true;
      const newErrors = {};
      for (let key in validations) {
        // console.log("keys", key);
        const value = formData[key];
        const validation = validations[key];

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.requiredError;
        }
        const pattern = validation?.patternError;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.patternError;
        }
      }
      if (!valid) {
        window.parent.postMessage(
          { type: "submit", value: { error: newErrors } },
          "*"
        );
        return;
      }
      window.parent.postMessage(
        {
          type: "submit",
          value: { success: "All fields are valid!" },
        },
        "*"
      );
    }
  };

  return {
    formData,

    userSelectState,
    userSelectCountry,
    chooseInputHandler,
    submitHandler,
  };
};
