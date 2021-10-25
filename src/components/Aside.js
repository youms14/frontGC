import React, { Component } from 'react'
import Fournisseur from './Fournisseur';
import '../assets/css/Aside.css';
import { Collapse} from 'reactstrap';

import RecherchedeCourriel from'./RecherchedeCourriel';

import TransfertCourriel from './TransfertCourriel';
import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import Vente from './Vente';
import EnregistrerCourriel from './EnregistrerCourriel';


class Aside extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           
            fournisseurs: [
                {
                    nom:'SABC',
                    despription: 'Societe Anonyme des Brasseries du Cameroun'
                },
                {
                    nom:'UCB',
                    despription: 'Unuion Camerounaise des Brasseries'
                },
                {
                    nom:'GUINNESS S. A.',
                    despription: ' Guinness Societe Anonyme'
                }
            ],
            role:"ADMIN",
            isClickedVente:true
              
        }


        this.confInitiales= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Capital</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Emballages</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Achats Bouteilles</font></a>                           
                            </div>
        
        

        this.facturesSubItem= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Nouveau Service</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Nouvelle Etape</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Nouvelle Procedure </font></a>                           
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Nouveau Personnel</font></a>
                                
                            </div>

        this.produitsSubItem= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> État Magazin</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Retour Produits</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Prix Produits</font></a>                           
                            </div>
        this.depensesSubItem= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Nouvelle Dépense</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Listes Dépenses</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Decaisser de Caisse Dep </font></a>                           
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Decaisser de Caisse Jour. Dep</font></a>
                            </div>   
        
        this.cassSubItem= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Nouveau Cass</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Liste Cass</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Gérer Cass Produit</font></a>                           
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Gérer Cass Emb</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Acquiter Cass Par Argent</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Acquiter Cass Par Emballage</font></a>                           
                            
                            </div>
        
        this.personnelSubItem= <div className="sub bg-dark">
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Nouveau Personnel</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Nouvel Utilisateur</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Désaciver Utilisateur</font></a>                           
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> Ajouter Poste</font></a>
                                <a href="#" className="itemSubSideBar list-group-item bg-dark list-group-item-action"><font color="#FF5835"> supprimer Poste  </font></a>                          
                            
                            </div>
                        
    
        this.itemConfInitialActive=    <a href="#"  className=" item active" onClick={this.showSubMenu}> 
                                                            <span className="itemStyle"> <font color="white">Configurations Initiales</font> </span>
                                                        </a>
        this.itemConfInitial=    <a href="#"  className=" item" onClick={this.showSubMenu}> 
                                    <span className="itemStyle"> <font color="white">Configurations Initiales</font> </span>
                                </a>
                                                    
                                
       
        
    }

   
    showSubMenuTdB =(e) =>{
        if(this.state.isClickedTableauDeBord){
            this.setState({
                isClickedTableauDeBord:false
            })
        }else{
            this.setState({
                isClickedTableauDeBord:true,
                
                isClickedVente:false,
                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedPersonnel:false
               
            });
        }

    }


    showSubMenuVente =(e) =>{
        console.log("je suis dans la fonction menu vente")
        if(this.state.isClickedVente){
            this.setState({
                isClickedVente:false
            })
        }else{
            this.setState({
                isClickedVente:true,

                isClickedTableauDeBord:false,
                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedPersonnel:false
            })
        }
    }
    

    showSubMenuLivraison = (e) =>{
        
        if (this.state.isClickedLivraison){
            this.setState({
                isClickedLivraison:false
            });
        }else{
            this.setState({
                isClickedLivraison:true,

                isClickedPersonnel:false,
                isClicked:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            })
        } 
    }    

    showSubMenuFacture = (e) =>{
        if (this.state.isClickedFacture){
            this.setState({
                isClickedFacture:false
            });

            
        }else{
            this.setState({
                isClickedFacture:true,

                isClicked:false,
                isClickedLivraison:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedPersonnel:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            })
        } 
    }    

    showSubMenuProduit = (e) =>{
        if (this.state.isClickedProduit){
            this.setState({
                isClickedProduit:false
            });

            
        }else{
            this.setState({
                isClickedProduit:true,

                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedPersonnel:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            })
        } 
    }    

    showSubMenuDepense = (e) =>{
        if (this.state.isClickedDepense){
            this.setState({
                isClickedDepense:false
            });

           
        }else{
            this.setState({
                isClickedDepense:true,

                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedcass:false,
                isClickedPersonnel:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            })
        } 
    }    

    showSubMenuCass = (e) =>{
        if (this.state.isClickedcass){
            this.setState({
                isClickedcass:false
            });
            
        }else{
            this.setState({
                isClickedcass:true,

                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedPersonnel:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            })
        } 
    }  

    showSubMenuPersonnel = (e) =>{
        if (this.state.isClickedPersonnel){
            this.setState({
                isClickedPersonnel:false
            });
           
        }else{
            this.setState({
                isClickedPersonnel:true,

                isClicked:false,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            });
            //this.state.isFocusPersonnel?(e.target.classList.add('active')):(e.target.classList.remove('active'));
        } 

       
    }  

    showSubMenu = (e) =>{
        if (this.state.isClicked){
            this.setState({
                isClicked:false
            });

           
        }else{
            this.setState({
                isClicked:true,
                isClickedLivraison:false,
                isClickedFacture:false,
                isClickedProduit:false,
                isClickedDepense: false,
                isClickedcass:false,
                isClickedPersonnel:false,
                isClickedVente:false,
                isClickedTableauDeBord:false
            });
        } 
    }
    
    
    
    
    render() {

        return (
            <BrowserRouter className="d-flex " id="wrapper">
                
                
                
                <Collapse isOpen={this.props.ouvert===1?(true):(false)}>
                    <div className="bg-dark border-top sideBarLeft" id="sidebar-wrapper">
                        <div className="sidebar-heading"  id="navbarSupportedContent">
                            <font color="white">{this.state.role}</font>
                        </div>

                        <div className="  list-group list-group-flush">
                            
                               
                            {this.state.isClickedTableauDeBord?(<Link to="/recherchedecourriel" className="item active" onClick={this.showSubMenuTdB} ><font color="white">Recherche de Courriel</font></Link>):(<Link to="/recherchedecourriel" className="item" onClick={this.showSubMenuTdB}><font color="white">Recherche de Courriel</font></Link>)}

                            {this.state.isClickedLivraison?(<Link to="/enregistrercourriel" className="  item active" onClick={this.showSubMenuLivraison}><font color="white" >Enregistrer Courriel</font></Link>):(<Link to="/enregistrercourriel" className="  item " onClick={this.showSubMenuLivraison}><font color="white" >Enregistrer Courriel</font></Link>)}

                            {this.state.isClickedVente?(<Link to="/" className="  item active" onClick={this.showSubMenuVente}><font color="white">Transférer un Courriel</font></Link>):(<Link to="/" className="  item" onClick={this.showSubMenuVente}><font color="white">Transférer un Courriel</font></Link>)}

                            {this.state.isClickedFacture?(<a href="#" className="  item active" onClick={this.showSubMenuFacture}><font color="white">Configurations</font></a>):(<a href="#" className="  item" onClick={this.showSubMenuFacture}><font color="white">Configurations</font></a>)}
                                {this.state.isClickedFacture?(this.facturesSubItem ):(null)}


                            {this.state.role==="ADMIN" ?(this.state.isClicked?(this.itemConfInitialActive):(this.itemConfInitial)):(null)}
                                
                        </div>
                    </div>
                </Collapse>
                
                
                <div id="page-content-wrapper">
                    <div className="container-fluid contentSide ">
                        <Route exact path="/" component={TransfertCourriel}/>
                        <Route path="/recherchedecourriel" component={RecherchedeCourriel}/>
                        <Route path="/enregistrercourriel" component={EnregistrerCourriel}/>
                        
                       
                     </div>
                </div>
                
            </BrowserRouter>
        )
    }
}

export default Aside
