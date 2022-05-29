<template>
    <h1 v-if="headerLevel === 1" :id="headerId" v-html="title"></h1>
    <h2
        v-else-if="headerLevel === 2"
        :id="headerId"
        v-html="title"
    ></h2>
    <h3
        v-else-if="headerLevel === 3"
        :id="headerId"
        v-html="title"
    ></h3>
    <h4
        v-else-if="headerLevel === 4"
        :id="headerId"
        v-html="title"
    ></h4>
    <h5
        v-else-if="headerLevel === 5"
        :id="headerId"
        v-html="title"
    ></h5>
    <h6
        v-else-if="headerLevel === 6"
        :id="headerId"
        v-html="title"
    ></h6>
</template>

<script>
export default {
    name: "HeaderTemplate",
    props: {
        title: {
            type: String,
            required: true,
        },
        headerLevel: {
            type: Number,
            required: true,
        },
        headerId: {
            type: Number,
            default: -1,
        },
    },
    computed: {
        headerAssembly() {
            return ``;
        },
    },
};
</script>
