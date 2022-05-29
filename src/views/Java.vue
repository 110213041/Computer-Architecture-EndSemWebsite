<template>
    <SideBar
        routeName="Java"
        :linkData="linkData"
        @chapterChange="chapterChange"
    ></SideBar>
    {{ updateTitle }}
    <div class="container">
        <div class="content">
            <component
                :is="Chapter"
                @allHeaders="allHeadersHandeler"
            ></component>
        </div>
    </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import TableOfContentSidebar from "@/components/TableOfContentSidebar.vue";
import { defineAsyncComponent } from "vue";

export default {
    name: "Java",
    components: {
        SideBar,
        Chapter1: defineAsyncComponent(() =>
            import("@/assets/Java/J_Chapter1.vue")
        ),
        Chapter2: defineAsyncComponent(() =>
            import("@/assets/Java/J_Chapter2.vue")
        ),
        Chapter3: defineAsyncComponent(() =>
            import("@/assets/Java/J_Chapter3.vue")
        ),
        TableOfContentSidebar,
    },
    data() {
        return {
            Chapter: "Chapter1",
            linkData: [
                {
                    value: "Chapter1",
                    name: "Java與C的比較",
                },
                {
                    value: "Chapter2",
                    name: "類別與物件",
                },
                {
                    value: "Chapter3",
                    name: "陣  列",
                },
            ],
            allHeaders: {},
        };
    },
    computed: {
        updateTitle() {
            const currentName = this.linkData.filter(
                (i) => i.value === this.Chapter
            )[0].name;

            document.title = currentName;
        },
    },
    methods: {
        chapterChange(e) {
            this.Chapter = e;
            scroll(0, 0);
            window.location.hash = "";
        },
        allHeadersHandeler(e) {
            this.allHeaders = e;
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    text-align: left;
    font-size: 1.35rem;
}

:deep(.chapter-container) {
    margin: 0 20%;
    display: flex;
}
:deep(.chapter-article) {
    width: 85%;
}

:deep(.chapter-article div:last-child) {
    /* background-color: aquamarine; */
    margin-bottom: 25rem;
}

:deep(.article-container) {
}
:deep(h2) {
    /* border: 1px solid black; */
    border-bottom: 3px solid hsl(240, 100%, 65%);
    /* background-color: hsl(0, 0%, 95%); */
    /* border-radius: 10px; */
    padding: 0.25rem;
    padding-left: 0.5rem;
}

:deep(h3) {
    /* border: 1px solid black; */
    /* border-bottom: 2px solid hsl(240, 100%, 65%); */
    /* background-color: hsl(0, 0%, 95%); */
    /* border-radius: 10px; */
    padding: 0.25rem;
    padding-left: 0.5rem;
}

:deep(.code-container) {
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    font-size: 1.1rem;
}

:deep(*) {
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
}

:deep(ul) {
    padding-left: 3rem;
}
:deep(ol) {
    padding-left: 3rem;
}

:deep(ul > li) {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
:deep(ol > li) {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

:deep(.important-red) {
    color: red;
    font-size: 1.55rem;
    font-weight: 700;
    font-style: italic;
}
</style>
