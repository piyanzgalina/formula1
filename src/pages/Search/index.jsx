import { Link } from 'react-router-dom';
import { Input } from '../../components/index.js';
import { yearsOptions } from '../../utils/yearsOptions.js';
import { useCircuitsByYear } from '../../hooks/useCircuitsByYear.js';
import { useState } from 'react';
import { useInvalidButton } from '../../hooks/useInvalidButton.js';
import './Search.scss';

export const Search = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedCircuit, setSelectedCircuit] = useState(null);

    const {
        data: circuits,
        isError: circuitsError,
    } = useCircuitsByYear(
        { selectedYear }
    );

    const {data: message} = useInvalidButton({ selectedYear, selectedCircuit });

    if (circuitsError ) {
        return <span>Ooops! Fetching error...</span>
    }
   
    return (
        <main
            className='container'
        >
            <h1 className='title'>Search by Race </h1>
            <h2 className='description'>Search results by year and circuit</h2>
            <div className='search'>
                <Input
                    id='year'
                    setValue={setSelectedYear}
                    options={yearsOptions}
                />
            
                <Input
                    id='circuit'
                    setValue={setSelectedCircuit}
                    options={circuits}
                />
        
                <button
                    className='button'
                >        
                    <Link className='link' to={message ? '' :
                        `/search/${selectedYear}/${selectedCircuit}/results`
                        }
                    >
                        Search
                    </Link>
                </button>

                {message && (
                    <div
                       className='message'
                    >
                      {message}
                    </div>
                )}
            </div>
        </main>
    )
}