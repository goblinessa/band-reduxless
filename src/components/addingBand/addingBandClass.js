import React, { Component } from "react";
import "./addingBand.css";

class AddingBandClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandMembers: [],
      newMemberName: "",
      bandName: "",
      startDate: "",
      endDate: "",
    };
  }

  addBandMember = () => {
    const { newMemberName, bandMembers } = this.state;
    if (newMemberName.trim().length > 0) {
      const newMember = {
        id: Date.now(),
        name: newMemberName,
      };
      this.setState({
        bandMembers: [...bandMembers, newMember],
        newMemberName: "",
      });
    }
  };

  delMember = (id) => {
    const { bandMembers } = this.state;
    const newMembers = bandMembers.filter((member) => member.id !== id);
    this.setState({
      bandMembers: newMembers,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { bandName, startDate, bandMembers, endDate } = this.state;

    if (!bandName) {
      alert("Please fill band name field.");
      return;
    }
    if (!startDate) {
      alert("Please fill the starting date.");
      return;
    }
    if (bandMembers.length < 1) {
      alert("Please add band members.");
      return;
    }

    const Band = {
      id: Date.now(),
      name: bandName,
      startDate: startDate,
      endDate: endDate.trim().length > 0 ? endDate : "Still active",
      bandMembers: bandMembers,
    };

    console.log(endDate);
    this.setState({
      bandMembers: [],
      bandName: "",
      startDate: "",
      endDate: "",
    });
    this.props.onBandAdd(Band);
  };

  render() {
    const { bandMembers, newMemberName, bandName, startDate, endDate } = this.state;

    return (
      <div className="adding-band">
        <form onSubmit={this.handleSubmit}>
          <div className="input-data">
            <h2 className="add-text">Add new or old band</h2>
            <input
              type="text"
              placeholder="Enter band's name"
              value={bandName}
              onChange={(e) => this.setState({ bandName: e.target.value })}
              required
            />
            <label>Date of formation</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => this.setState({ startDate: e.target.value })}
              required
            />
            <label>Date of disbandment</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => this.setState({ endDate: e.target.value })}
            />
          </div>

          <div>
            <label className="member-label">Members:</label>
            <ul className="band-members">
              {
                bandMembers.map((member) => (
                  <li key={member.id}>
                    {member.name}{" "}
                    <button
                      className="small-button"
                      type="button"
                      onClick={() => this.delMember(member.id)}
                    >
                      -
                    </button>
                  </li>
                ))
              }
            </ul>

            <div className="add-member">
              <input
                type="text"
                placeholder="Member's name"
                value={newMemberName}
                onChange={(e) => this.setState({ newMemberName: e.target.value })}
              />
              <button
                className="big-button"
                type="button"
                onClick={this.addBandMember}
              >
                Add
              </button>
            </div>
          </div>

          <button className="big-button" type="reset">
            Reset
          </button>
          <button className="big-button" type="submit">
            Add band
          </button>
        </form>
      </div>
    );
  }
}

export default AddingBandClass;
