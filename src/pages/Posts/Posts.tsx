import React, {useState} from 'react';
import './posts.scss';
import FetchPosts from '../../components/FetchPosts/FetchPosts';

const Posts = () => {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<div className='posts'>
			<h1>page posts</h1>
			<button onClick={() => setVisible(!visible)}>show posts</button>
			{visible && <FetchPosts />}
		</div>
	);
};

export default Posts;
