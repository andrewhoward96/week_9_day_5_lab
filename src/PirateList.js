import React from "react";
import Pirate from "./Pirate";


const PirateList = ({pirates, onPirateClick}) => {

    const pirateList = pirates.map((pirate) => {
        return <Pirate pirate={pirate} key={pirate._id} onPirateClick={onPirateClick} />
    })

  return (
    <div className="pirate-list">
      <h2>Yar This Be Were ur Info at</h2>
      <ul>
        {pirateList}
      </ul>
    </div>
  )
}

export default PirateList;