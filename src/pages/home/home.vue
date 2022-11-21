<template>
    <div class="home">
        <el-container style="height:100%">
            <el-aside width="200px">
                <el-menu default-active="2" class="el-menu-vertical-demo" 
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height:100%" router>
                    <h3 class="menu-title">后台管理系统</h3>
                    <el-submenu index="other">
                        <template slot="title" >
                            <i class="el-icon-location"></i>
                            <span>其他</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="page1" @click="clickMenu({path: '/page1', name: 'page1'})">背景和边框</el-menu-item>
                            <el-menu-item index="page2" @click="clickMenu({path: '/page2', name: 'page2'})">形状</el-menu-item>
                            <el-menu-item index="page3" @click="clickMenu({path: '/page3', name: 'page3'})">视觉效果</el-menu-item>
                            <el-menu-item index="page4" @click="clickMenu({path: '/page4', name: 'page4'})">字体排版</el-menu-item>
                            <el-menu-item index="page5" @click="clickMenu({path: '/page5', name: 'page5'})">用户体验</el-menu-item>
                            <el-menu-item index="page6" @click="clickMenu({path: '/page6', name: 'page6'})">结构和布局</el-menu-item>
                            <el-menu-item index="page7" @click="clickMenu({path: '/page7', name: 'page7'})">过渡和动画</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="user">
                        <i class="el-icon-menu"></i>
                        <span slot="title">用户</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header style="background-color: aqua;">
                    <div class="header">
                        <el-breadcrumb separator="|">
                            <el-breadcrumb-item v-for="(item, index) in tags" :key="index" :to="{ path: item.path }">
                                {{ item.name }}</el-breadcrumb-item>
                        </el-breadcrumb>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item @click.native="login"> 退出</el-dropdown-item>
                                <el-dropdown-item divided disabled>待开发</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>

                </el-header>
                <div class="tabs">
                    <el-tag size="small" v-for="(tag, index) in tags" :key="tag.name" @click="changeMenu(tag)"
                        :closable="tag.name != 'user'" @close="handleClose(tag, index)">
                        {{ tag.name }}
                    </el-tag>
                </div>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>

        </el-container>
    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            tags: (state) => state.breadcrumb
        }),
        // ...mapState({tags2:'breadcrumb'})
    },
    methods: {
        login() {
            this.$router.push({
                path: '/login'
            })

        },
        changeMenu(tag) {
            this.$router.push({
                path: tag.path
            })
        },
        handleClose(tag, index) {
            this.$store.commit('delete', tag)
            if (tag.name !== this.$route.name) {
                return;
            }else{
                     this.$router.push({
                    name: this.tags[index-1].name
                })
            }       
        },
        clickMenu(item) {
            this.$store.commit('add', item)
        }

    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.home {
    height: 100%;
}

.menu-title {
    text-align: center;
    line-height: 50px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.tabs {
    padding: 15px;
}

.el-tag {
    margin-right: 20px;
    cursor: pointer;
}
</style>