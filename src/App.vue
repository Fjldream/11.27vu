<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: 'PingFang SC';
    src: url("assets/font/PingFangRegular.ttf");
  }
  @font-face {
    font-family: 'PingFang SC Medium';
    src: url("assets/font/PingFangMedium.ttf");
  }

  @keyframes opacityD {
    from{
      opacity: 0;
    }to{
    opacity: 1;
         }
  }
  @-o-keyframes opacityD {
    from{
      opacity: 0;
    }to{
       opacity: 1;
     }
  }
  @-moz-keyframes opacityD {
    from{
      opacity: 0;
    }to{
       opacity: 1;
     }
  }
  @-webkit-keyframes opacityD {
    from{
      opacity: 0;
    }to{
       opacity: 1;
     }
  }
</style>
