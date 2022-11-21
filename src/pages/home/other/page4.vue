<template>
    <div class="s5">

        <div>
            <h5>1.连字符断行</h5>
            <ul>
                <li class="fo-1">
                    “The only way to get rid of a temptation is to yield to it.”
                </li>
                <li class="fo-1-2" lang="en">
                    “The only way to get rid of a temptation is to yield to it.”
                    <!-- &shy;  -->
                </li>
            </ul>
        </div>
        <div>
            <h5>2.插入换行</h5>
            <ul>
                <li class="fo-2">
                    <dl>
                        <dt>Name:</dt>
                        <dd>Lea Verou</dd>

                        <!-- <br/> -->
                        <dt>Email:</dt>
                        <dd>lea@verou.me</dd>
                        <dd>leaverou@mit.edu</dd>

                        <!-- <br/> -->
                        <dt>Location:</dt>
                        <dd>Earth</dd>
                    </dl>
                </li>
            </ul>
        </div>
        <div>
            <h5>3.文本行的斑马线路</h5>
            <ul>
                <li class="fo-3">
                    <pre><code>
 while (true) {
	var d = new Date();
	if (d.getDate()==1 &&amp;
	    d.getMonth()==3) {
	    alert("TROLOLOL");
	}                                                 
} 
                    </code></pre>
                </li>
            </ul>
        </div>
        <div>
            <h5>4.调整tab的宽度</h5>
            <ul>
                <li class="fo-4">
                    <pre><code>
while (true) {
	var d = new Date();
	if (d.getDate()==1 &&
	    d.getMonth()==3) {
	    alert("TROLOLOL");
	}                                                 
}
                    </code></pre>
                </li>
            </ul>
        </div>
        <div>
            <h5>5.连字</h5>
            <ul>
                <li class="fo-5">
                </li>
            </ul>
        </div>
        <div>
            <h5>6.华丽的&符号</h5>
            <ul>
                <li class="fo-6">
                    <h1>HTML & CSS</h1>
                </li>
            </ul>
        </div>
        <div>
            <h5>7.自定义下划线(border-bottom box-shadow)</h5>
            <ul>
                <li class="fo-7">
                    <p>“The only way to <a href="#">get rid of a temp­ta­tion</a> is to <a>yield</a> to it.”</p>
                    <p>“The only way to <a href="#">get rid of a temp­ta­tion</a> is to <a>yield</a> to it.”</p>
                    <p>“The only way to <a href="#">get rid of a temp­ta­tion</a> is to <a>yield</a> to it.”</p>
                    <a href='' class="test">11</a>
                </li>
            </ul>
        </div>
        <div>
            <h5>8.现实中的文字效果</h5>
            <ul>
                <h6>凸版:</h6>
                <li class="fo-8">
                    <p>“The only way to get rid of a temp­ta­tion is to yield to it.”</p>
                    <p>“The only way to get rid of a temp­ta­tion is to yield to it.”</p>
                </li>
                <h6>空心字效果:</h6>
                <li class="fo-8-2">
                    <h1>CSS</h1>
                    <h1>CSS</h1>
                    svg...
                </li>
                <h6>文字外发光效果:</h6>
                <li class="fo-8-3">
                    Glow
                </li>
                <h6>文字凸起效果:</h6>
                <li class="fo-8-4">
                    CSS3d
                </li>
            </ul>
        </div>
        <div>
            <h5>9.环形文字 SVG...</h5>
            
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.s5 {
font: 180%/1.4 Baskerville, serif;
}

ul {
    list-style: none;
}

.fo-1 {
    width: 300px;
    text-align: justify;
}

.fo-1-2 {
    width: 300px;
    text-align: justify;
    hyphens: auto;
}

.fo-2 dt,
dd {
    display: inline;
    margin: 0;
}

.fo-2 dt~dt::before {
    content: "\A";
    white-space: pre;
    /* 文本内换行只有一个 */
}

