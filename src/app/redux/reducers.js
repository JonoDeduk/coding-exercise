import {
  FETCH_REPO_INFO_BY_ID_UNSUCESSFUL,
  FETCH_SEARCH_DATA_UNSUCCESSFUL,
  SET_SEARCH_RESULTS,
  SET_SELECTED_RESULT
} from './actionTypes';

const initialState = {
  searchResults: [],
  selectedOption: {},
  searchError: false,
  searchErrorEncountered: false,
  fetchErrorEncountered: false,
  errorResponseCode: '404'
};

const searchCustomerReducers = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case SET_SEARCH_RESULTS: {
      return {
        ...state,
        searchResults: action.payload.items,
        searchErrorEncountered: false,
        errorResponseCode: ''
      };
    }
    case SET_SELECTED_RESULT: {
      return {
        ...state,
        selectedOption: action.payload
      };
    }
    case FETCH_SEARCH_DATA_UNSUCCESSFUL: {
      return {
        ...state,
        searchErrorEncountered: true,
        errorResponseCode: action.payload
      };
    }
    case FETCH_REPO_INFO_BY_ID_UNSUCESSFUL: {
      return {
        ...state,
        fetchErrorEncountered: true,
        errorResponseCode: action.payload
      };
    }
    default:
      return state;
  }
};

export default searchCustomerReducers;
