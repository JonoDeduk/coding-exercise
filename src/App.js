import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { SearchPage } from '@pages/SearchPage/SearchPage';
import { DetailsPage } from '@pages/DetailsPage/DetailsPage';
import { paths } from '@constants/paths.js';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { RouteNotFoundPage } from '@pages/RouteNotFoundPage/RouteNotFoundPage';

const { Header, Footer, Content } = Layout;

export default function App() {
  return (
    <Layout
      style={{
        margin: 0,
        minHeight: '100vh'
      }}
    >
      <Header />
      <Content>
        <Router>
          <Switch>
            <Route path={paths.pathToResultsPage}>
              <DetailsPage />
            </Route>
            <Route exact path={paths.pathToSearchPage}>
              <SearchPage />
            </Route>
            <Route>
              <RouteNotFoundPage />
            </Route>
          </Switch>
        </Router>
      </Content>
      <Footer>
        <p>© 2021 Jon Deduk</p>
      </Footer>
    </Layout>
  );
}
