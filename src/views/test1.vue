<template>
	<div>
		<input v-model="num" />
		<div>{{Name}}</div>
	</div>
</template>
<script>
	export default{
		data(){
		return {
				num:0,
				lastname:'',
				firstname:'',
				}
		},
		//当num的值发生变化时，就会调用num的方法，方法里面的形参对应的是num的新值和旧值
		watch:{
		num:function(val,oldval){
		    console.log(val,oldval);
		}
		},
		//计算属性computed,计算的是Name依赖的值,它不能计算在data中已经定义过的变量。
		computed:{
		    Name:function(){
		        return this.firstname+this.lastname;
		    }
		}
	}
</script>
<style></style>



