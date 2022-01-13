<template>
  <div class="home">
    <div class="home__route">
      <router-link
        class="home__route-links"
        :to="{ name: 'questions-content' }"
      >
        Question Content (1)
      </router-link>
      <router-link class="home__route-links" :to="{ name: 'todos-content' }">
        Todos Content (2)
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  &__route{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