/* dd + dt dt ~ dt dt:not(:first-child) */
.fo-2 dd+dd::before {
    content: ', ';
    font-weight: normal;
    /* margin-left: -.25em; */
}

.fo-3 pre {
    padding: .5em;
    line-height: 1.5;
    background: hsl(20, 50%, 95%) linear-gradient(rgba(0, 0, 0, .3) 50%, transparent 0);
    background-size: auto 3em;
    background-origin: content-box;
    /* 默认值为padding-box */
    font-family: Consolas, Monaco, monospace;
}

.fo-3 code {
    font: inherit
}

.fo-4 pre {
    padding: .5em;
    line-height: 1.5;
    background: hsl(20, 50%, 95%);
    font-family: Consolas, Monaco, monospace;
    tab-size: 2;
    /* 一个tab等于几个字符 */
}

.fo-4 code {
    font: inherit
}

@font-face {
    font-family: Ampersand;
    src: local('Baskerville-Italic'), local('GoudyOldStyleT-Italic'), local('Garamond-Italic'), local('Palatino-Italic');
    unicode-range: U+26;
    /* 指定特定的字符 'U+'+'&'.charCodeAt(0).toString(16)   范围:U+4?? U+2665-2670*/
}

.fo-6 h1 {
    font-family: Ampersand, Helvetica, sans-serif;
}

.fo-7 p a {
    color: red;
    text-decoration: none;
    background: linear-gradient(0deg, gray, gray) no-repeat;
    background-size: 100% 1px;
    background-position: 0 .9em;
    text-shadow: .05em 0 white, -.05em 0 white;
}

.fo-7>p:nth-child(2) a {
    color: green;
    background: linear-gradient(90deg, gray 60%, transparent 0) repeat-x 0 .9em;
    background-size: 10px 1px;
}

.fo-7>p:nth-child(3) a {
    color: purple;
    background: linear-gradient(45deg, transparent 40%, red 0, red 60%, transparent 0) repeat-x 0 .9em,
        linear-gradient(-45deg, transparent 40%, red 0, red 60%, transparent 0) repeat-x 0 .9em;
    background-size: 6px 6px;
}

.test {

    text-decoration-color: red;
    text-decoration-style: dashed;
}

.fo-8 p {
    padding: .8em 1em;
    background: hsl(210, 13%, 60%);
    color: hsl(210, 13%, 30%);
    text-shadow: 0 1px 1px hsla(0, 0%, 100%, .8);
}

.fo-8 p+p {
    background: hsl(210, 13%, 30%);
    color: hsl(210, 13%, 60%);
    text-shadow: 0 -1px 1px black;
}

/* 凸:深浅浅 浅深深 */
.fo-8-2 h1 {
    font-size: 60px;
    margin: 0;
    color: white;
    text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
}

.fo-8-2 h1:nth-child(2) {
    font-size: 60px;
    margin: 0;
    color: white;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px, 0 0 1px black;
}

.fo-8-3 {
    padding-left: 20px;
    font-size: 60px;
    background: #203;
    color: #ffc;
    transition: 1s;
}

.fo-8-3:hover {
    color: transparent;
    text-shadow: 0 0 .1em white, 0 0 .3em white;
    /* filter: blur(.1em); */
    /* 上为模糊(css滤镜好一点) 下为亮 */
    /* text-shadow: 0 0 .1em , 0 0 .3em ;  */
}

.fo-8-4 {
    padding-left: 20px;
    font-size: 60px;
    background: #58a;
    color: white;
    text-shadow: 0 1px hsl(0, 0%, 85%),
        0 2px  hsl(0, 0%, 80%),
        0 3px  hsl(0, 0%, 75%),
        0 4px  hsl(0, 0%, 70%),
        0 5px  hsl(0, 0%, 65%),
        /* 0 5px hsl(0, 0%, 35%) */
        0 5px 10px black;
}
</style>