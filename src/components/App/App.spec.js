import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App.jsx', function () {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('renders a div', function () {
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.hasClass('app-container')).toBe(true);
    });
});
