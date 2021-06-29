import React from 'react';
import { Result, Button } from 'antd';
import { paths } from '@constants/paths.js';
import { withRouter } from 'react-router-dom';

export const RouteNotFoundPage = withRouter(() => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, something must be wrong with the url."
    extra={<Button href={paths.pathToSearchPage} type="primary">Back To Search</Button>}
  />
));

export default RouteNotFoundPage;
