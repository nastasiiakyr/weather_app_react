import React from "react";

import "./FastSearch.css";

export default function FastSearch(props) {
  return (
    <a
      href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
      className="city"
      id={props.id}
    >
      {props.city}
    </a>
  );
}
