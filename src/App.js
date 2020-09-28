import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';


function App() {

  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [informacion, setInformacion] = useState({});


  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;
    const consultarAPI = async () => {      
      const url = `https://api.lyrics.ovh/v1/${busquedaLetra.artista}/${busquedaLetra.cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busquedaLetra.artista}`;
      const [letra, informacion] = await Promise.all([
        await (await fetch(url)).json(),
        await (await fetch(url2)).json()
      ])
      setLetra(letra.lyrics);
      setInformacion(informacion.artists[0]);
    }
    consultarAPI();
  }, [busquedaLetra]);

  return (
    <Fragment>
      <Formulario 
        setBusquedaLetra={setBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion 
              informacion={informacion}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
