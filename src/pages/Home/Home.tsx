import React, {useState} from 'react';
import MyModal from '../../components/MyModal/MyModal';
import SimpleForm from '../../components/SimpleForm/SimpleForm';

const Home = () => {
	const [vision, setVision] = useState(false);
	return (
		<div>
			{vision && (
				<MyModal show={() => setVision(false)}>
					<SimpleForm show={() => setVision(false)} />
				</MyModal>
			)}
			<button onClick={() => setVision(true)}>click modal</button>
			<h1>Redux Prof</h1>
		</div>
	);
};

export default Home;
