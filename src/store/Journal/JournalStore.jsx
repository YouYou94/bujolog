import { legacy_createStore as createStore } from 'redux';
import { journalReducer } from './JournalModules';

const JournalStore = createStore(journalReducer);

export default JournalStore;
