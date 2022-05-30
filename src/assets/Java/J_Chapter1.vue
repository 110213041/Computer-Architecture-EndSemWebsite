<template>
    <div class="chapter-container">
        <div class="chapter-article">
            <div class="article-container">
                <HeaderTemplate
                    :title="allHeaders[0].title"
                    :headerLevel="allHeaders[0].headerLevel"
                    :headerId="0"
                ></HeaderTemplate>

                <p>
                    C語言的開發模式, 是編寫.c的Source Code,
                    再經由Compiler編譯成Object Code。所謂Object
                    Code指的是和硬體相關的機器指令,
                    也就是說當我們想要把C程式移植到不同的硬體時,
                    必須要重新Compile,以產生新的執行檔。除了需要重新編譯外,新系統是否具備應用程式所需的程式庫,include的檔案是否相容,
                    也是程式能否在新機器上順利編譯和執行的條件之一。
                </p>

                <p>
                    在實務上,為了讓C程式能在不同的UNIX版本上都能順利編譯,原作者往往必須使用前置處理器的#ifdef指令,判斷不同環境的適當寫法。如果想把在UNIX上開發的C程式移植到Windows上,則有用到專屬程式庫的部分(如UNIX的使用者介面可能用到X
                    Window的API,Windows就沒有支援,必須一台一台灌程式庫才行,很可能還要花錢買),就必須重寫才行。
                </p>

                <p>
                    解決此類問題的方法之一,是定義一種Virtual
                    Machine(虛擬機器),讓程式語言編譯時不要翻成實體機器的指令,而是翻成Virtual
                    Machine的目的碼。Virtual
                    Machine一般是以軟體來模擬的,只要新的平台有Virtual
                    Machine,則原始程式不用Compile,執行舊機器上已有的Virtual
                    Machine目的碼,就可以了。當然要達到完全不用重新Compile就能執行的理想,還要配合標準的程式庫才行。
                </p>

                <p>
                    Java語言基於上述理念,定義了Java Virtual
                    Machine,它所用的指令稱為byte code。使用Virtual
                    Machine的缺點之一,是執行的速度較慢,代價是開發的速度變快了。以現在的硬體來說,大部分應用程式的執行速度已經沒有那麼重要,反倒是軟體的開發速度和品質越來越值得重視。
                </p>

                <p>
                    此外JVM的技術不斷進步, 諸如Just In Time(JIT)
                    Compiler,
                    或HotSpot等技術都可以讓Java程式以非常接近原生碼(Native
                    Code)的速度執行。因此不要因為某些偏頗的報告或直覺,
                    就不使用Java了。
                </p>

                <p>
                    開發Java應用程式的工具中,最常見的是由Java的原創公司Sun
                    Micro所出版的JDK(Java Development Kit)。<a
                        href="http://java.sun.com/javase/downloads/?intcmp=1281"
                    >
                        JDK可以免費下載
                    </a>
                    。以Text Editor寫好的Hello.java原始檔:
                </p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code='public class Hello {
    public static int gvar;
    public static void say(String s) {
        int x = 10;
        System.out.print(s+x);
    }
    public static void main(String[] argv) {
        float y = 0;
        say("Hello, world\n");
    }
}'
                ></highlightjs>

                <p>這程式的C版本如下</p>

                <highlightjs
                    class="code-container"
                    language="c"
                    code='#include <stdio.h>
int gvar;
void say(char[] s) {
    int x = 10;
    printf("%s%d", s, x);
}
int main(int argc, char** argv) {
    float y = 0;
    say("Hello, world\n");
}'
                ></highlightjs>

                <p>經過:</p>
                <highlightjs
                    class="code-container"
                    autodetect
                    code="javac Hello.java"
                ></highlightjs>
                <p>編譯完成後會產生byte code格式的Hello.class,然後</p>
                <highlightjs
                    class="code-container"
                    autodetect
                    code="java Hello"
                ></highlightjs>
                <p>
                    就可以利用Java Virtual
                    Machine(此處是java這個執行檔)來執行了。
                </p>

                <p>上述過程中幾個比較會發生的問題是</p>

                <ul>
                    <li>javac找不到: 請設定path這個環境變數。</li>
                    <li>
                        javac抱怨class Hello找不到:
                        請確定你的檔名是大寫Hello.java,程式內的public
                        class Hello有沒有大小寫的問題。
                    </li>
                    <li>
                        java抱怨找不到main: 請確定public static void
                        main(String[] argv)毫無錯誤。
                    </li>
                </ul>
            </div>
            <div class="article-container">
                <HeaderTemplate
                    :title="allHeaders[1].title"
                    :headerLevel="allHeaders[1].headerLevel"
                    :headerId="1"
                ></HeaderTemplate>
                <p>
                    Java是由C++簡化來的。由於C++要和C完全相容,又很注重效能問題,因此C++算是很複雜的程式語言。Java在設計之初,考量的重點之一就是簡單,因此和C++比起來,不僅更為物件導向,而且比C++容易學習。
                </p>

                <p>
                    Java許多運算符號和敘述語法都是來自C語言,假設各位已經對C語言有所了解,本章後面的部分只將Java和C在運算符號和敘述語法上的差異點出來,相同的部分請參見C語言的課程內容。
                </p>
            </div>
            <div class="article-container">
                <HeaderTemplate
                    :title="allHeaders[2].title"
                    :headerLevel="allHeaders[2].headerLevel"
                    :headerId="2"
                ></HeaderTemplate>

                <p>Java語言所定義的基本資料型別有</p>

                <TableThreeColumn :data="table1"></TableThreeColumn>

                <p>Java的資料型態裡沒有unsigned。</p>

                <p>
                    Java對數值型態的轉換比C稍微嚴格一點,下列左邊的部分都可以指定(assignment)給右邊的型別:
                </p>

                <pre>
