import { useContext } from 'react';
import { Context } from '../../context/context';
/* eslint-disable jsx-a11y/click-events-have-key-events */
export function FavoritesIcon({ cocktailId }) {
    const { deleteCocktail } = useContext(Context);
    function isFav() {
        deleteCocktail(cocktailId);
    }
    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <div role="button" onClick={isFav}>
            ⭐️
        </div>
    );
}
