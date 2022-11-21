<template>
    <div>
        <div>
            <h3>1.自适应内部元素:</h3>
            <div class="si-1">
                <p>Let’s assume we have some text here. Bacon ipsum dolor sit amet turkey veniam shankle, culpa short
                    ribs kevin t-bone occaecat.</p>
                <figure>
                    <img src="./images/1.jpg" />
                    <figcaption>
                        The great Sir Adam Catlace was named after Countess Ada Lovelace, the first programmer ever.
                    </figcaption>
                </figure>
                <p>We also have some more text here. Et laborum venison nostrud, ut veniam sint kielbasa ullamco
                    pancetta.</p>

            </div>
        </div>
        <div>
            <h3>2.精确控制表格列宽:</h3>
            <div class="si-2">
                <section>
                    <h1>With table-layout: auto</h1>
                    <div>
                        <table>
                            <tr>
                                <td>If we don’t…</td>
                                <td>specify a cell width, they will be assigned one that depends on their contents.
                                    Notice how the cell with the more content here is much wider.</td>
                            </tr>
                        </table>

                        <table>
                            <tr>
                                <td>If we don’t…</td>
                                <td>specify a cell width, they will be assigned one that depends on their contents.
                                    Notice how the cell with the more content here is much wider.</td>
                            </tr>
                            <tr>
                                <td>All rows take part in calculating the widths, not just the first one.</td>
                                <td>Notice how the dimensions here are different than the previous example.</td>
                            </tr>
                        </table>

                        <table>
                            <tr>
                                <td style="width: 1000px">If we specify a width, it will not always be followed. I have
                                    a width of <code>1000px</code>…</td>
                                <td style="width: 2000px">…and I have a width of <code>2000px</code>. Because there’s
                                    not enough space for <code>3000px</code>, they are reduced proportionally, to 33.3%
                                    and 66.6% of the total width.</td>
                            </tr>
                        </table>

                        <table>
                            <tr>
                                <td>If we prevent word wrapping, the table can become so wide it grows beyond its
                                    container.</td>
                                <td class="preformatted">…and <code>text-overflow: ellipsis</code> doesn’t help either........
                                </td>
                            </tr>
                        </table>

                        <table>
                            <tr>
                                <td>Large images and blocks of code can also cause the same issue.</td>
                                <td><img src="http://lea.verou.me/book/panoramic.jpg" /></td>
                            </tr>
                        </table>
                    </div>
                </section>

                <section>
                    <h1>With table-layout: fixed</h1>
                    <div>
                        <table >
                            <tr>
                                <td>If we don’t…</td>
                                <td>specify a cell width, they will be assigned one that depends on their contents.
                                    Notice how the cell with the more content here is much wider.</td>
                            </tr>
                        </table>

                        <table>
                            <tr>
                                <td>If we don’t…</td>
                                <td>specify a cell width, they will be assigned one that depends on their contents.
                                    Notice how the cell with the more content here is much wider.</td>
                            </tr>
                            <tr>
                                <td>All rows take part in calculating the widths, not just the first one.</td>
                                <td>Notice how the dimensions here are different than the previous example.</td>
                            </tr>
                        </table>

                        <table>
                            <tr>
                                <td style="width: 1000px">If we specify a width, it will not always be followed. I have
                                    a width of <code>1000px</code>…</td>
                                <td style="width: 2000px">…and I have a width of <code>2000px</code>. Because there’s
                                    not enough space for <code>3000px</code>, they are reduced proportionally, to 33.3%
                                    and 66.6% of the total width.</td>
                            </tr>
                        </table>

                        <table>
                            <tr>
                                <td>If we prevent word wrapping, the table can become so wide it grows beyond its
                                    container.</td>
                                <td class="preformatted">…and <code>text-overflow: ellipsis</code> doesn’t help either.......
                                </td>
                            </tr>
                        </table>

                        <table>
                            <tr>
                                <td>Large images and blocks of code can also cause the same issue.</td>
                                <td><img src="http://lea.verou.me/book/panoramic.jpg" /></td>
                            </tr>
                        </table>
                    </div>
                </section>
            </div>
        </div>
        <div>
            <h3>3.根据兄弟元素的数量来设置样式:</h3>
            <div class="si-3">

            </div>
        </div>
        <div>
            <h3>4.满幅的背景,定宽的内容:</h3>
            <div class="si-4">
                <header>
                    <h1>Fluid background, <br />fixed content</h1>
                </header>
                <section>
                    <h1>Heading</h1>
                    <p>Bacon ipsum dolor amet voluptate et shoulder, ipsum flank tongue exercitation commodo sed beef
                        ribs drumstick in venison laborum. Laboris ut enim id drumstick, et aute esse. Consequat ad
                        kielbasa anim pork loin turkey qui cupidatat drumstick doner labore. Nulla sirloin jerky do sed
                        magna meatloaf. Ribeye ea ut elit leberkas laboris sausage corned beef drumstick cillum non.</p>
                </section>
                <section>
                    <h1>Another heading</h1>
                    <p>Nostrud landjaeger cillum beef cow tail cupidatat non mollit voluptate jowl. Enim sunt in, flank
                        hamburger proident qui. Id aute excepteur chuck magna tempor ipsum pork chop t-bone. Frankfurter
                        meatball pork loin beef et leberkas pork. Pig ball tip pancetta in.</p>
                    <p>Ribeye in veniam ipsum flank. Elit incididunt t-bone proident meatball. Porchetta exercitation
                        prosciutto sausage chuck ut eu brisket shank pastrami turkey sunt laboris tenderloin anim.
                        Landjaeger do venison laboris kevin.</p>
                </section>
                <footer>
                    <p>&copy; 2015 Lea Verou (j/k, feel free to use wherever)</p>
                    <p>Consectetur et t-bone pork loin. Tri-tip cupim in, spare ribs velit exercitation in. Tempor
                        cillum fugiat, nisi leberkas reprehenderit anim laboris proident cow. Eu fatback kevin sint, ad
                        shoulder in venison picanha. Sausage drumstick capicola, culpa boudin pork belly minim aute
                        ipsum biltong picanha venison nulla adipisicing.</p>
                </footer>
            </div>
        </div>
        <div>
            <h3>5.垂直居中</h3>
            <ul>
                <h5>flexbox:</h5>
                <li class="si-5">
                    <main>
                        Center me, please!
                    </main>
                </li>
                <h5>绝对定位:</h5>
                <li class="si-5-2">
                    <main>
                        <h1>Am I centered yet?</h1>
                        <p>Center me, please!</p>
                    </main>
                </li>
                <h5>视口单位:</h5>
                <li class="si-5-3">
                    <main>
                        <h1>Am I centered yet?</h1>
                        <p>Center me, please!</p>
                    </main>

                </li>
                <li class="si-5-4"></li>
            </ul>
        </div>
        <div>
            <h3>6.紧贴底部的页脚</h3>
            <ul>
                <h5>固定高度的解决方案:</h5>
                <li class="si-6">
                    <header>
                        <h1>Site name</h1>
                    </header>
                    <main>
                        <input type="checkbox" id="contents" /><label for="contents">Toggle contents</label>
                        <p>Bacon ipsum dolor sit amet turkey veniam shankle, culpa short ribs kevin t-bone occaecat. Et
                            laborum venison nostrud, ut veniam sint kielbasa ullamco pancetta. Qui drumstick tail, bacon
                            leberkas shoulder capicola laborum. Minim ipsum bacon, mollit laboris t-bone pariatur. Ham
                            hock reprehenderit sint beef, sausage pig eiusmod t-bone shankle strip steak.</p>
                        <p>Cow enim excepteur, boudin dolore lorem magna fugiat consequat voluptate. Picanha fugiat
                            chicken, cupim aliquip magna filet mignon prosciutto ut nostrud. Kielbasa rump frankfurter
                            sunt corned beef. Andouille in cillum deserunt, rump et picanha landjaeger tongue anim.</p>
                        <p>Ad meatball ipsum ground round shank. Quis ipsum meatball exercitation. Laborum swine spare
                            ribs, sunt ball tip magna t-bone venison. Velit doner voluptate non occaecat do ribeye kevin
                            strip steak et. Esse biltong shank ribeye dolor pariatur aute deserunt non est eiusmod pork
                            belly pancetta pork chop. Pork chop id consectetur rump, meatball short loin brisket tail
                            andouille deserunt alcatra irure prosciutto do.</p>
                        <p>Dolore reprehenderit ex, meatball doner commodo consectetur ea ribeye. Ad aliqua kevin, chuck
                            excepteur minim et cow esse ham hock landjaeger. Alcatra bresaola dolore tempor do,
                            excepteur in velit flank officia dolore meatloaf corned beef picanha. Eu pancetta brisket
                            eiusmod ipsum aute sausage, culpa rump shoulder excepteur nostrud venison sed pork loin.
                            Tempor proident do magna ground round. Ut venison frankfurter et veniam dolore. Pig pork
                            belly beef ribs kevin, doner exercitation magna esse shankle.</p>
                        <p>Flank anim chuck boudin id consectetur bresaola ham pork loin cupim andouille frankfurter.
                            Proident do ball tip nostrud nulla sed, frankfurter ut commodo corned beef ut. Ex aute in,
                            pig deserunt beef ribs turducken pastrami irure ball tip pork belly pork chop sausage id.
                            Chicken sunt nisi tempor sed. In eiusmod non fatback tempor tenderloin pastrami adipisicing
                            cow lorem ut tail jerky cupidatat venison. Jowl consequat commodo pork loin ipsum pork belly
                            prosciutto aute beef. Ball tip shoulder aliqua, fugiat landjaeger kevin pork chop beef ribs
                            leberkas hamburger cillum turkey ut doner culpa.</p>
                    </main>
                    <footer>
                        <p>© 2015 No rights reserved.</p>
                        <p>Made with ♥ by an anonymous pastafarian.</p>
                    </footer>
                </li>
                <h5>更灵活的解决方案:</h5>
                <li class="si-6-2">
                    <header>
                        <h1>Site name</h1>
                    </header>
                    <main>
                        <input type="checkbox" id="contents" /><label for="contents">Toggle contents</label>
                        <p>Bacon ipsum dolor sit amet turkey veniam shankle, culpa short ribs kevin t-bone occaecat. Et
                            laborum venison nostrud, ut veniam sint kielbasa ullamco pancetta. Qui drumstick tail, bacon
                            leberkas shoulder capicola laborum. Minim ipsum bacon, mollit laboris t-bone pariatur. Ham
                            hock reprehenderit sint beef, sausage pig eiusmod t-bone shankle strip steak.</p>
                        <p>Cow enim excepteur, boudin dolore lorem magna fugiat consequat voluptate. Picanha fugiat
                            chicken, cupim aliquip magna filet mignon prosciutto ut nostrud. Kielbasa rump frankfurter
                            sunt corned beef. Andouille in cillum deserunt, rump et picanha landjaeger tongue anim.</p>
                        <p>Ad meatball ipsum ground round shank. Quis ipsum meatball exercitation. Laborum swine spare
                            ribs, sunt ball tip magna t-bone venison. Velit doner voluptate non occaecat do ribeye kevin
                            strip steak et. Esse biltong shank ribeye dolor pariatur aute deserunt non est eiusmod pork
                            belly pancetta pork chop. Pork chop id consectetur rump, meatball short loin brisket tail
                            andouille deserunt alcatra irure prosciutto do.</p>
                        <p>Dolore reprehenderit ex, meatball doner commodo consectetur ea ribeye. Ad aliqua kevin, chuck
                            excepteur minim et cow esse ham hock landjaeger. Alcatra bresaola dolore tempor do,
                            excepteur in velit flank officia dolore meatloaf corned beef picanha. Eu pancetta brisket
                            eiusmod ipsum aute sausage, culpa rump shoulder excepteur nostrud venison sed pork loin.
                            Tempor proident do magna ground round. Ut venison frankfurter et veniam dolore. Pig pork
                            belly beef ribs kevin, doner exercitation magna esse shankle.</p>
                        <p>Flank anim chuck boudin id consectetur bresaola ham pork loin cupim andouille frankfurter.
                            Proident do ball tip nostrud nulla sed, frankfurter ut commodo corned beef ut. Ex aute in,
                            pig deserunt beef ribs turducken pastrami irure ball tip pork belly pork chop sausage id.
                            Chicken sunt nisi tempor sed. In eiusmod non fatback tempor tenderloin pastrami adipisicing
                            cow lorem ut tail jerky cupidatat venison. Jowl consequat commodo pork loin ipsum pork belly
                            prosciutto aute beef. Ball tip shoulder aliqua, fugiat landjaeger kevin pork chop beef ribs
                            leberkas hamburger cillum turkey ut doner culpa.</p>
                    </main>
                    <footer>
                        <p>© 2015 No rights reserved.</p>
                        <p>Made with ♥ by an anonymous pastafarian.</p>
                    </footer>
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

