import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlingBall } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <div>
    <FontAwesomeIcon
      icon={faBowlingBall}
      size="5x"
      color="orange"
      className="fa-spin"
    />
  </div>
);
