import React, {useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
	const {pathname} = useLocation();
	const ref = useRef<any>();
	const getActive = (pathname: string, to: string): string =>
		pathname === to ? 'navigation__link active' : 'navigation__link';

	// useEffect(() => {
	// 	const element = ref.current;
	// 	const scrollHandler = (e: any) => {
	// 		console.log('scroll ', e);
	// 		if (e.clientY > 10) {
	// 			element.style.position = 'fixed';
	// 		}
	// 	};
	// 	document.addEventListener('scroll', scrollHandler);
	// 	return document.removeEventListener('scroll', scrollHandler);
	// }, []);
	return (
		<nav ref={ref} className='navigation'>
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
			<Link className={getActive(pathname, '/modal')} to='/modal'>
				Modal
			</Link>
		</nav>
	);
};

export default Navigation;
