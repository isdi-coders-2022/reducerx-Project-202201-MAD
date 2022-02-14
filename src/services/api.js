import { axios } from 'axios';

const COCKTAILS_API =
    'www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Cocktail/';

const FAV_COCKTAILS = 'http://localhost:4500/drinks/';

export function getAll() {
    return axios.get(COCKTAILS_API);
}
export function getAllFav() {
    return axios.get(FAV_COCKTAILS);
}
