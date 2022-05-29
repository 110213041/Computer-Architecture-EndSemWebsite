<template>
    <div class="chapter-container">
        <div class="chapter-article">
            <HeaderTemplate
                :title="allHeaders[0].title"
                :headerLevel="allHeaders[0].headerLevel"
                :headerId="0"
            ></HeaderTemplate>

            <p>
                C語言以連續的記憶體空間來表達陣列，多維陣列的地址運算採用
                <router-link to="/C">row major的方式</router-link>
                的方式。這種做法的好處是索引運算速度快，甚至能用pointer來逐一檢視其內容。但這種實作方法在傳遞陣列參數時,
                就有一些問題產生了
            </p>

            <highlightjs
                class="code-container"
                language="c"
                code="int sum(int x[]) {
    // x的長度到底是多少? 不知道的話程式要怎麼寫?
    // 如果宣告成 int sum(int x[100])則此函數就只能接受長度為100的陣列
}
int main() {
    int x[100];
    int y[200];
    sum(x);
    sum(y);
}"
            ></highlightjs>

            <p>
                假設有一函數sum(int
                x[])可用來將陣列內的函數全部加總起來，則僅靠傳遞陣列開頭地址是不夠的，還必須傳遞該陣列的長度才行。如
            </p>

            <highlightjs
                class="code-container"
                language="c"
                code="int sum(int x[], int len) {
    int i, total = 0;
    for (i = 0; i < len; i++) {
        total += x[i];
    }
    return total;
}
int main() {
    int x[100];
    int y[200];
    sum(x, 100);
    sum(y, 200);
}"
            ></highlightjs>

            <p>
                由於長度的資訊並不在陣列內，必須靠設計者另外告知才行，不小心的話容易發生不一致的情形。
            </p>

            <p>
                另一種方法是規範該陣列必須以某個特殊的數值當作結尾，函數必須自行檢查該數值，以確保程式正確。C語言的字串就是利用以0結尾的陣列來表達。
            </p>

            <HeaderTemplate
                :title="allHeaders[1].title"
                :headerLevel="allHeaders[1].headerLevel"
                :headerId="1"
            ></HeaderTemplate>
        </div>
        <TableOfContentSidebar
            :allHeaders="allHeaders"
        ></TableOfContentSidebar>
    </div>
</template>

<script>
import hljs from "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import TableOfContentSidebar from "@/components/TableOfContentSidebar.vue";
import HeaderTemplate from "@/components/HeaderTemplate.vue";

export default {
    name: "J_Chapter3",
    components: {
        highlightjs: hljsVuePlugin.component,
        TableOfContentSidebar,
        HeaderTemplate,
    },
    emits: ["allHeaders"],
    data() {
        return {
            allHeaders: [
                { title: "C語言陣列回顧", headerLevel: 2 },
                {
                    title: "Java陣列的特性",
                    headerLevel: 2,
                },
            ],
        };
    },
    mounted() {
        this.$emit("allHeaders", this.allHeaders);
    },
    updated() {
        this.$emit("allHeaders", this.allHeaders);
    },
};
</script>