byte --> short --> int --> long --> float --> double</pre
                >

                <p>
                    除上述外,其他型別間的轉換都必須下達型別轉換(Type
                    Casting)命令來處理,其形式為圓括弧裡寫上型別名稱,如(double)
                </p>

                <p>
                    由於Java在char的型態部分採用Unicode,因此字元常數的表示法,除因循C的規則外,也可以直接指定16bits
                    Unicode編碼給char型別的變數。例如由Windows
                    "字元對應表"
                    程式中可查到象棋中的紅車的unicode編碼為4FE5,
                    Java可用 '\u4fe5'
                    來表達。Java的變數也可以用Unicode來命名,換句話說,你可以用中文取變數名稱。
                </p>

                <p>
                    除了這些基本資料型別外,Java還有一個稱為Reference(參考)的型別。Reference用來存取Object(物件),其功能和C語言的pointer用來存取記憶體有點像,但沒有pointer的&+-等運算符號,而且Reference只能存取型態相符合的類別。宣告Reference的語法是ClassName
                    varName,例如
                </p>
                <highlightjs
                    class="code-container"
                    language="java"
                    code="String s;"
                ></highlightjs>

                <p>
                    宣告s是一個型態為reference的變數,這表示我們可透過s來存取屬於String類別的物件(s
                    is a reference to String object)。
                </p>

                <p>
                    要特別強調的是,
                    <span class="important-red">
                        s並不是物件, 而是用來指向String物件的reference
                    </span>
                    。打個比方,
                </p>
                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class 動物 {
    動物 手指頭; // java 因字元編碼使用unicode, 所以可用中文當變數名稱
    public static void main(String[] arg) {
        動物 手指頭2;
        手指頭2 = new 動物();
    }
}"
                ></highlightjs>

                <p>
                    變數 "手指頭" 宣告為reference, 可指向屬於 class
                    "動物" 的物件, 手指頭不是動物,
                    而是用手指頭指向某隻動物。
                </p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="java.lang.Float f;
