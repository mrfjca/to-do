import React, { useState } from 'react';
import Task from './Task';
import TaskListNav from './TaskListNav';

function TaskList(props) {
	const [stateDone, setDone] = useState(false);

	const filterTodos = props.todos.filter((i) => i.done === stateDone);

	return (
		<>
			<div className='todosList'>
				<div className='container'>
					<div className='d-flex flex-column align-items-center '>
						<TaskListNav stateDone={stateDone} setDone={setDone} todos={props.todos} />

						{filterTodos.length === 0 ? (
							<p className='font-weight-bold'>There isn't any Todos !</p>
						) : (
							filterTodos.map((i) => (
								<Task
									item={i}
									key={i.key}
									delete={props.delete}
									toggle={props.toggle}
									edit={props.edit}
								/>
							))
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default TaskList;
