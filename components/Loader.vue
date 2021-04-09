<template>
  <div class="loader-container">
    <div class="main-wrapper">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="grid">
            <div v-for="index in 6" :key="index" class="card">
              <div class="image" />
              <div class="bars">
                <div class="bar bar1 loading" />
                <div class="bar bar2 loading" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    const loaders = document.getElementsByClassName('card')
    loaders[1].classList.add('cardA')
    loaders[2].classList.add('cardA')
  }
}
</script>

<style></style>
