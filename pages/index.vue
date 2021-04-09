<template>
  <div class="main-wrapper">
    <div class="row">
      <div class="col-md-8 mx-auto">
        <div id="photos">
          <PhotoFigure
            v-for="photo of photos"
            :key="photo.id"
            :photo="photo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import api from '@/api'
export default {
  computed: {
    photos () {
      return this.$store.state.mountains
    }
  }
  // created () {
  //   this.$store.dispatch('getMountains')
  // }
  // created () {
  //   api.get('/photos').then((response) => {
  //     this.mountains = response.data
  //     console.log(this.mountains)
  //   }).catch(err => console.log(err.response.data))
  // }
}
</script>
