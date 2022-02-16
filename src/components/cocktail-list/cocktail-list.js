/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';
import './cocktail-list.scss';

export function CocktailList() {
    const { store } = useContext(Context);

    return (
        <div>
            {store.cocktails ? (
                <main>
                    <h3>The Cocktail List</h3>
                    <ul className="cocktail-list">
                        {store.cocktails.map((item) => (
                            <li
                                key={item.idDrink}
                                className="cocktail-list__name"
                            >
                                <Link to={`/details?id=${item.idDrink}`}>
                                    <img
                                        src={item.strDrinkThumb}
                                        alt="Cocktail"
                                    />
                                    <p> {item.strDrink}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </main>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}
