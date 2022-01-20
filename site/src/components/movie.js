
import '../App.css';

export const Movie = (props) => {
    var details = props.details;
    
    return (
        <>
        <div className='movie_card' >
            <h4> {details.Title}</h4>
            <h3>{details.Year}</h3>
            <img src={details.Poster}></img>
        </div>
        </>
       
    )
}
