import React from 'react';
import shortid from 'shortid';
import './phonebook.moduls.css';



class ContactForm extends React.Component{
    state = {
        name: '',
        number: '',
    }

    handleInputNameChenge = event =>{
        this.setState({name: event.currentTarget.value});
        
                 
    }

    handleInputNumberChenge = event =>{
      this.setState({number: event.currentTarget.value});
    }

    handleButtonAdd = event =>{
        const element =  {
            id:shortid.generate(),
            name:this.state.name,
            number:this.state.number
        }
        
        this.props.handleButtonAdd(element);
          
      } 

    render(){
        return(
        <div>
                <label className="phoneBook__name">Имя
                <input type="text"
                value={this.state.name}
                onChange={this.handleInputNameChenge}
                className="name__input"
                />
                </label>
                <br/>
                <label className="phoneBook__number"> Номер
                <input type="text"
                value={this.state.number}
                onChange={this.handleInputNumberChenge}
                className="number__input"
                />
                </label>
                <br/>
                <button type="button" onClick={this.handleButtonAdd} 
                className="phoneBook__button">Добавить контакт</button>
                <br/>
        </div> );    
    }
}

export default ContactForm;