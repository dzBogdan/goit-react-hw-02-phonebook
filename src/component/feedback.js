import React from 'react';
import './feedback.moduls.css';
import Statistics from './Statistics';

class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total:0,
        feedback:0
      }

      hendeleGood = () => {
          
          this.setState(prevStat =>{
              return {good: prevStat.good+1,
                      total:prevStat.total+1,
                      feedback:(prevStat.good/prevStat.total)*100
                   }
          })

      }

      hendeleNeutral = ()  => {
        this.setState(prevStat =>{
            return {neutral: prevStat.neutral+1,
                    total:prevStat.total+1,
                    feedback:(prevStat.good/prevStat.total)*100
                }
        })

      }      

      hendeleBad = () => {
        this.setState(prevStat =>{
            return {bad: prevStat.bad+1,
                    total:prevStat.total+1,
                    feedback:(prevStat.good/prevStat.total)*100 
                }
        })

      }

    render(){
     return(
         <div>
             <h2>Отзывы клиентов</h2>
             <button type="button" className="button" onClick={this.hendeleGood}>Good</button>
             <button type="button" className="button" onClick={this.hendeleNeutral}> Neutral</button>
             <button type="button" className="button" onClick={this.hendeleBad}>Bad</button>
           {this.state.total!=0? 
            <Statistics 
             good = {this.state.good}
             neutral = {this.state.neutral}
             bad = {this.state.bad}
             total = {this.state.total}
             feedback = {this.state.feedback}
             />:<p>Нет статистики</p>}
         </div> 
        
         

     )   
    }
}

export default Feedback;