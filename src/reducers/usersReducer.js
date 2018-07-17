import { FETCH_USERS } from '../actions/types';


export default (state=[], actions) => {
    switch(actions.type) {
        case FETCH_USERS:
        return actions.payload || false;
        default:
        return state;
    }
}