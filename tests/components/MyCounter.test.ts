import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter/>', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('render the counter value correctly', () => {
    const value = 5;

    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    expect(counterLabel.text()).toContain(`Counter: ${value}`);
    expect(squareLabel.text()).toContain(`Square: ${value * value}`);
  });
});
