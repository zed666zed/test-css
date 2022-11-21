<template>
    <div>
        <div>
            <h3>1.选择合适的鼠标光标</h3>
            <ul>
                <li class="fi-1">
                    <button>Button</button>
                    <button disabled>Disabled button</button>
                </li>

            </ul>
        </div>
        <div>
            <h3>2.扩大可点击范围(边框 伪元素)</h3>
            <ul>
                <li class="fi-2">
                    <button>+</button>
                </li>
                <li class="fi-2-2">
                    <button>+</button>
                </li>
            </ul>
        </div>
        <div>
            <h3>3.自定义复选框</h3>
            <ul>
                <li class="fi-3">
                    <input type="checkbox" id="awesome" autofocus />
                    <label for="awesome">Awesome1!</label>
                    <br />
                    <input type="checkbox" id="awesome2" checked />
                    <label for="awesome2">Awesome2!</label>
                    <br />
                    <input type="checkbox" id="awesome3" disabled />
                    <label for="awesome3">Awesome3!</label>
                    <br />
                    <input type="checkbox" id="awesome4" checked disabled />
                    <label for="awesome4">Awesome4!</label>
                </li>
                <li class="fi-3-2">
                    <input type="checkbox" id="Awesome" autofocus />
                    <label for="Awesome">Awesome!</label>

                    <input type="checkbox" id="Awesome2" checked />
                    <label for="Awesome2">Awesome!</label>
                </li>
            </ul>
        </div>
        <div>
            <h3>4.通过阴影来弱化背景</h3>
            <ul>
                <h5>额外html:</h5>
                <li class="fi-4">
                    <div class="overlay"></div>
                    <div class="lightbox">
                        Compose new Tweet
                    </div>
                </li>
                <h5>伪元素方案:</h5>
                <li class="fi-4-2">
                    <div class="lightbox">
                        Compose new Tweet
                    </div>
                </li>
                <h5>box-shadox方案:</h5>
                <li class="fi-4-3">
                    <div class="lightbox">
                        Compose new Tweet
                    </div>
                </li>
                <h5>backdrop方案:</h5>
                <li class="fi-4-4">
                    <button onclick="document.querySelector('#modal').showModal()">Click me</button>
                    <dialog id="modal">
                        O HAI!
                        <button onclick="this.parentNode.close()">Close</button>
                    </dialog>
                </li>

            </ul>
        </div>
        <div>
            <h3>5.通过模糊来弱化背景</h3>
            <ul>
                <li class="fi-5">
                    <main>
                        <button @click="toggle">Show dialog</button>
                        <p class="de-emphasized" ref="p">Bacon ipsum dolorsit amet consectetur short loin ut tri-tip
                            alcatra
                            ground round jowl beef meatloaf in pork.</p>
                    </main>
                </li>

            </ul>
        </div>
        <div>
            <h3>6.滚动提示</h3>
            <ul>
                <li class="fi-6">
                    <ul>
                        <li>Ada Catlace</li>
                        <li>Alan Purring</li>
                        <li>Schrödingcat</li>
                        <li>Tim Purrners-Lee</li>
                        <li>Webkitty</li>
                        <li>Json</li>
                        <li>Void</li>
                        <li>Neko</li>
                        <li>NaN</li>
                        <li>Cat5</li>
                        <li>Vector</li>
                    </ul>
                </li>

            </ul>

        </div>
        <div>
            <h3>7.交互性的图片对比控件</h3>
            <ul>
                <li class="fi-7">
                    <div class="image-slider">
                        <div><img src="http://csssecrets.io/images/adamcatlace-before.jpg" alt="Before" /></div>
                        <img src="http://csssecrets.io/images/adamcatlace.jpg" />
                    </div>
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
        toggle() {
            this.$refs.p.classList.toggle("de-emphasized")
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
}

:disabled,
[disabled],
[aria-disabled="true"] {
    cursor: not-allowed;
    /* cursor: none; */
    /* cursor: all-scroll; */
}

.fi-2 button {
    padding: .3em .5em;
    border: 10px solid transparent;
    border-radius: 50%;
    background: #58a;
    background-clip: padding-box;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .3) inset;
    /* outline: 1px solid  rgba(0,0,0,.3); 模拟边框
    outline-offset: -11px; */
    color: white;
    font: bold 150%/1 sans-serif;
    cursor: pointer;
}

