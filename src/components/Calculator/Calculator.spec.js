import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('Calculator', function () {
    let wrapper;

    beforeEach(function () {
        wrapper = shallow(<Calculator />);        
    });
    
    it('renders a div', function () {
        expect(wrapper.find('div').length).toBe(1);
    });
});