java.lang.Double d;
java.lang.Integer i;"
                ></highlightjs>

                <p>以上變數的型態都是reference</p>
            </div>
            <div class="article-container">
                <HeaderTemplate
                    :title="allHeaders[3].title"
                    :headerLevel="allHeaders[3].headerLevel"
                    :headerId="3"
                ></HeaderTemplate>

                <p>
                    Java語言在運算式的部分,和<router-link to="/C"
                        >C語言</router-link
                    >極為類似, 除了沒有sizeof,
                    pointer和struct相關的運算符號外,
                    另外新增了>>>向右無號shift,
                    以及用來判斷物件型態的instanceof。Java的常數的表示法也和C相同,而Java裡的新資料型態boolean的合法值為true和false兩個常數。
                </p>
                <HeaderTemplate
                    :title="allHeaders[4].title"
                    :headerLevel="allHeaders[4].headerLevel"
                    :headerId="4"
                ></HeaderTemplate>

                <TableTwoColumn :data="table2"></TableTwoColumn>

                <HeaderTemplate
                    :title="allHeaders[5].title"
                    :headerLevel="allHeaders[5].headerLevel"
                    :headerId="5"
                ></HeaderTemplate>

                <TableTwoColumn :data="table3"></TableTwoColumn>

                <p>
                    Java語言和C語言有關邏輯運算最大的不同,在於Java以boolean資料型態(只有true和false兩種值)判斷條件是否成立,而C語言只能使用0或非0。
                </p>

                <HeaderTemplate
                    :title="allHeaders[6].title"
                    :headerLevel="allHeaders[6].headerLevel"
                    :headerId="6"
                ></HeaderTemplate>

                <TableTwoColumn :data="table4"></TableTwoColumn>

                <HeaderTemplate
                    :title="allHeaders[7].title"
                    :headerLevel="allHeaders[7].headerLevel"
                    :headerId="7"
                ></HeaderTemplate>

                <TableTwoColumn :data="table5"></TableTwoColumn>

                <HeaderTemplate
                    :title="allHeaders[8].title"
                    :headerLevel="allHeaders[8].headerLevel"
                    :headerId="8"
                ></HeaderTemplate>

                <TableThreeColumn :data="table6"></TableThreeColumn>
            </div>
            <div class="article-container">
                <HeaderTemplate
                    :title="allHeaders[9].title"
                    :headerLevel="allHeaders[9].headerLevel"
                    :headerId="9"
                ></HeaderTemplate>

                Java的流程控制敘述和<router-link to="/C"
                    >C語言</router-link
                >極為類似,不同處在於break和continue兩個指令。Java的break和continue指令後面可以加上標籤,以指示要跳出或繼續的範圍。

                <highlightjs
                    class="code-container"
                    language="java"
                    code='public class BreakContinueExample {
    public static void main(String[] argv) {
        int i, j;
        outerLoop:
        for (i = 0; i < 100; i++) {
            innerLoop:
            for (j = 0; j < 100; j++) {
                if (j == 50 && i == 50) {
                    break outerLoop;
                }
            }
        }
        System.out.println("Loop have been terminated.");
    }
}'
                ></highlightjs>

                <p>
                    在上面的例子中,當j==50且i==50時,break指令會跳出最外面的迴圈,直接印出迴圈終止訊息。如果break後面沒有outerLoop的話,
                    只會跳出裡面的迴圈,然後i從51繼續做下去。
                </p>
            </div>
            <div class="article-container">
                <HeaderTemplate
                    :title="allHeaders[10].title"
                    :headerLevel="allHeaders[10].headerLevel"
                    :headerId="10"
                ></HeaderTemplate>

                <p>
                    C語言定義以0結尾的字元陣列就是字串。但對Java來說,
                    字串是由String類別來表達,
                    也就是說String是物件而不是陣列。由於我們經常使用字串,
                    為了寫作程式方便起見, Java
                    Compiler碰到+符號某一邊的型態是String時,
                    就會把+翻譯成StringBuffer類別裡相對應的append
                    Method。例如:
                </p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code='public class StringTest {
    public static void main(String[] argv) {
        int x = 5;
        float y = 1.5;
        System.out.println("x = " + x + ", y = " + y);
    }
}'
                ></highlightjs>

                <p>會翻譯成:</p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code='public class StringTest {
    public static void main(String[] argv) {
        int x = 5;
        float y = 1.5;
        System.out.println((new StringBuffer("x = ")).append(x).append(", y = ").append(y).toString());
    }
}'
                ></highlightjs>

                <p>
                    如果你會C++, 看到Java字串+符號的語法,
                    千萬不要以為Java支援operator
                    overloading。Java只是透過Compiler來做特別的轉換,
                    稱這種技術為Compiler Sugar比較適合。
                </p>
            </div>
            <div class="article-container">
                <HeaderTemplate
                    :title="allHeaders[11].title"
                    :headerLevel="allHeaders[11].headerLevel"
                    :headerId="11"
                ></HeaderTemplate>

                <p>寫作Java程式時,請注意下列幾種風格</p>

                <ul>
                    <li>Class Name請首字大寫</li>
                    <li>Variable Name和Method Name請首字小寫</li>
                    <li>
                        如果名稱由數個英文字組成,第二個英文字以後首字大寫
                    </li>
                    <li>內縮四個空格</li>
                    <li>
                        註解部分如要變成說明文件,請遵照javadoc這個工具的寫作規則
                    </li>
                </ul>

                <highlightjs
                    class="code-container"
                    language="java"
                    code='/**
 * 第一行的兩個**用來告訴javadoc此部份註解要變成HTML文件的一部份
 * 這段註解裡的所有文字都會變成此類別一開頭的說明
 */
