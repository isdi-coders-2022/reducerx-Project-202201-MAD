/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';
import { FavoritesIcon } from '../favorites-icon/favorites-icon';
import './cocktail-list.scss';

export function CocktailList() {
    const { store } = useContext(Context);

    return (
        <div>
            {store.cocktails ? (
                <main>
                    <ul className="cocktail-list">
                        {store.cocktails.map((item) => (
                            <li
                                key={item.idDrink}
                                className="cocktail-list__name"
                            >
                                <FavoritesIcon cocktailId={item.idDrink} />
                                <Link to={`/details?id=${item.idDrink}`}>
                                    <div>
                                        <img
                                            src={item.strDrinkThumb}
                                            alt="Cocktail"
                                        />

                                        <p className="cocktail-title__mobile">
                                            {item.strDrink}
                                        </p>
                                    </div>
                                    <p className="cocktail-title__desktop">
                                        {item.strDrink}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="cocktails-navigation">
                        <button
                            type="button"
                            className="cocktails-navigation__previous"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className="cocktails-navigation__next"
                        >
                            Next
                        </button>
                    </div>
                </main>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}
