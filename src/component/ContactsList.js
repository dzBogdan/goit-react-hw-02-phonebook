import React from 'react';
import './phonebook.moduls.css';



class ContactList extends React.Component{
render(){
    return(
        <div>
            <h3>Контакты</h3>
                  <ul className="contact__list">
                      {this.props.contacts.map(item=>(
                              <li key={item.id} className="list__item">
                                  <p>{`${item.name} : ${item.number}`}</p>
                                  <button className="list__button" onClick={()=>this.props.onDeleteContact(item.id)}>Удалить</button> 
                              </li>    
                          ))}
                  </ul>      
        </div>    
    )
}
}  

export default ContactList;