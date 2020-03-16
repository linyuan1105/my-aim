<template>
	<div>
		<Button type="primary" loading>Loading...</Button>
		<Button type="primary" :loading="loading" @click="toLoading" shape="circle">
		    <span v-if="!loading">Click me!</span>
		    <span v-else>Loading...</span>
		</Button>
		<Button type="primary" :loading="loading2" icon="ios-power" :shape="circle"  @click="toLoading2">
		    <span v-if="!loading2">Click me!</span>
		    <span v-else>Loading...</span>
		</Button>
		<Button loading shape="circle"></Button>
		<Button  shape="circle" type="primary" loading="false"></Button>
		<button>git更新</button>
		
	</div>
    
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
