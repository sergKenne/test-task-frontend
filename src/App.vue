<template>
  <div>
    <Header />
    <main class="main">
      <div class="container">
        <div class="main__content">
          <LeftBlock/>
          <RightBlock/>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import LeftBlock from './components/LeftBlock.vue';
import RightBlock from './components/RightBlock.vue';


</script>

<style lang="scss" scoped>

</style>