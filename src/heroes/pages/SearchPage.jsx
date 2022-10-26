import { HeroCard } from "../components/index";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { queryString } from "query-string";

export const SearchPage = () => {

  const navigate = useNavigate()

  const locatacion = useLocation()


  const query = queryString.parse(locatacion.search)

  console.log(query)

  const { buscarText, onInputChange } = useForm({
    buscarText: ''
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

        <div className="alert alert-primary">
          Buscar
        </div>
        
        <div className="alert alert-danger">
          No hay resultados para <b>LALA</b>
        </div>

        <HeroCard />

      </div>
    </div>
    </>
  )
}
