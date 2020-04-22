import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(){
		super()
		this.state ={
			hasError: false
		}
	}

	componentDidCarch(){
		this.setState({hasError:true})
	}
	render(){
		if(this.state.hasError){
			return <h1>Ooooops that is not good</h1>
		}

		return this.props.children
	} 


}

export default ErrorBoundary;