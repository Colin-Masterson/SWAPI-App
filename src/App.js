import { useState, useEffect } from 'react';
import Table from './Components/DataTable';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = 'https://swapi.dev/api/people/';

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
    }, []);

    return (
        <div className='App'>
            <Table data={data} />
        </div>
    );
}

export default App;
