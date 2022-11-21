<template>
    <div>
        <div>
            <h3>1.自适应的椭圆</h3>
            <ul>
                <li class="s-1"></li>
                <br />
                <li class="s-1-2"></li>
                <br />
                <li class="s-1-3"></li>
                <br />
                <li class="s-1-4"></li>
            </ul>
        </div>
        <div>
            <h3>2.平行四边形</h3>
            <ul>
                <li class="s-2">666</li>
                <br />
                <li class="s-2-2">
                    <div>嵌套元素方案</div>
                </li>
                <br />
                <li class="s-2-3">伪元素方案</li>
                <br />
                <li class="s-2-4"></li>
                <br />
                <li class="s-2-5"></li>
                <br />
                <li class="s-2-6"></li>
                <br />
                <li class="s-2-7"></li>
            </ul>
        </div>
        <div>
            <h3>3.菱形图片</h3>
            <ul>
                <li class="s-3">
                    <img src="../other/images/preview.gif">
                </li>
                <br />
                <li class="s-3-2">
                    <img src="../other/images/preview.gif">
                </li>

            </ul>
        </div>
        <div>
            <h3>4.切角效果</h3>
            <ul>
                <li class="s-4">

                </li>
                <br />
                <li class="s-4-2">
                </li>
                <br />
                <li class="s-4-3">Hey, focus! You’re supposed to be looking at my corners, not reading my text. The text
                    is just placeholder!</li>
                <br />
                <li class="s-4-4">
                    <img src="../other/images/preview.gif">
                </li>
            </ul>
        </div>
        <div>
            <h3>5.提醒标签页</h3>
            <ul>
                <li class="s-5">

                </li>
                <br />
                <li class="s-5-2">
                    Hey, focus!
                </li>
                <br />
                <li class="s-5-3">Hey, focus! </li>
                <br />
                <li class="s-5-4">
                    Hey, focus!
                </li>
                <li class="s-5-5">
                    <nav>
                        <a href="#">Home</a>
                        <a href="#" class="selected">Projects</a>
                        <a href="#">About</a>
                    </nav>
                    <main>
                        Content area
                    </main>
                </li>
            </ul>
        </div>
        <div>
            <h3>6.简单的饼图</h3>
            <ul>
                <li class="s-6">
                </li>
                <br />
                <li class="s-6-2">
                </li>        
            </ul>
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
ul {
    list-style: none;
}

.s-1 {
    width: 300px;
    height: 200px;
    background-color: aquamarine;
    border-radius: 50%;
}

.s-1-2 {
    width: 300px;
    height: 200px;
    background-color: red;
    border-radius: 50% 50% 50% 50%/ 100% 100% 0 0;
}

.s-1-3 {
    width: 300px;
    height: 200px;
    background-color: green;
    border-radius: 100% 0 0 100% / 50%;
}

.s-1-4 {
    width: 300px;
    height: 200px;
    background-color: bisque;
    border-radius: 100% 0 0 0;
}

.s-2 {
    width: 300px;
    line-height: 200px;
    text-align: center;
    background-color: rgb(226, 196, 255);
    transform: skewX(-45deg) translateX(100px);
}

.s-2-2 {
    width: 300px;
    line-height: 200px;
    text-align: center;
    background-color: bisque;
    transform: skewX(-45deg);
    margin-left: 100px;
}

.s-2-2>div {
    transform: skewX(45deg)
}

.s-2-3 {
    position: relative;
    width: 300px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    margin-left: 100px;
}

.s-2-3::before {
    content: '';
    background-color: bisque;
    transform: skewX(-45deg);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
}

.s-3 {
    width: 256px;
    width: 256px;
    transform: rotate(45deg);
    overflow: hidden;
}

.s-3>img {
    /* max-width: 100%; */
    transform: rotate(-45deg) scale(1.42);
}

.s-3-2>img {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: 1s;
}

.s-3-2>img:hover {

    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.s-4 {
    width: 400px;
    height: 300px;
    background: aqua;
    background: linear-gradient(45deg, transparent 15px, aqua 0) bottom left,
        linear-gradient(-45deg, transparent 15px, yellow 0) bottom right,
        linear-gradient(135deg, transparent 15px, green 0) top left,
        linear-gradient(-135deg, transparent 15px, blue 0) top right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}

.s-4-2 {
    width: 400px;
    height: 300px;
    background: aqua;
    background: radial-gradient(circle at bottom left, transparent 20px, aqua 0),
        radial-gradient(circle at bottom right, transparent 20px, yellow 0),
        radial-gradient(circle at top left, transparent 20px, green 0),
        radial-gradient(circle at top right, transparent 20px, blue 0);
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-position: bottom left, bottom right, top left, top right;
}

.s-4-3 {
    width: 400px;
    height: 300px;
    border: 21px solid #58a;
    border-image: 1 url('data:image/svg+xml,\
	                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a">\
	                      <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2" />\
	                      </svg>');
    background: #58a;
    background-clip: padding-box;
    padding: .2em .3em;
    color: white;
    font: 150%/1.6 Baskerville, Palatino, serif;
}

.s-4-4 {
    width: 256px;
    clip-path:
        polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px),
            calc(100% - 20px) 100%,
            20px 100%, 0 calc(100% - 20px), 0 20px);
}

