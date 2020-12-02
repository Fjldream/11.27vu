<template>
  <div class="page-con">
    <header>
      <div class="header-img" style="width:91px;">
        <img src="../assets/page/head_one_part.png" alt="">
      </div>
      <div class="header-img header-title">
        <img src="../assets/page/head_two_part.png" alt="">
        <h1>全国新能源功率预测平台</h1>
      </div>
      <div class="header-img" style="width:119px;">
        <img src="../assets/page/head_three_part.png" alt="">
      </div>
      <div class="header-img" style="width: 220px;">
        <img src="../assets/page/head_four_part.png" alt="">
        <h3 ref="dateCon">{{ currentTime }}</h3>
      </div>
      <div class="header-img" style="width: 78px;">
        <img src="../assets/page/head_five_part.png" alt="">
      </div>
      <ul class="nav-con">
        <li >首页</li>
        <li ><router-link :to="{name:'longForecast'}" :class="{'nav-select':$route.path==='/longForecast'}">中长期预测</router-link></li>
        <li >短期预测</li>
        <li >超短期预测</li>
        <li ><router-link :to="{name:'StatisAnalyze'}" :class="{'nav-select':$route.path==='/StatisAnalyze'}">统计分析</router-link></li>
        <li >系统管理与设置</li>
      </ul>

    </header>
    <main>
      <div class="main-con">
        <div class="main-left">
          <h1 class="left-title">短期功率预测</h1>
          <div class="left-form">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="统计对象">
                <el-select v-model="form.object" placeholder="请选择统计对象">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="预测模型">
                <el-select v-model="form.model" placeholder="请选择预测模型">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="起报时间">
                <el-radio-group v-model="form.time" size="medium">
                  <el-radio border label="08：00"></el-radio>
                  <el-radio border label="20：00"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="提前时间">
                <el-select v-model="form.model" placeholder="请选择提前时间">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="预测时间">
                <el-date-picker
                    v-model="form.date"
                    type="date"
                    placeholder="请选择预测日期">
                </el-date-picker>
              </el-form-item>
            </el-form>
            <div class="btn-con">
              <el-button type="primary">全部统计</el-button>
              <el-button type="primary">逐月统计</el-button>
            </div>
          </div>
        </div>
        <div class="mainPageCon">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "page.vue",
  data() {
    return {
      form: {
        object: '',
        model: '',
        time: '',
        adtime: '',
        date: ''
      },
        navStyle:{firstNav:false,secNav:false,thirNav:false,fouNav:false,fifNav:false,sixNav:false},
      currentTime: ''
    }
  },
  methods: {
    initDate() {
      console.log(this.$refs.dateCon);
      let that = this;
      this.t = setInterval(function () {
        var date = new Date();
        that.currentTime = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      }, 1000)
    },

    navStyleReset(){
      this.navStyle.firstNav = false;
      this.navStyle.secNav = false;
      this.navStyle.thirNav = false;
      this.navStyle.fouNav = false;
      this.navStyle.fifNav = false;
      this.navStyle.sixNav = false;
    }
  },
  mounted() {

    this.initDate();
  },
  watch: {},
  beforeDestroy() {
    let that = this;
    clearInterval(that.t);
  }
}

</script>
<style scoped>
.page-con {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: #051425 url("../assets/page/body_bg.png") no-repeat padding-box;
  background-size: 100% 100%;
  padding: 10px 25px 27px 25px;
  box-sizing: border-box;
  min-height: 820px;
}

header {
  width: 100%;
  height: 93px;
  position: relative;
  margin-bottom: 15px;
  display: flex;
}

header > .header-img:nth-child(2) {
  flex: 1;
}

.header-img {
  height: 93px;
  position: relative;
}

.header-title > h1 {
  position: absolute;
  left: 0;
  top: 28%;
  color: #03EFFF;
  font-size: 28px;
}

.header-img > h3 {
  font-size: 19px;
  color: #03EFFF;
  position: absolute;
  left: 0;
  top: 30%;
}

.header-img > img {
  width: 100%;
  height: 100%;
}

.nav-con {
  width: 49.479167%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}

