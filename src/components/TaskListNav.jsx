import React from 'react';

function TaskListNav(props) {
	return (
		<nav className='col-6 mb-3'>
			<div className='nav nav-tabs' id='nav-tab' role='tablist'>
				<a
					className={`nav-item nav-link font-weight-bold ${!props.stateDone ? 'active' : ''}`}
					id='nav-home-tab'
					onClick={() => props.setDone(false)}>
					undone
					<span className='badge badge-secondary'>{props.todos.filter((i) => !i.done).length}</span>
				</a>
				<a
					className={`nav-item nav-link font-weight-bold ${props.stateDone ? 'active' : ''}`}
					id='nav-profile-tab'
					onClick={() => props.setDone(true)}>
					done
					<span className='badge badge-success'>{props.todos.filter((i) => i.done).length}</span>
				</a>
			</div>
		</nav>
	);
}

export default TaskListNav;
