<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble :itsMine="true" :message="'Hola mundo'" />
      <ChatBubble
        :itsMine="false"
        :message="'yes'"
        image="https://yesno.wtf/assets/yes/3-422e51268d64d78241720a7de52fe121.gif"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatBubble from './ChatBubble.vue';
</script>
