import * as api from '../../services/api';

export async function Details() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const cocktailId = urlParams.get('id');
    const detailsURL = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${cocktailId}`;
    let dataTry = [];
    const { data } = await api.getDetails(detailsURL);
    dataTry = data;
    // console.log(data.drinks);
    return (
        <div>
            {dataTry.drinks ? <p>{dataTry.drinks.idDrink}</p> : <p>Loading</p>}
        </div>
    );
}
