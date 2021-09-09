import React from 'react';
// import listadoJson from './components/data.json';

class Botonera extends React.Component{
    render(){
        return (
            <div className="opciones">
                <label className="opcion">
                <input id="a" className="botones" onClick={this.props.handler} type="button" value="A" />
                {this.props.opcion.a}</label>
                <label className="opcion">
                <input id="b" className="botones" onClick={this.props.handler} type="button" value="B" /> 
                {this.props.opcion.b}</label>
            </div>
        )}
}

export default Botonera;