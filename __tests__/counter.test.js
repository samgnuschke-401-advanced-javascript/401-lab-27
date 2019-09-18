import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../src/components/counter/counter';

describe("<Counter />", () => {
  it('is rendered at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('.downClicker').exists()).toBe(true);
    expect(app.find('.upClicker').exists()).toBe(true);
  });
});