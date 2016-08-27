import React,{Component} from 'react';

export default class AddCard extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            title : "",
            description : ""
        }
    }

    setTitle = ( e ) => this.setState( { title : e.target.value } );
    setDescription = ( e ) => this.setState( { description : e.target.value } );
    addCard = () => {

        this.props.addCard(this.state);
        this.setState({
            title : "",
            description : ""
        });
    } 

    render(){
        return(
            <div className="card-item bg-gray">
                <h3>Agregar nota</h3>
                <div className="marco">
                    <label htmlFor="title" >Title</label><br/>
                    <input  type="text" 
                            className="input-add"
                            value={this.state.title}
                            onChange={this.setTitle}>
                    </input><br/>
                    <label htmlFor="description">description</label><br/>
                    <input  type="text" 
                            className="input-add"
                            value={this.state.description}
                            onChange={this.setDescription}>
                    </input><br/>
                    <button onClick={this.addCard}
                            className="btn-add">
                        Agregar nota
                    </button>
                </div>
            </div>
              
        );
    }
}