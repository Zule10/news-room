import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Scroll = () => (
  <div className="scroll-to">
    <button
      className="btn btn-dark"
      onClick={() =>
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  </div>
);

export default Scroll;
