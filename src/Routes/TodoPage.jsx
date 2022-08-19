import React from 'react';
import { useParams } from 'react-router-dom';

function TodoPage(props) {
	const params = useParams();

	const todos = props.todos;

	const i = todos.filter((item) => item.text === params.id)[0];

	console.log(i.done);

	return (
		<>
			<section className='jumbotron'>
				<div className='container d-flex flex-column align-items-center'>
					<h1 className='jumbotron-heading'>{params.id}</h1>
					<br />
					<button
						type='button'
						className={`btn ${i.done ? 'btn-warning' : 'btn-success'} btn-sm mr-1`}
						onClick={() => props.toggle(i.key)}>
						{i.done ? 'UnDone' : 'Done'}
					</button>
				</div>
			</section>
		</>
	);
}

export default TodoPage;
