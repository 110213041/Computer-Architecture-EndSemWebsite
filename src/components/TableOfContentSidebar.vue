<template>
    <div class="toggleBtn" @click="linkNavControl()">目錄</div>
    <aside id="asideContainer" style="transition: 125ms">
        <div id="fooo" style="opacity: 1; transition: 125ms">
            <template v-for="(item, index) in allHeaders">
                <a
                    v-if="item.headerLevel === 2"
                    :href="`#${index}`"
                    class="asideLinkH2"
                    :class="{ active: index == currentSection }"
                    v-html="item.title"
                >
                </a>
                <a
                    v-if="item.headerLevel === 3"
                    :href="`#${index}`"
                    class="asideLinkH3"
                    :class="{ active: index == currentSection }"
                    v-html="item.title"
                >
                </a>
            </template>
        </div>
    </aside>
</template>

<script>
export default {
    name: "TableOfContentSideBar",
    props: {
        allHeaders: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            currentSection: "",
        };
    },
    mounted() {
        this.linkActive();
    },
    methods: {
        linkActive() {
            const headTwo = document.querySelectorAll(
                ".chapter-article h1, h2, h3, h4, h5, h6"
            );

            const observer = new IntersectionObserver(
                (enitries) => {
                    enitries.forEach((entry) => {
                        if (entry.intersectionRatio > 0) {
                            this.currentSection = entry.target.id;
                        }
                    });
                },
                { rootMargin: "0px 0px -80% 0px" } // "0px 0px -90% 0px"
            );

            document
                .querySelectorAll(
                    ".chapter-article h1, h2, h3, h4, h5, h6"
                )
                .forEach((section) => {
                    observer.observe(section);
                });
        },
        linkNavControl() {
            if (fooo.style.opacity === "1") {
                fooo.style.opacity = "0";
            } else {
                fooo.style.opacity = "1";
            }
        },
    },
};
</script>

<style scoped>
.toggleBtn {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -10px;
    right: 10px;
    width: 5rem;
    height: 2.5rem;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    transform: scale(0.9);
    opacity: 0.75;
    transition: 100ms;
}

.toggleBtn:hover {
    border: 2px solid black;
    transform: scale(1);
    opacity: 1;
}

.toggleBtn:active {
    /* border: 2px solid black; */
    transform: scale(0.8);
}

#crossBtn {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

aside > div {
    position: sticky;
    top: 50px;
    padding-left: 2rem;
    margin-left: 25%;
    margin-right: 4rem;
}

aside > div > a {
    display: block;
    margin: 0;
    color: #2c3e50;
    text-decoration: none;
    border-left: 1px solid #ccc;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    width: 240px;

    transition: 200ms;
}

aside a.active {
    font-weight: bold;
    border-color: black;
    font-style: italic;
    font-size: 0.95rem;
    /* background-color: yellow; */
}

.asideLinkH2 {
    padding-left: 2rem;
    font-size: 0.9rem;
}
.asideLinkH3 {
    padding-left: 4rem;
    font-size: 0.8rem;
}
</style>
