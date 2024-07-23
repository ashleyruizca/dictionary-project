import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.Synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return <span key={index}>{synonyms}</span>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
