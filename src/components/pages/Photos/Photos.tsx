import React, {useEffect} from 'react';
import {useAction} from '../../../hooks/useAction';
import './photos.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducers';

const Photos = () => {
	const {fetchPhoto, photoPage, statePage} = useAction();
	const {photo, page, state, total} = useSelector(
		(state: RootState) => state.photo,
	);
	const scrollHandler = (e: any) => {
		//общая высота страницы с учетом скрола
		// console.log('scrollHeight', e.target.documentElement.scrollHeight);
		//текущее положение скрола от верха страницы
		// console.log('scrollTop', e.target.documentElement.scrollTop);
		// высота видимой области страницы
		// console.log('innerHeight', window.innerHeight);

		const scrollHeight = e.target.documentElement.scrollHeight;

		const scrollTop = e.target.documentElement.scrollTop;
		const innerHeight = window.innerHeight;
		if (scrollHeight - (scrollTop + innerHeight) < 100) {
			// console.log('photo.length', photo.length);
			// console.log('total', total);
			// console.log('scroll<100');
			statePage(true);
		}
	};
	useEffect(() => {
		if (state && page < 15) {
			fetchPhoto(page);
			photoPage();
			statePage(false);
			console.log('effectState ', photo.length, 'total ', total, 'page', page);
		}
	}, [state]);

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
		return function () {
			document.removeEventListener('scroll', scrollHandler);
		};
	}, []);
	return (
		<div className='photos'>
			<h1>Photos</h1>
			<div className='photos__show'>
				{photo.length > 0 ? (
					photo.map((elem) => (
						<div key={elem.id} className='photos__show-photo'>
							<div>
								<strong>{elem.id}. </strong>
								{elem.title}
							</div>
							<div>
								<img src={elem.thumbnailUrl} alt='' />
							</div>
						</div>
					))
				) : (
					<h1>No Photo</h1>
				)}
			</div>
		</div>
	);
};

export default Photos;
