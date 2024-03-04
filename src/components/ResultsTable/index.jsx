import './ResultsTable.scss';

export function ResultsTable({ results }) {
    const {
        Circuit,
        Results,
        date,
        raceName,
        round, 
        season,
        url
    } = results;

    return (
        <section className="section">

            <div className="raceInfo">
                <h1 className="raceName">{season} {raceName}</h1>
                <div>
                    <p className="circuitName">{Circuit.circuitName}</p>
                    <p className="date">{date}</p>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                      <th>Position</th>
                      <th>Name</th>
                      <th>Team</th>
                      <th>Time</th>
                      <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {Results?.map((driver) => {
                        return (
                            <tr key={driver.Driver.permanentNumber}>
                                <td>{driver.positionText}</td>
                                <td>{driver.Driver.givenName} {driver.Driver.familyName}</td>
                                <td>{driver.Constructor.name}</td>
                                <td>{driver?.Time?.time ? driver.Time.time : driver.status }</td>
                                <td>{driver.points}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <a
                className="link"
                href={url}
                target="_blank"
            >
                For more information visit wiki 
            </a>
        </section> 
    )
}