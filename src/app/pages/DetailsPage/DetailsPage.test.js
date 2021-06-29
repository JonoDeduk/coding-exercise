import React from 'react';

import { shallow } from 'enzyme';
import { DetailsPage } from './DetailsPage';
import '@setupTest';

const getShallowRenderedComponent = (props) => shallow(<DetailsPage props={props} />);

describe('ResultsPage', () => {
  describe('Structure', () => {
    it('should exist', () => {
      const wrapper = getShallowRenderedComponent();

      expect(wrapper).toBeDefined();
    });
  });
  describe('Behavior', () => {});
});
