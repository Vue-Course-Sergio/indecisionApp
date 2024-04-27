import { mount } from '@vue/test-utils';
import MessageBox from '@/components/chat/MessageBox.vue';

describe('<MessageBox/>', () => {
  const wrapper = mount(MessageBox);
  test('renders input and button elements correctly', () => {
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('emit sendMessage event when button is clicked with message value', async () => {
    const message = 'Hola mundo';

    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('emit sendMessage event when keypress.enter is triggered with message value', async () => {
    const message = 'Hola mundo';
    const input = wrapper.find('input');

    await input.setValue(message);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('emit nothing when keypress.enter is triggered with message empty', async () => {
    const input = wrapper.find('input');
    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click');
    expect(!wrapper.emitted('sendMessage')).toBe(false);
  });
});
