import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from 'antd';
import { paths } from '@constants/paths.js';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedResult } from '../../redux/actions';

export const SearchResults = (props) => {
  const {
    searchResults
  } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <List
      bordered
      dataSource={searchResults}
      renderItem={(item) => {
        const {
          name,
          id
        } = item;

        return (
          <List.Item>
            <Button
              size="large"
              type="text"
              style={{ width: '100%' }}
              onClick={() => {
                dispatch(setSelectedResult(item));
                history.push(paths.linkToResultsPage(id));
              }}
            >
              {name}
            </Button>
          </List.Item>
        );
      }}
    />
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.instanceOf(Array).isRequired
};

export default SearchResults;
