<template>
    <div class="box">
        <div class="bk">
            user
        </div>
        <br />
        <button class="ok">Yes!</button>--
        <button class="cancel">No!</button>
        <br /><br />
        <section class="callout">Only title ,sdawdadwadfawwahdahdaw</section>
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
.bk {
    background: rgb(255, 128, 0);
    background: linear-gradient(90deg, yellow, red);
    height: 200px;
}
button{
    /* 半透明黑色 rgba(0,0,0,0.5) 变暗  半透明白色rgba(255,255,255,0.2) 变亮*/
    border: 1px solid rgba(0,0,0,.5);
    background: #c90e0e ;
    padding:.3em .8em;
    color: white;
    box-shadow: 0 .05em .25em rgba(0,0,0,.5);
    border-radius: 12%;
    line-height: 1.5;
    font-size: 125%;
    text-shadow:0 -.05em .05em rgba(0,0,0,.5);
    }
button.ok{
    background-color: green;
}
.callout{
    width: 500px;
    height: 200px;
    background-color: aqua;
    border: 1px solid rgba(0,0,0,.5);
    border-radius: 5px;
    position: relative;
    padding: 10px;
}
.callout::before{
    content: '';
    padding: 5px;
    background-color: #c90e0e;
    position: absolute;
    transform: rotate(45deg);
    top:-6px;
    left: 15px;
    border: inherit;
    background-color: inherit;
    border-right: none;
    border-bottom: none;
}
/* 1、左侧不加边框写法 日后改边框宽度  2、currentColor变量:color 3、inherit:文本框的字体 超链接文本颜色*/

</style>