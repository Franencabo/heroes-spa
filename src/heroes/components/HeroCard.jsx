import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CharactersByHero = ({ alter_ego, characters }) =>
    (alter_ego === characters) ? <></> : <p className="card-text">{characters}</p>;



// eslint-disable-next-line react/prop-types
export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {

    const heroImage = `/heroes/${id}.jpg`;


    return (
        <div className="col  animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImage} alt={superhero} className="card-img" />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            <CharactersByHero alter_ego={alter_ego} characters={characters} />

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>


                            <Link to={`/hero/${id}`}>Más..</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
