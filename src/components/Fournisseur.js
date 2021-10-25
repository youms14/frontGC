import React from 'react'

const Fournisseur=({fournisseurs})=> {

    return (
        <div className="fournisseurComp">
          <center><h1 className="titreliste">Liste de Fournisseurs</h1></center>
          {fournisseurs.map((f,i) => (
            
              <div key={i} className="showback   ">
                <h5 >{f.nom}</h5>
                <h6 >{f.nom}</h6>
                <p >{f.despription}</p>
              </div>
            
          ))}
        </div>
    )
}

export default Fournisseur;
