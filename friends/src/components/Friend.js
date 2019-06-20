/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

const Friend = props => {
  return (
    <li key={props.friend.key}>
      {props.friend.name}
      <span>{props.friend.age}</span>
      <a href={`mailto:${props.friend.email}`}>✉️</a>
    </li>
  );
};

export default Friend;
