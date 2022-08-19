import React, { lazy, useState, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import Head from './components/Head';

const Home = lazy(() => import('./Routes/Home'));
const About = lazy(() => import('./Routes/About'));
const Rules = lazy(() => import('./Routes/Rules'));
const Address = lazy(() => import('./Routes/Address'));
const Phone = lazy(() => import('./Routes/Phone'));
const NotFound = lazy(() => import('./Routes/NotFound'));
const TodoPage = lazy(() => import('./Routes/TodoPage'));

function App() {
	const [stateTodos, setTodos] = useState([]);

	const add = (text) => {
		setTodos([...stateTodos, { key: Date.now(), done: false, text }]);
	};

	const deletee = (key) => setTodos(stateTodos.filter((i) => i.key !== key));

	const toggle = (key) => {
		const i = stateTodos.find((i) => i.key === key);
		i.done = !i.done;
		const f = stateTodos.filter((i) => i.key !== key);
		setTodos([...f, i]);
	};

	const edit = (key, text) => {
		const i = stateTodos.find((i) => i.key === key);
		i.text = text;
		const f = stateTodos.filter((i) => i.key !== key);
		setTodos([...f, i]);
	};

	return (
		<>
			<Head />

			<Routes>
				<Route
					path='/'
					element={
						<Suspense fallback={<h2>Loading ...</h2>}>
							<Home add={add} todos={stateTodos} delete={deletee} toggle={toggle} edit={edit} />
						</Suspense>
					}
				/>
				<Route
					path='/about'
					element={
						<Suspense fallback={<h2>Loading ...</h2>}>
							<About />
						</Suspense>
					}>
					<Route
						path='address'
						element={
							<Suspense fallback={<h2>Loading ...</h2>}>
								<Address />
							</Suspense>
						}
					/>
					<Route
						path='phone'
						element={
							<Suspense fallback={<h2>Loading ...</h2>}>
								<Phone />
							</Suspense>
						}
					/>
				</Route>
				<Route
					path='/rules'
					element={
						<Suspense fallback={<h2>Loading ...</h2>}>
							<Rules />
						</Suspense>
					}
				/>
				<Route
					path='/todo/:id'
					element={
						<Suspense fallback={<h2>Loading ...</h2>}>
							<TodoPage todos={stateTodos} toggle={toggle} />
						</Suspense>
					}
				/>
				<Route
					path='*'
					element={
						<Suspense fallback={<h2>Loading ...</h2>}>
							<NotFound />
						</Suspense>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
