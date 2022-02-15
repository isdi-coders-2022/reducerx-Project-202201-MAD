import { useContext } from 'react';
import { Context } from '../../context/context';

export function CocktailList() {
    const { store } = useContext(Context);
    console.log(store);
    return (
        <main>
            <p>The Cocktail List</p>
            <ul className="cocktail-list" />
        </main>
    );
}
