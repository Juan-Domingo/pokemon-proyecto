import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    filterByApi,
    filterByUsers,
    filterByType,
} from '../../actions/filters.action';
import { getAllPokemons } from '../../actions/getters.actions';
import styles from './styles/Filters.module.css';

function Filters({ history }) {
    const types = useSelector((state) => state.types);
    const allPokemons = useSelector((state) => state.allPokemons);
    const dispatch = useDispatch();
    const handleFilter = (e) => {
        const target = e.target;
        const idButton = target.id;
        const value = target.value;
        types.forEach((type) => {
            if (value === type.name) {
                dispatch(filterByType(value));
                return history.push('/home');
            }
        });

        if (idButton === 'created') {
            dispatch(filterByUsers());
            if (!allPokemons) {
                alert('No pokemons created by users yet.');
                dispatch(getAllPokemons());
            }
            return history.push('/home');
        }
        if (idButton === 'originals') {
            dispatch(filterByApi());
            return history.push('/home');
        }

        if (idButton === 'clear') {
            dispatch(getAllPokemons());
            document.getElementById('selector').value = -1;
            return history.push('/home');
        }
    };

    return (
        <aside className={styles.buttonContainer}>
            <h4>Filtra por…</h4>
            <select
                className={styles.byTypes}
                id='selector'
                onChange={handleFilter}
            >
                <option value='-1'>Selecciona un tipo</option>
                {types.map((type) => (
                    <option key={`type-${type.id}`} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>
            <button onClick={handleFilter} id='originals'>
                Pokemons originales
            </button>
            <button onClick={handleFilter} id='created'>
                Pokemons creados por usuarios
            </button>

            <button onClick={handleFilter} id='clear'>
                Borrar filtros
            </button>
        </aside>
    );
}

export default Filters;
