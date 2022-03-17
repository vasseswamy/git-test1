import logo from './logo.svg';
import './App.css';
import { useEffect,useState} from 'react';

 const App = () => {
  const[data,setData] =useState([]);
   useEffect(() =>{
     fetch('https://jsonplaceholder.typicode.com/todos').then(
      res => res.json()
    ).then(json => setData(json))
  },[])
  return (
    <div className="App">
    {data.map(item => <li key={item.id}>{item.title}</li>)}
     </div>
  );
}

export default App;
