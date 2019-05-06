<template>
    <div class="row main-header">
        <div class="col">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style lang="scss" scoped>
    .main-header {
        margin-top: 30px;
    }
</style>
