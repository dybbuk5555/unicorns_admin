import list from 'src/modules/bundle/list/bundleListReducers';
import form from 'src/modules/bundle/form/bundleFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
