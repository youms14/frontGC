import React, { Component } from 'react'

export class Vente extends Component {

    componentDidMount(){
        
        fetch('http://localhost:8080/login')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
    }

    render() {
        return (
            <div>
                <h1>Debut</h1>
                <h1>Vente</h1>
                <h1>Vente</h1>
                <h1>Vente</h1>
                <h1>Vente</h1>
                <h1>Vente</h1>
                <h1>Vente</h1>
                <h1>Vente</h1>
                <h1>Vente</h1>
                <h1>Vente</h1>
                <h1>Vente</h1>
                <h1>Fin</h1>
            </div>
        )
    }
}

export default Vente
