import { HeroCard } from "../components/index";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHereosByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate()

  const location = useLocation()

  const {q = ''} = queryString.parse(location.search)

  const heroes = getHereosByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0

  const { buscarText, onInputChange } = useForm({
    buscarText: q
  }) 

  const onSearchSubmit = (e) => {
    e.preventDefault()

    if (buscarText.trim().length < 3 ) return

    navigate(`?q=${buscarText.toLowerCase().trim()}`)

  }

  return (
    <>
      <h1>Busquedas</h1>
      <hr />

      <div className="row">

      <div className="col-5">
        <h4>Busquedas</h4>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input 
            type="text" 
            placeholder="Buscar"
            className="form-control"
            name="buscarText"
            autoComplete="off"
            value={buscarText}
            onChange={onInputChange}
          />

          <button
            className="btn btn-outline-primary mt-1"
          >
            Buscar
          </button>
        </form>
      </div>
      <div className="col-7">
        <h4>Resultados</h4>
        <hr />

        <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none' }}>
          Buscar
        </div>
        
        <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none' }}>
          No hay resultados para <b>{q}</b>
        </div>

        {
          heroes.map( hero => {
            return <HeroCard key={hero.id} {...hero} />
          })
        }



      </div>
    </div>
    </>
  )
}
