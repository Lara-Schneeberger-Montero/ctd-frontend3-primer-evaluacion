import React from "react";

class Recordatorio extends React.Component{
    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <div className="recordatorio">
                <h3>Selección previa: {this.props.ultima}</h3>
                <h4>Anteriores: {this.props.anteriores}</h4>
            </div>
        )
    }
}
export default Recordatorio;