.fi-2-2 button {
    position: relative;
    padding: .3em .5em;
    background: #58a;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .3);
    box-shadow: 0 .1em .2em -.05em rgba(0, 0, 0, .5);
    color: white;
    font: bold 150%/1 sans-serif;
    cursor: pointer;
}

.fi-2-2 button:before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
}

.fi-3 input[type="checkbox"]+label::before {
    content: '\a0';
    display: inline-block;
    /* vertical-align: .2em; */
    width: .8em;
    height: .8em;
    margin-right: .2em;
    border-radius: .2em;
    background: silver;
    text-indent: .15em;
    line-height: 1;
}

.fi-3 input[type="checkbox"]:checked+label::before {
    content: '\2713';
    background: yellowgreen;
}

.fi-3 input[type="checkbox"]:disabled+label::before {
    background: gray;
    box-shadow: none;
    color: #555;
    cursor: not-allowed;
}

.fi-3 input[type="checkbox"]:focus+label::before {
    box-shadow: 0 0 .1em .1em #58a;
}

.fi-3 input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}

.fi-3-2 input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}

.fi-3-2 input[type="checkbox"]+label {
    display: inline-block;
    padding: .35em .5em .2em;
    background: #ccc;
    background-image: linear-gradient(#ddd, #bbb);
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: .3em;
    box-shadow: 0 1px white inset;
    text-align: center;
    text-shadow: 0 1px 1px white;
    cursor: pointer;
}

.fi-3-2 input[type="checkbox"]:checked+label,
.fi-3-2 input[type="checkbox"]:active+label {
    box-shadow: .04em .1em .2em rgba(0, 0, 0, .6) inset;
    border-color: rgba(0, 0, 0, .3);
    background: #bbb;
}

.fi-4,
.fi-4-2,
.fi-4-3 {
    position: relative;
    width: 400px;
    height: 300px;
    overflow: hidden;
    background: url(../other/images/1.jpg) 0/cover;
}

.overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .8);
    display: none;
}

.lightbox {
    position: relative;
    height: 200px;
    width: 200px;
    margin: 50px auto;
    background-color: #58a;
    text-align: center;
    display: none;
}

.fi-4:hover .overlay,
.fi-4:hover .lightbox {
    display: block;
}

.fi-4-2::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .8);
    display: none;
}

.fi-4-2:hover .lightbox,
.fi-4-2:hover::before {
    display: block;
}

.fi-4-3 .lightbox {
    position: absolute;
    left: 25%;
    box-shadow: 0 0 0 880px rgba(0, 0, 0, .8);
}

.fi-4-3:hover .lightbox {
    display: block;
}

dialog::backdrop {
    background: rgba(0, 0, 0, .8)
}

.fi-5 {
    width: 300px;
    height: 100px;
    background: #58a;
}

.fi-5 .de-emphasized {
    filter: blur(3px);
}

.fi-6 ul {
    display: inline-block;
    overflow: auto;
    width: 7.2em;
    height: 7em;
    border: 1px solid silver;
    padding: .3em .5em;
    list-style: none;
    font: 100 200%/1.6 'Frutiger LT Std', sans-serif;
    background:linear-gradient(white 15px, hsla(0,0%,100%,0)) 0 0 /100% 50px,
    radial-gradient(at top, rgba(0,0,0,.2), transparent 70%)  0 0 / 100% 15px,
    linear-gradient(0deg, white 15px, hsla(0,0%,100%,0) ) bottom /100% 50px,
    radial-gradient(at bottom, rgba(0,0,0,.2), transparent 70%)  bottom / 100% 15px;
    background-repeat: no-repeat;
    background-attachment: local ,scroll,local ,scroll;
}
.fi-7 .image-slider {
	position:relative;
	display: inline-block;
}

.fi-7 .image-slider > div {
	position: absolute;
	top: 0; bottom: 0; left: 0;
	width: 50%;
    overflow: hidden;
	max-width: 100%;
	resize: horizontal;
}

.fi-7 .image-slider > div:before {
	content: '';
	position: absolute;
	right: 0; bottom: 0;
	width: 12px; height: 12px;
	padding: 5px;
	background: linear-gradient(-45deg, white 50%, transparent 0);
	background-clip: content-box;
	cursor: ew-resize;
	/* -webkit-filter: drop-shadow(0 0 2px black);
	filter: drop-shadow(0 0 2px black); */
}

.fi-7 .image-slider img {
	display: block;
	user-select: none;
}
</style>