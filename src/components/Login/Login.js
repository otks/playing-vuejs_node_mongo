export default {
	name: 'Login',
	data () {
		return {
			user: 'SuperOtk',
			password: 'otk123',
			userError: '',
			passwordError: ''
		};
	},
	methods: {
		onClickSend (e) {
			this.axios.post('/loginAuth', {
				user: this.user,
				password: this.password
			})
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
};
