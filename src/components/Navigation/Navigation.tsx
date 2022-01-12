import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
	const {pathname} = useLocation();
	const getActive = (pathname: string, to: string): string =>
		pathname === to ? 'navigation__link active' : 'navigation__link';

	return (
		<nav className='navigation'>
			<Link className={getActive(pathname, '/')} to='/'>
				Home
			</Link>
			<Link className={getActive(pathname, '/todo')} to='/todo'>
				Todo
			</Link>
			<Link className={getActive(pathname, '/user')} to='/user'>
				User
			</Link>
			<Link className={getActive(pathname, '/photos')} to='/photos'>
				Photos
			</Link>
		</nav>
	);
};

export default Navigation;
