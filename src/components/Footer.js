import React from 'react';
import styles from './Footer.module.css';
const Footer = () =>  {

    return (
        <div className={styles.Footer}>
         <hr className={styles.spanRed} />

         <div className={styles.containerFooter} >
             Desenvolvido afins de testes de conhecimentos em ReactJs
         </div>
        </div>
    );

}
export default Footer;