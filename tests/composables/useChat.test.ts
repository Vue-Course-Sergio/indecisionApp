import { useChat } from '@/composables/useChat';

describe('useChat', () => {
  test('add message correctly when onMessage is called', async () => {
    const text = 'Hola Mundo';
    const { messages, onNewMessage } = useChat();

    await onNewMessage(text);

    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  test('do nothing if message text is empty', async () => {
    const { messages, onNewMessage } = useChat();
    await onNewMessage('');
    expect(messages.value.length).toBe(0);
  });

  test('gets her response correctly when message ends with ?', async () => {
    const { messages, onNewMessage } = useChat();
    const text = '¿Quieres café?';
    await onNewMessage(text);
    await new Promise((r) => setTimeout(r, 2000));

    const [myMessage, herMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(herMessage).toEqual({
      id: expect.any(Number),
      itsMine: false,
      message: expect.any(String),
      image: expect.any(String),
    });
    expect(myMessage).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  test('mock response - fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.gif' };
    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));

    const { messages, onNewMessage } = useChat();
    const text = '¿Quieres café?';
    await onNewMessage(text);
    await new Promise((r) => setTimeout(r, 1600));

    const [_, herMessage] = messages.value;

    expect(herMessage).toEqual({
      id: expect.any(Number),
      itsMine: false,
      message: mockResponse.answer,
      image: mockResponse.image,
    });
  });
});
