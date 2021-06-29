import React from 'react';

import { shallow } from 'enzyme';
import { RouteNotFoundPage } from './RouteNotFoundPage';
import '@setupTest';

const getShallowRenderedComponent = (props) => shallow(<RouteNotFoundPage props={props} />);

describe('ResultsPage', () => {
  describe('Structure', () => {
    it('should exist', () => {
      const wrapper = getShallowRenderedComponent();

      expect(wrapper).toBeDefined();
    });
  });
  describe('Behavior', () => {});
});
