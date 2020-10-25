import React from 'react';
import { UserContext } from './UserContext';
import CardPerson from './components/CardPerson/Index.js';
import Filters from './components/Filters';
import Modal from './components/Modal';



function App() {

 const {data, namePerson, term, dataModal, setModal, modal} = React.useContext(UserContext);

// Define qual FETCH será realizado de acordo com o term
  function dataAPI(){
    if(term === '' ||  term.length < 3 || term === null){
      return data;
    }else {
      return namePerson
    }
  }
function ModalFilter(){ if(dataModal !== null) return dataModal; else return null}

function closeModal(){ if (modal === true) return setModal(false); }


  return (
    <div className='container' onClick={closeModal}>
        <Filters />
        <CardPerson data={dataAPI()} />
        <Modal data={ModalFilter()} />
    </div>
  );
}

export default App;
