import React from 'react';
import styles from './Header.module.css';
import Logo from '../Assets/images/MarvelLogo.svg';
const Header = () =>  {

    return (
        <div className={styles.Header}>
              <img src={Logo}  alt='marvel'/>
        </div>
    );

}
export default Header;