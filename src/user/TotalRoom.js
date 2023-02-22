import SingleRoomDesign from './SingleRoomDesign'
import './SingleRoomDesign.css'
import Menu from '../core/Menu'
import { useState } from 'react'
import DetailsForm from './DetailsForm'
import FooterPagePro from '../core/Footer'

let buttonNumber = 100
// let buttonNumber = [100,110,120,130,140]
let buttonsList = []
for (let j = 1; j <= 11; j++) {
  let buttonObject = {}
  buttonObject['text'] = 'Room'
  buttonObject['id'] = buttonNumber

  buttonsList.push(buttonObject)
  buttonNumber += 1
}

// const getTheSlidingPage = () => {
//   return (
//     <>
//     <div id="slidingPage">
//           <h1> Room Details</h1>
//     </div>
//     </>
//   )
// }

function TotalRoom() {
  const [isClicked, setisClicked] = useState(false)
  let container = document.getElementById('detailsContainer')

  // container.classList.add('visibilty')

  const apiForDetailsForm = () => {
    return (
      <div className="bgg-container ">
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
  const apiForTotalRoom = () => {
    return (
      <div className="bg-container">
        <h1 class = "myHead">Choose Your Favourite Room </h1>
        <div>
          {buttonsList.map((eachButton) => (
            <SingleRoomDesign key={eachButton.id} buttonDetails={eachButton} />
          ))}
        </div>
        <div>
          {buttonsList.map((eachButton) => (
            <SingleRoomDesign key={eachButton.id} buttonDetails={eachButton} />
          ))}
        </div>
        <div>
          {buttonsList.map((eachButton) => (
            <SingleRoomDesign key={eachButton.id} buttonDetails={eachButton} />
          ))}
        </div>
        <div>
          {buttonsList.map((eachButton) => (
            <SingleRoomDesign key={eachButton.id} buttonDetails={eachButton} />
          ))}
        </div>
        <div>
          {buttonsList.map((eachButton) => (
            <SingleRoomDesign key={eachButton.id} buttonDetails={eachButton} />
          ))}
        </div>
        <div>
          <button class="button-24" onClick={getTheSideBar}>
            Proceed To Enter Details
          </button>
        </div>
      </div>
    )
  }

  const getTheSideBar = () => {
    setisClicked(true)
    // apiForDetailsForm()
    console.log('Uday')
  }

  return (
    <>
      <Menu />

      {isClicked ? apiForDetailsForm() : apiForTotalRoom()}

      <FooterPagePro />
    </>
  )
}

export default TotalRoom
