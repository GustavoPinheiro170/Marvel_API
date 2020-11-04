import React from 'react';
import { UserContext } from './UserContext';
import CardPerson from './components/CardPerson/Index.js';
import Filters from './components/Filters';
import Modal from './components/Modal';



function App() {

 const {data, namePerson, term, dataModal , handleModal} = React.useContext(UserContext);

// Define qual FETCH será realizado de acordo com o term
  function dataAPI(){
    if(term === '' ||  term.length < 3 || term === null){
      return data;
    }else {
      return namePerson
    }
  }
function ModalFilter(){ if(dataModal !== null) return dataModal; else return null}

  return (
    <>
    <div className='container' >
        <Filters />
        <CardPerson data={dataAPI()} onClick={handleModal} />
    </div>
        <Modal data={ModalFilter()} />
    </>
  );
}

export default App;
