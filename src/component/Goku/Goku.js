import React, { Component } from 'react';
import goku from '../../images/goku.png';
import countHits from '../CountHits/CountHits';
import './goku.scss';

class Goku extends Component {
    render() {
        const { name, addOneHit, hocState, life } = this.props;

        return (
            <div className='col'>
                <img src={goku} alt='goku' className='goku-pic' />
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

export default countHits(Goku);
