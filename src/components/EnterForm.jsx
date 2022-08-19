import React, { useState } from 'react';

function EnterForm(props) {
	let [stateInput, setInput] = useState('');

	let inputHandler = (b) => setInput(b.target.value);

	let formHandler = (e) => {
		e.preventDefault();
		stateInput.length > 1 ? props.add(stateInput) : alert('please enter correct title');
		setInput('');
	};

	return (
		<>
			<section className='jumbotron'>
				<div className='container d-flex flex-column align-items-center'>
					<h1 className='jumbotron-heading'>Welcome!</h1>
					<p className='lead text-muted' style={{ fontWeight: '400' }}>
						To get started, add some items to your list:
					</p>
					<form className='form-inline' onSubmit={formHandler}>
						<div className='form-group'>
							<input
								type='text'
								className='form-control mx-sm-3'
								placeholder='I want to do ...'
								value={stateInput}
								onChange={inputHandler}
							/>
							<button className='btn btn-primary' type='submit'>
								Add
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default EnterForm;
