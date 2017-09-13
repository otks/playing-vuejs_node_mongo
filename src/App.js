export default {
	name: 'app',
	data () {
		return {
			drawer: false
		};
	},
	methods: {
		openLeftSideNavMenu () {
			this.$refs.leftSideNavMenu.toggle();
		}
	}
};
