// Padre -> Hijo { this.props }
// Hijo y sus estados { this.state }

import React, {Component} from 'react'

//Definicion de estilos
const styles ={
    card : {
        background : 'white',
        position : 'absolute',
        padding : '1rem', 
        border  : '1px solid black',
        width   : '20rem',
        height  : '10rem'
    }
} 

export default class Card extends Component{
    constructor(props){

        super(props);
        this.state = {
            input : "hola mundo"
        };

    }

    //Asignacion de entradas de input
    getInputText = ( e ) => this.setState({ input : e.target.value });

    showText = () => {
        alert( this.state.input );
    }

    render(){
        return(
            <div className="card-item container">

                <h3>
                    {this.props.data.title}
                </h3>

                <label>
                    {this.props.data.description}
                </label><br/>

                <input  type="text" name="body"
                        className="input-add" 
                        onChange={this.getInputText}
                        value={this.state.input}>
                </input>

                <button className="btn marco" onClick={this.showText}>
                    Visulizar
                </button>

                <button className="btn-min marco" onClick={this.props.deleteCard}>
                    Eliminar
                </button>

            </div>
        );
    }
}