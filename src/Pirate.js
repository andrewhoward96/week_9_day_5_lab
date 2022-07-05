import React from "react";

const Pirate = ({pirate, onPirateClick }) => {

  const handleClick = () => {
    onPirateClick(pirate);
  }

  return (
    <li onClick={handleClick}>ship:{pirate.ship}</li>
  )
}

export default Pirate;