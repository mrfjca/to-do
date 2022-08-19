import React, { useState } from 'react';

function EditForm(props) {
	const [stText, setText] = useState(props.text);
	console.log(stText);

	const inHan = (e) => setText(e.target.value);

	return (
		<>
			<div className='col-6 mb-2'>
				<div className='d-flex justify-content-between align-items-center border rounded p-3'>
					<div>
						<input value={stText} onChange={inHan} className='form-control' />
					</div>
					<div>
						<button
							type='button'
							className='btn btn-info btn-sm'
							onClick={() => props.edit(stText)}>
							Save
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default EditForm;
