<template>
  <div class="signature">
    <div id="canvas"></div>
    <p @click="handelClearEl()">清除</p>
    <p @click="handelSaveEl()">保存</p>
  </div>
</template>

<script>

  let canvas = document.createElement("canvas");
  let cxt = canvas.getContext("2d");
  import wx from 'weixin-js-sdk';
  export default {
    name: "signature",
    data() {
      return {
        lineWidth: 2, //线条粗细，选填
        color: "black", //线条颜色，选填
        background: "white", //线条背景，选填
      }
    },
    mounted() {
      this.getCanvas();
    },
    methods: {
      getCanvas() {
        let el = document.getElementById("canvas");
        el.appendChild(canvas);
        let width = el.clientWidth;
        let height = el.clientHeight;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        canvas.width = el.clientWidth;
        canvas.height = el.clientHeight;
        cxt.fillStyle = this.background; //填充绘图的背景颜色
        cxt.fillRect(0, 0, canvas.width, canvas.height); //绘制“已填色”的矩形
        cxt.strokeStyle = this.color; //笔触的颜色
        let lineWidth = this.lineWidth;
        if(window.devicePixelRatio){
          canvas.height = height * window.devicePixelRatio;
          canvas.width = width * window.devicePixelRatio;
          lineWidth = this.lineWidth * window.devicePixelRatio;
          cxt.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
        cxt.lineCap = "round"; //线条末端线帽的样式

        //开始绘制
        canvas.addEventListener(
          "touchstart",
          function (e) {
            cxt.beginPath();
            cxt.lineWidth = lineWidth; //当前线条的宽度，以像素计
            cxt.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
          }.bind(this),
          false
        );
        //绘制中
        canvas.addEventListener(
          "touchmove",
          function (e) {
            cxt.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
            cxt.stroke();
          }.bind(this),
          false
        );
        //结束绘制
        canvas.addEventListener(
          "touchend",
          function () {
            cxt.closePath();
          }.bind(this),
          false
        );
      },
      handelClearEl() {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
      },
      handelSaveEl() {
        let imgBase64 = canvas.toDataURL();
        console.log(imgBase64);
        this.rotateBase64Img(imgBase64,-90,function (val) {
          console.log(val);
        })
      },

      //base64 图片旋转
      rotateBase64Img(src, edg, callback) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let imgW;//图片宽度
        let imgH;//图片高度
        let size;//canvas初始大小

        if (edg % 90 != 0) {
          console.error("旋转角度必须是90的倍数!");
          throw '旋转角度必须是90的倍数!';
        }
        (edg < 0) && (edg = (edg % 360) + 360);
        let quadrant = (edg / 90) % 4; //旋转象限
        let cutCoor = {sx: 0, sy: 0, ex: 0, ey: 0}; //裁剪坐标

        let image = new Image();
        image.crossOrigin = "anonymous";
        image.src = src;

        image.onload = function () {
          imgW = image.width;
          imgH = image.height;
          size = imgW > imgH ? imgW : imgH;

          canvas.width = size * 2;
          canvas.height = size * 2;
          switch (quadrant) {
            case 0:
              cutCoor.sx = size;
              cutCoor.sy = size;
              cutCoor.ex = size + imgW;
              cutCoor.ey = size + imgH;
              break;
            case 1:
              cutCoor.sx = size - imgH;
              cutCoor.sy = size;
              cutCoor.ex = size;
              cutCoor.ey = size + imgW;
              break;
            case 2:
              cutCoor.sx = size - imgW;
              cutCoor.sy = size - imgH;
              cutCoor.ex = size;
              cutCoor.ey = size;
              break;
            case 3:
              cutCoor.sx = size;
              cutCoor.sy = size - imgW;
              cutCoor.ex = size + imgH;
              cutCoor.ey = size + imgW;
              break;
          }

          ctx.translate(size, size);
          ctx.rotate(edg * Math.PI / 180);
          ctx.drawImage(image, 0, 0);
          let imgData = ctx.getImageData(cutCoor.sx, cutCoor.sy, cutCoor.ex, cutCoor.ey);
          if (quadrant % 2 == 0) {
            canvas.width = imgW;
            canvas.height = imgH;
          } else {
            canvas.width = imgH;
            canvas.height = imgW;
          }
          ctx.putImageData(imgData, 0, 0);
          callback(canvas.toDataURL())
        };
      }
    }
  }
</script>

<style scoped>
  .signature {
    box-sizing: border-box;
  }

  #canvas {
    box-sizing: border-box;
    width: 100%;
    height: 500px;
    position: relative;
  }

  #canvas canvas {
    display: block;
  }
</style>
