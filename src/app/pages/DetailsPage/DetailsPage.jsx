import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { paths } from '@constants/paths.js';

import {
  Descriptions, Card, Avatar, Button, Result
} from 'antd';
import { fetchRepositoryInfoById } from '../../redux/actions';

// eslint-disable-next-line no-unused-vars
export const DetailsPage = withRouter((props) => {
  const {
    match: {
      params: {
        id
      }
    }
  } = props;
  const dispatch = useDispatch();
  const {
    selectedOption,
    fetchErrorEncountered,
    errorResponseCode
  } = useSelector((state) => state.searchCustomerReducers);
  const IsSelectedOptionMissing = Object.entries(selectedOption).length === 0;
  useEffect(() => {
    if (IsSelectedOptionMissing) {
      dispatch(fetchRepositoryInfoById(id));
    }
  }, [id]);

  const {
    homepage,
    description,
    full_name = 'title',
    html_url,
    updated_at,
    owner: {
      avatar_url,
      html_url: user_html_url,
      login
    } = {}
  } = selectedOption;

  if (fetchErrorEncountered) {
    return (
      <Card>
        <Result
          status="error"
          title="Error Fetching Data"
          subTitle={`data fetch was unsuccessful due to a response code ${errorResponseCode}`}
          extra={[
            <Button href={paths.pathToSearchPage} type="primary">Back To Search</Button>
          ]}
        />
      </Card>
    );
  }

  return (
    <Card>
      <Descriptions
        bordered
        title={full_name}
        labelStyle={{
          fontsize: '30px'
        }}
        column={{
          xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1
        }}
      >
        <Descriptions.Item label="Owner">
          <span className="Description__avatar_info">
            <h2>
              <a
                href={user_html_url}
              >
                <Avatar
                  src={avatar_url}
                  size="large"
                >
                  <h2>{login}</h2>
                </Avatar>
              </a>
              {login}
            </h2>
          </span>
        </Descriptions.Item>
        <Descriptions.Item label="Id">{id}</Descriptions.Item>
        <Descriptions.Item label="repository url">
          <a href={html_url} target="_blank" rel="noreferrer">{html_url}</a>
        </Descriptions.Item>
        <Descriptions.Item label="Last updated">{updated_at}</Descriptions.Item>
        {homepage && (
        <Descriptions.Item label="Homepage">
          <a href={homepage} target="_blank" rel="noreferrer">{homepage}</a>
        </Descriptions.Item>
        )}
        {description && <Descriptions.Item label="Description">{description}</Descriptions.Item>}
      </Descriptions>
    </Card>
  );
});

export default DetailsPage;
