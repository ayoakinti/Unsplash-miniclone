<template>
  <figure id="photo" @mouseenter="toggleOverlay('show')" @mouseleave="toggleOverlay('hide')">
    <img :src="photo.urls.full" alt="photo">
    <div :class="[{ 'show': overlayShow }, 'overlay']" />
    <figcaption :class="{ 'show': overlayShow }">
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
      action === 'show' ? this.overlayShow = true : this.overlayShow = false
    }
  }
}
</script>

<style></style>
