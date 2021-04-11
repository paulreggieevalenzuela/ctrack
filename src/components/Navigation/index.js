import React, { useContext } from 'react';

// Context
import AppContext from '../../context';

import './styles.css';

const Navigation = () => {
    const [cData, setContext] = useContext(AppContext);

    const _handleSearch = e => {
        const value = e.target.value;
        const filteredData = cData?.listData?.filter(item => {
            return (
                item.name.search(value) !== -1 ||
                item.email.search(value) !== -1
            )
        });

        setContext({
            ...cData,
            filteredData: value === '' ? cData.listData : filteredData,
            searchTerm: value
        })
    }
    
    return (
        <nav className="nav">
            <h3>Company Members</h3>
            <div className="nav__search">
                <input
                    type="text"
                    placeholder="Search here..."
                    onChange={_handleSearch}
                />
            </div>
            
        </nav>
    )
}

export default Navigation;