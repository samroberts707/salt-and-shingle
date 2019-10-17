<template>
    <div class="patrons-wrapper">
        <h1>Patrons</h1>
        <div class="patrons">
            <PatronItem />  
        </div>
    </div>
</template>
<script>
import PatronItem from './Patron-Item'
export default {
    components: {
        PatronItem
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
        }
    }
</style>