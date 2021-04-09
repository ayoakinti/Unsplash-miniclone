<template>
  <div :class="[{ show: imageModal }, 'modal']">
    <div class="modal-mask" @click="closeImageModal" />

    <div id="modal" class="modal-content">
      <ModalPhotoFigure :key="photo.id" :photo="photo" />

      <div class="modal-close-icon" @click="closeImageModal">
        <IconClose />
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from './Icons/IconClose'
export default {
  components: {
    IconClose
  },
  props: {
    imageModal: {
      type: Boolean,
      required: true
    },
    photo: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeImageModal () {
      this.$emit('close-image-modal')
    }
  }
}
</script>