.s-5 {
    margin: 0 200px;
    width: 400px;
    height: 300px;
    background: #58a;
    position: relative
}

.s-5::before {
    content: '';
    display: block;
    width: 100px;
    height: 300px;
    background: linear-gradient(108deg, transparent 50%, red 0);
    position: absolute;
    left: -100px
}

.s-5::after {
    content: '';
    display: block;
    width: 100px;
    height: 300px;
    background: linear-gradient(-108deg, transparent 50%, red 0);
    position: absolute;
    right: -100px
}

.s-5-2 {
    margin: 0 200px;
    font: 150%/1.6 Baskerville, Palatino, serif;
    padding: .2em .3em;
    color: white;
    background: #58a;
    width: 200px;
    transform: perspective(.5em) rotateX(5deg);
    text-align: center;
}

.s-5-3 {
    margin: 0 200px;
    font: 150%/1.6 Baskerville, Palatino, serif;
    padding: .2em .3em;
    color: red;
    width: 200px;
    text-align: center;
    position: relative
}

.s-5-3::before {
    position: absolute;
    width: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    content: '';
    background: #58a;
    transform: perspective(.5em) rotateX(5deg) scale(1.3);
    transform-origin: bottom;
}

.s-5-4 {
    margin: 0 200px;
    font: 150%/1.6 Baskerville, Palatino, serif;
    padding: .2em .3em;
    color: red;
    width: 200px;
    position: relative;
    text-align: center;
    padding-top: 50px
}

.s-5-4::before {
    position: absolute;
    width: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    content: '';
    background: #58a;
    transform: perspective(.5em) rotateX(5deg);
    transform-origin: bottom;
}
.s-5-5{
    padding: 40px;
	font: 130%/2 Frutiger LT Std, sans-serif;
}
.s-5-5 nav {
	position: relative;
	z-index: 1;
	padding-left: 1em;
}
.s-5-5 nav > a {
	position: relative;
	display: inline-block;
	padding: .3em 1em 0;
	color: inherit;
	text-decoration: none;
	/* margin: 0 -.3em; */
} 
.s-5-5 nav a::before {
	content: ''; /* To generate the box */
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	z-index: -1;
	border-radius: .5em .5em 0 0;
	background: #ccc linear-gradient(0deg ,hsla(0,0%,100%,.6), hsla(0,0%,100%,0));
	box-shadow: 0 .15em white inset;
	/* transform: scale(1.1, 1.3) perspective(.5em) rotateX(5deg);
	transform-origin: bottom; */
    transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
	transform-origin: bottom left;
    /* transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
	transform-origin: bottom right; */
    border: .1em solid rgba(0,0,0,.4);border-bottom: none;
}
.s-5-5 nav a.selected { z-index: 2;}

.s-5-5 nav a.selected::before {
	background-color: #eee;
	margin-bottom: -.08em;
}
.s-5-5 main {
	display: block;
	margin-bottom: 1em;
	background: #eee;
	padding: 1em;
	border-radius: .15em;
    border: .1em solid rgba(0,0,0,.4);
}
.s-6{
    width:100px;
    height:100px;
    border-radius:50%;
    background:yellowgreen;
    background-image:linear-gradient(to right,transparent 50%,#655 0)
}
.s-6::before{
    content:'';
    display:block;
    margin-left:50%;
    height:100%;
    background-color:yellowgreen;
    border-radius: 0 100% 100% 0 /50%;
    /* transform-origin:0 50%; */
    transform-origin:left;
    /* transform:rotate(.1turn); */
    animation: spin 3s linear infinite, bg 6s step-end infinite;
    animation-delay:-5s;
    animation-play-state:paused;
}
@keyframes spin {
	to { transform: rotate(.5turn); }
}
@keyframes bg {
	50% { background: #655; }
}
.s-6-2{
    width:100px;
    height:100px;
    border-radius:50%;
    background: conic-gradient(#655 40%,yellowgreen 0);

}

</style>