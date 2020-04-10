import React from 'react';
import { shallow, mount } from 'enzyme';
import Keypad from './Keypad';

describe('Keypad', function () {
  var wrapper;

  beforeEach(function () {
    wrapper = shallow(<Keypad />);
  });

  it('renders a div', function () {
    expect(wrapper.find('div.keypad-container').length).toBe(1);
  });
});

describe('clicking Keypad', function () {
  it('notify button clicking by calling onClickKey callback', function () {
    const wrapper = mount(<Keypad />);
    const onClickKey = jest.fn();
    const keyID = '1';
    const key = wrapper.findWhere(key => key.key() === keyID);

    wrapper.setProps({
      onClickKey
    });
    key.simulate('click');
    expect(onClickKey).toHaveBeenCalledTimes(1);
  });
})