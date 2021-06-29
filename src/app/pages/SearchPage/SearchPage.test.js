import React from 'react';

import { shallow } from 'enzyme';
import { SearchPage } from './SearchPage';
import '@setupTest';

const getShallowRenderedComponent = (props) => shallow(<SearchPage props={props} />);

describe('SearchPage', () => {
  describe('Structure', () => {
    it('should exist', () => {
      const wrapper = getShallowRenderedComponent();

      expect(wrapper).toBeDefined();
    });
  });
  describe('Behavior', () => {});
});
