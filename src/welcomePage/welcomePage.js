import {NavLink} from "react-router-dom";
import s from './welcomePage.module.css';

let WelcomePage = props => {
    return (
        <div className={s.appWrapper}>
            <h3>Color Picker</h3>
            <NavLink to='color-picker'>Click to pick a color</NavLink>
        </div>
    )
}
export default WelcomePage;