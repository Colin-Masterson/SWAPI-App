import { useState, useEffect } from 'react';
import Table from './Components/DataTable';
import Search from './Components/Search';

function App() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const url = `https://swapi.dev/api/people/?search=${search}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.results);
                setData(json.results);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();
    }, [search]);

    return (
        <div className='App'>
            <Search setSearch={handleSearch} />
            <Table data={data} search={search} />
        </div>
    );
}

export default App;
