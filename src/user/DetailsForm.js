import React from 'react'
import './SingleRoomDesign.css'

const DetailsForm = () => {
  return (
    <div className="bg-container">
      <div className="details-container">
        <p>Student Details For Room</p>
        <div>
          <p>Student 1</p>
        </div>

        <div className="input-container">
          <div>
            <label for="name">Name: </label>
            <input type="text" className="input-name" id="name" />
            <br />
            <label for="mobile">Mobile No:</label>
            <input type="number" className="input-mobile" id="mobile" />
          </div>
          <div className="edit">
            <label for="class">Class No:</label>
            <input type="number" className="input-class" id="class" />
            <br />
            <label for="IDNo">ID No:</label>
            <input type="number" className="input-name" id="IDNo" />
          </div>
        </div>
        <div>
          <p>Student 2</p>
        </div>

        <div className="input-container">
          <div>
            <label for="name">Name: </label>
            <input type="text" className="input-name" id="name" />
            <br />
            <label for="mobile">Mobile No:</label>
            <input type="number" className="input-mobile" id="mobile" />
          </div>
          <div className="edit">
            <label for="class">Class No:</label>
            <input type="number" className="input-class" id="class" />
            <br />
            <label for="IDNo">ID No:</label>
            <input type="number" className="input-name" id="IDNo" />
          </div>
        </div>
        <div className="button-container">
          <button className="btn btn-primary">Save </button>
        </div>
      </div>
    </div>
  )
}

export default DetailsForm
