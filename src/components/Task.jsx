import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditForm from './EditForm';

function Task(props) {
	const [stEdit, setEdit] = useState(false);

	let i = props.item;

	let edHan = (text) => {
		props.edit(i.key, text);
		setEdit(false);
	};

	return (
		<>
			{!stEdit ? (
				<div className='col-6 mb-2'>
					<div className='d-flex justify-content-between align-items-center border rounded p-3'>
						<div>
							<Link to={`/todo/${i.text}`}>{i.text}</Link>
						</div>
						<div>
							<button
								type='button'
								className={`btn ${i.done ? 'btn-warning' : 'btn-success'} btn-sm mr-1`}
								onClick={() => props.toggle(i.key)}>
								{i.done ? 'UnDone' : 'Done'}
							</button>
							<button type='button' className='btn btn-info btn-sm' onClick={() => setEdit(true)}>
								Edit
							</button>
							<button
								type='button'
								className='btn btn-danger btn-sm ml-1'
								onClick={() => props.delete(i.key)}>
								Delete
							</button>
						</div>
					</div>
				</div>
			) : (
				<EditForm text={i.text} edit={edHan} />
			)}
		</>
	);
}

export default Task;
