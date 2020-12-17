import React from 'react';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';


import './phonebook.moduls.css';

  
class phonebook extends React.Component{
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
          ],
        filter:''
      }
    
      handleInputFilterChenge = event =>{
        this.setState({filter: event.currentTarget.value});
      }

      handleButtonAdd = element =>{

        const getUserByName = (arr, name) => arr.find(x => x.name === name);
        const findsElement = getUserByName(this.state.contacts,element.name);

              
        if(findsElement) {
            window.alert(`Пользователь с именем ${element.name} уже eсть в телефонной книге`)
        } else{
            this.setState(prevState =>({
           
                contacts : [...prevState.contacts,element]
              }));
            
        }
          
      } 


      deleteContact = (id) =>{
          this.setState(prevState=>({
              contacts : prevState.contacts.filter(contact => contact.id !== id)
          }))
      }

    render(){
        const normolizefilter = this.state.filter.toLowerCase();
        const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normolizefilter));
        return(
            <div>
              
                <h2>Телефонная книга</h2>
                <ContactForm handleButtonAdd={this.handleButtonAdd}/>
                <label>Фильтр для поиска</label>
                <br/>
                <input type="text"
                onChange={this.handleInputFilterChenge}
                className="filter__input"
                />
                <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>  
                      
            </div>   
        )
    }
} 

export default phonebook