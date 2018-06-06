import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';	


class App extends Component{
	constructor(){
		super()
		this.state ={
				robots:[],
				searchfield:''		
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=> {return response.json();})
		.then(users=>{
			this.setState({robots:users})
		});
	}
	onSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})
		
		
	}
render(){
	const {robots,searchfield} = this.state;
	const filterRobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})

	return !robots.length ? <h1>Loading</h1>:
		(
		<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
					<ErrorBoundry>
					<Cardlist robots={filterRobots}/>
					</ErrorBoundry>
					</Scroll>
				</div>
				);
		
	}
}

export default App;