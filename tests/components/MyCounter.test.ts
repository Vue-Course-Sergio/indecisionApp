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

  test('increments the counter value when +1 buttin is clicked', async () => {
    const value = 5;

    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    const btnIncrements = wrapper.find('button');
    await btnIncrements.trigger('click');

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
    expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });

  test('decrements the counter value when -1 button is clicked twice', async () => {
    const value = 5;

    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    const [_, btnDecrements] = wrapper.findAll('button');
    await btnDecrements.trigger('click');
    await btnDecrements.trigger('click');

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    expect(counterLabel.text()).toContain(`Counter: ${value - 2}`);
    expect(squareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
  });
});
