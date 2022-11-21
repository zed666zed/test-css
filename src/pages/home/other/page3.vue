<template>
    <div>

        <div>
            <h3>1.单侧投影</h3>
            <ul>
                <li class="t-1"></li>
                <br />
                <li class="t-1-2"></li>
                <br />
                <li class="t-1-3"></li>
            </ul>
        </div>
        <div>
            <h3>2.不规则投影</h3>
            <ul>
                <li class="t-2">Dotted border</li>

            </ul>
        </div>
        <div>
            <h3>3.染色效果</h3>
            <ul>
                <li class="t-3">
                    <img src="../other/images/1.jpg">
                </li>
                <br />
                <li class="t-3-2">
                    <a><img src="../other/images/preview.gif"></a>
                </li>
                <br />
                <li class="t-3-3"></li>
            </ul>
        </div>
        <div>
            <h3>4.毛玻璃效果</h3>
            <ul>
                <li class="t-4">
                    <main>
                        <blockquote>“The only way to get rid of a temptation is to yield to it. Resist it, and your soul
                            grows sick with longing for the things it has forbidden to itself, with desire for what its
                            monstrous laws have made monstrous and unlawful.”
                            <footer>— <cite>Oscar Wilde, The Picture of Dorian Gray</cite></footer>
                        </blockquote>
                    </main>

                </li>

            </ul>
        </div>
        <div>
            <h3>5.折角效果</h3>
            <ul>
                <li class="t-5">
               45角的解决方案
                </li>
                <br />
                <li class="t-5-2">
               其他角度解决方案
                </li>
                <br />
                <li class="t-5-3"></li>
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

.t-1 {
    width: 300px;
    height: 200px;
    background-color: aquamarine;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, .5);
}

.t-1-2 {
    width: 300px;
    height: 200px;
    background-color: aquamarine;
    box-shadow: 0px 7px 4px -4px rgba(0, 0, 0, .5);
}

.t-1-3 {
    width: 300px;
    height: 200px;
    background-color: aquamarine;
    box-shadow: 7px 0px 4px -4px rgba(0, 0, 0, .5),
        -7px 0px 4px -4px rgba(0, 0, 0, .5);
}

.t-2 {
    width: 300px;
    height: 50px;
    background: transparent;
    border: .3em dotted #fb3;
    filter: drop-shadow(.1em .1em .1em rgba(0, 0, 0, .5));
    font: 200%/1.6 Baskerville, Palatino, serif;
    text-align: center;
    text-shadow: .1rem .2rem yellow;
}

.t-3 img {
    filter: sepia() saturate(4) hue-rotate(295deg);
    transition: 1s filter;
    width: 200px;
}

.t-3 img:hover {
    filter: none;
}

.t-3-2 a {
    display: block;
    height: 256px;
    width: 256px;
    background: hsl(335, 100%, 50%);
}

.t-3-2 img {
    mix-blend-mode: luminosity;
}

.t-3-3 {
    width: 640px;
    height: 440px;
    background-size: cover;
    background-color: hsl(96, 3%, 70%);
    background-blend-mode: luminosity;
    transition: .5s background-color;
    background-image: url(../other/images/1.jpg);
}

.t-3-3:hover {
    background-color: transparent;
}
.t-4{
	font: 150%/1.6 Baskerville, Palatino, serif;
}
.t-4 main {
	position: relative;
	margin: 0 auto;
	padding: 1em;
	max-width: 23em;
	background: hsla(0,0%,100%,.25) ;
	overflow: hidden;
	border-radius: .3em;
	box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
	            0 .5em 1em rgba(0, 0, 0, 0.6);
	text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
    
}
.t-4 main::before {
	content: '';
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	margin: -30px;
	z-index: -1;
	background: url("../other/images/1.jpg") 0 / cover ;
	filter: blur(20px);
}
.t-5{
    width: 12em;
	background: #58a; /* Fallback */
	background:
		linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.4) 0) 100% 0 no-repeat,
		linear-gradient(-135deg, transparent 1.4em, #58a 0);
	background-size: 2em 2em, auto;
	padding: 2em;
	color: white;
	font: 100%/1.6 Baskerville, Palatino, serif;
}
.t-5-2{
    position: relative;
	width: 12em;
	background: #58a; /* Fallback */
	background: linear-gradient(-150deg, transparent 1.5em, #58a 0);
	padding: 2em;
	color: white;
	font: 100%/1.6 Baskerville, Palatino, serif;
	border-radius: .5em;
}
/* 绘制不再用渐变 转用伪元素(渐变加转变)*/
.t-5-2::before{
    content: '';
	position: absolute;
	top: 0; right: 0;

	width: 1.73em; height: 3em;
    
	background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) 100% 0 no-repeat;
	transform: translateY(-1.3em) rotate(-30deg); 
	 transform-origin: bottom right;
	border-bottom-left-radius: .5em;
	box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15)
}


</style>