<template>
  <div id="module">
    <el-container >
      <el-header>
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1" class="makefloat">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled class="makefloat">消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank" class="makefloat">订单管理</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px" ref="aside">
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :class="{'elmenu':!isCollapse}" ref="elmenu" collapse-transition="true"  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
<!--            <el-submenu index="1">-->
<!--              <template slot="title">-->
<!--                <i class="el-icon-location"></i>-->
<!--                <span slot="title">导航一</span>-->
<!--              </template>-->
<!--              <el-menu-item-group>-->
<!--                <span slot="title">分组一</span>-->
<!--                <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--                <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--              </el-menu-item-group>-->
<!--              <el-menu-item-group title="分组2">-->
<!--                <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--              </el-menu-item-group>-->
<!--              <el-submenu index="1-4">-->
<!--                <span slot="title">选项4</span>-->
<!--                <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--              </el-submenu>-->
<!--            </el-submenu>-->
            <el-menu-item index="2" @click="exchange">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main ref="main">Main

        </el-main>
      </el-container>
    </el-container>
    <div style="position: fixed; left: 20px; bottom: 0;">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;" >
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      isCollapse: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    exchange(){
      console.log(1);
      this.$router
    }
  },
  watch:{
    isCollapse(){
      console.log(this.isCollapse);
      if(this.isCollapse===true){
        this.$refs.aside.$el.style.width = '60px !important';
        this.$refs.main.$el.style.left="60px";
        this.$refs.main.$el.style.width="calc(100% - 60px)";
        console.log(this.$('.elmenu'));
      }
      if(this.isCollapse===false){
        this.$refs.aside.$el.style.width = '200px !important';
        this.$refs.main.$el.style.left="200px";
        this.$refs.main.$el.style.width="calc(100% - 200px)";
      }
    }
  }
}
</script>

<style scoped>
#module{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.el-header, .el-footer {
  height: 60px !important;
  background-color: #B3C0D1;
  color: #333;
  position: relative;
  width: 100%;
  padding: 0;
}


.el-aside {
  background-color: white;
  color: #333;
  width: auto !important;
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  transition: all 1s ease;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  position: absolute;
  left: 200px;
  top: 60px;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  width: calc(100% - 200px);
}
/*.el-container{*/
/*  width: 1920px;*/
/*  height: 908px;*/
/*}*/

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.makefloat{
  float: right;
}
.elmenu{
  width: 200px;
}
</style>