public class Hello { // Class Name首字大寫
    /**
     * 此段註解會變成描述main方法的一部分
     * @param argv 使用@param註記會產生參數(parameter)argv的相關說明
     * @return 傳回值的意義說明
     */
     public static void main(String[] argv) { // Method Name首字小寫
        // argv: array of references to String object
        int myVariable; // 變數宣告
        int i, sum;
        for (i = 1, sum = 0; i <= 100; i++) {
            sum += i;
        }
        System.out.println("summation from 1 to 100 is "+sum);
    }
}'
                ></highlightjs>
            </div>
            <div class="article-container">
                <HeaderTemplate
                    :title="allHeaders[12].title"
                    :headerLevel="allHeaders[12].headerLevel"
                    :headerId="12"
                ></HeaderTemplate>

                <HeaderTemplate
                    :title="allHeaders[13].title"
                    :headerLevel="allHeaders[13].headerLevel"
                    :headerId="13"
                ></HeaderTemplate>

                <highlightjs
                    class="code-container"
                    language="java"
                    code='public class Example {
    public static void main(String[] argv) {
        float degree = 100.0;
        System.out.println("100C=" + (degree * 9.0 / 5.0 + 32.0));
    }
}'
                ></highlightjs>

                <HeaderTemplate
                    :title="allHeaders[14].title"
                    :headerLevel="allHeaders[14].headerLevel"
                    :headerId="14"
                ></HeaderTemplate>

                <p>怎麼寫呢?</p>

                <HeaderTemplate
                    :title="allHeaders[15].title"
                    :headerLevel="allHeaders[15].headerLevel"
                    :headerId="15"
                ></HeaderTemplate>

                <highlightjs
                    class="code-container"
                    language="java"
                    code='public class Example {
    public static void main(String[] argv) {
        int n = 100;
        System.out.println("1+2+...+"+n+"  = " + ( n * (n + 1) / 2));
    }
}'
                ></highlightjs>

                <p>
                    特別注意上述的運算式裡/2要放到最後面,如果寫成n/2*(n+1),從數學式子的角度看好像沒問題,但別忘了,binary
                    operator的兩邊必須是同樣型別的資料,而且計算的結果也是同樣的型別。因此n/2*(n+1)會先計算n/2,如果n不能被2整除的話,那麼為了符合計算結果必須是整數的限制,則小數點的部份就會無條件捨去,使得計算的結果錯誤。下面的範例一樣要注意相同的問題。
                </p>

                <HeaderTemplate
                    :title="allHeaders[16].title"
                    :headerLevel="allHeaders[16].headerLevel"
                    :headerId="16"
                ></HeaderTemplate>

                <p>怎麼寫?</p>

                <HeaderTemplate
                    :title="allHeaders[17].title"
                    :headerLevel="allHeaders[17].headerLevel"
                    :headerId="17"
                ></HeaderTemplate>

                <p>
                    Java語言規定浮點數轉整數時,小數點部分無條件捨去。如果要達到浮點數四捨五入為整數的效果,可以使用下面的小技巧
                </p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code='public class Example {
    public static void main(String[] argv) {
        double x = 20.6;
        System.out.println(x + " 四捨五入成為 " + (int)(x+0.5));
        System.out.println(x + " 四捨五入成為 " + round(x));
    }
    static int round(double y) {
        return (int)(y + 0.5);
    }
}'
                ></highlightjs>
                <div class="article-container"></div>
                <HeaderTemplate
                    :title="allHeaders[18].title"
                    :headerLevel="allHeaders[18].headerLevel"
                    :headerId="18"
                ></HeaderTemplate>

                <HeaderTemplate
                    :title="allHeaders[19].title"
                    :headerLevel="allHeaders[19].headerLevel"
                    :headerId="19"
                ></HeaderTemplate>

                <ol>
                    <li>
                        需要1個變數紀錄到目前為止所有inputNum的總和,稱此變數為sum,其初始值為0
                    </li>
                    <li>
                        以迴圈執行5次,每次輸入數字加總到sum,迴圈執行的次數以變數i來代表
                    </li>
                    <li>平均數為sum/5</li>
                    <li>如何讀入資料?</li>
                </ol>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class Example {
    public static int sum(int n) {
        int total = 0; // 紀錄到目前為止的總和
        for (int i = 1; i <= n; i++) {
            total += i;
        }
        return total;
    }
    public static void main(String[] argv) {
        System.out.println(sum(100));
    }
}"
                ></highlightjs>

                <HeaderTemplate
                    :title="allHeaders[20].title"
                    :headerLevel="allHeaders[20].headerLevel"
                    :headerId="20"
                ></HeaderTemplate>

                <ol>
                    <li>要想辦法拜訪1,2,3...n的每一個數字一次</li>
                    <li>
                        可用for(i=1; i &lt;= n; i++)的形式達成上述目標
                    </li>
                    <li>拜訪到這些數字時,就把它們加起來</li>
                </ol>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class Example {
    public static int sum(int n) {
        int total = 0; // 紀錄到目前為止的總和
        for (int i = 1; i <= n; i++) {
            total += i;
        }
        return total;
    }
    public static void main(String[] argv) {
        System.out.println(sum(100));
    }
}"
                ></highlightjs>

                <HeaderTemplate
                    :title="allHeaders[21].title"
                    :headerLevel="allHeaders[21].headerLevel"
                    :headerId="21"
                ></HeaderTemplate>

                <ol>
                    <li>
                        要想辦法拜訪1,3,5...n的每一個數字一次,也就是從1開始每次加2
                    </li>
                    <li>
                        可用for(i = 1; i &lt;= n; i +=
                        2)的形式達成上述目標
                    </li>
                    <li>拜訪到這些數字時,就把它們加起來</li>
                </ol>

                <p>怎麼寫?</p>

                <HeaderTemplate
                    :title="allHeaders[22].title"
                    :headerLevel="allHeaders[22].headerLevel"
                    :headerId="22"
                ></HeaderTemplate>

                <ol>
                    <li>
                        總共有i = 1..9 列, j = 1..9 行,
                        對第i列第j行元素來說, 其數值為i*j
                    </li>
                </ol>

                <highlightjs
                    class="code-container"
                    language="java"
                    code='public class Example {
    public static void main(String[] argv) {
        for (int i = 1; i <= 9; i++) {
            for (int j = 1; j <= 9; j++) {
                System.out.print(" " + (i * j));
            }
            System.out.println();
        }
    }
}'
                ></highlightjs>

                <HeaderTemplate
                    :title="allHeaders[23].title"
                    :headerLevel="allHeaders[23].headerLevel"
                    :headerId="23"
                ></HeaderTemplate>

                <pre>
