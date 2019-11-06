<template>
    <div class="patron">
        <div class="header">
            <div class="canvas-wrapper">

            </div>
            <h1>{{ patron.name }}</h1>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        patron () {
            return this.$store.getters.patron(this.$route.params.name)
        }
    },
    mounted () {

    }
}
</script>
<style lang="scss" scoped>
    div.patron {
        
    }
</style>