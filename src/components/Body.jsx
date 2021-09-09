import React from "react";
import listadoJson from './data.json';
import Botonera from "../components/Botones"
import Recordatorio from "../components/recordatorio";

class Body extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id: 1,
            historias: listadoJson,
            actual: listadoJson[0],
            anteriores: []
    }
}
componentDidUpdate() {
    alert("La opcion que eligió es " + this.state.anteriores[this.state.anteriores.length -1]);
  }

handlerCambiarHistoriA = (e) => {
    const idVariable= this.state.id +1;
    const option = idVariable+ e.target.id;
    const nuevaHist = listadoJson.find(i => i.id === option)
    const letra = e.target.id.toUpperCase()
    if(nuevaHist !=null){
        this.setState({ 
            id: idVariable,
            actual: nuevaHist,
            anteriores: [...this.state.anteriores, letra]
        })
    }else{
        alert("La historia ha finalizado"); 
    }
}

    render(){
        return (
            <div className="layout">
                <h2 className="historia">{this.state.actual.historia}</h2>
                <Botonera handler={this.handlerCambiarHistoriA} opcion={this.state.actual.opciones}/>
                <Recordatorio ultima={this.state.anteriores[this.state.anteriores.length -1]} anteriores={this.state.anteriores.slice(0, this.state.anteriores.length -1)}/>
            </div>
        )
    }
}
export default Body;