import React, { useState } from "react";
import { fetchState } from "../validators/validators";

export const useForm = (options) => {
  const [formData, setFormData] = useState({});

  const userSelectCountry = async (countryList, countryName) => {
    const response = await fetchState(countryList, countryName);
    setFormData({ ...formData, country: countryName });
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
        const value = formData[key];
        const validation = validations[key];

        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.requiredError;
        }

        const pattern = validation?.pattern;
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
