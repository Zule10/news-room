import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <div>
      <span className="title">
        News-Room
        <FontAwesomeIcon className="icon" icon={faNewspaper} />
      </span>
    </div>
  );
};

export default Title;
