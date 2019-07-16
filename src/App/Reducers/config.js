import initialState from '../Stores/config';
import Immutable from 'seamless-immutable';
import { createReducer } from 'Helpers';

export default configReducer = createReducer(state = initialState, {
    SET_LANG        :   (state, action) => Immutable({ ...state, lang: action.data })
});