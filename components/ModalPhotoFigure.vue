<template>
  <figure id="modal-photo">
    <div class="image-container">
      <img :src="photo.urls.raw" alt="photo" width="100%">
    </div>
    <figcaption>
      <h4 class="m-0">
        {{ photo.user.first_name }} {{ photo.user.last_name }}
      </h4>
      <p class="m-0">
        {{ photo.user.location }}
      </p>
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
  }
}
</script>
