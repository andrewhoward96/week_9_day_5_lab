import React,{useState, useEffect} from "react";
import PirateList from "./PirateList";
import PirateDetail from "./PiratesDetail";



const PirateKing = () => {
  const [pirates, setPirates] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedPirate , setSelectedPirate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {

    let currentPath = window.location.pathname;
    if(currentPath.includes("ships")){
      getPirates();
    }

  },[])
  //get pirates,getraids,selectedlocation

const onPirateClick = function(pirate){
    setSelectedPirate(pirate);
  }

const onPirateLoctionClick = function(location){
    setSelectedLocation(location)
}

const getLocations = () => {
  fetch('http://locationhost:9000/api/location/')
  .then(res => res.json())
  .then(data => setLocations(data))
  .catch((err) => {
    console.log(err)
  })
}



const getPirates = () => {
  fetch('http://localhost:9000/api/pirates')
  .then(res => res.json())
  .then(data => setPirates(data))
  .catch((err) => {
    console.log(err)
  })
}

  return(
    <div className="pirate-king-app">
      {/* <PirateLoction/>
      <PirateLocationList/> */}
    <h1>Ahoy Matey Welcome Too the Pirate King Website!</h1>
    {pirates.length > 0 && <PirateList pirates={pirates} onPirateClick={onPirateClick}/> }
    {selectedPirate && <PirateDetail selectedpirate={selectedPirate} selectedLocation={selectedLocation} />}
    {/* {selectedLocation && <PirateDetail selectedLocation={selectedLocation}/>} */}
    </div>
  )
// variable pirates passes down into pirates as props then passes to piratelist

}

export default PirateKing;