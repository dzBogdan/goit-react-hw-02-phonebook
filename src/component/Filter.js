import React from 'react';
import './phonebook.moduls.css';

class Filter extends React.Component{
 

handleInputFilterChenge = event =>{
    this.props.handleInputFilterChenge();
      }   

 render(){
      return(
        <div>
        <label>Фильтр для поиска</label>
        <br/>
        <input type="text"
        onChange={this.handleInputFilterChenge}
        className="filter__input"
        />
        </div>
      )
 }
     
} 

export default Filter;
