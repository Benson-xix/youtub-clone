import "./css/JokesCard.css"

const JokesCard = ({title, joke, punchline})  => {


    return (
        <div className="joke-card">
        <img src="" alt="" className="joke-card"/>
        <h4 className="jokes-card-id"> {title}</h4>
       <p className="jokes-card-joke">{joke}</p>
<h5 className="jokes-card-punchline">{punchline}</h5>
<button className="jokes-card-btn">read full joke</button>


    </div>
    )
}


export default JokesCard