.nav-con > li {
  font-size: 22px;
  height: 80px;
  color: rgba(255, 255, 255, 0.8) ;
  line-height: 80px;
  text-align: center;

}
.nav-con > li > a{
  color: rgba(255, 255, 255, 0.8) ;
  display: inline-block;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1500px) {
  .header-title > h1 {
    font-size: 23px;
  }

  .nav-con > li {
    font-size: 20px;
  }
}

@media screen and (max-width: 1400px) {
  .header-title > h1 {
    font-size: 20px;
  }

  .nav-con > li {
    font-size: 18px;
  }
}

.nav-select {
  color: #09DEFF !important;
  position: relative;
}
.nav-select:before{
  content:'';
  background-image:url("../assets/page/head-menu-hover-bg.png");
  background-size: 100% 100%;
  width: 140%;
  height: 40px;
  position: absolute;
  top: 24%;
  left: -20%;
}
header > h3 {

}

/*主体部分*/
main {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.main-con {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}

.main-left {
  height: 100%;
  width: 17.593584%;
  background: rgba(9, 23, 47, 0.6);
  box-shadow: inset 0px 0px 20px 0px rgba(0, 61, 131, 0.7);
  border-radius: 10px;
  border: 1px solid #2383C9;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}

.left-title {
  font-size: 20px;
  width: 100%;
  height: 60px;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.left-form {
  width: 100%;
  flex: 1;
}

.btn-con {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
/*
*页面改变的容器
*/
.mainPageCon{
  width: 81.1%;
  height: 100%;
}

</style>
<style>

/*表单控件*/
.left-form .el-form-item__label {
  float: none !important;
  width: 64px;
  height: 22px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 22px;
}

.left-form .el-form-item__content {
  margin-left: 0 !important;
  width: 100%;
  margin-top: 10px;
}

.left-form .el-select {
  width: 100%;
}

.left-form .el-select > .el-input > input {
  height: 32px;
  background: rgba(216, 216, 216, 0);
  box-shadow: inset 0px 0px 40px rgba(40, 94, 229, 0.6);
  border-radius: 3px;
  border: 1px solid #2383C9;
}

.left-form .el-select > .el-input > input::placeholder {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 20px;

}

.left-form .el-input__inner {
  padding: 0 10px;
}

.left-form .el-radio__inner {
  display: none;
}

.left-form .el-radio-group {
  width: 100%;
}

.left-form .el-radio.is-bordered {
  width: 25%;
  height: 32px;
  background: rgba(216, 216, 216, 0);
  border-radius: 3px;
  border: 1px solid rgba(35, 131, 201, 0.6);
  font-size: 14px;
  color: #FFFFFF;
  padding: 0;
  margin-right: 10%;
}

.left-form .el-radio__label {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0;
  line-height: 32px;
}

.left-form .el-radio__input.is-checked + .el-radio__label {
  color: white;
}

.left-form .el-radio.is-bordered.is-checked {
  box-shadow: inset 0px 0px 40px rgba(40, 94, 229, 0.6);
}

.left-form .el-date-editor > .el-input__prefix {
  left: 86%;
}

.left-form .el-date-editor {
  width: 100% !important;
  height: 32px;


}

.left-form .el-date-editor > .el-input__inner {
  box-shadow: inset 0px 0px 40px rgba(40, 94, 229, 0.6);
  background: rgba(216, 216, 216, 0);
  height: 100%;
  border-radius: 3px;
  border: 1px solid #2383C9;
}

.left-form .btn-con > .el-button {
  width: 135px;
  height: 32px;
  background: #2479D0;
  border-radius: 3px;
  border: 1px solid #2383C9;
  padding: 0;
  margin-top: 50px;
}
/*选择框*/
.el-select-dropdown {
  border: 1px solid #2383c9;
}

 .el-scrollbar {
  background: #07142A;
}

.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
  color: white;
  background: none !important;
}
.el-picker-panel{
  color: white;
  background:#0D1A30;
  box-shadow: 0px 0px 20px 0px rgba(0, 61, 131, 0.7);
  border-radius: 10px;
  border: 1px solid #2383C9;
  opacity: 1;
  box-sizing: border-box;
}
.el-picker-panel .el-picker-panel__icon-btn,.el-date-picker__header-label{
  color: #FFFFFF;
}
</style>