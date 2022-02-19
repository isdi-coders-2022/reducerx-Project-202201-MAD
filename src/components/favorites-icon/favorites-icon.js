/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useContext, useState, useEffect } from 'react';
import { Context } from '../../context/context';
/* eslint-disable jsx-a11y/click-events-have-key-events */
export function FavoritesIcon({ cocktailId, cocktail }) {
    const { store, deleteCocktail, addCocktail } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    const CheckIsFav = () => {
        let checkFav;
        if (window.location.pathname.includes('/details')) {
            checkFav = store.favorites.find(
                (item) => item.idDrink === cocktailId
            );
            if (checkFav) {
                checkFav = true;
            } else {
                checkFav = false;
            }
        } else if (window.location.pathname === '/favorites') {
            checkFav = store.favorites.find((item) => item.id === cocktailId);
            if (checkFav) {
                checkFav = true;
            } else {
                checkFav = false;
            }
        }
        setIsFavorite(checkFav);
    };

    function isFav() {
        if (
            store.favorites.some((element) => {
                if (element.id === cocktailId) return true;
            })
        ) {
            deleteCocktail(cocktailId);
        } else {
            const newCocktailInfo = { ...cocktail, id: cocktail.idDrink };
            addCocktail(newCocktailInfo);
        }
    }

    useEffect(() => {
        CheckIsFav();
    });

    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <div role="button" onClick={isFav}>
            {isFavorite ? '🗑' : '⭐️'}
        </div>
    );
}
