import React from 'react';
import styles from './Filters.module.css';
import { UserContext } from '../../UserContext';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import Loading from '../Helper/Loading';

library.add(faFilter);

const Filters  = () =>  {
    const {term, setTerm ,setOrder,  select, setSelect, setLoading, filterPerson} = React.useContext(UserContext);
    

    function OrderBy(value){
        setSelect(value);
        if(select ===  'Z - A') {
          setLoading(Loading)
          return setOrder('name');
        }else if (select !== 'Z - A') {
          setLoading(Loading)
          return setOrder('-name');
        }else {
          return null;
        }
      }
      
     function handelChange(event){
      setTerm(event.target.value);
      filterPerson(event.target.value);
      }

      return (
      <div className={styles.containerInput}>
      <h1>Character</h1>
      <input 
      className={styles.InputSearch }
      type='text' 
      name='search'
      placeholder='Characters'
      value={term}
      onChange={handelChange}

      
      />
      
      <FontAwesomeIcon
        icon={faFilter}
        style={{color:'#ed1d24', margin:'0px 10px', fontSize: '20px' }}
        />
          <select value={select} onChange={(e) => OrderBy(e.target.value)  } >
          <option>A - Z</option>
          <option >Z - A</option>
        </select>
      </div>
    );

}

export default Filters;