import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef, goalRef } from '../firebase';

class CompleteGoalList extends Component {
	componentDidMount(){
		completeGoalRef.on('value', snap =>{
			let completeGoals = [];
			snap.forEach(completeGoal => {
				const { email, title } = completeGoal.val();
				completeGoals.push({email, title})
			})
			this.props.setCompleted(completeGoals);
		})
	}

	clearCompleted(){
		completeGoalRef.set([]);
	}

	render(){
		const { email, title} = this.props.completeGoals
		return(
			<div>
			{
				this.props.completeGoals.map((completeGoal, index) =>{
					const { title, email } = completeGoal;
					return (
						<div key={index}>
							<strong>{title}</strong> completed by <em>{email}</em>
						</div>
					)
				})
			}

			<button
				className="btn btn-primary"
				onClick={() => this.clearCompleted()}
			>
				Clear All
			</button>

			</div>
		)
	}
}


function mapsStateToProps(state){
	const { completeGoals } = state;
	return {
		completeGoals
	}
}

export default connect(mapsStateToProps, { setCompleted })(CompleteGoalList);