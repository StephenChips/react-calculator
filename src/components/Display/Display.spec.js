import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display', function () {
    let wrapper;

    beforeEach(function () {
        wrapper = shallow(<Display />);        
    });
    
    it('renders a div', function () {
        expect(wrapper.find('div').length).toBe(1);
    });
});