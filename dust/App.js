import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'



class App extends Component{
	constructor(){
		super()
		this.state= {
	robots: [],
	searchfield:''
	}
}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json();
		})
		.then(users=>{
			this.setState({robots:users});
		})
		
	}
	onsearchchange=(event)=>{

		this.setState({searchfield:event.target.value})
		
		
	}

	render(){

		const filterRoborts = this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots.length===0){
			return<h1>Loading...</h1>
		} 
		else{
		return(
		<div className = 'tc'>
			<h1 className='f1'>Robofriends</h1>
			<SearchBox searchchange = {this.onsearchchange}/>
			<Scroll>
			<Cardlist robots={filterRoborts}/>
			</Scroll>
		</div>
		);
		}
	}
	
}
export default App;