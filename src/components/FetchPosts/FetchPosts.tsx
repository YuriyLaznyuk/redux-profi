import React, {useEffect, useState} from 'react';
import './fetchPosts.scss';

type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};
const FetchPosts = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [error, setError] = useState<Error | string>('');
	// useEffect(() => {
	// 	const controller = new AbortController();

	// 	const fetchPosts = async () => {
	// 		const response = await fetch(
	// 			'https://jsonplaceholder.typicode.com/postsoooo',
	// 			{signal: controller.signal},
	// 		);
	// 		const json = await response.json();
	// 		setPosts(json);
	// 		try {
	// 		} catch (e) {
	// 			if ((e as Error).name === 'AbortError') {
	// 				console.log('successfully aborted');
	// 			} else {
	// 				setError((e as Error).message);
	// 				console.log((e as Error).message);
	// 			}
	// 		}
	// 	};
	// 	fetchPosts();
	// 	return () => controller.abort();
	// }, []);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		fetch('https://jsonplaceholder.typicode.com/posts', {signal: signal})
			.then((res) => res.json())
			.then((res) => setPosts(res))
			.catch((err) => {
				if (err.name === 'AbortError') {
					console.log('successfully aborted');
				} else {
					setError(err);
					console.log(err.message);
				}
			});
		return () => controller.abort();
	}, []);

	return (
		<div className='fetchPosts'>
			<h1>fetch post</h1>
			<p>{error}</p>
			{posts.length > 0
				? posts.map((post) => (
						<div className='fetchPosts__post' key={post.id}>
							<div className='fetchPosts__post-item'>
								<strong>userId :</strong> {post.userId}
							</div>
							<div className='fetchPosts__post-item'>
								<strong>title:</strong> {post.title}
							</div>
							<div className='fetchPosts__post-item'>
								<strong>body:</strong> {post.body}
							</div>
						</div>
				  ))
				: ''}
		</div>
	);
};

export default FetchPosts;
