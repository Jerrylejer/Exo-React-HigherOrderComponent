import React, { Component } from 'react';

//! "Etat", "Fonction" ou "action" à mutualiser sur plusieurs components
const countHits = (WrappedComponent, power) => {
    // Un state commun aux adversaires
    class CountHits extends Component {
        state = {
            hits: 0,
        };
        // Un comptage des coups commun aux adversaires
        addOne = () => {
            this.setState((prevState) => {
                return {
                    hits: prevState.hits + 1,
                };
            });
        };

        //! Définir l'origine des coups portés pour notre décompte des vies
        //* Ici nous avons une fonction addOne qui modifie un State
        //* Si modification il y a du state alors il y a un cycle de vie correspondant
        //* componentDidUpdate !!!

        componentDidUpdate (prevProps, prevState) {
            // J'introduis ma condition au changement du state
            if(this.state !== prevState) {
                const fighterHits = WrappedComponent.name;
                // Paramètres récupérés ensuite dans index.js dans la fonction remolife param et param2
                this.props.reduceLife(fighterHits, power);
            }

        }

        render() {
            return (
                <WrappedComponent
                    addOneHit={this.addOne}
                    hocState={this.state}
                    removeOneLIfe={this.removeLife}
                    {...this.props}
                />
            );
        }
    }
    return CountHits;
};

export default countHits;
