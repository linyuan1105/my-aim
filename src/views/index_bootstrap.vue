<template>
	<div style="background: white;">
		<div id="mynav">
			<nav class="navbar navbar-default" id="top">
			  <div class="container-fluid">
			    <!-- Brand and toggle get grouped for better mobile display -->
			    <div class="navbar-header">
			      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			      </button>
			      <a class="navbar-brand"><router-link to="/index">首页</router-link></a>
			    </div>
			<div>
				
			</div>
			    <!-- Collect the nav links, forms, and other content for toggling -->
			    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul class="nav navbar-nav">
			        <li class="active" data-toggle="modal" data-target="#exampleModalLong"><router-link to="" id="login">登录</router-link></li>
					<!-- Modal -->
					<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
					  <div class="modal-dialog" role="document">
					    <div class="modal-content">
					      <div class="modal-header">
					        <h5 class="modal-title" id="exampleModalLongTitle">注册页面</h5>
					        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					          <span aria-hidden="true">&times;</span>
					        </button>
					      </div>
						  <div id="modal_scoll_login">
							  <div class="modal-body" >
							  	  <!-- 登录界面的form表单 -->
							  	<form id="form1">
							  	  <div class="form-group">
							  		<label for="exampleInputEmail1">Email address</label>
							  		<input type="email"  name="user" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
							  		<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
							  	  </div>
							  	  <div class="form-group">
							  	<label for="exampleInputPassword1">Password</label>
							  		<input type="password" name="password" class="form-control" id="exampleInputPassword1">
							  	  </div>
							  	  <div class="form-group form-check">
							  		<input type="checkbox" class="form-check-input" id="exampleCheck1">
							  		<label class="form-check-label" for="exampleCheck1">记住登录信息</label>
							  		<input type="checkbox" class="form-check-input" id="exampleCheck2">
							  		<label class="form-check-label" for="exampleCheck2">清除登录信息</label>
							  	  </div>
							  	  <button type="button" class="btn btn-primary" @click="cheekCookie">登录</button>
							  	</form>
							  </div>
						  </div>
					      
					      <div class="modal-footer">
					        
					        
					      </div>
					    </div>
					  </div>
					</div>
			        <li class="active" data-toggle="modal" data-target="#exampleModalLong-login"><router-link to="" id="login">注册</router-link></li>
			        <!-- Modal -->
			        <div class="modal fade" id="exampleModalLong-login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
			          <div class="modal-dialog" role="document">
			            <div class="modal-content">
			              <div class="modal-header">
			                <h5 class="modal-title" id="exampleModalLongTitle">登录页面</h5>
			                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			                  <span aria-hidden="true">&times;</span>
			                </button>
			              </div>
			              <div class="modal-body">
			                ...
			              </div>
			              <div class="modal-footer">
			                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			                <button type="button" class="btn btn-primary">Save changes</button>
			              </div>
			            </div>
			          </div>
			        </div>
					<!-- /*此处进行选择输入搜索*/ -->
					
			        <li class="dropdown">
			          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">选择背景 <span class="caret"></span></a>
			          <ul class="dropdown-menu">
			            <li><a @click="redbg">红色背景</a></li>
			            <li><a href="#">蓝色背景</a></li>
			            <li><a href="#">蓝色背景</a></li>
			            <li role="separator" class="divider"></li>
			            <li><a href="#">蓝色背景</a></li>
			            <li role="separator" class="divider"></li>
			            <li><a href="#">蓝色背景</a></li>
			          </ul>
			        </li>
			      </ul>
			      <div class="navbar-form navbar-left">
			        <div class="form-group">
			          <input type="text" class="form-control"  @keyup.enter="search" placeholder="请输入对应产品的英文名" v-model="searchValue">
			        </div>
			        <button type="button" class="btn btn-default" @click="search" >查询</button>
			      </div>
			      <ul class="nav navbar-nav navbar-right">
			        <li><a><Switch @on-change="change"></Switch></a></li>
			        <li class="dropdown">
			          <a href="#" class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false"><router-link to="/cart">购物车</router-link><span>{{cart}}</span></a>
			       
			        </li>
			      </ul>
			    </div><!-- /.navbar-collapse -->
			  </div><!-- /.container-fluid -->
			</nav>
		</div>
		<transition name="slide-fade">
			<div v-if="show_menu">
			    <div class="list-control">
			        <div class="list-control-filter">
			            <span>品牌：</span>
			            <span
			                class="list-control-filter-item"
			                :class="{on: item === filterBrand}"
			                v-for="item in brands" :key="item"
			                @click="handleFilterBrand(item)" > {{ item }}</span>
			        </div>
			        <div class="list-control-filter">
			            <span>颜色：</span>
			            <span
			                class="list-control-filter-item"
			                :class="{on: item === filterColor}"
			                v-for="item in colors"
			                @click="handleFilterColor(item)" :key="item">{{ item }}</span>
			        </div>
			        <div class="list-control-order">
			            <span>排序：</span>
			            <span
			                class="list-control-order-item"
			                :class="{on: order === ''}"
			                @click="handleOrderDefault">默认</span>
			            <span
			                class="list-control-order-item"
			                :class="{on: order === 'sales'}"
			                @click="handleOrderSales">
			                销量
			                <template v-if="order === 'sales'">↓</template>
			            </span>
			            <span
			                class="list-control-order-item"
			                :class="{on: order.indexOf('cost') > -1}"
			                @click="handleOrderCost">
			                价格
			                <template v-if="order === 'cost-asc'">↑</template>
			                <template v-if="order === 'cost-desc'">↓</template>
			            </span>
			        </div>
						<transition-group
						name="staggered-fade"
						  tag="ul"
						  v-bind:css="false"
						  v-on:before-enter="beforeEnter"
						  v-on:enter="enter"
						  v-on:leave="leave"
						>
						<Product v-for="item in filteredAndOrderedList" :info="item" :key="item.id"></Product>
							
						</transition-group>
						
					
			    <div class="product-not-found" id="tip" v-show="!filteredAndOrderedList.length"></div>
			</div>
			</div>
		</transition>
	</div>

	    
	  
	
