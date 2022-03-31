import React, { Component } from 'react';
import vegeta from '../../images/vegeta.png';
import countHits from '../CountHits/CountHits';
import './vegeta.scss';

class Vegeta extends Component {
    render() {
        const { name, addOneHit, hocState, life } = this.props;

        const lifeValue =
            life > 0 ? (
                <td>{life}%</td>
            ) : (
                <td>
                    <span className='badge bg-danger'>Dead</span>
                </td>
            );
        const button =
            life > 0 ?  (
                <button className='btn btn-success m-3' onClick={addOneHit}>
                    {name} Frappe !
                </button>
            ) :             (
                <button
                    className='btn btn-danger m-3'
                    disabled
                >
                    {name} Terrassé !
                </button>
            );

        return (
            <div className='col'>
                <img src={vegeta} alt='Vegeta' className='vegeta-pic' />
                <br />
                {button}
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>coups</th>
                            <th scope='col'>vie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>
                            {lifeValue}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default countHits(Vegeta, 15);
