import { combineReducers } from 'redux';
import CovidReducer from './CovidReducer';
import SectionReducer from './SectionReducer';
import SignedInReducer from './SignedInReducer';
import SearchReducer from './SearchReducer';


export default combineReducers({
  covid: CovidReducer,
  section: SectionReducer,
  auth: SignedInReducer,
  search: SearchReducer
})