import React from 'react';
import FontAwesome from 'react-fontawesome';

import './styles.css';
import AppContext from '../../context';

const List = () => {
    const [cData, setContext] = React.useContext(AppContext);

    React.useEffect(() => {
        setContext({ ...cData, isLoading: true });
        fetch('https://jsonplaceholder.typicode.com/users')
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
        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Company</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {cData.isLoading ? (
                    <tr>
                        <td colspan="4">
                            <div className="spinner">
                                <FontAwesome 
                                    name='spinner' 
                                    size='2x' 
                                    spin 
                                /> 
                            </div>    
                        </td>
                    </tr>
                )
                :
                cData?.filteredData.length ? (
                    cData?.filteredData?.map(item =>
                        <tr>
                            <td data-label="name">{item?.name}</td>
                            <td data-label="email">{item?.email}</td>
                            <td data-label="company">{item?.company?.name}</td>
                            <td data-label="actions">
                                <a href={`tel:+${item.phone}`}>
                                    <FontAwesome name='phone' size='2x' />
                                </a>
                                <a href={`mailto:${item.email}`}>
                                    <FontAwesome name='envelope-square' size='2x' />
                                </a>
                            </td>
                        </tr>
                    )
                ) 
                : (
                    <tr>
                        <td colspan="4">No available data...</td>
                    </tr>
                )}
                
            </tbody>
        </table>
    )
}

export default List;