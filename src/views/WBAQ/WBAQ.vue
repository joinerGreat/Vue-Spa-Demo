<template>
	<div id="WBAQPage" class="WBAQPage">
		<div class="modal-content">
			<form class="layui-form" action=""  @submit.prevent="validateBeforeSubmit">
				<div class="layui-block">
				VeeValidate login
				</div>
				<div class="layui-form-item">
					<label class="layui-form-label">账户</label>
					<div class="layui-block">
						<input v-model="name" v-validate="'required|min:3|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" name="name" class="layui-input" placeholder="账户">
						<span v-show="errors.has('name')" class="text-style" v-cloak> {{ errors.first('name') }} </span>
					</div>
				</div>
				<div class="layui-form-item">
					<label class="layui-form-label">密码</label>
					<div class="layui-block">
						<input v-model="password" v-validate="'required|min:6|max:15'" :class="{'input': true, 'is-danger': errors.has('password') } " type="password" name="password" class="layui-input" placeholder="密码">
					</div>
					<span v-show="errors.has('password')" class="text-style" v-cloak> {{ errors.first('password') }} </span>
				</div>
				<div class="layui-form-item">
					<label class="layui-form-label">邮件</label>
					<div class="layui-block">
						<input v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') } " type="email" name="email" class="layui-input" placeholder="电子邮件">
					</div>
					<span v-show="errors.has('email')" class="text-style" v-cloak> {{ errors.first('email') }} </span>
				</div>		
				<div class="layui-form-item">
					<label class="layui-form-label">手机</label>
					<div class="layui-block">
						<input v-model="phone" v-validate="'required|phone'" :class="{'input': true, 'is-danger': errors.has('phone') } " type="text" name="phone" class="layui-input" placeholder="手机号码">
					</div>
					<span v-show="errors.has('phone')" class="text-style" v-cloak> {{ errors.first('phone') }} </span>
				</div> 
				<div class="layui-form-item">
				    <div class="layui-input-block">
				      <button type="submit" class="layui-btn layui-btn-normal">立即提交</button>
				      <button type="reset" v-click="resetEvent" class="layui-btn layui-btn-primary">重置</button>
				    </div>
				</div>	
			</form>
		</div>	
	</div>
</template>
<script>
	export default {
		name:'VeeValidate',
		data () {
			return {
				name: '',
				password: '',
				email: '',
				phone: '',	
			}
		},

		methods: { 
			validateBeforeSubmit() {
				this.$validator.validateAll().then( () => {
					alert('提交成功');
				}).catch( () => {
					alert('correct them errors');
				});
			},

			resetEvent() {
				this.name = '';
				this.password = '';
				this.email = '';
				this.phone = '';
			}
		}
	}
</script>
<style scoped>
	.layui-form-label{
		padding: 0;
		text-align: left;
	}
	.WBAQPage{
		position: relative;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.3);
	}
	.modal-content{
		position: absolute;
		width: 400px;
		height: auto;
		padding: 30px 20px;
	}
	.text-style{
		color: red;
		text-align: left;
	}
</style>