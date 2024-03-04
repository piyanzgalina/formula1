import { Link, useParams } from "react-router-dom";
import { useRacesResults } from "../../hooks/useRacesResults";
import { ErrorPage } from "../ErrorPage";
import { Loader, ResultsTable } from '../../components';
import './RaceResults.scss';


export function RaceResults() {
    const { selectedYear, selectedCircuit } = useParams();

    const {
        data: raceResult,
        isError: raceResultsError,
        error,
        isLoading: raceResultsLoading
    } = useRacesResults(
        { selectedYear,
        selectedCircuit }
    );

    if (raceResultsLoading) {
        return  <Loader /> 
    }

    if (raceResultsError) {
        return <ErrorPage error={error}/>
    }

    return (
        <main className="container">
            <Link
                className="link"
                to='/search'
            >
                Return to search
            </Link>

            <ResultsTable results={ raceResult } />
        </main>
    )
}
