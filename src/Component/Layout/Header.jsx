import { Fragment } from 'react';
import Image from '../images/logo192.png';
import classes from './Header.module.css'
const Header = ()=>{
    return(
        <Fragment>
        <div className={classes.container}>
            <img className={classes.img} src={Image} alt=''/>
            <span className={classes.span}> ContactOpedia</span>
        </div>
        </Fragment>
    )}
export default Header