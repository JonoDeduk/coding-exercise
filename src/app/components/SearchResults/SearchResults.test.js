import React from 'react';

import { shallow } from 'enzyme';
// eslint-disable-next-line import/no-named-as-default
import { SearchResults } from './SearchResults';
import '@setupTest';

const getShallowRenderedComponent = (props) => shallow(<SearchResults props={props} />);

describe('SearchResults', () => {
  describe('Structure', () => {
    it('should exist', () => {
      const wrapper = getShallowRenderedComponent();

      expect(wrapper).toBeDefined();
    });
  });
  describe('Behavior', () => {});
});
