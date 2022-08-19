import React from 'react';

import EnterForm from './../components/EnterForm';
import TaskList from './../components/TaskList';

function Home({ add, todos, delete: deletee, toggle, edit }) {
	return (
		<>
			<EnterForm add={add} />

			<TaskList todos={todos} delete={deletee} toggle={toggle} edit={edit} />
		</>
	);
}

export default Home;
