import { Link } from "react-router-dom";
import './ErrorPage.scss';

export function ErrorPage({ error }) {

    console.log(error)
    
    return(
        <main className="container error-page">
            <Link className="link" to='/search'>Return to a search</Link>
            <p>
                Looks like the page you tried access doesn't exist yet :(
            </p>
        </main>
    )
}