import React, { Component } from "react";
import "./bandTable.css";

class BandTableClass extends Component {
  render() {
    const { bands, deleteBand } = this.props;

    if (bands.length > 0) {
      return (
        <div className="band-table">
          <h2>BandTable</h2>
          <table>
            <thead>
              <tr>
                <th>Bands name</th>
                <th>Foundation date</th>
                <th>Date of falling apart</th>
                <th>Members</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {bands.map((band) => (
                <tr key={band.id}>
                  <td>{band.name}</td>
                  <td>{band.startDate}</td>
                  <td>{band.endDate}</td>
                  <td>
                    <ul className="member-list">
                      {band.bandMembers.map((member) => (
                        <li key={member.id}>{member.name}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => deleteBand(band.id)}
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="no-data">
          No Band Data
        </div>
      );
    }
  }
}

export default BandTableClass;
