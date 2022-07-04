import { ref } from 'vue'

// function _setLocalDelay(delay, id) {
//   const _id = id || ''

//   localStorage.setItem('delay_' + location.host + location.pathname + _id, delay)
//   localStorage.setItem("time_" + location.host + location.pathname + _id, new Date().getTime())
// }

// function _getLocalDelay (id) {
//   const _id = id || ''
//   const LocalDelay = {}

//   LocalDelay.delay = localStorage.getItem('delay_' + location.host + location.pathname + _id)
//   LocalDelay.time = localStorage.getItem('time_' + location.host + location.pathname + _id)
//   return LocalDelay
// }

const disabled = ref(false)
export default function (count = 60) {
  const countdown= ref(0)

  const execCountdown = () => {
    console.log('reset')
    disabled.value = true

    countdown.value = count

    const fn = () => {
      setTimeout(() => {
        countdown.value--
        if (countdown.value > 1) {
          fn()  
        } else {
          disabled.value = false
        }
      }, 1000);
    }

    fn()
  }

  return {
    disabled,
    countdown,
    execCountdown
  }
}