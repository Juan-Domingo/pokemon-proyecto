import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/NavInitial.module.css';

function NavInitial() {
    return (
        
        <div className={styles.navbar}>
            <a href='#top'>
                <button className={styles.button}>Arriba</button>
            </a>
            <a href='#aboutPokemon'>
                <button className={styles.button}>Sobre los pokemons</button>
            </a>
            <a href='#aboutTypes'>
                <button className={styles.button}>Tipos de pokemon</button>
            </a>
            <a href='#aboutProject'>
                <button className={styles.button}>Sobre este proyecto</button>
            </a>
            <a href='https://www.poketvlatino.com/p/pokemon-peliculas-completas-en-espanol.html'>
                <button className={styles.button}>Peliculas Pokemon</button>
                </a>
                </div>
                
    );
}

export default NavInitial;
