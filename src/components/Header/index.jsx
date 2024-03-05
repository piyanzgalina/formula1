import { Link } from "react-router-dom";
import './Header.scss';
import { Logo } from '../Logo';
import { GitHubLogo } from '../GitHubLogo';

export const Header = () => {
    return (
        <header className='container header'>
            <Link
                to='/'
            >
                <Logo />
            </Link>
            <Link 
                className="link"
                to='/schedule'
            >
                Schedule
            </Link>
            <Link
                className="link"
                to='/search'
            >
                Search
            </Link>
            <Link
                target="_blanc"
                className="link"
                to='https://github.com/piyanzgalina/formula1'
            >
                <GitHubLogo />
            </Link>
        </header>
    )
}