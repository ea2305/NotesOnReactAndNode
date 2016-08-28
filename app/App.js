//Dependencias de react
import React, {Component} from 'react';
import axios from 'axios';


//importacion de componentes
import Card from '../components/Card';
import AddCard from '../components/AddCard';

//[1,2,3,4]
//[2,4,6,8]

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            elements : [],
            socket : null
        }
    }

//Estados de componentes
/**/
    componentWillMount = () => {
        let socket = setInterval( this.callData , 1000 );
        this.setState({ socket });
    }

    componentWillUnmount = () => {
        clearInterval( this.state.socket );
    }   

    callData = () => {
        //console.log( "I'm load \ :v /" )
        //Peticion GET con axios
        //axios.get('http://gladys-api.com/prueba/jsonAxios.json')
        axios.get('https://serene-woodland-96456.herokuapp.com/note/get')
                .then(function (response) {
                    var elements = response.data; 
                    this.setState({ elements })
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
    }



    deleteCard = ( target ,index ) => {
        //console.log(target,index)
        // let elements = this.state.elements;
        // let start    = elements.indexOf( target );
        // elements.splice( start , 1 )
        //Polymorfismo
        //this.setState({ elements });

        //axios.post('http://localhost:5000/note/delete',{
        axios.post('https://serene-woodland-96456.herokuapp.com/note/delete',{
            
                    'data' : target
                })
                .then(function (response) {
                    console.log(response.data)
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
    }

    addCard = ( element ) => {
        //console.log( e )
        // let elements = this.state.elements;
        // elements.push( element );
        // this.setState({ elements });

        axios.post('https://serene-woodland-96456.herokuapp.com/note/create',{
                    'data' : element
                })
                .then(function (response) {
                    console.log(response.data) 
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
    }

    render() {
        
        let Cards = this.state.elements.map( ( elemento , index ) => {
            return <Card    key={ "card_" + index } 
                            data={ elemento }
                            deleteCard={this.deleteCard.bind( this, elemento )}/> ;
        })

        return (
            <div>
                <AddCard addCard={this.addCard}/>
                {Cards}
            </div>
        );
    }
}