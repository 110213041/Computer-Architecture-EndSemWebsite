<template>
    <div class="toggleBtn" @click="navControl()">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>
    <router-link to="/" class="toggleBtn toggleBtn-2"> </router-link>
    <div id="mySidenav" class="sidenav" style="width: 0">
        <a
            id="crossBtn"
            class="btn"
            style="opacity: 0; transition: 125ms"
            @click="navControl()"
        >
            &times;
        </a>
        <router-link to="/" class="sideNavName">
            {{ routeName }}
        </router-link>
        <div
            class="wrapper"
            v-for="(value, index) in linkData"
            :key="index"
        >
            <input
                type="radio"
                name="nav"
                v-model="selectedCh"
                :value="value.value"
                :id="value.value"
                @click="$emit('chapterChange', value.value)"
            />
            <label :for="value.value">
                <div class="value-text">{{ value.name }}</div>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBar",
    emits: ["chapterChange"],
    props: {
        routeName: String,
        linkData: Object,
        labelColour: { type: String, default: "lightgreen" },
        labelCheckedColour: {
            type: String,
            default: "darkgreen",
        },
    },
    data() {
        return {
            selectedCh: "Chapter1",
        };
    },
    computed: {
        cssProps() {
            return {
                "--labelColour": this.labelColour,
                "--labelCheckedColour": this.labelCheckedColour,
            };
        },
    },
    methods: {
        openNav() {
            mySidenav.style.width = "250px";
        },
        closeNav() {
            mySidenav.style.width = "0px";
        },
        navControl() {
            if (mySidenav.style.width === "0px") {
                mySidenav.style.width = "240px";
                crossBtn.style.opacity = "1";
            } else {
                mySidenav.style.width = "0px";
                crossBtn.style.opacity = "0";
            }
        },
    },
};
</script>

<style scoped>
* {
    user-select: none;
}

.toggleBtn {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 10px;
    left: 10px;
    width: 5rem;
    height: 2.5rem;
    /* border: 1px solid black; */
    border-radius: 10px;
    transform: scale(0.9);
    transition: 100ms;
    cursor: pointer;
}

.toggleBtn-2 {
    left: 100px;
    width: 2.5rem;
    height: 2.5rem;
    background-image: url("@/assets/home.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: hsl(0, 0%, 95%);
}

.line {
    border: 2.5px solid black;
    width: 2.5rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}

.toggleBtn:hover {
    transform: scale(1);
}

.toggleBtn:active {
    transform: scale(0.8);
}

.sidenav {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: 1;
    background-color: #f3f3f3;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 500ms;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #111;
}

.sidenav a:active {
    transform: scale(0.8);
}

.sidenav .sideNavName {
    position: absolute;
    top: 0px;
    right: 10px;
    font-size: 36px;
    padding: 8px;
}

.sidenav .btn {
    position: absolute;
    top: 0;
    left: 10px;
    font-size: 36px;
    padding-left: 25px;
    padding-right: 25px;
    cursor: pointer;
}

.sidenav .wrapper {
    display: block;
    width: 240px;
}

.sidenav .wrapper input {
    position: fixed;
    opacity: 0;
    display: none;
    pointer-events: none;
}

.sidenav label {
    display: block;
    width: 90%;
    height: 3rem;
    background-color: #2d5068; /* java blue #5382a1 */
    color: #fff;
    transition: 150ms;
    cursor: pointer;
    border-radius: 100px;
    margin: 0.5rem auto;
}

.sidenav label:hover {
    background-color: #436982;
    font-size: 1.05rem;
}

.sidenav label:active {
    color: #111;
    background-color: #f89820;
    transition: 50ms;
}

.value-text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.sidenav input[type="radio"]:checked + label {
    color: white;
    background-color: #5382a1; /* dark blue #2d5068 */
    font-weight: bold;
    font-size: 1.05rem;
}

/* .sidenav a.router-link-exact-active {
    color: #42b983;
} */
</style>
