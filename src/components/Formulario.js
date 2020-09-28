import React, {useState} from 'react';
import Error from './Error';




const Formulario = ({setBusquedaLetra}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })
    const [error, setError] = useState(false)

    // Funcion a cada input para leer el contenido
    const actulizaState = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // Consultar las API
    const buscarInformacion = e => {
        e.preventDefault();
        if(busqueda.artista.trim() === '' || busqueda.cancion.trim() === '' ){
            setError(true);
            return;
        }
        setError(false);
        // Pasar al componente principal
        setBusquedaLetra(busqueda);

        // Reiniciar Componente
    }


    return (
        <div className="bg-info mt-4">
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Busacador Letras - Canciones</legend>
                        {error ? <Error mensaje="Todos los campos son obligatorios"/>: null}
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre de tu Artista o Banda"
                                            onChange={actulizaState}
                                            value={busqueda.artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de la cancion"
                                            onChange={actulizaState}
                                            value={busqueda.cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;