</template>

<script>
	import Product from '../components/product.vue';
	import IViewNav from '../components/nav.vue';
	 export default {
		 components: { Product,IViewNav },
	        data () {
	            return {
					query:'',
					name:'name',
					valuenumber:'',
					valuepassword:'',
					valuecheek:'',
					searchValue:'',
	                filterBrand: '',
	                filterColor: '',
	                order: '',
					cart_num:'',
					show_menu:true,
					bg :"background:'black'",
					
	            }
	        },
			computed:{
			
				cart(){
					return this.$store.state.cartList.length;
				},
				
				list () {
				    return this.$store.state.productList;
				},
				brands () {
				    return this.$store.getters.brands;
				},
				colors () {
				    return this.$store.getters.colors;
				},
				
				filteredAndOrderedList () {
				    let list = [...this.list],that =this;
					//按输入过滤
					if(this.searchValue!==''){
						list = list.filter(function(item){
							return item.name.toLocaleLowerCase().indexOf(that.searchValue.toLocaleLowerCase())!==-1;
						})
						
						console.log(list)
					}
					
				    // 按品牌过滤
				    if (this.filterBrand !== '') {
				        list = list.filter(item => item.brand === this.filterBrand);
				    }
				    // 按颜色过滤
				    if (this.filterColor !== '') {
				        list = list.filter(item => item.color === this.filterColor);
				    }
				    // 排序
				    if (this.order !== '') {
				        if (this.order === 'sales') {
				            list = list.sort((a, b) => b.sales - a.sales);
				        } else if (this.order === 'cost-desc') {
				            list = list.sort((a, b) => b.cost - a.cost);
				        } else if (this.order === 'cost-asc') {
				            list = list.sort((a, b) => a.cost - b.cost);
				        }
				    }
				    return list;
				}
			},
			methods:{
				
				change(){
					console.log(this.scroll)
					this.show_menu = this.show_menu==false?true:false;
				},
				handleFilterBrand (brand) {
				    if (this.filterBrand === brand) {
				        this.filterBrand = '';
				    } else {
				        this.filterBrand = brand;
				    }
				},
				handleFilterColor (color) {
				    if (this.filterColor === color) {
				        this.filterColor = '';
				    } else {
				        this.filterColor = color;
				    }
				},
				handleOrderDefault () {
				    this.order = '';
				},
				handleOrderSales () {
				    this.order = 'sales';
				},
				handleOrderCost () {
				    if (this.order === 'cost-desc') {
				        this.order = 'cost-asc';
				    } else {
				        this.order = 'cost-desc';
				    }
				},
				redbg(){
					var navbar = document.getElementsByClassName('navbar');
					
				},
				search(){
					let infoSearch = this.searchValue;
					if(this.colors.indexOf(infoSearch)==-1){
						alert("无搜索信息")
						console.log("无搜索信息")
					}else{
						this.handleFilterColor(infoSearch);
						console.log("搜索成功")
					}
					console.log()
					 
				},
				modal(){
					console.log("模态框")
				},
				//cookie使用部分
				setCookie(name,value,iDay){
					let oDate = new Date();
					oDate.setDate(oDate.getDate()+iDay);
					document.cookie =name+'='+ value+';expires='+oDate;
				},
				getCookieName(name){
					let arr = document.cookie.split(';');
					for(let i =0;i<arr.length;i++){
						let arr2 = arr[i].split('=');
						if(arr2[0]==name){
							return arr2[1]
						}
					}
					return ''
				},
				reMoveCookie(name){
					this.setCookie(name,1,-1)
				},
				saveMypassword(){
					// this.setCookie('password','123456',10)
					// this.setCookie('name','linyuan',10)
				},
				cheekCookie(){
					let exampleCheck1 = document.getElementById('exampleCheck1')
					let exampleCheck2 = document.getElementById('exampleCheck2')
					if(exampleCheck1.checked){
						// alert(document.cookie)
						let name = document.getElementsByName('user')[0];
						let password = document.getElementsByName('password')[0];
						let iDay = 10;
						this.setCookie('name',name.value,iDay);
						this.setCookie('password',password.value,iDay);
					}
					if(exampleCheck2.checked){
						this.reMoveCookie('name');
						this.reMoveCookie('password')
					}
				},
				viewCookie(){
					if(document.cookie){
						let name = document.getElementsByName('user')[0];
						let password = document.getElementsByName('password')[0];
						// console.log(document.cookie)
						// name.value = this.getCookieName('name');
						name.value = this.getCookieName('name');
						// console.log()
						password.value = document.cookie.split(';')[1].split('=')[1]
					}
				},
				/*为组件添加动画属性*/
				beforeEnter(el) {
				      el.style.opacity = 0;
				      el.style.height = '0'
				},
				enter(el, done) {
				      var delay = el.dataset.index * 150;
				      setTimeout(function () {
				        Velocity(
				          el,
				          { opacity: 1, height: '100%' },
				          { complete: done }
				        )
				      }, delay)
				},
				leave(el, done) {
				      var delay = el.dataset.index * 150
				      setTimeout(function () {
				        Velocity(
				          el,
				          { opacity: 0, height: 0 },
				          { complete: done }
				        )
				      }, delay)
				},
				
				handleScroll () {
				  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				 
				  if (scrollTop >= 100) {
				    $("#mynav").attr("style", "position:fixed;top:0;left:0;z-index:2000;width:100%");
				  } else{
					  $("#mynav").attr("style", "position:relative");
				  }
				}
			},
			mounted () {
				window.addEventListener('scroll', this.handleScroll);
				this.$store.dispatch('getProductList');
				this.viewCookie();
			},
			beforeCreate() {
				
				// let password = document.getElementsByName('password')[0];
			}
	    }
