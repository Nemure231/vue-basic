<script>


</script>

<template>
    <div class="wrap-link">
    <router-link to="/dec-render">Decrender</router-link>
    <router-link to="/props">Props</router-link>
    <router-link to="/method">Method</router-link>
    <router-link to="/model">Model</router-link>
    <router-link to="/conditional">Conditional</router-link>
    <router-link to="/looping">Looping</router-link>
    <router-link to="/lifecycle">Lifecycle</router-link>
    <router-link to="/computed">Computed</router-link>
    <router-link to="/watcher">Watcher</router-link>
    <router-link to="/dynamic-class">Dynamic Class</router-link>
    <router-link to="/refs-emits">Refs/Emit</router-link>
    <router-link to="/slot">Slot</router-link>
    <router-link to="/global-component">Global Component</router-link>
    <router-link to="/provide-inject">Provide Inject</router-link>
    <router-link to="/keep-alive">Keep Alive</router-link>
    <router-link to="/mixins">Mixins</router-link>
    <router-link to="/teleport">Teleport</router-link>
  </div>
</template>


<style scoped>

.wrap-link {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

a {
  text-decoration-line: none;
  font-weight: 600;
  color: cornflowerblue;
}

.wrap-link > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}

.wrap-link > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-top: calc(1rem * var(--tw-space-x-reverse));
  margin-bottom: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
</style>