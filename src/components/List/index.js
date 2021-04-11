import React from 'react';

import './styles.css';
import AppContext from '../../context';

const List = () => {
    const [cData, setContext] = React.useContext(AppContext);

    React.useEffect(() => {
        setContext({ ...cData, isLoading: true });
        fetch('https://jsonplaceholder.typicode.com/users ')
        .then(response => response.json())
        .then(data => {
            setContext({
                ...cData,
                listData: data,
                filteredData: data,
                isLoading: false,
            });
        });
    }, []);

    return (
        <ul className="list">
            <li className="list__header">
                <div className="list__header-item">Name</div>
                <div className="list__header-item">Email</div>
                <div className="list__header-item">Company</div>
            </li>
            {cData?.filteredData?.map(item => 
                <li className="list__item" key={item.id}>
                    <div className="list__item-content">{item?.name}</div>
                    <div className="list__item-content">{item?.email}</div>
                    <div className="list__item-content">{item?.company?.name}</div>
                </li> 
            )}
        </ul>
    )
}

export default List;