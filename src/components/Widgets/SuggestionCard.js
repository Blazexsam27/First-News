import React from "react";
import "../../styles/Widgets/SuggestionCard.css";

export default function SuggestionCard(props) {
  const { title, description, publisedAt } = props;
  return (
    <>
      <div className="suggestion-card">
        <div key={publisedAt} className="card-image"></div>
        <div className="card-text">
          <p className="card-title">{title}</p>
          <p className="card-desc">{description}</p>
        </div>
      </div>
    </>
  );
}
