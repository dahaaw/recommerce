import satu from '../../assets/amwa1.jpeg';
import dua from '../../assets/amwa2.jpeg';

import './styles.scss'

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item"
                    style={{ backgroundImage: `url(${satu})` }}
                >
                    <a href="#">Shope Satu</a>
                </div>
                <div
                    className="item"
                    style={{ backgroundImage: `url(${dua})` }}
                >
                    <a href="#">Shope Dua</a>
                </div>
            </div>

        </div>
    )
};

export default Directory;