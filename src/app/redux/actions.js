import {
  FETCH_REPO_INFO_BY_ID_UNSUCESSFUL,
  FETCH_SEARCH_DATA_UNSUCCESSFUL,
  SET_SEARCH_RESULTS,
  SET_SELECTED_RESULT
} from './actionTypes';
import { formatQueryString } from '../utils/formatters';

export const setSearchResults = (data) => ({
  type: SET_SEARCH_RESULTS,
  payload: data
});

export const setSelectedResult = (data) => ({
  type: SET_SELECTED_RESULT,
  payload: data
});

export const getSearchDataFailed = (responseCode) => ({
  type: FETCH_SEARCH_DATA_UNSUCCESSFUL,
  payload: responseCode
});

export const fetchRepoFailed = (responseCode) => ({
  type: FETCH_REPO_INFO_BY_ID_UNSUCESSFUL,
  payload: responseCode
});

// eslint-disable-next-line import/prefer-default-export
export function searchGithubRepositories(searchString, shouldSortBy, shouldFilterBy, onSuccess) {
  const formattedSearchString = formatQueryString(searchString);
  const formattedFilterString = shouldFilterBy.length > 0 ? shouldFilterBy.join('+language:') : '';
  const url = `https://api.github.com/search/repositories?q=${formattedSearchString}${shouldSortBy}${formattedFilterString}`;
  return (dispatch) => fetch(url)
    .then((response) => {
      if (!response.ok) {
        return dispatch(fetchRepoFailed(response.status));
      }
      return response.json();
    })
    .then((data) => {
      onSuccess();
      dispatch(setSearchResults(data));
    });
}

export function fetchRepositoryInfoById(id) {
  return (dispatch) => fetch(`https://api.github.com/repositories/${id}`)
    .then((response) => {
      if (!response.ok) {
        return dispatch(fetchRepoFailed(response.status));
      }
      return response.json();
    })
    .then((data) => dispatch(setSelectedResult(data)));
}

export const gitHubDataActions = {
  fetchRepositoryInfoById
};
