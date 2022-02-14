import axios from 'axios';
import { getAll, getAllFav } from './api';

jest.mock('axios');

describe('Given API functions', () => {
    describe('when getAll is called', () => {
        beforeEach(() => {
            axios.get.mockResolvedValue({ data: 'Mocked result' });
        });
        test('data is fetched', async () => {
            expect(await getAll()).toEqual({ data: 'Mocked result' });
            expect(axios.get).toHaveBeenCalledWith(
                'www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Cocktail/'
            );
        });
    });
    describe('when getAllFav is called', () => {
        beforeEach(() => {
            axios.get.mockResolvedValue({ data: 'Mocked result fav' });
        });
        test('data is fetched', async () => {
            expect(await getAllFav()).toEqual({ data: 'Mocked result fav' });
            expect(axios.get).toHaveBeenCalledWith(
                'http://localhost:4500/drinks/'
            );
        });
    });
});
