import React from "react";

export const validate = {
  validators: {
    name: {
      required: {
        value: true,
        requiredError: "Name is required",
      },
      pattern: {
        value: "^[A-Za-z0-9]{4,10}$",
        patternError: "Name should be between 4-10 characters.",
      },
    },
    dob: {
      required: {
        value: true,
        requiredError: "Date of Birth is required",
      },
    },
    contact: {
      required: {
        value: true,
        requiredError: "Phone Number is required",
      },
      pattern: {
        value: "[1-9]{1}[0-9]{9}",
        patternError: "Phone Number should have 10 digits.",
      },
    },
    country: {
      required: {
        value: true,
        requiredError: "Country is required",
      },
    },
    email: {
      required: {
        value: true,
        requiredError: "Email is required",
      },
      pattern: {
        value: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
        patternError: "Enter valid email",
      },
    },
    state: {
      required: {
        value: true,
        requiredError: "State is required",
      },
    },
  },
};

export const fetchState = (data, countryName) => {
  const country = data.find((country) => country.name === countryName);
  return country?.states;
};
