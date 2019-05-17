import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE

} from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const initialState = {
  smurfs: [],
  isLoading: false,
  isAdding: false,
  error:null
  // Array characters, Boolean fetching, null error.
};


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: null

      };
      case FETCH_DATA_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: null,
        
      };
      case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    
      case ADD_SMURF_START:
      return {
        ...state,
        isAdding: true,
        error: null

      };
      case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isAdding: false,
        error: null,
        
      };
      case ADD_SMURF_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: action.payload
      };


    default:
      return state;
  }
};


export default rootReducer