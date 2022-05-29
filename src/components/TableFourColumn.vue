<template>
    <table>
        <thead>
            <tr>
                <th
                    v-for="item in head"
                    :style="thStyle"
                    v-html="item"
                ></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items">
                <td :data-column="head[0]" v-html="item.slotOne"></td>
                <td :data-column="head[1]" v-html="item.slotTwo"></td>
                <td :data-column="head[2]" v-html="item.slotThree"></td>
                <td :data-column="head[3]" v-html="item.slotFour"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "TableFourColumn",
    props: {
        data: { type: Object, required: true },
        headColour: { type: String, default: "#5382a1" },
    },
    computed: {
        head() {
            return this.data.filter((e) => {
                return e.id === 0;
            })[0].columnName;
        },

        items() {
            return this.data.filter((e) => {
                return e.id !== 0;
            });
        },

        thStyle() {
            return "background-color: " + this.headColour;
        },
    },
};
</script>

<style scoped>
table {
    /* width: 750px; */
    border-collapse: collapse;
    margin: 50px 0;
}

/* Zebra striping */
tr:nth-of-type(odd) {
    background: #eee;
}

th {
    color: #fff;
    font-weight: bold;
}

td,
th {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: left;
    font-size: 18px;
}

/* 
Max width before this PARTICULAR table gets nasty
This query will take effect for any screen smaller than 760px
and also iPads specifically.
*/
@media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    table {
        width: 100%;
    }

    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
        display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }

    tr {
        border: 1px solid #ccc;
    }

    td {
        /* Behave  like a "row" */
        border: none;
        border-bottom: 1px solid #eee;
        position: relative;
        padding-left: 50%;
    }

    td:before {
        /* Now like a table header */
        position: absolute;
        /* Top/left values mimic padding */
        top: 6px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        /* Label the data */
        content: attr(data-column);

        color: #000;
        font-weight: bold;
    }
}
</style>
