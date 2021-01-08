import './styles.scss';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.png'


const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="arbaint logo" />
                    </Link>
                </div>

                <div className="callToAction">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    )
}

export default Header;