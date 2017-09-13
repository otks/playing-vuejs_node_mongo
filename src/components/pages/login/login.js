export default {
	name: 'Login',
	components: {},
	data () {
		return {
			login: 'super',
			loginErrorMsg: '',
			password: '12345',
			passwordErrorMsg: '',
			isSendingLogin: false,
			errorMsg: '',
			msgDuration: 2000
		};
	},
	methods: {
		sendLogin () {
			if (this.login === '') {
				this.loginErrorMsg = 'Invalid login.';
				return;
			}

			this.loginErrorMsg = '';

			if (this.password === '') {
				this.passwordErrorMsg = 'Password is empty.';
				return;
			}

			this.passwordErrorMsg = '';

			this.isSendingLogin = true;

			this.$http.post('loginAuth', {
				user: this.login,
				password: this.password
			}, {
				headers: 'content-type: application/json',
				responseType: 'json'
			}).then(response => {
				if (!response.body.correct) {
					this.isSendingLogin = false;

					this.errorMsg = response.body.msg;
					this.$refs.snackbar.open();
					return;
				}

				this.$router.push({
					name: 'home'
				});

				this.isSendingLogin = false;
			}, response => {
				console.log('EROROROR');
				this.isSendingLogin = false;
			});
		}
	}
};
