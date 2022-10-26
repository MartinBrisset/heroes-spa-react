import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"

export const HeroPage = () => {

  const {heroId} = useParams()
  const naviate = useNavigate()

  const hero = useMemo( () => getHeroById(heroId), [heroId] )

  const onNavigateBack = () => {
    naviate(-1)
  }

  if (!hero) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
      {/* <h1>{hero.superhero}</h1> */}
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={`/assets/heroes/${hero.id}.jpg`} 
          alt={hero.superhero} 
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
          <li className="list-group-item"><b>First appereance:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button 
          onClick={onNavigateBack}
          className="btn btn-outline-primary"
        >
          Back
        </button>

      </div>
    </div>
  )
}
