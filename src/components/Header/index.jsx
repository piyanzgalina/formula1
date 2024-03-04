import { Link } from "react-router-dom";
import './Header.scss';

export const Header = () => {
    return (
        <header className='container header'>
            <Link
                to='/'
            >
                <img
                    src='images/F1logo.svg'
                    srcSet='images/F1.png'
                    className="logo"
                    alt="F1 logo"
                />
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
                <img
                    src='images/github.png'
                    className="github"
                    alt="GitHub logo"
                />
            </Link>
        </header>
    )
}