</script>
<style scoped>
  .list-control{
      background: #fff;
      border-radius: 6px;
      margin: 16px;
      padding: 16px;
      box-shadow: 0 1px 1px rgba(0,0,0,.2);
  }
  .list-control-filter{
      margin-bottom: 16px;
  }
  .list-control-filter-item,
  .list-control-order-item {
      cursor: pointer;
      display: inline-block;
      border: 1px solid #e9eaec;
      border-radius: 4px;
      margin-right: 6px;
      padding: 2px 6px;
  }
  .list-control-filter-item.on,
  .list-control-order-item.on{
      background: #f2352e;
      border: 1px solid #f2352e;
      color: #fff;
  }
  .product-not-found{
	  display: flex;
	  justify-content: center;
	  align-items: center;
      text-align: center;
      padding: 32px;
  }
  #modal-flex #flex-center{
	  display: flex;
	  /* background: #006400; */
	  width: 500px;
	  height: 400px;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
  }
  #zhanghao{
	  width: 200px;
	 float: left;
  }
  #mima{
	  width: 200px;
	  float: left;
  }
  #queren{
	  width: 200px;
	  /* height: 20px; */
  	  float: left;
	  /* background: #006400; */
  }
 .slide-fade-enter-active {
   transition: all .3s ease;
 }
 .slide-fade-leave-active {
   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
 }
 .slide-fade-enter, .slide-fade-leave-to
 /* .slide-fade-leave-active for below version 2.1.8 */ {
   transform: translateX(10px);
   opacity: 0;
 }
</style>