***
***
*** 
</pre
                >

                <p>解析</p>

                <ol>
                    <li>
                        螢幕上的游標只能由上而下,由左而右,無法回頭。
                    </li>
                    <li>
                        此圖形共有1..size列,每列有size個*,因此可用兩層迴圈來做。
                    </li>
                    <li>
                        要讓一個敘述執行size次,可用for(i = 1; i &lt;=
                        size; i++)的形式來達成
                    </li>
                </ol>

                <highlightjs
                    class="code-container"
                    language="java"
                    code='public class Example {
    public static void print(int size) {
        int i, j; // 第i列,第j行
        for (i = 1; i <= size; i++) { // 印出第i列
            for (j = 1; j <= size; j++) { // 第i列有size個*
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void main(String[] argv) throws Exception {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        print(Integer.parseInt(in.readLine()));
    }
}'
                ></highlightjs>

                <HeaderTemplate
                    :title="allHeaders[24].title"
                    :headerLevel="allHeaders[24].headerLevel"
                    :headerId="24"
                ></HeaderTemplate>

                <pre>
*
**
***
    </pre
                >

                <p>解析</p>

                <ol>
                    <li>
                        螢幕上的游標只能由上而下,由左而右,無法回頭。
                    </li>
                    <li>
                        此圖形共有1..size列,第i列有個*,因此可用兩層迴圈來做。
                    </li>
                </ol>

                <p>怎麼寫?</p>

                <HeaderTemplate
                    :title="allHeaders[25].title"
                    :headerLevel="allHeaders[25].headerLevel"
                    :headerId="25"
                ></HeaderTemplate>
                <pre>
  *
 ***
*****
    </pre
                >
                <p>解析</p>
                <ol>
                    <li>
                        總共有1..size列,對第i列而言,有size-i個空格,以及(2
                        * i- 1)個*
                    </li>
                </ol>
                <p>怎麼寫?</p>

                <HeaderTemplate
                    :title="allHeaders[26].title"
                    :headerLevel="allHeaders[26].headerLevel"
                    :headerId="26"
                ></HeaderTemplate>

                <ol>
                    <li>此函數需要兩個參數x,y</li>
                    <li>
                        當y不能整除x時,將x設成為y,y設為x%y,
                        重複此步驟直到x%y為0
                    </li>
                    <li>此時y就是這兩個數的最大公因數</li>
                </ol>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class Example {
    public static void main(String[] argv) {
        System.out.println(gcd(12,18));
    }
    public static int gcd(int x, int y) {
        int tmp;
        // 如果x < y 則下面的迴圈執行第一次時就會交換x,y了
        while (x % y != 0) {
            tmp = y;
            y = x % y;
            x = tmp;
        }
        return y;
    }
}      "
                ></highlightjs>

                <HeaderTemplate
                    :title="allHeaders[27].title"
                    :headerLevel="allHeaders[27].headerLevel"
                    :headerId="27"
                ></HeaderTemplate>

                <p>怎麼寫?</p>

                <HeaderTemplate
                    :title="allHeaders[28].title"
                    :headerLevel="allHeaders[28].headerLevel"
                    :headerId="28"
                ></HeaderTemplate>

                <ol>
                    <li>F(n)=n, if n&lt;=1;</li>
                    <li>F(n)=F(n-1)+F(n-2), otherwise</li>
                    <li>
                        可定義兩變數fn_1,fn_2表示最近兩個找出的費氏數
                    </li>
                    <li>下一個費氏數依定義為fn_1 + fn_2</li>
                    <li>
                        找到最新的費氏數後,最近的兩個費氏數就變成了fn_1+fn_2以及fn_1
                    </li>
                    <li>以變數i紀錄目前要求的是哪一個費氏數</li>
                    <li>
                        以變數tmp作為更新最新兩個費氏數所需的記憶體空間
                    </li>
                </ol>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class Example {
    public static void main(String[] argv) {
        System.out.println(fab(5));
    }
    public static int fab(int n) {
        int fn_1 = 1, fn_2 = 0; // 紀錄最近找到的兩個費氏數
        int i, tmp; // i表示目前要找F(i)
        if (n <= 1) return n;
        for (i = 2; i <= n; i++) {
            tmp = fn_1;   // 先把fn_1紀錄在tmp
            fn_1 += fn_2; // 最新的費氏數是前面兩個相加
            fn_2 = tmp;   // 第二新的就是原先的fn_1
        }
        return fn_1;
    }
}"
                ></highlightjs>
            </div>
            <div class="article-container">
                <HeaderTemplate
                    :title="allHeaders[29].title"
                    :headerLevel="allHeaders[29].headerLevel"
                    :headerId="29"
                ></HeaderTemplate>

                <HeaderTemplate
                    :title="allHeaders[30].title"
                    :headerLevel="allHeaders[30].headerLevel"
                    :headerId="30"
                ></HeaderTemplate>

                <p>解析</p>

                <ul>
                    <li>邊際條件是n=1時,總合為1</li>
                    <li>該函數可定成int sum(int n)</li>
                    <li>sum(n) = n + sum(n - 1)</li>
                </ul>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class Example {
    public static void main(String[] argv) {
        System.out.println(sum(100));
    }
    public static int sum(int n) {
        if (n == 1) {
            return 1;
        }
        return n + sum(n - 1);
    }
}"
                ></highlightjs>

                <HeaderTemplate
                    :title="allHeaders[31].title"
                    :headerLevel="allHeaders[31].headerLevel"
                    :headerId="31"
                ></HeaderTemplate>

                <p>怎麼寫?</p>

                <HeaderTemplate
                    :title="allHeaders[32].title"
                    :headerLevel="allHeaders[32].headerLevel"
                    :headerId="32"
                ></HeaderTemplate>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class Example {
    public static void main(String[] argv) {
        System.out.println(power(2, 6));
    }
    public static int power(int a, int b) {
        switch(b) {
        case 0: return 1;
        case 1: return a;
        default: return (a * power(a, b - 1));
    }
}"
                ></highlightjs>

                <HeaderTemplate
                    :title="allHeaders[33].title"
                    :headerLevel="allHeaders[33].headerLevel"
                    :headerId="33"
                ></HeaderTemplate>

                <p>解析</p>

                <ul>
                    <li>如果n==0,則最大公因數為m</li>
                    <li>
                        如果n不等於0,則最大公因數為gcd(m,n)==gcd(n, m%n)
                    </li>
                </ul>

                <p>怎麼寫?</p>

                <HeaderTemplate
                    :title="allHeaders[34].title"
                    :headerLevel="allHeaders[34].headerLevel"
                    :headerId="34"
                ></HeaderTemplate>

                <p>解析</p>

                <ul>
                    <li>費氏數列的定義為F(n)=n, if n&lt;= 1</li>
                    <li>F(n) = F(n-1)+F(n-2), if n > 1。</li>
                </ul>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class Example {
    public static void main(String[] argv) {
        System.out.println(fab(5));
    }
    public static int fab(int num) {
        if (num <= 1) {
            return num;
        }
        return fab(num - 1) + fab(num - 2);
    }
}"
                ></highlightjs>

                <HeaderTemplate
                    :title="allHeaders[35].title"
                    :headerLevel="allHeaders[35].headerLevel"
                    :headerId="35"
                ></HeaderTemplate>

                <p>A(m, n)定義為</p>

                <ol>
                    <li>n + 1, if m = 0</li>
                    <li>A(m - 1, 1), if n = 0</li>
                    <li>A(m - 1, A(m, n - 1)), otherwise</li>
                </ol>

                <p>怎麼寫?</p>
            </div>
        </div>
        <TableOfContentSidebar
            :allHeaders="allHeaders"
        ></TableOfContentSidebar>
    </div>
</template>

<script>
import hljs from "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import HeaderTemplate from "@/components/HeaderTemplate.vue";
import TableOfContentSidebar from "@/components/TableOfContentSidebar.vue";
import TableTwoColumn from "@/components/TableTwoColumn.vue";
import TableThreeColumn from "@/components/TableThreeColumn.vue";

export default {
    name: "J_Chapter1",
    components: {
        highlightjs: hljsVuePlugin.component,
        TableOfContentSidebar,
        TableTwoColumn,
        TableThreeColumn,
        HeaderTemplate,
    },
    emits: ["allHeaders"],
    data() {
        return {
            allHeaders: [
                { title: "Java Virtual Machine", headerLevel: 2 },
                {
                    title: "Java是物件導向(Object-Oriented)程式語言",
                    headerLevel: 2,
                },
                {
                    title: "資料型別",
                    headerLevel: 2,
                },
                {
                    title: "運算符號(Operator)",
                    headerLevel: 2,
                },
                {
                    title: "算術(Arithmetic)運算符號",
                    headerLevel: 3,
                },
                {
                    title: "邏輯(logic)運算符號",
                    headerLevel: 3,
                },
                {
                    title: "位元(Bit)運算符號",
                    headerLevel: 3,
                },
                {
                    title: "其他運算符號",
                    headerLevel: 3,
                },
                {
                    title: "優先權",
                    headerLevel: 3,
                },
                {
                    title: "流程控制敘述",
                    headerLevel: 2,
                },
                {
                    title: "字串",
                    headerLevel: 2,
                },
                {
                    title: "Java語言的寫作風格",
                    headerLevel: 2,
                },
                {
                    title: "運算符號範例",
                    headerLevel: 2,
                },
                {
                    title: "攝氏溫度轉華氏溫度",
                    headerLevel: 3,
                },
                {
                    title: "華氏溫度轉攝氏溫度",
                    headerLevel: 3,
                },
                {
                    title: "1 + 2 + ... + n的總合",
                    headerLevel: 3,
                },
                {
                    title: "1<sup>2</sup> + 2<sup>2</sup> + ... + n<sup>2</sup>的總合",
                    headerLevel: 3,
                },
                {
                    title: "把浮點數四捨五入為整數",
                    headerLevel: 3,
                },
                {
                    title: "迴圈範例",
                    headerLevel: 2,
                },
                {
                    title: "寫一程式輸入5個整數數字,計算其總合和平均。解析:",
                    headerLevel: 3,
                },
                {
                    title: "寫一函數輸入參數int n,傳回1 + 2 + 3 ... + n的總合。解析:",
                    headerLevel: 3,
                },
                {
                    title: "寫一函數輸入參數int n,傳回1 + 3 + 5 ... + n的總合。解析:",
                    headerLevel: 3,
                },
                {
                    title: "寫一函數於螢幕上畫出九九乘法表。解析:",
                    headerLevel: 3,
                },
                {
                    title: "輸入參數int size,並在螢幕上印出正方形,size=3的樣子如下",
                    headerLevel: 3,
                },
                {
                    title: "輸入參數int size,並在螢幕上印出直角三角形,size=3的樣子如下",
                    headerLevel: 3,
                },
                {
                    title: "撰寫一函數輸入int size,並在螢幕上印出等腰的三角形,size=3的樣子如下",
                    headerLevel: 3,
                },
                {
                    title: "寫一函數求兩個整數的最大公因數,解析:",
                    headerLevel: 3,
                },
                {
                    title: "寫一函數求兩個整數的最小公倍數",
                    headerLevel: 3,
                },
                {
                    title: "寫一函數求費氏數,解析:",
                    headerLevel: 3,
                },
                {
                    title: "遞迴(recursion)範例",
                    headerLevel: 2,
                },
                {
                    title: "求1+2+3+...+n",
                    headerLevel: 3,
                },
                {
                    title: "以遞迴計算1*2+2*3+3*4+…+(n-1)*n之和",
                    headerLevel: 3,
                },
                {
                    title: "利用遞迴求得A的B次方",
                    headerLevel: 3,
                },
                {
                    title: "以遞迴求兩個整數m,n的最大公因數",
                    headerLevel: 3,
                },
                {
                    title: "費式數列",
                    headerLevel: 3,
                },
                {
                    title: "Ackerman函數",
                    headerLevel: 3,
                },
            ],
            table1: [
                { id: 0, columnName: ["型別名稱", "位元長度", "範圍"] },
                {
                    id: 1,
                    slotOne: "boolean",
                    slotTwo: 1,
                    slotThree: "true 或 false",
                },
                {
                    id: 2,
                    slotOne: "byte",
                    slotTwo: 8,
                    slotThree: "-128 ~ 127",
                },
                {
                    id: 3,
                    slotOne: "short",
                    slotTwo: 16,
                    slotThree: "-32768 ~ 32767",
                },
                {
                    id: 4,
                    slotOne: "char",
                    slotTwo: 16,
                    slotThree: "Unicode characters",
                },
                {
                    id: 5,
                    slotOne: "int",
                    slotTwo: 32,
                    slotThree: "-2147483648 ~ 2147483647",
                },
                {
                    id: 6,
                    slotOne: "long",
                    slotTwo: 64,
                    slotThree:
                        "-9223372036854775808 ~ 9223372036854775807",
                },
                {
                    id: 7,
                    slotOne: "float",
                    slotTwo: 32,
                    slotThree:
                        "+-3.4028237*10 <sup> +38 </sup> ~ +-1.30239846*10 <sup> -45 </sup>",
                },
                {
                    id: 8,
                    slotOne: "double",
                    slotTwo: 64,
                    slotThree:
                        "+-1.76769313486231570*10 <sup> +308 </sup> ~ 4.94065645841246544*10 <sup> -324 </sup>",
                },
            ],
            table2: [
                { id: 0, columnName: ["運算符號", "功能敘述"] },
                {
                    id: 1,
                    slotOne: "+",
                    slotTwo: "加",
                },
                {
                    id: 2,
                    slotOne: "*",
                    slotTwo: "乘",
                },
                {
                    id: 3,
                    slotOne: "-",
                    slotTwo: "減",
                },
                {
                    id: 4,
                    slotOne: "/",
                    slotTwo: "除",
                },
                {
                    id: 5,
                    slotOne: "%",
                    slotTwo: "餘數",
                },
                {
                    id: 6,
                    slotOne: "++",
                    slotTwo: "加一",
                },
                {
                    id: 7,
                    slotOne: "--",
                    slotTwo: "減一",
                },
            ],
            table3: [
                { id: 0, columnName: ["運算符號", "功能敘述"] },
                { id: 1, slotOne: ">", slotTwo: "大於" },
                { id: 2, slotOne: "<", slotTwo: "小於" },
                { id: 3, slotOne: ">=", slotTwo: "大於等於" },
                { id: 4, slotOne: "<=", slotTwo: "小於等於" },
                { id: 5, slotOne: "==", slotTwo: "等於" },
                { id: 6, slotOne: "!=", slotTwo: "不等於" },
                { id: 7, slotOne: "&&", slotTwo: "logic AND" },
                { id: 8, slotOne: "||", slotTwo: "logic OR" },
                { id: 9, slotOne: "!", slotTwo: "logic NOT" },
                {
                    id: 10,
                    slotOne: "instanceof",
                    slotTwo:
                        "reference instanceof ClassName<br style='margin:0;' />判斷reference所指到的物件其型態是否和ClassName相容",
                },
            ],
            table4: [
                { id: 0, columnName: ["運算符號", "功能敘述"] },
                { id: 1, slotOne: "&", slotTwo: "bit AND" },
                { id: 2, slotOne: "<<", slotTwo: "left bit shift" },
                { id: 3, slotOne: "|", slotTwo: "bit OR" },
                {
                    id: 4,
                    slotOne: ">>",
                    slotTwo: "right bit shift with sign",
                },
                { id: 5, slotOne: "^", slotTwo: "bit XOR" },
                { id: 6, slotOne: "~", slotTwo: "1補數" },
                {
                    id: 7,
                    slotOne: ">>>",
                    slotTwo: "同>>但左邊一律補零",
                },
            ],
            table5: [
                { id: 0, columnName: ["運算元", "功能敘述"] },
                {
                    id: 1,
                    slotOne: "=",
                    slotTwo: "將右邊的值複製到左邊的變數",
                },
                {
                    id: 2,
                    slotOne: "(type)",
                    slotTwo: "將右邊的數值或reference轉換成type型別",
                },
                {
                    id: 3,
                    slotOne: "+=",
                    slotTwo:
                        "將右邊的數值加上左邊的數值然後指定給左邊的變數",
                },
                {
                    id: 4,
                    slotOne: "?:",
                    slotTwo: "若?左邊成立則做:左邊否則做:右邊",
                },
                {
                    id: 5,
                    slotOne: ",",
                    slotTwo: "合併兩個運算視為一個敘述",
                },
                {
                    id: 6,
                    slotOne: "(運算式)",
                    slotTwo: "表示()內優先運算",
                },
                {
                    id: 7,
                    slotOne: "(運算式)",
                    slotTwo:
                        "Reference.ObjectMember或ClassName.ClassName<br style='margin:0;' />存取物件或類別成員",
                },
                {
                    id: 8,
                    slotOne: "new",
                    slotTwo: "產生物件",
                },
            ],
            table6: [
                { id: 0, columnName: ["種類", "運算符號", "結合順序"] },
                {
                    id: 1,
                    slotOne: "group",
                    slotTwo: "(op)",
                    slotThree: "left to right",
                },
                {
                    id: 2,
                    slotOne: "postfix",
                    slotTwo: "[] . (params) op++ op--",
                    slotThree: "right to left",
                },
                {
                    id: 3,
                    slotOne: "pretfix",
                    slotTwo: "++op --op +op -op ~ !",
                    slotThree: "right to left",
                },
                {
                    id: 4,
                    slotOne: "creation or casting",
                    slotTwo: "new (type)op",
                    slotThree: "right to left",
                },
                {
                    id: 5,
                    slotOne: "multiplicative",
                    slotTwo: "* / %",
                    slotThree: "left to right",
                },
                {
                    id: 6,
                    slotOne: "additive",
                    slotTwo: "+ -",
                    slotThree: "left to right",
                },
                {
                    id: 7,
                    slotOne: "shift",
                    slotTwo: "<< >> >>>",
                    slotThree: "left to right",
                },
                {
                    id: 8,
                    slotOne: "relational",
                    slotTwo: "< > <= >= instanceof ==",
                    slotThree: "left to right",
                },
                {
                    id: 9,
                    slotOne: "equality",
                    slotTwo: "== !=",
                    slotThree: "left to right",
                },
                {
                    id: 10,
                    slotOne: "bitwise and",
                    slotTwo: "&",
                    slotThree: "left to right",
                },
                {
                    id: 11,
                    slotOne: "bitwise exclusive or",
                    slotTwo: "^",
                    slotThree: "left to right",
                },
                {
                    id: 12,
                    slotOne: "bitwise inclusive or",
                    slotTwo: "|",
                    slotThree: "left to right",
                },
                {
                    id: 13,
                    slotOne: "logic and",
                    slotTwo: "&&",
                    slotThree: "left to right",
                },
                {
                    id: 14,
                    slotOne: "logic or",
                    slotTwo: "||",
                    slotThree: "left to right",
                },
                {
                    id: 15,
                    slotOne: "conditional",
                    slotTwo: "?:",
                    slotThree: "right to left",
                },
                {
                    id: 16,
                    slotOne: "assignment",
                    slotTwo: "= += -= *= /= %= &= ^= |= <<= >>= >>>=",
                    slotThree: "right to left",
                },
                {
                    id: 17,
                    slotOne: "seperator",
                    slotTwo: ",",
                    slotThree: "left to right",
                },
            ],
        };
    },
    mounted() {
        this.$emit("allHeaders", this.allHeaders);
    },
};
</script>
