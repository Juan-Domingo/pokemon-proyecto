import React from 'react';
import { useSelector } from 'react-redux';
import { LIMIT } from '../../actions/constants.action';
import styles from './styles/Counter.module.css';

function Counter() {
    const allPokemons = useSelector((state) => state.allPokemons);
    const countTotal = allPokemons.length;
    const countOriginal = allPokemons.filter((el) =>
        Number.isInteger(Number(el.id))
    ).length;
    const countFromUsers = countTotal - countOriginal;
    const availableSockets = LIMIT - countTotal;

    return (
        <div className={styles.container}>
            <h4>Contador de pokemons</h4>
            <h5>
                Total: <strong>{countTotal}</strong>
            </h5>
            <h5>
                Por la API: <strong>{countOriginal}</strong>
            </h5>
            <h5>
                Por usuarios: <strong>{countFromUsers}</strong>
            </h5>
            <h5>
                Disponibles: <strong>{availableSockets}</strong>
            </h5>
        </div>
    );
}

export default Counter;
