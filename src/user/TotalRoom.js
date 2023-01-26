import SingleRoomDesign from "./SingleRoomDesign";
import "./SingleRoomDesign.css";
import Menu from "../core/Menu"

let buttonNumber = 100;
// let buttonNumber = [100,110,120,130,140]
let buttonsList = []
  
for (let j = 1; j <= 11; j++){
  let buttonObject = {}
  buttonObject["text"] = buttonNumber;
  buttonObject["id"] = buttonNumber;
  
  buttonsList.push(buttonObject)
  buttonNumber += 1

}
console.log(buttonsList)

function TotalRoom() {

  return (
    <>
    <Menu />
    <div className="bg-container">
      <h1>Allocating The Rooms</h1>
      <div>
      {buttonsList.map(eachButton => (
          <SingleRoomDesign key={eachButton.id} buttonDetails={eachButton} />
        ))}

      </div>
      <div>
      {buttonsList.map(eachButton => (
          <SingleRoomDesign key={eachButton.id} buttonDetails={eachButton} />
        ))}
      </div>
      <div>
      {buttonsList.map(eachButton => (
          <SingleRoomDesign key={eachButton.id} buttonDetails={eachButton} />
        ))}
      </div>
      <div>
      {buttonsList.map(eachButton => (
          <SingleRoomDesign key={eachButton.id} buttonDetails={eachButton} />
        ))}
      </div>
      <div>
      {buttonsList.map(eachButton => (
          <SingleRoomDesign key={eachButton.id} buttonDetails={eachButton} />
        ))}
      </div>

    </div>
      
    </>
  );
}

export default TotalRoom;
