import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
 import {robots} from './robots' ;
import ErrorBoundary from './ErrorBoundary'
import Scroll from './Scroll'
import './App.css'

class App extends React.Component {
	constructor(){
		super() 
		this.state ={
			robots:[],
			searchfield : '' 
		}
	}
onSearchChange = (event) => {
	this.setState({searchfield : event.target.value})
	
	// console.log(filteredRobots);
}

componentDidMount () {
	fetch('http://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then (data => this.setState({robots:data}))
	.catch(console.log);
}
	
	render(){
		const filteredRobots = this.state.robots.filter(robot => {
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
		return (
		<div className='tc'>
		 <h1 className='f2 head'>RoboFriendsss</h1>
		 <SearchBox searchchange={this.onSearchChange} />
		 <Scroll>
		 <ErrorBoundary>
		<CardList robots={filteredRobots}/>
		</ErrorBoundary>
		</Scroll>
		</div>

		);
	}
	
}

export default App;
