/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { Context } from '../../context/context';

export function CocktailList() {
    const { store } = useContext(Context);

    return (
        <div>
            {store.cocktails ? (
                <main>
                    <h3>The Cocktail List</h3>
                    <ul className="cocktail-list">
                        {store.cocktails.map((item) => (
                            <li className="cocktail-list__name">
                                <img src={item.strDrinkThumb} alt="Cocktail" />
                                <p> {item.strDrink}</p>
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
