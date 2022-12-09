import React from "react";

export const errorMessage = {
  validations: {
    name: {
      required: {
        value: true,
        msg: "Name is required",
      },
      pattern: {
        value: "^[A-Za-z0-9]{4,10}$",
        message: "Name should be between 4-10 characters.",
      },
    },
    dob: {
      required: {
        value: true,
        msg: "Date of Birth is required",
      },
    },
    contact: {
      pattern: {
        value: "[1-9]{1}[0-9]{9}",
        message: "Phone Number should have 10 digits.",
      },
    },
    country: {
      required: {
        value: true,
        message: "Country is required",
      },
    },
    state: {
      required: {
        value: true,
        message: "State is required",
      },
    },
    email: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
        message: "Enter valid email",
      },
    },
  },
};

export const fetchState = (data, countryName) => {
  const country = data.find((country) => country.name === countryName);
  return country?.states;
};
