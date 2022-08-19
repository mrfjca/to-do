import React from 'react';

function NotFound() {
	return (
		<>
			<section className='jumbotron'>
				<div className='container d-flex flex-column align-items-center'>
					<h1 className='jumbotron-heading'>404</h1>
					<br />
					<br />
					<p className='lead text-muted' style={{ fontWeight: '400' }}>
						Not Found
					</p>
				</div>
			</section>
		</>
	);
}

export default NotFound;
