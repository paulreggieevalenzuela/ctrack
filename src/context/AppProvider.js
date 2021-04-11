import React, { useState } from 'react';
import AppContext from '../context';

const Provider = ({ children }) => {
    const [data, setData] = useState({
        searchTerm: '',
        listData: [],
        filteredData: [],
        isLoading: false,
    });

    return (
        <AppContext.Provider value={[data, setData]}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;