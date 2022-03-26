import React, { Component } from 'react';
import vegeta from '../../images/vegeta.png';
import countHits from '../CountHits/CountHits';
import './vegeta.scss';

class Vegeta extends Component {
    render() {
        const { name, addOneHit, hocState, life } = this.props;

        return (
            <div className='col'>
                <img src={vegeta} alt='Vegeta' className='vegeta-pic' />
                <br />
                <button className='btn btn-success m-3' onClick={addOneHit}>
                    {name} Frappe !
                </button>

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
                            <td>{life}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default countHits(Vegeta);
