<template>
    <div>
        <div>
            <h3>1.缓动效果:</h3>
            <ul>
                <h5>弹跳动画:</h5>
                <li class="se-1">
                    <div class="ball"></div>
                </li>
                <br />
                <h5>弹性过渡:</h5>
                <li class="se-1-2">
                    <label>
                        Your username:
                        <input value="leaverou">
                        <span class="callout">
                            Only letters, numbers, underscores (_) and hyphens (-) allowed!
                        </span>
                    </label>
                </li>
            </ul>


        </div>
        <div>
            <h3>2.逐帧动画:</h3>
            <ul>
                <li class="se-2">
                    <div class="loader">Loading…</div>
                </li>
            </ul>


        </div>
        <div>
            <h3>3.闪烁效果:</h3>
            <ul>
                <li class="se-3">
                    <p class="blink-smooth-1">Peek-a-boo!</p>
                    <p class="blink-smooth-2">Peek-a-boo!</p>
                    <p class="blink">Peek-a-boo!</p>
                </li>
            </ul>

        </div>
        <div>
            <h3>4.打字动画:</h3>
            <ul>
                <li class="se-4">
                    <h1>CSS is awesome!</h1>
                </li>
            </ul>

        </div>
        <div>
            <h3>5.状态平滑的动画:</h3>
            <ul>
                <li class="se-5">
                    <div class="panoramic"></div>
                </li>
            </ul>

        </div>
        <div>
            <h3>6.沿环形路径平移的动画:</h3>
            <ul>
                <h5>需要两个元素的解决方案:</h5>
                <li class="se-6">
                    <div class="path">
                        <div class="avatar">
                            <img src="http://lea.verou.me/book/adamcatlace.jpg" />
                        </div>
                    </div>
                </li>
                <h5>单个元素的解决方案:</h5>
                <li class="se-6-2">
                    <div class="path">
                        <img src="http://lea.verou.me/book/adamcatlace.jpg" class="avatar" />
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

    }
}
</script>

<style scoped>
ul {
    list-style: none;
}

@keyframes bounce {

    60%,
    80%,
    100% {
        transform: translateY(200px);
        animation-timing-function: ease;
    }

    70% {
        transform: translateY(100px);
    }

    90% {
        transform: translateY(160px);
    }
}

.se-1 .ball {
    width:  3em;
    height: 3em;
    border-radius: 50%;
    margin: auto;
    background: red radial-gradient(at 30% 30%, #fdd, red);
    animation: bounce 2s cubic-bezier(.1, .25, 1, .25) forwards;
}

.se-1 {
    background: linear-gradient(skyblue, white 248px, yellowgreen 0);
    min-height: 40vh;
}
/* 消失的过渡(覆盖一下transform) */
.se-1-2 input:not(:focus)+.callout:not(:hover) {
    transform: scale(0);
    transition: .5s transform;
}
/* 显现的过渡 */
.se-1-2 .callout {
    transition: 2s cubic-bezier(.25, .1, .3, 1.5) transform;
    transform-origin: 1.4em -.4em;
}

.se-1-2 {
    position: relative;
    padding: 1.5em;
    font: 200%/1.6 Baskerville;
    background-color: aquamarine;
}


input {
    display: block;
    padding: 0 .4em;
    font: inherit;
}

.se-1-2 .callout {
    position: absolute;
    max-width: 14em;
    padding: .6em .8em;
    border-radius: .3em;
    margin: .3em 0 0 -.2em;
    background: #fed;
    border: 1px solid rgba(0, 0, 0, .3);
    box-shadow: .05em .2em .6em rgba(0, 0, 0, .2);
    font-size: 75%;
}

.se-1-2 .callout:before {
    content: "";
    position: absolute;
    top: -.4em;
    left: 1em;
    padding: .35em;
    background: inherit;
    border: inherit;
    border-right: 0;
    border-bottom: 0;
    transform: rotate(45deg);
}

@keyframes loader {
    to {
        background-position: -800px 0;
    }
}

.se-2 .loader {
    width: 100px;
    height: 100px;
    /* 隐藏文本 */
    text-indent: 999px;
    overflow: hidden;
    background: url(http://dabblet.com/img/loader.png) 0 0;
    animation: loader 1s infinite steps(8);
}

@keyframes blink-1 {
    50% {
        color: transparent
    }
}

@keyframes blink-2 {
    to {
        color: transparent
    }
}

.se-3 p {
    padding: 1em;
    background: gold;
}

.se-3 .blink-smooth-1 {
    animation: 1s blink-1 infinite;
}

.se-3 .blink-smooth-2 {
    animation: 1s blink-2 infinite;
    animation-direction: alternate;
}

.se-3 .blink {
    animation: 1s blink-1 infinite steps(1);
}

@keyframes typing {
    from {
        width: 0
    }
}

@keyframes caret {
   50% {
        border-right-color: transparent;
    }
}

.se-4 h1 {
    font: bold 200% Consolas, Monaco, monospace;
    /*width: 8.25em;
    ch:0字型的宽度 */
    width: 15ch;
    white-space: nowrap;
    overflow: hidden;
    border-right: .05em solid;
    animation: typing 8s steps(15) infinite,
        caret 1s steps(1) infinite;
}

@keyframes panoramic {
    to {
        background-position: 100% 0;
    }
}

.se-5 .panoramic {
    width: 250px;
    height: 250px;
    background: url('http://c3.staticflickr.com/3/2671/3904743709_74bc76d5ac_b.jpg');
    background-size: auto 100%;
    animation: panoramic 3s linear infinite alternate;
    animation-play-state: paused;
}

.se-5 .panoramic:hover {
    animation-play-state: running;
}

@keyframes spin {
    to {
        transform: rotate(1turn);
    }
}

.se-6 .avatar {
    animation: spin 3s infinite linear;
    transform-origin: 50% 150px;
}

.se-6 .avatar>img {
    animation: inherit;
    animation-direction: reverse;
    display: block;
    width: inherit;
}

.se-6 .avatar {
    width: 50px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
}
.se-6 .path {
    width: 300px;
    height: 300px;
    padding: 20px;
    border-radius: 50%;
    background: #fb3;
}
@keyframes spin2 {
	from {
		transform: rotate(0turn)
		           translateY(-150px) translateY(50%)
		           rotate(1turn)
	}
	to {
		transform: rotate(1turn)
		           translateY(-150px) translateY(50%)
		           rotate(0turn);
	}
}


.se-6-2 .avatar {
	animation: spin2 3s infinite linear;
}


.se-6-2 .avatar {
	display: block;
	width: 50px;
	margin: calc(50% - 25px) auto 0;
	border-radius: 50%;
	overflow: hidden;
   
}

.se-6-2 .path {
	width: 300px; height: 300px;
	padding: 20px;
	border-radius: 50%;
	background: #fb3;
}
</style>
