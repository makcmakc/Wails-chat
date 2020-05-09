<template lang="html">
  <div
    v-if="isSupported"
    class="vue-audio-recorder"
    :class="{
      'active': isRecording,
      'paused': isPaused
    }"
    @mousedown="startRecording"
    @mouseleave="stopRecording"
    @mouseup="stopRecording"
    @touchstart="startRecording"
    @touchend="stopRecording"
    @touchcancel="stopRecording"
  >
    <i class="material-icons">keyboard_voice</i>

  </div>
</template>

<script>
import ElementMixin from '../mixins/ElementMixin'
const supportedTypes = [
  'audio/aac',
  'audio/ogg',
  'audio/wav',
  'audio/webm'
]
export default {
  name: 'VueRecordAudio',
  mixins: [ElementMixin],
  props: {
    mimeType: {
      type: String,
      default: 'audio/webm',
      validator: v => supportedTypes.includes(v)
    }
  },
  data () {
    return {
      constraints: {
        audio: true,
        video: false
      }
    }
  }
}
</script>
