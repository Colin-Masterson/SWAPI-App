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
                const res1 = await fetch(url);
                const json1 = await res1.json();

                const res2 = await fetch(json1.next);
                const json2 = await res2.json();

                const res3 = await fetch(json2.next);
                const json3 = await res3.json();

                const res4 = await fetch(json3.next);
                const json4 = await res4.json();

                const res5 = await fetch(json4.next);
                const json5 = await res5.json();

                const res6 = await fetch(json5.next);
                const json6 = await res6.json();

                const res7 = await fetch(json6.next);
                const json7 = await res7.json();

                const res8 = await fetch(json7.next);
                const json8 = await res8.json();

                const res9 = await fetch(json8.next);
                const json9 = await res9.json();

                const all = [
                    ...json1.results,
                    ...json2.results,
                    ...json3.results,
                    ...json4.results,
                    ...json5.results,
                    ...json6.results,
                    ...json6.results,
                    ...json7.results,
                    ...json8.results,
                    ...json9.results,
                ];

                setData(all);

                console.log(all);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();
    }, [search]);

    return (
        <div className='App'>
            <Search search={handleSearch} />
            <Table data={data} search={search} />
        </div>
    );
}

export default App;
