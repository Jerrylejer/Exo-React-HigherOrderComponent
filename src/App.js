import React, { Component } from 'react';
import Vegeta from './component/Vegeta/Vegeta';
import Goku from './component/Goku/Goku';
import './App.css';

class App extends Component {
    // Mise en place d'une jauge de vie pour chaque adversaire
    constructor(props) {
        super(props);
        this.state = {
            vegeta: 100,
            goku: 100,
        };
    }
    //* Cette fonction doit tenir compte de l'origine du coup porté
    //* Si Goku frappe => Vegara perd 10 points de vie
    //* Si Vegara frappe => Goku pard 10 point de vie
    //! Il faut donc se positionner dans le CountHits où les coups sont portés

    removeLife = (param) => {
        // Je vérifie que je récupère bien le nom des coups portés
        // console.log(param);
        if (param === 'Vegeta') {
            this.setState({
                goku: this.state.goku - 10,
            });
        } else {
            this.setState({
                vegeta: this.state.vegeta - 10,
            });
        }
    };

    render() {
        return (
            <div className='container text-center '>
                <h1>Goku Vs Vegeta</h1>
                <hr />
                <div className='row'>
                    <Vegeta
                        name='Vegeta'
                        life={this.state.vegeta}
                        reduceLife={this.removeLife}
                    />
                    <Goku
                        name='Goku'
                        life={this.state.goku}
                        reduceLife={this.removeLife}
                    />
                </div>
            </div>
        );
    }
}

export default App;
