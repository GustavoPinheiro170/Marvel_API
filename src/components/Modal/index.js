import React from 'react';
import { UserContext } from '../../UserContext';
import styles from './Modal.module.css';



const Modal = (namePerson) => {
    const data = namePerson.data;
    const {  modal, images,  urls, loading} = React.useContext(UserContext);

    return ( 
        <div className={styles.modalContainer}>
         {modal ? <div className={styles.modal}  > 
         {images ? <img src={`${images.path}.${images.extension}`}  alt={data.name}/> :<div className={styles.loading}>{loading}</div> }
            <h2>{data.name }</h2> 
            <hr></hr>
            <p>{data.description }</p> 
            <div className={styles.buttons}>
           { urls ? <><a href={urls[0].url} target='about_blank'>Details</a>
                      <a href={urls[1].url} target='about_blank'>Wiki</a>    
            </> : null}
            </div>
      
        </div>: null }
    </div>
  )
} 
export default Modal;
