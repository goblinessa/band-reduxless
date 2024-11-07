import React, { useState } from "react"; 
import AddingBand from "../../components/addingBand/addingBand";
import BandTable from "../../components/bandTable/bandTable";
import "./bandFunc.css"
const BandFunc = () =>{
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
                <BandTable bands = {bandsData} deleteBand = {deleteBand}/>
                
                <AddingBand onBandAdd = {handleAddingBand}/>
            </main>
        </div>
    )
}

export default BandFunc;