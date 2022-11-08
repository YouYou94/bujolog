import { legacy_createStore as createStore } from 'redux';
import { topBarMenuReducer } from './TopBarMenuModules';

const MenuStore = createStore(topBarMenuReducer);

export default MenuStore;
