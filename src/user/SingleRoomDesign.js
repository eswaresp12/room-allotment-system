import "./SingleRoomDesign.css"

function SingleRoomDesign (props) {
    const {buttonDetails} = props
    const {text} = buttonDetails
    return(
        <>
            <button className="buttons-design">{text}</button>
        </>
    )
}

export default SingleRoomDesign