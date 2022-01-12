import React from 'react';
import './app.scss';
import {Route, Routes} from 'react-router-dom';
import TodoList from './components/ToDoList/TodoList';
import UserList from './components/Userlist/UserList';
import Navigation from './components/Navigation/Navigation';
import Photos from './components/Photos/Photos';

const App: React.FC = () => {
	return (
		<div className='wrapper'>
			<Navigation />
			<Routes>
				<Route path='/' element={<h1>Redux-profi</h1>} />
				<Route path='/todo' element={<TodoList />} />
				<Route path='/user' element={<UserList />} />
				<Route path='/photos' element={<Photos />} />
				<Route path='*' element={<h1>Page not found</h1>} />
			</Routes>
		</div>
	);
};

export default App;
