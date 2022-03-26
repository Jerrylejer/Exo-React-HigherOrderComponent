import React, { Component } from 'react';

const countHits = (WrappedComponent) => {
    // Un state commun aux 2 adversaire
    class CountHits extends Component {
        state = {
            hits: 0,
        };
        // Un comptage des coups commun aux 2 adversaires
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
                this.props.reduceLife(fighterHits);
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
