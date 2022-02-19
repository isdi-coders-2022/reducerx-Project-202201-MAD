/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useContext } from 'react';
import { Context } from '../../context/context';
/* eslint-disable jsx-a11y/click-events-have-key-events */
export function FavoritesIcon({ cocktailId, cocktail }) {
    const { store, deleteCocktail, addCocktail } = useContext(Context);

    function isFav() {
        if (
            store.favorites.some((element) => {
                if (element.id === cocktailId) return true;
            })
        ) {
            deleteCocktail(cocktailId);
        } else {
            const newCocktailInfo = { ...cocktail, id: cocktail.idDrink };
            console.log(newCocktailInfo);
            addCocktail(newCocktailInfo);
        }
    }
    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <div role="button" onClick={isFav}>
            ⭐️
        </div>
    );
}
