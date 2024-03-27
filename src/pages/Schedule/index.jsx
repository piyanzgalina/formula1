import { Loader } from "../../components/Loader";
import { useSchedule } from "../../hooks/useSchedule";
import { Link } from "react-router-dom";
import { transformDate } from '../../utils/transformDate';
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

                        <div></div>
                        <h2
                            className="raceName"
                        >
                            {race.raceName}
                        </h2>
                        <div className="raceInfo">
                            <Link
                                target='_black'
                                to={race.Circuit.url}
                                className="circuitName"
                            >
                                {race.Circuit.circuitName}
                            </Link>
                            <span>{race.Circuit.Location.country}</span>
                        </div>
                        <div>
                            <span>FP1</span>
                            <div>
                                <time dateTime={race.FirstPractice.date}>{ transformDate(race.FirstPractice.date, race.FirstPractice.time) }</time>
                            </div>
                        </div>
                        <div>
                            <span>FP2</span>
                            <div>
                                <time dateTime={race.SecondPractice.date}>{ transformDate(race.SecondPractice.date, race.SecondPractice.time) }</time>
                            </div>
                        </div>
                        { race.ThirdPractice && 
                            <div>
                                <span>FP3</span>
                                <div>
                                    <time dateTime={race.ThirdPractice.date}>{ transformDate(race.ThirdPractice.date, race.ThirdPractice.time) }</time>
                                </div>
                            </div>
                        }
                        <div>
                            <span>Qualifying</span>
                            <div>
                                <time dateTime={race.Qualifying.date}>{ transformDate(race.Qualifying.date, race.Qualifying.time) }</time>
                            </div> 
                        </div>
                        { race.Sprint && 
                            <div>
                                <span>Sprint</span>
                                <div>
                                    <time dateTime={race.Sprint}>{ transformDate(race.Sprint.date, race.Sprint.time) }</time>
                                </div>
                            </div>
                        }
                        <div>
                            <span>Race</span>
                            <div>
                                <time className="date">{ transformDate(race.date, race.time) }</time>
                            </div> 
                        </div>
                    </article>
                )
            )}
        </main>
    )
}