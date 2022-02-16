import { useState, useEffect } from 'react';
import * as api from '../../services/api';

export function Details() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const cocktailId = urlParams.get('id');
    const detailsURL = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${cocktailId}`;

    const [state, setState] = useState({});

    useEffect(() => {
        api.getDetails(detailsURL)
            .then((resp) => {
                console.log(resp);
                setState(resp.data.drinks[0]);
            })
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>{state ? <p>{state.idDrink}</p> : <p>Loading</p>}</div>;
}
