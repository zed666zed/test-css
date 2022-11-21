<template>
    <div>
        <div>
            <h3>1.半透明边框:</h3>
            <div class="f-1">
                <article class="st">Can i haz semi...</article>
            </div>
        </div>
        <br />
        <div>
            <h3>2.多重边框:box-shadow</h3>
            <div class="f-2">

            </div>
            <br />
            <h3>2.多重边框:outline</h3>
            <div class="f-2-2">

            </div>
        </div>
        <div>
            <h3>3.灵活的背景定位:</h3>
            <div class="f-3">

            </div>
        </div>
        <div>
            <h3>4.边框内圆角:</h3>
            <div class="f-4">
                <div>
                    两层结构实现
                </div>
            </div>
            <div class="f-4-2">

                单层结构实现 g

            </div>
            <br/>
            <div class="f-4-3">

                伪元素

            </div>
        </div>
        <br />
        <div>
            <h3>5.条纹背景:</h3>
            <ul>
                <li class="f-5"></li>
                <br />
                <li class="f-5-2"></li>
                <br />
                <li class="f-5-3"></li>
                <br />
                <li class="f-5-4"></li>
                <br />
                <li class="f-5-5"></li>

            </ul>
        </div>
        <div>
            <h3>6.复杂的背景图案</h3>
            <ul>
                <li class="f-6"></li>
                <br />
                <li class="f-6-2"></li>
                <br />
                <li class="f-6-3"></li>
                <br />
                <li class="f-6-4"></li>
                <br />
                <li class="f-6-5"></li>
                <br />
                <li class="f-6-6"></li>
            </ul>
        </div>
        <div>
            <h3>7.伪随机背景</h3>
            <ul>
                <li class="f-7"></li>
                <br />
                <li class="f-7-2"></li>
                <br />
                <li class="f-7-3"></li>
                <br />
                <li class="f-7-4"></li>
                <br />
                <li class="f-7-5"></li>
                <br />
                <li class="f-7-6"></li>
                <br />
                <li class="f-7-7"></li>
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
.f-1 {
    background-color: aqua;
    width: 200px;
    height: 100px;
    overflow: hidden;
}

.st {
    margin: 5px auto;
    width: 120px;
    height: 40px;
    padding: 14px;
    border: 10px solid rgba(255, 255, 255, .5);
    background-color: white;
    /* 裁掉背景 */
    background-clip: padding-box;
}

.f-2 {
    background-color: palevioletred;
    width: 200px;
    height: 100px;
    box-shadow: 0 0 0 5px red, 0 0 0 10px palegoldenrod, 0 2px 5px 10px black
}

.f-2-2 {
    background-color: palevioletred;
    width: 200px;
    height: 100px;
    outline: 1px dashed pink;
    border: 10px solid red;
    outline-offset: -5px;
}

.f-3 {
    /* padding: 50px; 配合origin*/
    width: 200px;
    height: 100px;
    /* position/ size */
    /* background:url(../other/images/preview.gif) no-repeat palevioletred 0 0 / 50px ; */
    background: url(../other/images/preview.gif) no-repeat palevioletred;
    background-size: 50px;
    /* position解决 
     background-position: right 20px  bottom 10px;  */

    /* origin解决 
    background-position: right   bottom ; 
    background-origin: content-box;*/

    /* calc解决 */
    background-position: calc(100% - 10px) calc(100% - 10px);
    ;

}

.f-4 {
    background: gray;
    padding: .8em;
}

.f-4>div {
    background: goldenrod;
    padding: .8em;
    border-radius: 1em;
}

.f-4-2 {
    background: tan;
    border-radius: 1em;
    padding: 1em;
    box-shadow: 0 0 0 .6em #655;
    outline: .6em solid #655;
}
.f-4-3 {
    position: relative;
    padding: 1em;
    border: 2px solid black;
}
.f-4-3::before {
    content: '';
    background-color: bisque;
    border-radius: 20%;
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
}

ul {
    list-style: none;
}

.f-5 {
    height: 100px;
    /* 后面比前面小 会被设置为一样 所有后面可为0 */
    background: linear-gradient(0deg, red 30%, pink 0, pink 66.6%, green 0);
    background-size: 100% 30px;
}

.f-5-2 {
    height: 100px;
    background: linear-gradient(90deg, red 30%, pink 0, pink 66.6%, green 0);
    background-size: 30px 100%;
}

.f-5-3 {
    height: 100px;
    background: linear-gradient(135deg, red 25%, pink 0, pink 50%, red 0, red 75%, pink 0);
    background-size: 30px 30px;
}

.f-5-4 {
    height: 100px;
    background: repeating-linear-gradient(60deg, red 0px, red 10px, pink 0, pink 20px);
}

.f-5-5 {
    background: skyblue;
    height: 100px;
    /* background-image: repeating-linear-gradient(60deg,rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 10px,transparent 0,transparent 20px) ; */
    background-image: repeating-linear-gradient(60deg, rgba(255, 255, 255, 0.5) 0px 10px, transparent 0 20px);
}

.f-6 {
    background: white;
    height: 100px;
    background-image: linear-gradient(90deg, rgba(200, 0, 0, 0.5) 50%, transparent 0), linear-gradient(0deg, rgba(200, 0, 0, 0.5) 50%, transparent 0);
    background-size: 30px 30px;
}

.f-6-2 {
    background: #58a;
    height: 100px;
    background-image: linear-gradient(90deg, white 1px, transparent 0), linear-gradient(0deg, white 1px, transparent 0);
    background-size: 30px 30px;
}

.f-6-3 {
    background: #58a;
    height: 100px;
    background-image: linear-gradient(0deg, red 2px, transparent 0), linear-gradient(90deg, green 2px, transparent 0), linear-gradient(rgba(255, 255, 255, .3) 1px, transparent 0), linear-gradient(90deg, hsla(0, 0%, 100%, .3) 1px, transparent 0);
    background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
}

.f-6-4 {
    background: #58a;
    height: 90px;
    background-image: radial-gradient(tan 30%, transparent 0);
    background-size: 30px 30px;
}

.f-6-5 {
    background: #58a;
    height: 90px;
    background-image: radial-gradient(tan 30%, transparent 0);
    background-size: 30px 30px;
}

.f-6-5 {
    background: #58a;
    height: 90px;
    background-image: radial-gradient(tan 30%, transparent 0),
        radial-gradient(tan 30%, transparent 0);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
}

.f-6-6 {
    background: #eee;
    height: 100px;
    background-image: linear-gradient(45deg, green 25%, transparent 0), linear-gradient(225deg, red 25%, transparent 0),
        linear-gradient(45deg, rgba(0, 0, 0, .25) 25%, transparent 0), linear-gradient(225deg, red 25%, transparent 0);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px, 15px 15px, 30px 30px;
}

/* .f-7{

} */
</style>