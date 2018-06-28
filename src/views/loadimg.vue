<template>
   <div v-show='show'>
       <img src="../../static/img/aboutbanner.png" alt="">
       <img src="../../static/img/banner1.png" alt="">
       <img src="../../static/img/banner3.png" alt="">
       <img src="../../static/img/banner4.png" alt="">
       <img src="../../static/img/banner .png" alt="">
       <img src="../../static/img/banner2.png" alt="">
   </div>
</template>
<script>
    export default {
        mounted () {
            var _this = this
            let imgs = document.querySelectorAll('img')
            console.log(imgs)
            Array.from(imgs).forEach((item)=>{
                let img = new Image()
                img.onload = ()=>{
                    this.count++
                }
                img.src=item.getAttribute('src');
            })
        },
        data () {
            return {
                count : 0,
                show : false
            }
        },
        watch : {
            count (val,oldval) {
                if(val == 5){
//                  this.show = false
                    console.log("图片预加载完毕");
                    //然后可以对后台发送一些ajax操作
                }
            }
        }
    }
</script>
