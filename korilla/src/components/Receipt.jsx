const Receipts = (props) => {
    console.log(props.Person)

    return(
        <div id="overall">
            
            <div className="foodInfo">
                <h2>{props.Person}</h2>
                <h4>Main: {props.Main}</h4>
                <h4>Protein: {props.Protein}</h4>
                <h4>Rice: {props.Rice}</h4>
                <h4>Sauce: {props.Sauce}</h4>
                <h4>Drink: {props.Drink}</h4>
                <h4>Cost: {props.Cost}</h4>
            </div>
        </div>

    ) 
}

export default Receipts