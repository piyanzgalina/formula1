import { Loader } from "../../components/Loader";
import { useSchedule } from "../../hooks/useSchedule";
import { Link } from "react-router-dom";
import './Schedule.scss';

export const Schedule = () => {
    const { data, error, isLoading, isError } = useSchedule();

    if (isLoading) {
        return <Loader />
    }

    const { Races, season } = data;
    
    return (
        <main className="main container">
            <h1 className="title">Schedule for Formula 1 {season} season</h1>

            { Races?.map((race) => 
                (
                    <article
                        className="raceWrapper"
                        key={race.round}>
                        <span 
                            className="round"
                        >
                            round {race.round}
                        </span>
                        <h2
                            className="raceName"
                        >
                            {race.raceName}
                        </h2>
                        <div>
                            <Link
                                target='_black'
                                to={race.Circuit.url}
                                className="circuitName"
                            >
                                {race.Circuit.circuitName}
                            </Link>
                        </div>
                        <div>
                            <span>{race.Circuit.Location.country}</span>
                            <span className="date">{race.date}</span>
                        </div>
                    </article>
                )
            )}
        </main>
    )
}