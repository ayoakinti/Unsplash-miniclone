<template>
  <figure id="modal-photo">
    <div class="image-container">
      <img :src="photo.urls.regular" alt="photo" width="100%">
    </div>
    <figcaption>
      <h4 class="m-0">
        {{ photo.user.first_name }} {{ photo.user.last_name }}
      </h4>
      <p class="m-0">
        {{ photo.user.location }}
      </p>
      <div class="m-0">
        Photo by
        <a
          target="_blank"
          :href="'https://unsplash.com/@'+photo.user.username+'?utm_source=your_app_name&utm_medium=referral'"
        >{{ photo.user.first_name }} {{ photo.user.last_name }}</a>
        on
        <a
          target="_blank"
          href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral"
        >Unsplash</a>
      </div>
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
