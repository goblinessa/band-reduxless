import React, { useState } from "react";
import "./addingBand.css"

const AddingBand = ({onBandAdd}) =>{
    const [bandMembers, setBandMembers] = useState([]);
    const [newMemberName, setNewMemberName] = useState("");
    const [bandName, setBandName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const addBandMember = () =>{
        if (newMemberName.trim().length > 0){
            const newMember = {
                id: Date.now(), 
                name: newMemberName
            };
            setBandMembers([...bandMembers, newMember]);
            setNewMemberName("");
        }
    }
    const delMember = (key) =>{
        const newMembers = bandMembers.filter((member) => member.id !== key);
        setBandMembers(newMembers);
      }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bandName) {
            alert("Please fill band name field.");
            return;
        }
        if(!startDate){
            alert("Please fill the starting date.");
            return;
        }
        if(bandMembers.length < 1){
            alert("Please add band members.");
            return;
        }

        
        const Band ={
            id: Date.now(),
            name: bandName,
            startDate: startDate,
            endDate: (endDate.trim().length > 0 ? endDate : "Still active"),
            bandMembers: bandMembers
        }
        console.log(endDate);
        setBandMembers([]);
        setBandName("");
        setEndDate("");
        setStartDate("");
        onBandAdd(Band);
    };
    return(
        <div className="adding-band">
            <form onSubmit={handleSubmit}>
                <div className="input-data">
                    <h2 className="add-text">Add new or old band</h2>
                    <input 
                        type="text" 
                        placeholder="Enter bands name"
                        value={bandName}
                        onChange={(e) => setBandName(e.target.value)}
                        required
                    />
                    <label>Date of formation</label>
                    <input 
                        type="date" 
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)} 
                        required
                    />
                    <label>Date of disbandment</label>
                    <input 
                        type="date" 
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)} 
                    />
                </div>
                
                <div>
                    <label className="member-label">Members:</label>
                    <ul className="band-members">
                        {bandMembers.length > 0 ? (
                            bandMembers.map(
                                (member) => (
                                    <li key={member.id}>{member.name} 
                                        <button 
                                            className="small-button" 
                                            type="button" 
                                            onClick={()=>delMember(member.id)}
                                        >
                                            -
                                        </button>
                                    </li>
                                )
                            )
                        ) : null
                        }
                    </ul>
                    
                    <div className="add-member">
                        <input 
                            type="text"
                            placeholder="Member's name"
                            value={newMemberName}
                            onChange={(e) => setNewMemberName(e.target.value)}
                        />
                        <button 
                            className="big-button" 
                            type="button" 
                            onClick={addBandMember}
                        >
                            Add
                        </button>
                    </div>
                </div>
                
                    <button className="big-button" type="reset">Reset</button>
                    <button className="big-button" type="submit">Add band</button>
            </form>
        </div>
    );
}
export default AddingBand;