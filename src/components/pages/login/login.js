export default {
	name: 'Login',
	components: {},
	data () {
		return {
			login: '',
			loginHasError: false,
			password: '',
			passwordHasError: false,
			isSendingLogin: false
		};
	},
	methods: {
		sendLogin () {
			if (this.login === '') {
				this.loginHasError = true;
				return;
			}

			this.loginHasError = false;

			if (this.password === '') {
				this.passwordHasError = true;
				return;
			}

			this.passwordHasError = false;

			this.isSendingLogin = true;

			this.$http.post('loginAuth', {
				user: this.login,
				password: this.password
			}, {
				headers: 'content-type: application/json',
				responseType: 'json'
			}).then(response => {
				if (!response.body.correct) {
					console.log(response.body.msg);

					this.isSendingLogin = false;

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
