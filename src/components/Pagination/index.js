import React from 'react';
import styles from './Pagination.module.css';
import { UserContext } from '../../UserContext';
import Loading from '../Helper/Loading';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(faArrowRight , faArrowLeft);

const Pagination = () =>  {
    const {setCurrentPage , setShowAll , showAll, lastPage, setLoading} = React.useContext(UserContext);
    const [count, setCount] = React.useState(1);
        
    function NextPage(){
        setCount(count+1)
        setCurrentPage(count*12)
    }

    function BackPage() {
        if(count > 0 ) {
        setCount(count-1)
        setCurrentPage(count*12)
    }

    else return null
    }
    function ShowMorePerson(){
        setLoading(Loading);
        setShowAll(showAll + 12 )
    }

    return (
        <div className={styles.containerPagination}>
   
                <span className={styles.back} onClick={BackPage}><FontAwesomeIcon icon={faArrowLeft} /> </span>
                <span className={styles.actualyPage}>{count}</span> 
                <span  onClick={() => setCurrentPage(lastPage*12)} className={styles.lastPage}>de {lastPage}</span>       
                <span className={styles.next} onClick={NextPage}> <FontAwesomeIcon icon={faArrowRight} /> </span>
  
  
        <p className={styles.showAll} onClick={ShowMorePerson}>Ver Mais</p>

        </div>

    );
}

export default Pagination;
