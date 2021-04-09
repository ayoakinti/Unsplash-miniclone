<template>
  <figure
    id="grid-photo"
    @mouseenter="toggleOverlay('show')"
    @mouseleave="toggleOverlay('hide')"
    @click="openImageModal(photo)"
  >
    <img :src="photo.urls.regular" alt="photo" width="100%">
    <div :class="[{ show: overlayShow }, 'overlay']" />
    <figcaption :class="{ show: overlayShow }">
      <h4 class="m-0">
        {{ photo.user.first_name }} {{ photo.user.last_name }}
      </h4>
      <small class="m-0">
        {{ photo.user.location }}
      </small>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      overlayShow: false
    }
  },
  methods: {
    toggleOverlay (action) {
      action === 'show'
        ? (this.overlayShow = true)
        : (this.overlayShow = false)
    },
    openImageModal (photo) {
      this.$emit('open-image-modal', photo)
    }
  }
}
</script>

<style></style>
