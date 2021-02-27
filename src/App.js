import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const heros  =['salman', 'amir', 'sarukh', 'sirdath' ,'shakib']
  const products=[
    {name:'photoshop',price:'$99.99'},
    {name:'photoshop',price:'$99.99'},
    {name:'photoshop',price:'$99.99'},
    {name:'photoshop',price:'$99.99'}
  ]
  

  return (
    <div className="App">
      <header className="App-header">
       

        <p>my first paragraph</p>
        <Counter></Counter>
        <Users></Users>
        <ul>

          {
            heros.map(hero=><li>{hero}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product=><Product product={product}></Product>)
        }
        
        <Person></Person>
        <Person></Person>
        
      </header>
    </div>
  );
}

function Counter() {
  const[count,setCount]=useState(0);
  const handleIncrease=()=>{ setCount(count+1);}
  const handleDecrease=()=>{ setCount(count-1);}
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users :{users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const ProductStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price}=props.product;
  return(
    <div style={ProductStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy now</button>

    </div>
  )
}

function Person(props) {
  return (
    <div style={{border:'2px solid red',margin:'10px'}}>
      <h1>{props.name}</h1>
      <h3>hero of the year</h3>
    </div>
  )
}

export default App;
