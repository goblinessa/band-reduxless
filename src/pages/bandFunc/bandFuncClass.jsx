import React, { useState } from "react"; 
import AddingBandClass from "../../components/addingBand/addingBandClass";
import BandTableClass from "../../components/bandTable/bandTableClass";
import "./bandFunc.css"
const BandFuncClass = () =>{
    const [bandsData, setBandData] = useState([]);
    const handleAddingBand = (newBandData) => {
      setBandData([...bandsData, newBandData]);
      console.log("Submitted");
    }
    const deleteBand = (key) =>{
      const newItems = bandsData.filter((item) => item.id !== key);
      setBandData(newItems);
    }
  
    return(
        <div className="band-func">
            <main>
                <BandTableClass bands = {bandsData} deleteBand = {deleteBand}/>
                
                <AddingBandClass onBandAdd = {handleAddingBand}/>
            </main>
        </div>
    )
}

export default BandFuncClass;