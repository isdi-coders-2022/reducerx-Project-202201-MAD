import React, { useContext } from 'react';
import { renderHook } from '@testing-library/react-hooks';
// eslint-disable-next-line import/named
import { Context, store, contextValue } from '../../context/context';

function ContextProvider({ children }) {
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

const wrapper = ({ children }) => (
    <ContextProvider value={contextValue}>{children}</ContextProvider>
);

let result = [];

const mockSet = jest.fn().mockImplementation(() => {
    result = [...store.cocktails];

    return result;
});

const mockUseContext = jest.fn().mockImplementation(() => ({
    store: [],
    set: mockSet,
}));

React.useContext = mockUseContext;

describe('use', () => {
    it('should add', () => {
        result = renderHook(() => useContext(), { wrapper });

        expect(mockSet).toBeDefined();
    });
});
