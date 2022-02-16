/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
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
                                <img src={item.strDrinkThumb} alt="Cocktail" />
                                <p> {item.strDrink}</p>
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
