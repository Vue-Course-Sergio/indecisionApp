<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.value);

    return {
      counter,
      squareCounter,
    };
  },
});
</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded mr-2 hover:bg-blue-700;
}
</style>
