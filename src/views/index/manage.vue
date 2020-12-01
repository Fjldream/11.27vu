<template>
<div class="manage-con">
  <a href="">sdw</a>
  <div class="box"></div>
  <ul>
    <li class="text1">2w斯大林和你尽快</li>
    <li class="text2">撒旦发你哈萨克接电话</li>
    <li class="text1">奥斯陆冬季哈怂i</li>
    <li class="text2">我的就是多亏了你方便</li>
  </ul>
</div>
</template>

<script>
export default {
name: "manage"
}
</script>

<style scoped lang="scss">
$width:100px;
  .manage-con{
    width: 100%;
    height: 100%;
    a{
      color: red;
      font:{
        family: "Calibri Light";
        size: 18px;
        weight: bold;
      }
      background:{
        color: gold;
      }
    }
  }
  .box{
    width: $width;
    height: $width;
    background: red;
  }
  .text1{
    width: $width;
    height: 50px;
    font:18px/50px;
    color: red;
    background: #2383c9;
  }
  .text2{
    /*
    *继承text1的样式
    *但是不可以继承选择器列 比如.foo .bar 或者 .foo+.bar的样式
    */
    @extend .text1;
    color: white;
    font-size: 14px;
  }

</style>