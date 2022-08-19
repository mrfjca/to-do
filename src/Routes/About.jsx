import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function About() {
	return (
		<>
			<section className='jumbotron'>
				<div className='container d-flex flex-column align-items-center'>
					<h1 className='jumbotron-heading'>About Us</h1>
					<br />
					<br />
					<p className='lead text-muted'>
						To see our phone, click on "Phone" & To see our address, click on "Address"
					</p>

					<div style={{ display: 'flex' }}>
						<NavLink style={{ paddingRight: '20px', fontWeight: 'bold' }} to='/about/phone'>
							Phone
						</NavLink>

						<NavLink className='font-weight-bold' to='/about/address'>
							Address
						</NavLink>
					</div>
					<br />
					<br />
					<Outlet />
				</div>
			</section>
		</>
	);
}

export default About;
