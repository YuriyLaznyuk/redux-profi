import React, {useEffect} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useAction} from '../../hooks/useAction';

const UserList = () => {
	// const dispatch = useDispatch();
	// const state = useSelector<RootState>((state) => state.users);
	const {fetchUsers} = useAction();
	const {users, loading, error} = useTypedSelector((state) => state.users);
	console.log(users, loading, error);
	useEffect(() => {
		// dispatch(fetchUsers());
		fetchUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	if (loading) {
		return <h1>...loading</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	);
};

export default UserList;
