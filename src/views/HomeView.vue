<template>
    <div class="wapper">
        <nav>
            <router-link class="container-1" to="/D">
                Data Structure & Algorithm
            </router-link>
            <router-link class="container-2" to="/C">
                C Programming
            </router-link>
            <router-link class="container-3" to="/java">
                <!-- Java Programming -->
            </router-link>
            <router-link class="container-4" to="/about">
                About
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "HomeView",
};
</script>

<style scoped>
.wapper {
    display: grid;
    justify-content: center;
    height: 100%;
}

nav {
    display: grid;
    padding: 30px;
    gap: 4px;
    grid-template-columns: 1fr 1fr;
}

nav a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 2rem;
    color: #2c3e50;
    height: 15rem;
    width: 30rem;
    /* border: 1px solid black; */
    border-radius: 10px;
    text-decoration: none;
    /* filter: grayscale(0.5); */
    transform: scale(0.9);
    transition: 150ms;
}

nav a:hover {
    transform: scale(1);
    /* filter: grayscale(0); */
    border: 5px solid rgb(93, 119, 22);
}

.container-1 {
    background-color: #fcb07e;
    color: #000;
}

.container-2 {
    background-color: #53b5ff;
    color: black;
}
.container-3 {
    background-image: url("@/assets/javalogo.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: hsl(0, 0%, 95%);
    /* filter: grayscale(0.75); */
    color: white;
}
.container-4 {
    background-color: #a8bbd8;
    color: #000;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
