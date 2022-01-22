import React from 'react';
import './app.scss';
import {Route, Routes} from 'react-router-dom';
import TodoList from './components/pages/ToDoList/TodoList';
import UserList from './components/pages/Userlist/UserList';
import Navigation from './components/Navigation/Navigation';
import Photos from './components/pages/Photos/Photos';
import Home from './components/pages/Home/Home';
import Modal from './components/pages/Modal/Modal';

const App: React.FC = () => {
	return (
		<div className='wrapper'>
			<Navigation />
			<div className='wrapper__routes'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/todo' element={<TodoList />} />
					<Route path='/user' element={<UserList />} />
					<Route path='/photos' element={<Photos />} />
					<Route path='/modal' element={<Modal />} />
					<Route path='*' element={<h1>Page not found</h1>} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
