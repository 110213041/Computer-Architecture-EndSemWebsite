<template>
    <h3>404</h3>
    <div class="wrapper">
        <a @click="$router.go(-1)">back</a>
        <router-link to="/">home</router-link>
    </div>
</template>

<script>
export default {
    name: "404Page",
};
</script>

<style scoped>
a {
    color: rgb(69, 69, 213);
    text-decoration: underline;
    font-size: 2rem;
    cursor: pointer;
    user-select: none;
}

.wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 auto;
}
</style>
