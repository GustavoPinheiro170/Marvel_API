import React from 'react';
import { UserContext } from './UserContext';
import CardPerson from './components/CardPerson/Index.js';
import Filters from './components/Filters';



function App() {

 const {data, namePerson, term} = React.useContext(UserContext);

// Define qual FETCH será realizado de acordo com o term
  function dataAPI(){
    if(term === '' || term === null){
      return data;
    }else {
      return namePerson
    }
  }
  
  return (
    <div className='container'>
        <Filters />
        <CardPerson data={dataAPI()} />
    </div>
  );
}

export default App;
