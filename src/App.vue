<template>
    <div id="app">
        app
        <router-view/>

        <Bar />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Bar from './pages/index.vue'
export default Vue.extend({
    data() {
        return {
            
        }
    },
    mounted() {
        let c: number = 4
        c = 6
    },
    components: {
        Bar
    }
})
</script>
