export default function Statistics(props){
    return(  
        <div>
        <h2>Статистика</h2>
        <p>Good:               <span>{props.good}</span></p>
        <p>Neutral:            <span>{props.neutral}</span></p>
        <p>Bad:                <span>{props.bad}</span></p>
        <p>Total:              <span>{props.total}</span></p>
        <p>Positiv feedback    <span>{props.feedback} %</span></p>
        </div>
                );
}