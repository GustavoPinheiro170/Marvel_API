import React from 'react';
import { UserContext } from '../../UserContext';
import Pagination from '../Pagination';
import styles from './CardPerson.module.css';



const CardPerson = ({data}) =>  {

    const {  searchingFor, term, loading, handleModal } = React.useContext(UserContext);

    return ( 

    <div className={styles.container}>
     <div className={styles.App} >
        {data ? data.filter(searchingFor(term)).map((element) => {
            return (
                <div  onClick={(e) => handleModal(e)}   className={styles.cardPerson} key={element.id}>
                <img src={`${element.thumbnail.path}.${element.thumbnail.extension}`} alt={element.name}/>
                <h2 >{element.name} </h2>
                <span className={styles.Line}></span>
                <p>{element.description}</p>
                {}        
                </div> 

             );}) : <div className={styles.loading}>{loading}</div> }
 
        </div>
        <Pagination />
     </div>
      
  )}

export default CardPerson;