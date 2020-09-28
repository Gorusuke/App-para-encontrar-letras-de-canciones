import React from 'react';


const Informacion = ({informacion}) => {

    if (Object.keys(informacion).length === 0) return null;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="card-body">
                <img src={informacion.strArtistWideThumb} alt={informacion.strArtistThumb} className="img-fluid"/>
                <p className="card-text"><b>Genero: {informacion.strGenre}</b></p>
                <div className="card-text">
                    <h2 className="card-text">Redes</h2>
                    <a href={`https://${informacion.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${informacion.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${informacion.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </div>
                <div className="card-text pt-4">
                    <h2 className="card-text">Biografia</h2>
                    <p className="card-text">{informacion.strBiographyES}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Informacion;