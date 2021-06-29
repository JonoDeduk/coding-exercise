import React, { useState } from 'react';
import {
  Input, Card, Result, Select, Row, Col
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { searchGithubRepositories } from '@redux/actions';
import { withRouter } from 'react-router-dom';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import { sortBy } from '../../constants/sortBy';
import { filterBy } from '../../constants/filterBy';

const { Search } = Input;
const { Option } = Select;

export const SearchPage = withRouter(() => {
  const [isSearching, setIsSearching] = useState(false);
  const [selectedSortValue, setSelectedSortValue] = useState('');
  const [selectedFilterValues, setSelectedFilterValues] = useState('');
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  // eslint-disable-next-line max-len
  const {
    searchResults,
    searchErrorEncountered,
    errorResponseCode
  } = useSelector((state) => state.searchCustomerReducers);

  return (
    <>
      <Search
        onChange={(e) => setSearchString(e.target.value)}
        onSearch={() => {
          setIsSearching(true);
          dispatch(searchGithubRepositories(searchString,
            selectedSortValue,
            selectedFilterValues,
            () => setIsSearching(false)));
        }}
        placeholder="input search text"
        enterButton="Search"
        size="large"
        loading={isSearching}
      />
      <Row>
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          xl={6}
        >
          <Select
            defaultValue={selectedSortValue}
            style={{ width: '100%' }}
            size="large"
            onChange={(selectedValue) => setSelectedSortValue(selectedValue)}
          >
            {sortBy
              .map((option) => (
                <Option
                  size="large"
                  key={option.label}
                  value={option.queryParam}
                >
                  {option.label}
                </Option>
              ))}
          </Select>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={18}
          lg={18}
          xl={18}
        >
          <Select
            defaultValue={selectedFilterValues}
            size="large"
            style={{ width: '100%' }}
            mode="multiple"
            onChange={(selectedValue) => setSelectedFilterValues(selectedValue)}
          >
            {filterBy
              .map((option) => (
                <Option
                  key={option.label}
                  value={option.queryParam}
                >
                  {option.label}
                </Option>
              ))}
          </Select>
        </Col>
      </Row>

      <Card>
        { searchErrorEncountered && (
        <Result
          status="error"
          title="Error Fetching Data"
          subTitle={`data fetch was unsuccessful due to a response code ${errorResponseCode}`}
        />
        )}
        { !searchErrorEncountered && (
          <SearchResults searchResults={searchResults} />
        )}
      </Card>
    </>
  );
});

export default { SearchPage };
