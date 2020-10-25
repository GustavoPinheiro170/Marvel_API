import React from 'react';
import { UserContext } from '../../UserContext';
import styles from './Modal.module.css';



const Modal = (namePerson) => {
    const data = namePerson.data;
    const {  modal, images,  setModal, urls } = React.useContext(UserContext);

    return ( 
        <div >
         {modal ? <div className={styles.modal} onClick={setModal(true)}> 
         {images ? <img src={`${images.path}.${images.extension}`}  alt={data.name}/> : <p>Carregando</p>}
            <h2>{data.name }</h2> 
            <p>{data.description }</p> 
           { urls ? <><a href={urls[0].url} target='about_blank'>Details</a>
                      <a href={urls[1].url} target='about_blank'>Wiki</a>    
            </> : null}
      
        </div>: null }
    </div>
  )
} 
export default Modal;
