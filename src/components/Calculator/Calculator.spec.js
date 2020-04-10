import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe('Calculator', function () {
    let wrapper;

    beforeEach(function () {
        wrapper = shallow(<Calculator />);        
    });
    
    it('renders a div', function () {
        expect(wrapper.find('div').length).toBe(1);
    });

    it('renders a <Display />', function () {
        expect(wrapper.containsMatchingElement(<Display displayedValue={wrapper.instance().state.displayedValue} />)).toBe(true);
    });

    it('renders a <Keypad />', function () {
        expect(wrapper.containsMatchingElement(<Keypad />)).toBe(true);
    });
});