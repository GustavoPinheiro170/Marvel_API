import React from 'react';
import {FETCH_API, FETCH_API_FILTER} from './Api';
import Loading from './components/Helper/Loading';


export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    // Estados gerais da aplicação
    const [data, setData] = React.useState(null);
    const [pages, setPages] = React.useState([]);
    const [term, setTerm] = React.useState('');
    const [total, setTotal] = React.useState(12);
    const [currentPage, setCurrentPage] = React.useState(0);
 
    const [showAll, setShowAll] = React.useState(12);
    const [loading, setLoading] = React.useState('');
    const [select , setSelect] = React.useState('');
    const [namePerson , setNamePerson] = React.useState('');
    const [order , setOrder] = React.useState('name');
    const lastPage = pages[pages.length -1];


    // Faz o fetch com ordenação limite e offset para ordenação e paginação
    async function fetchAPI(limited, offset) {
       try{
        setLoading(Loading)
        const { url } = FETCH_API(limited, offset, order);
        const response = await fetch(url);
        const json = await response.json()
        setData(json.data.results) 
        setTotal(json.data.total);
        if(namePerson === '') return setTotal(json.data.total);
        setLoading('')
            }catch (error){
                return null;
            }
        } 
        


    // Faz o GET com o nome do personagem para realizar o filtro
     async function filterPerson(name){
        try{
        if(term === '')
         setLoading(Loading)
         const { url } =  FETCH_API_FILTER(name);
         const response = await fetch(url);
         const json = await response.json();
         setNamePerson(json.data.results);  
         setLoading('')   
             }
             catch (error) {
                 setLoading(Loading)
                 return null
             }
     }  
  
    //  Retorna o filtro pelo Input - necessário digitar o nome completo neste caso
     function searchingFor(term) {
        return (param) => {
             return param.name.toLowerCase().includes(term.toLowerCase()) || !term
            }
        }
    
 
                
    //Executa a API Data
    //  Realiza a contagem de pagians para realizar a paginação;
    React.useEffect(() =>  {
          const arrayPages = [];    
          for(let i = 0; i < 50; i++){
               arrayPages.push(i)
          }

          if(term === '')
          fetchAPI(currentPage ? currentPage : 0, showAll ? showAll : 12); 
          setPages(arrayPages);
    },[currentPage , showAll, term , order ])
  

return (
    <UserContext.Provider value={{
        term,
        pages,
        data,
        total,
        showAll,
        lastPage,
        loading,
        currentPage,
        select,
        namePerson,
        order,
        setOrder,
        setNamePerson,
        setSelect,
        setCurrentPage,
        setShowAll,
        setData,
        setTerm,
        fetchAPI,
        setLoading,
        searchingFor,
        filterPerson,


    }}>{children}</UserContext.Provider>
    );
}