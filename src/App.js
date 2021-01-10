import React from 'react';
import Search from './Search'
import CardList from './CardList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchterm: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then (users => this.setState({robots: users}))
  }
  
  searchChange = (e) => {
    this.setState({searchterm: e.target.value});
    console.log(this.searchterm);
  };
    
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchterm.toLowerCase())
    })
    return (
      <>
        <h1>Robofriends</h1>
        <Search searchChange={this.searchChange}/>
        <CardList robots={filteredRobots}/>
        <p className="footer">Project was created as part of ZTM Course by <a href="https://github.com/CodeWithBorys/">CodeWithBorys</a></p>
      </>
    );
  }
}

export default App;
