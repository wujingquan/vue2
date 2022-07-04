<template>
  <div>
    <button :class="[disabled && 'disabled']" :disabled="disabled" class="btn" @click="send">
      <template v-if="!disabled">
        Send
      </template>
      <template v-else>
        {{ countdown }}
      </template>
    </button>
  </div>
</template>

<script setup>
import useCountdown from '@/hooks/useCountdown'

const { disabled, countdown, execCountdown } = useCountdown(10)

const send = () => {
  console.log('disabled.value', disabled.value)
  if (!disabled.value) {
    execCountdown()
  }
}

</script>

<style>
.btn {
  width: 100px;
  height: 45px;
  background: green;
  color: #fff;
}
.btn.disabled {
  background: #ccc;
  color: #000;
}
</style>