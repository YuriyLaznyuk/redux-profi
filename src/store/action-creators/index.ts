import * as UserActionCreators from './users';
import * as TodoActionCreators from './todo';
import * as PhotoActionCreators from './photo';
export default {
	...UserActionCreators,
	...TodoActionCreators,
	...PhotoActionCreators,
};
