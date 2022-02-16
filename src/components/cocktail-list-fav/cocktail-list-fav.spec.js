import React, { useContext } from 'react';
import { renderHook } from '@testing-library/react-hooks';
// eslint-disable-next-line import/named
import { Context, store } from '../../context/context';

function ContextProvider({ children }) {
    return <Context.Provider>{children}</Context.Provider>;
}

const wrapper = ({ children }) => <ContextProvider>{children}</ContextProvider>;

let result = [];

const mockSet = jest.fn().mockImplementation(() => {
    result = [...store.favorites];

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
