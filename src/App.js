import React,{Component} from 'react';
import './App.css';
import {CardList} from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';


class App extends Component {
  constructor(){
    super();
    this.state ={
      monster: [],
      searchField: ''
    
  };
}
  

// click(e) {
//   this.setState({
//     string : "Hello Gupta"
//   })
// };
 componentDidMount() {
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json())
   .then(users => this.setState({monster : users}))
 }

render() {

    const { monster, searchField}=this.state;
    
    const filtermonster = monster.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return(
      <div className="App">
     
      <h1 className="h1">Monster</h1>
      <SearchBox placeholder="Search Monster" 
      handlechange={e =>this.setState({searchField: e.target.value})}/>
      <CardList monsters={filtermonster}></CardList>
       
     
  </div>
    )
  }
  
}

export default App;
