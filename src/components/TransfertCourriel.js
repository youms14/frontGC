import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TransfertCourriel=()=> {

    /*
        componentDidMount(){
        
        fetch('http://localhost:8080/listefournisseurs')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
    }
    */
    const event = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today=event.toLocaleDateString('fr-FR', options)

    const [show, setShow] = useState(true);

     //les infromations du modal
     const [fournisseur, setFournisseur] = React.useState("");
     const [collaborateurExt, setcollaborateurExt] = React.useState("");
     


     const [newProduit, setNewProduit] = React.useState("");
     const [newQuantite, setNewQuantite] = React.useState(0);

    const handleClose = () => {
        setShow(false);
        console.log(fournisseur);
        console.log(collaborateurExt);
    }
    //const handleShow = () => setShow(true);

   
    
    const handleSubmit = (event) => {
        console.log(`
          Fournisseur: ${fournisseur}
          CollaborateurExt: ${collaborateurExt}
        `);
        
        event.preventDefault();
    }
    
    
    

    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>Nouvelle Livraison</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>
                        <label>Fournisseur:</label>
                        <select name="fournisseur" value={fournisseur} onChange={e => {setFournisseur(e.target.value);}} required>
                            <option >SABC</option>
                            <option >UCB</option>
                            <option >GUINNESS</option>
                        </select>
                    </p>

                    <p>
                        <label>Collaborateur Externe:</label>
                        <select name="collaborateurExt" value={collaborateurExt} onChange={e => {setcollaborateurExt(e.target.value);}} required>
                            <option >Robert </option>
                            <option >Jean</option>
                            <option >Pierre</option>
                        </select>
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} >Commencer</Button>
                </Modal.Footer>


            </Modal>

            <div  className="showback  largeur cote1">
                <h2>Nouveau Enregistrement de Produit</h2>
                <p>
                    <label>Produit:</label><input type="text" name="newProduit" value={newProduit} onChange={e => setNewProduit(e.target.value)}/>
                </p>

                <p>
                    <label>Quantité:</label><input type="number" name="newQuantite" value={newQuantite} onChange={e => setNewQuantite(e.target.value)}/>
                </p>
                <Button variant="info" >Ajouter</Button>
            </div>

            <div  className="showback  largeur cote2">
                Date:{today}

                Fournisseur : {fournisseur}

                Collaorateur Externe: {collaborateurExt}

                

            </div>
        </div>
    )
}

export default TransfertCourriel
