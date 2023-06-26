<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            project: null
        }
    },
    created() {
        //usando il parametro nella rotta, cerco il rispettivo ID
        this.project = store.projects.find((p) => p.id == this.$route.params.id);
    },
}
</script>

<template lang="">
    <div>
        <p>{{this.project.id}}</p>
        <p>{{this.project.description}}</p>
        <img :src="this.project.image_project" alt="">
    </div>
</template>

<style lang="scss" scoped></style>