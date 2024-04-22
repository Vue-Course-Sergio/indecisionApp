import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const onNewMessage = (text: string) => {
    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true,
    });
  };

  return {
    messages,
    onNewMessage,
  };
};