.si-1 figure {
    max-width: 300px;
    max-width: min-content;
    margin: auto;
}
/* 由内部决定的话这里不会生效 */
.si-1 figure>img {
    max-width: inherit
}

.si-1 figure {
    padding: 10px;
    border: 1px solid silver;
}


.si-2 section {
    width: 500px;
    margin: 2em;
    background:rgb(151, 52, 52);
}

.si-2 table {
    border-collapse: collapse;
    margin-bottom: 1em;
    width: 100%;
}

.si-2 section+section table {
    table-layout: fixed
}

.si-2 td {
    border: 1px solid #aaa;
}

.si-2 td.preformatted {
    font-family: Consolas, Monaco, monospace;
    white-space: pre;
    text-overflow: ellipsis;
    overflow: hidden;
}


.si-4 header,
.si-4 section,
.si-4 footer {
    padding: 1em;
    padding: 1em calc(50% - 350px);
}

.si-4 footer {
    background: #333;
    color: white;
}

.si-4 header {
    background: orange;
    color: white;
}

.si-4 section+section {
    background: #eee;
}

.si-4 {
    margin: 0;
    font: 100%/1.5 sans-serif;
}

.si-5 {
    display: flex;
    align-items: center;
    min-height: 100%;
    margin: 0;
    height: 300px;
    background: #fb3;
    font: 100%/1.5 sans-serif;
}


