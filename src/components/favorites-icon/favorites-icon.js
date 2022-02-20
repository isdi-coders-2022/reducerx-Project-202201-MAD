import { useContext } from 'react';
import { Context } from '../../context/context';

export function FavoritesIcon({ cocktailId, cocktail }) {
    const { store, deleteCocktail, addCocktail } = useContext(Context);

    function isFav() {
        const data = store.favorites.find(
            (element) => element.id === cocktailId
        );
        if (data) {
            deleteCocktail(cocktailId);
        } else {
            const newCocktailInfo = { ...cocktail, id: cocktail.idDrink };
            console.log(newCocktailInfo);
            addCocktail(newCocktailInfo);
        }
    }
    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <div role="button" onKeyPress={isFav} onClick={isFav}>
            ⭐️
        </div>
    );
}
