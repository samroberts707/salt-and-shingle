<template>
    <div class="patrons-wrapper">
        <h1>Patrons</h1>
        <div class="patrons">
            <PatronItem v-for='item in characters' v-bind:key="item.name" v-bind:character="item" />
        </div>
    </div>
</template>
<script>
import PatronItem from './Patron-Item'
export default {
    components: {
        PatronItem
    },
    computed: {
        characters () {
            return this.$store.getters.characters
        }
    }
}
</script>
<style lang="scss" scoped>
    div.patrons-wrapper {
        position: relative;
        padding: 10%;
        background-color: var(--beige);
        h1 {
            color: #4a649e;
            font-size: 10vw;
            text-align: center;
            margin-bottom: 100px;
        }
        div.patrons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 75px;
            row-gap: 75px;
            @media screen and (max-width: 768px) {
                grid-template-columns: 1fr;
            }
        }
    }
</style>
