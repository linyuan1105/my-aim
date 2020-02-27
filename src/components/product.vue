<template>
    <div class="product" :title="title">
        <router-link :to="'/product/'+info.id" class="product-main">
            <img :src="infoimage" :alt="alt">
            <h4>{{ info.name }}</h4>
            <div class="product-color" :style="{ background: colors[info.color]}"></div>
            <div class="product-cost">¥ {{ info.cost }}</div>
            <div class="product-add-cart" @click.prevent="handleCart">加入购物车</div>
        </router-link>
		<Rate :value.sync="value" :count="length" :disabled="false"
		:size = "50"
		></Rate>
    </div>
</template>
<script>
    export default {
        props: {
            info: {
				type:Object,
				default:function(){
					return {}
				}
			}
        },
        data () {
            return {
				title:'这是产品',/*  */
				alt:'这是图像',
				length:8,
				value:2,
                colors: {
                    '白色': '#ffffff',
                    '金色': '#dac272',
                    '蓝色': '#233472',
                    '红色': '#f2352e'
                },
				
				infoimage:''
            }
        },
        methods: {
            handleCart () {
				
                this.$store.commit('addCart', this.info.id);
            },
			onchange(){
				var context = require.context("../img", false, /\.jpg$/);
				const name = this.info.image.split('/')[2];
				//'./img/3.img' ==> './3.img'
				// console.log(name)
				// console.log('./'+name)
				const nameres = './'+name
				this.infoimage = context(nameres)
				
				//（创建了）一个包含了 test 文件夹（不包含子目录）下面的、所有文件名以 `.test.js` 结尾的、能被 require 请求到的文件的上下文。
				// this.infoimage = require()
				
				// console.log(context(filename))
				// this.infoimage = context(filename)
			},
			titleChange(){
				this.title = this.info.name
			}
        },
		computed:{
			vualue(){
				return  this.value
			},
			
			
		},
		beforeMount(){
			
		},
		mounted(){
			this.onchange()
			this.titleChange();
		}
		
    };
</script>
<style scoped>
    .product{
        width: 25%;
        float: left;
    }
    .product-main{
        display: block;
        margin: 16px;
        padding: 16px;
        border: 1px solid #dddee1;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;
        text-align: center;
        position: relative;
    }
    .product-main img{
        width: 100%;
    }
    h4{
        color: #222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .product-main:hover h4{
        color: #0070c9;
    }
    .product-color{
        display: block;
        width: 16px;
        height: 16px;
        border: 1px solid #dddee1;
        border-radius: 50%;
        margin: 6px auto;
    }
    .product-cost{
        color: #de4037;
        margin-top: 6px;
    }
    .product-add-cart{
        display: none;
        padding: 4px 8px;
        background: #2d8cf0;
        color: #fff;
        font-size: 10px;
        border-radius: 20px;
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .product-main:hover .product-add-cart{
        display: inline-block;
		display: inline-flex;
    }
</style>