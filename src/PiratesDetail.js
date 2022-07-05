import React from "react";



const PiratesDetail = ({selectedpirate}) => {

    return (
        <div className="pirate-detail">
            <h1>{selectedpirate.pirates}</h1>
            <p>location:{selectedpirate.location}</p>
            <p>date:{selectedpirate.date}</p>
            <p>loot:{selectedpirate.loot}</p>
            <p>raided:{selectedpirate.raided}</p>
        </div>
    
      )
}

export default PiratesDetail;