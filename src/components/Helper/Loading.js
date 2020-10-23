import React from 'react';
import gifLoading from '../../Assets/gifs/loading.gif';
import styles from './Loading.module.css';
const Loading = () =>  {

return (
    <div className={styles.Loading}>
        <img src={gifLoading} alt='loading' />
    </div>
);

}

export default Loading;
