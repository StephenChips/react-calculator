import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display', function () {
    let wrapper;

    beforeEach(function () {
        wrapper = shallow(<Display displayedValue={0}/>);        
    });
    
    it('renders a div', function () {
        expect(wrapper.find('div.display-container').length).toBe(1);
    });

    it('renders displayed value', function () {
        const displayedValue = 100;
        wrapper.setProps({
            displayedValue
        });
        expect(wrapper.text()).toBe(String(displayedValue));
    })
});