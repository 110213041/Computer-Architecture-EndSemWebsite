<template>
    <div class="chapter-container">
        <div class="chapter-article">
            <div class="article-container">
                <!-- <h3>類別與物件的基本概念</h3> -->
                <HeaderTemplate
                    :title="allHeaders[0].title"
                    :headerLevel="allHeaders[0].headerLevel"
                    :headerId="0"
                ></HeaderTemplate>

                <p>
                    所謂物件,說得白話一點,可稱之為"東西"。這是個很抽象的名詞,我們若以它具體的特性來描述,會比較清楚:
                </p>

                <ul>
                    <li>Object有生命週期,會"產生"和"消滅"</li>
                    <li>
                        Object具有其內部狀態, 同一類別的不同Object,
                        其的內部狀態可能都不一樣
                    </li>
                    <li>
                        Object可以接收"訊息",並依據訊息的參數以及該物件的內部狀態,做出反應,並可能因而改變該物件的內部狀態
                    </li>
                </ul>

                <p>
                    屬於同一個Class的Object,會具有該Class所定義的以上三種特質。
                </p>

                <p>
                    除此之外,Class之間可以定義繼承(Inheritance)關係,子類別(Sub
                    Class)繼承父類別(Super
                    Class)的所有特性,子類別還可以定義其專屬的特性。
                </p>

                <p>
                    以Object-Oriented(物件導向)
                    Language寫作程式時,寫作的主體是Class。Class定義了所有屬於該Class的Object的特性,這些特性可分類如下:
                </p>

                <ul>
                    <li>
                        Object產生時一定要呼叫的方法,
                        稱為Constructor(建構子)
                    </li>
                    <li>
                        Object消滅需要呼叫的方法, 稱為Destructor(解構子)
                    </li>
                    <li>
                        表達Object內部狀態的變數, 稱為Object
                        Variable(物件變數成員)
                    </li>
                    <li>
                        Object可以接收的訊息, 稱為Object
                        Method(物件方法成員)
                    </li>
                    <li>上述兩個可總稱為Object Member</li>
                    <li>
                        屬於Class的變數, 稱為Class Variable(類別變數)
                    </li>
                    <li>屬於Class的方法, 成為Class Method(類別方法)</li>
                    <li>上述兩個可總稱為Class Member</li>
                    <li>和其他Class間的繼承關係</li>
                </ul>
            </div>
            <div class="article-container">
                <!-- <h3>如何以Java撰寫類別</h3> -->
                <HeaderTemplate
                    :title="allHeaders[1].title"
                    :headerLevel="allHeaders[1].headerLevel"
                    :headerId="1"
                ></HeaderTemplate>

                <p>
                    Java規定公共類別(public
                    class)必須寫在該公共類別名稱的.java檔案內,
                    例如public class
                    Example就必須寫在Example.java這個檔案內。Example.java裡面也可以定義其他的類別,但是只有class
                    Example能夠宣告為public,其他Example.java裡的class都不能宣告為public。當Java
                    Virtual
                    Machine啟動時,它會去找命令列上所指定的class裡的public
                    static void main(String[]
                    argv)方法,當做是程式的進入點。這有點像是C語言的main,
                    不同處在於每個java class都可以定義自己的public
                    static void main(String[] argv)。
                </p>

                <highlightjs
                    class="code-container"
                    autodetect
                    code="java Example"
                ></highlightjs>

                <p>
                    啟動上述的JVM時, JVM會去執行class Example裡的public
                    static void main(String[]
                    argv)。以下範例Example.java說明如何定義Java的class。
                </p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code='class Vehicle {
    private int speed; // Object Variable
    private String direction; // Object Variable, direction is a reference to String Object
    private static int numVehicle = 0; // Class Variable
    public Vehicle() { // Constructor, called when new a Object
        this(0,"north"); // call another constructor to do initialization
    }
    public Vehicle(int s, String dir) { // Another Constructor. Use overloading to define two constructors
        float speed; // define a local variable
        speed = s; // the speed here refers to the above local variable
        this.speed = s; // If we want to set object variable, use this.speed to refer object variable speed
        direction = dir; // dir is a reference to object, not the object itself
        numVehicle++;   // increase the Vehicle number
    }
    protected void finalize() { // Destructor, called when the object is garbage collected by JVM
        System.out.println("finalize has been called");
        numVehicle--;
    }
    void setSpeed(int newSpeed) { // Object Method
        this.speed = newSpeed;
    }
    void setDir(String dir) { // Object Method
        this.direction = dir;
    }
    int getSpeed() { // Object Method
        return speed;
    }
    String getDir() { // Object Method
        return direction;
    }
    public static int totalVehicle() { // Class Method
        return numVehicle;
    }
}
public class Example {
    public static void main(String[] argv) {
        Vehicle v1 = new Vehicle(50, "west"); // new 敘述用來產生物件. 物件產生時需要呼叫Constructor來初始化物件
        Vehicle v2;
        v1.setSpeed(30);
        v1.setDir("north");
        System.out.println("V1: speed is "+v1.getSpeed()+", direction is "+v1.getDir()+".\n");
        v2 = new Vehicle(40, "south");
        System.out.println("There are "+Vehicle.totalVehicle()+" Vehicles in the world.\n");
        v1 = v2; // let reference v1 point to where v2 is pointing
        System.out.println("V1: speed is "+v1.getSpeed()+", direction is "+v1.getDir()+".\n");
        System.gc(); // force system to do garbage collection, the object previously pointed by v1 shall be destroyed
        System.out.println("There are "+Vehicle.totalVehicle()+" Vehicles in the world.\n");
    }
}'
                ></highlightjs>

                <p>上述例子裡所用到的關鍵字或類別名稱說明如下:</p>

                <ul>
                    <li>
                        public:可用在
                        <ul>
                            <li>
                                class前面表示此class可以供其他package裡的類別使用。同一個目錄下的class均可視為屬於同一個package。
                            </li>
                            <li>
                                object or class member前面,
                                表示所有的class均可存取此member。
                            </li>
                        </ul>
                    </li>
                    <li>
                        private:可用在object or class member前面,
                        表示只有定義這些member的class才可存取。
                    </li>
                    <li>
                        static:可用在member前面。如果member前面有static,
                        表示該member屬於class,否則屬於object。不論系統創造了多少object,class
                        variable只有一個;而每個object都有其object
                        variable。存取class
                        method的語法是ClassName.classMethod();存取object
                        method時,則必須以reference.objectMethod()來呼叫。在Object
                        Method裡,可用this表示目前的物件。但在Class
                        Method裡就不能存取object member了。
                    </li>
                    <li>this:表示目前這個物件</li>
                    <li>
                        String:定義於java.lang package下面的類別,
                        屬於Java語言定義的標準程式庫。
                    </li>
                    <li>
                        System:定義於java.lang package下面的類別,
                        屬於Java語言定義的標準程式庫。
                    </li>
                    <li>
                        System.out是class System裡面的一個Class
                        Variable, 其型態為reference to 定義於java.io
                        package裡面的PrintStream。我們可透過該變數所指到的物件,
                        將訊息印到螢幕上。
                    </li>
                    <li>
                        System.gc是class System裡面的一個Class Method,
                        呼叫該方法可強迫JVM回收沒有被任何reference指到的物件。當物件被回收時,
                        該物件的finalize方法會被呼叫。
                    </li>
                    <li>
                        new:用來產生新的物件。後面必須跟著某個constructor,
                        以便進行初始化的動作。
                    </li>
                </ul>
            </div>
            <div class="article-container">
                <HeaderTemplate
                    :title="allHeaders[2].title"
                    :headerLevel="allHeaders[2].headerLevel"
                    :headerId="2"
                ></HeaderTemplate>
                <!-- <h3>
                Object Method的名稱如果和Class的名稱相同,
                則表示該Method為Constructor。Constructor不能宣告傳回值。
            </h3> -->

                <p>
                    要附帶說明的是, Java以new指令來產生物件,
                    但不像C++有提供相對應的delete指令來消滅物件。Java採用Garbage
                    Collection的觀念,當系統於閒置期間自動呼叫或由使用者強制呼叫System.gc()時,沒有被任何reference指到的Object就會被回收。
                </p>

                <p>
                    Class裡面一定要定義一個以上的Constructor,
                    但為了方便起見,如果Compiler發現某Class沒有定義Constructor,則Compiler會幫我們產生一個不做任何事的Constructor:
                </p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class A {
}"
                ></highlightjs>

                <p>就相當於</p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class A {
    public A() {}
}"
                ></highlightjs>
            </div>

            <div class="article-container">
                <HeaderTemplate
                    :title="allHeaders[3].title"
                    :headerLevel="allHeaders[3].headerLevel"
                    :headerId="3"
                ></HeaderTemplate>
                <!-- <h3>Overloading</h3> -->

                <p>
                    同一個class裡的Method名稱可以重複使用,只要可以由Method的參數個數和型態來區分就可以了。這種觀念稱為overloading。
                </p>

                <p>
                    不只一般的method可以overloading,
                    constructor也可以overloading。
                </p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class Overloading {
                        int data;
    public Overloading() {
        this(0); // call constructor Overloading(int)
    }
    public Overloading(int data) {
        this.data = data;
    }
    public void print() {
        this.print(0); // call method print(int)
    }
    public void print(int msg) {
        }
    public void print(float msg) {
        }
    public void print(int msg, String others) {
        }
}"
                ></highlightjs>

                <p>
                    上面的例子裡說明constructor也可以overloading。要特別注意的是,傳回值並不能用來分辨要呼叫哪個method,因此若再加上public
                    int print()的宣告,就會造成編譯錯誤了。
                </p>

                <!-- <h3>初始化的執行順序</h3> -->
                <HeaderTemplate
                    :title="allHeaders[4].title"
                    :headerLevel="allHeaders[4].headerLevel"
                    :headerId="4"
                ></HeaderTemplate>

                <p>
                    Class variable是在該類別載入JVM時進行初始化的,
                    因此寫作上經常在class
                    variable的宣告後面加上初始化的動作。對Object
                    Variable來說, 是在產生Object時進行初始化的,
                    但初始化的步驟可以寫在變數宣告後,
                    也可以寫在constructor內,
                    因此必須對其執行順序有所了解。步驟如下:
                </p>

                <ol>
                    <li>
                        先將所有變數設為內定值。對數值型態來說,
                        其值為0;對reference來說,
                        其值為null;對boolean來說, 其值為false。
                    </li>
                    <li>呼叫父類別的constructor。</li>
                    <li>執行變數宣告的初始化動作。</li>
                    <li>執行自己的constructor。</li>
                </ol>

                <p>因此在如下的範例內</p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class InitSequence {
    int data = 2;
    public InitSequence(int data) {
        this.data = data;
    }
    public static void main(String[] argv) {
        InitSequence s = new InitSequence(3);
        System.out.println(s.data);
    }
}"
                ></highlightjs>

                <p>data的變化如下</p>

                <ol>
                    <li>設為內定值0</li>
                    <li>
                        呼叫父類別的Constructor。因為類別InitSequence沒有宣告繼承任何類別,
                        Java規定此情況會自動繼承java.lang.Object這個類別。Object的Constructor不做任何事。
                    </li>
                    <li>執行變數宣告的初始動作,成為2</li>
                    <li>執行自己的constructor,成為3</li>
                </ol>

                <p>因此最後執行的結果會在螢幕上印出數字3。</p>

                <p>Java語言還可以定義static block:</p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class StaticBlock {
    static { // this is a static block
        data = (int)(Math.random()*100);
    }
    static int data;
    public static void main(String[] argv) {
        System.out.println(data);
    }
}"
                ></highlightjs>

                <p>
                    static block內的程式碼, 是在該class載入JVM之後,
                    進行class
                    variable初始化之前的時間內執行。一般比較會使用static
                    block的場合, 是該class用到一些非Java的程式庫,
                    需要透過System.loadLibrary(String
                    libName)方法把外界的程式碼載入時。這樣寫的好處是只有當該class第一次被使用到時,
                    才會下載相關軟體, 以節省記憶體空間, 避免重複下載,
                    並可以把實作的細節和外界隔離開來。對沒有這種機制的C語言來說,
                    很可能就必須在主程式內寫上一堆很難懂的啟動程式碼。
                </p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code='class ClassNeedToLoadLibrary {
    static {
        System.loadLibrary("mylib");
    }
}
public class Main {
    public static void main(String[] argv) {
    }
}'
                ></highlightjs>
            </div>
            <div class="article-container">
                <!-- <h3>final關鍵字</h3> -->
                <HeaderTemplate
                    :title="allHeaders[5].title"
                    :headerLevel="allHeaders[5].headerLevel"
                    :headerId="5"
                ></HeaderTemplate>

                <p>
                    final關鍵字用在變數宣告時,表示該變數的值只能在宣告時給定,然後就不能再更改了。
                </p>

                <highlightjs
                    class="code-container"
                    language="java"
                    code="public class Main {
    public static final double PI = 3.14159;
    public final int x = 10;
    public static void main(String[] argv) {
        final int local = 10;
        Main m = new Main();
        PI = 100; // Compile Error, final variable can only be set at initialization
        m.x = 10; // Compile Error
        local = 100; // Compile Error
    }
}"
                ></highlightjs>
            </div>
        </div>
        <TableOfContentSidebar
            :allHeaders="allHeaders"
        ></TableOfContentSidebar>
    </div>
</template>

<script>
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import TableOfContentSidebar from "@/components/TableOfContentSidebar.vue";
import HeaderTemplate from "@/components/HeaderTemplate.vue";

export default {
    name: "J_Chapter2",
    components: {
        highlightjs: hljsVuePlugin.component,
        TableOfContentSidebar,
        HeaderTemplate,
    },
    emits: ["allHeaders"],
    data() {
        return {
            allHeaders: [
                { title: "類別與物件的基本概念", headerLevel: 3 },
                { title: "如何以Java撰寫類別", headerLevel: 3 },
                {
                    title: "Object Method的名稱如果和Class的名稱相同,<br />則表示該Method為Constructor。Constructor不能宣告傳回值。",
                    headerLevel: 3,
                },
                { title: "Overloading", headerLevel: 3 },
                { title: "初始化的執行順序", headerLevel: 3 },
                { title: "final關鍵字", headerLevel: 3 },
            ],
        };
    },
    mounted() {
        this.$emit("allHeaders", this.allHeaders);
    },
};
</script>
