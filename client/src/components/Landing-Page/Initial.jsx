import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Initial.module.css';

function Initial() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.pContainer}>
                    <h3>Proyecto individual - Pokemon</h3>
                </div>
                <div className={styles.buttonContainer}>
                    <NavLink to='/home'>
                        <button className={styles.button}>INICIO</button>
                    </NavLink>
                </div>
            </header>
            <section className={styles.section}>
                <article id='aboutPokemon' className={styles.articleToRight}>
                    <p>
                    Los Pokémon son criaturas de todas las formas y tamaños que viven
                        en la naturaleza o junto a los humanos. En la mayor parte,
                        Los Pokémon no hablan excepto para pronunciar sus nombres.
                    </p>
                    <img
                        src='./img/starterPokemons.png'
                        alt='Starters pokemons.'
                    />
                </article>
                <article id='aboutTypes' className={styles.articleToLeft}>
                    <p>
                    Los tipos se refieren a diferentes propiedades elementales asociadas
                        tanto con Pokémon como con sus movimientos. <br /> Hay 18 tipos de pokemon oficiales
                    </p>
                    <img
                        src='./img/pokemonTypes.png'
                        alt='Types of pokemons.'
                    />
                </article>
                <article id='aboutProject' className={styles.articleToRight}>
                    <p>
                        Este proyecto es parte de Henry Labs donde he integrado todo lo aprendido en el bootcamp.
                        use: <br /> React.
                        <br /> Redux.
                        <br /> Express.
                        <br /> NodeJS.
                        <br /> Sequelize
                        <br /> PostgreSQL.
                    </p>
                    <img src='./img/pokemon.png' alt='Pokemon logo.' />
                </article>
            </section>
        </div>
    );
}

export default Initial;
