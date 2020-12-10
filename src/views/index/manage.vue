<template>
<div class="manage-con">
    <div id="map"></div>
</div>
</template>
<script>
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'heatmap.js';
import HeatmapOverlay from 'heatmap.js/plugins/leaflet-heatmap'
import '@/assets/leaflet/leaflet.ChineseTmsProviders'
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

var normalm1 = L.tileLayer.chinaProvider('Geoq.Normal.Map', {
  maxZoom: 18,
  minZoom: 5
});
var normalm2 = L.tileLayer.chinaProvider('Geoq.Normal.Color', {
  maxZoom: 18,
  minZoom: 5
});
var normalm3 = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
  maxZoom: 18,
  minZoom: 5
});
var normalm4 = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
  maxZoom: 18,
  minZoom: 5
});
var normalm5 = L.tileLayer.chinaProvider('Geoq.Normal.Warm', {
  maxZoom: 18,
  minZoom: 5
});
var normalm6 = L.tileLayer.chinaProvider('Geoq.Normal.Cold', {
  maxZoom: 18,
  minZoom: 5
});
/*
* 谷歌
*/
var normalMap = L.tileLayer.chinaProvider('Google.Normal.Map', {
      maxZoom: 18,
      minZoom: 5
    }),
    satelliteMap = L.tileLayer.chinaProvider('Google.Satellite.Map', {
      maxZoom: 18,
      minZoom: 5
    });
/**
 * 高德地图
 */

var Gaode = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
  maxZoom: 18,
  minZoom: 5
});
var Gaodimgem = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
  maxZoom: 18,
  minZoom: 5
});
var Gaodimga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
  maxZoom: 18,
  minZoom: 5
});
var Gaodimage = L.layerGroup([Gaodimgem, Gaodimga]);
/**
 * 天地图内容
 */
var normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
      maxZoom: 18,
      minZoom: 5
    }),
    normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
      maxZoom: 18,
      minZoom: 5
    }),
    imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
      maxZoom: 18,
      minZoom: 5
    }),
    imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
      maxZoom: 18,
      minZoom: 5
    });

var normal = L.layerGroup([normalm, normala]),
    image = L.layerGroup([imgm, imga]);
export default {
name: "manage",
  data(){
    return{
      currentTime:'2020年12月',
      navData: [{title: '风电', type: 1, active: true}, {title: '光伏', type: 2, active: false}],
      heatMapOption:{
        radius: 0.8,
        maxOpacity: 0.8,
        minOpacity: 0.1,
        scaleRadius: true,
        blur: 1,
        useLocalExtrema: true,
        latField: 'lat',
        lngField: 'lng',
        valueField: 'count',
        gradient: {
          '0.99': '#ff0800',
          '0.9': '#C3D13C',
          '0.8': '#44C438',
          '0.5': '#108C9D',
          '0': '#073243'
        }
      },
      testData:{
        max: 12,
        data: [{ lat: 39.56, lng: 116.20, count: 9 },
          { lat: 40.56, lng: 117.2, count: 9 },
          { lat: 39.8, lng: 116.9, count: 9 },
          { lat: 40.76, lng: 117, count: 9 },


          { lat:38.56, lng: 116, count: 9 },
          { lat: 39.66, lng: 116.3, count: 9 },
          { lat:39.77, lng: 115.9, count: 9 },
          { lat:24.77, lng: 119.9, count: 9 }
        ]
      },
      baseLayers:{
        /* */
        "智图地图": normalm1,
        "智图多彩": normalm2,
        "智图午夜蓝": normalm3,
        "智图灰色": normalm4,
        "智图暖色": normalm5,
        "智图冷色": normalm6,
        "天地图": normal,
        "天地图影像": image,
        "谷歌地图": normalMap,
        "谷歌影像": satelliteMap,
        "高德地图": Gaode,
        "高德影像": Gaodimage,
      }
    }
  },
  methods: {
    initMap() {
      this.map = L.map("map", {
        minZoom: 5,
        maxZoom: 10,
        center: [39.56, 116.20],
        zoom:5,
        zoomControl: false,
        attributionControl: false,
        dragging:true,
        // layers:[normalm3]
      });
    // L.tileLayer("http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}", {foo: 'bar'}).addTo(this.map);
      L.marker([34.8668, 110.4475]).addTo(this.map)
          .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
      L.circle([39.56, 116.20],10000,{
        color:'rgba(0,0,0,0)',
        fillColor:'gold',
        fillOpacity:0.5
      }).addTo(this.map).bindPopup("This is centre!").openPopup();

        let layerMap = L.tileLayer.wms('http://47.93.32.68:8080/geoserver/gwc/service/wms', {//本地
        layers: 'diankeyuan_glyc:china_glyc',
        // let layerMap = L.tileLayer.wms("http://172.16.32.156:8888/geoserver/gwc/service/wms", {//电科院
        // layers: 'glyc:China',
        format: 'image/png',
        transparent: true
      });
      this.map.addLayer(layerMap);
      this.randomData();
      this.drawHeatMap();
    },
    drawHeatMap(){
      this.heatMap = new HeatmapOverlay(this.heatMapOption);
      this.heatMap.addTo(this.map);
      this.heatMap.setData(this.testData);
    },
    randomData(){
      for(let i = 0;i<1000;i++){
        this.testData.data.push({ lat:(Math.random()*20+25), lng: (Math.random()*40+79), count: (Math.random()*9) })
      }
    }
  },
  mounted() {
  this.initMap();
  }
}
</script>

<style scoped lang="scss">
#map{
  width: 100%;
  height: 100%;
}
$width:100px;
  .manage-con{
    width: 100%;
    height: 100%;
    >.displayCard{
      width: 200px;
      height: 200px;
      background: #0B172C;
    }

  }


</style>