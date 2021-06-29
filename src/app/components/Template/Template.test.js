import React from 'react';

import { shallow } from 'enzyme';
// eslint-disable-next-line import/no-named-as-default
import { Template } from './Template';
import '@setupTest';

const getShallowRenderedComponent = (props) => shallow(<Template props={props} />);

describe('Template', () => {
  describe('Structure', () => {
    it('should exist', () => {
      const wrapper = getShallowRenderedComponent();

      expect(wrapper).toBeDefined();
    });
  });
  describe('Behavior', () => {});
});
