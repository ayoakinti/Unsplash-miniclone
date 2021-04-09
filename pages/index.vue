<template>
  <div>
    <ImageModal
      v-if="imageModal"
      :photo="imageInView"
      :image-modal="imageModal"
      @close-image-modal="closeImageModal"
    />
    <Loader v-if="isLoading" />
    <div v-if="photos.length <= 0">
      <ErrorPage />
    </div>
    <div v-else class="main-wrapper">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div id="photos" class="grid">
            <PhotoFigure
              v-for="photo of photos"
              :key="photo.id"
              :photo="photo"
              @open-image-modal="openImageModal(photo)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imageInView: {},
      imageModal: false,
      isLoading: true
    }
  },
  computed: {
    photos () {
      return this.$store.state.photos
    }
  },
  async created () {
    await this.$store.dispatch('getPhotos', {
      query: 'African',
      order_by: 'latest',
      per_page: 8
    })
    this.isLoading = false
  },
  methods: {
    openImageModal (photo) {
      this.imageModal = true
      this.imageInView = photo
    },
    closeImageModal () {
      this.imageModal = false
      this.imageInView = {}
    }
  }
}
</script>
