import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../counter/counter';

describe("<Counter />", () => {
  it('is rendered at application start', () => {
    let app = shallow(<Counter />);
    expect(app.find('.downClicker').exists()).toBe(true);
    expect(app.find('.upClicker').exists()).toBe(true);
    expect(app.find('.counter').exists()).toBe(true);
  });

  it('subtracts 1 when clicked', () => {
    const app = mount(<Counter />);
    const downClicker = app.find('.downClicker');
    downClicker.simulate('click');
    expect(app.state('count')).toEqual(-1);
  })

  it('adds 1 when clicked', () => {
    const app = mount(<Counter />);
    const upClicker = app.find('.upClicker');
    upClicker.simulate('click');
    expect(app.state('count')).toEqual(1);
  })

  it('snapshot will be rendered', () => {
    const count = renderer
      .create(<Counter />)
      .toJSON();
    expect(count).toMatchSnapshot();
  });
});