const routers = [
    {
        path: '/',
        meta: {
            title: '首页导航栏'
        },
        component: (resolve) => require(['./views/index_bootstrap.vue'], resolve)
    },
	
	{
	    path: '/test1',
	    meta: {
	        title: 'test1'
	    },
	    component: (resolve) => require(['./views/test1.vue'], resolve)
	},
	{
	    path: '/test2',
	    meta: {
	        title: 'test2'
	    },
	    component: (resolve) => require(['./views/test2.vue'], resolve)
	},
	{
	    path: '/test3',
	    meta: {
	        title: 'test3'
	    },
	    component: (resolve) => require(['./views/test3.vue'], resolve)
	},
	{
	    path: '/cart',
	    meta: {
	        title: '购物车'
	    },
	    component: (resolve) => require(['./views/cart.vue'], resolve)
	},
	{
	    path: '/product/:id',
	    meta: {
	        title: '商品详情'
	    },
	    component: (resolve) => require(['./views/product.vue'], resolve)
	},
	
	
];
export default routers;