.si-5 main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18em;
    height: 10em;
    padding: 1em 1.5em;
    margin: 0 auto;
    box-sizing: border-box;
    background: #655;
    color: white;
    text-align: center;
}

.si-5 h1 {
    margin: 0 0 .2em;
    font-size: 150%;
}

.si-5 p {
    margin: 0;
}

.si-5-2 main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 1em 1.5em;
    box-sizing: border-box;
    background: #655;
    color: white;
    text-align: center;
}

.si-5-2 h1 {
    margin: 0 0 .2em;
    font-size: 150%;
}

.si-5-2 p {
    margin: 0;
}

.si-5-2 {
    height: 300px;
    position: relative;
    background: #fb3;
    font: 100%/1.5 sans-serif;
}

.si-5-3 main {
    width: 18em;
    padding: 1em 1.5em;
    margin: 20vh auto 0;
    /* margin百分比不行以父的width计算 */
    transform: translateY(-50%);
    box-sizing: border-box;
    background: #655;
    color: white;
    text-align: center;
}

.si-5-3 h1 {
    margin: 0 0 .2em;
    font-size: 150%;
}

.si-5-3 p {
    margin: 0;
}

.si-5-3 {
    background: #fb3;
    font: 100%/1.5 sans-serif;
    overflow: hidden;
}

.si-6 main {
    min-height: calc(400px - 5em - 7em);
}


#contents:checked~p {
    display: none
}

.si-6 {
    margin: 0;
    font: 100%/1.5 Palatino Linotype, Palatino, serif;
}

.si-6 h1 {
    margin: .5em 0 0;
}

.si-6 header {
    text-align: center;
    height: 3em;
    background-color: #aaa;
}

.si-6 main,
.si-6 footer {
    display: block;
    padding: .5em calc(50% - 400px);
}

.si-6 footer {
    background: linear-gradient(#222, #444);
    color: white;
    height: 6em;
}
.si-6-2 {
	display: flex;
	flex-direction: column;
	min-height: 60vh;
}

.si-6-2 main {
	flex: 1;
}


.si-6-2  #contents:checked ~ p { display: none }


.si-6-2 {
	margin: 0;
	font: 100%/1.5 Baskerville, Palatino Linotype, Palatino, serif;
}

.si-6-2 h1 { margin: .5em 0 0; }

.si-6-2 header { text-align: center; height: 3em; }
.si-6-2 main,.si-6-2  footer {
	display: block;
	padding: .5em calc(50% - 400px);
}

.si-6-2 footer {
	background: linear-gradient(#222, #444);
	color: white;
}
</style>
