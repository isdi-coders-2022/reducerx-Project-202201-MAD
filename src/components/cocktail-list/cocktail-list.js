/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { Context } from '../../context/context';

export function CocktailList() {
    const { store } = useContext(Context);

    return (
        <div>
            {store.cocktails ? (
                <main>
                    <p>The Cocktail List</p>
                    <ul className="cocktail-list">
                        {store.cocktails.map((item) => (
                            <>
                                <img src={item.strDrinkThumb} alt="Cocktail" />
                                <li className="cocktail-list__name">
                                    {item.strDrink}
                                </li>
                            </>
                        ))}
                    </ul>
                </main>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}
