<template>
  <div>
    <Loader v-if="isLoading" />
    <div class="main-wrapper">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="error-image">
            <img src="../assets/images/empty-photo.png" alt="emptyState">
            <div class="d-flex flex-column align-items-center">
              <div class="cursor-pointer" @click="refreshPage">
                <IconErrorRedirect />
              </div>
              Make something awesome
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconErrorRedirect from './Icons/IconErrorRedirect'
export default {
  components: {
    IconErrorRedirect
  },
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    refreshPage () {
      this.isLoading = true
      this.$emit('refresh-page')
    }
  }
}
</script>
