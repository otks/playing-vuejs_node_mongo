export default {
	name: 'Home',
	components: {},
	data: () => {
		return {
			nutrition: [
				{
					dessert: 'Frozen yogurt',
					type: 'ice_cream',
					calories: '159',
					fat: '6.0',
					comment: 'Icy'
				},
				{
					dessert: 'Ice cream sandwich',
					type: 'ice_cream',
					calories: '237',
					fat: '9.0',
					comment: 'Super Tasty'
				},
				{
					dessert: 'Eclair',
					type: 'pastry',
					calories: '262',
					fat: '16.0',
					comment: ''
				},
				{
					dessert: 'Cupcake',
					type: 'pastry',
					calories: '305',
					fat: '3.7',
					comment: ''
				},
				{
					dessert: 'Gingerbread',
					type: 'other',
					calories: '356',
					fat: '16.0',
					comment: ''
				}
			]
		};
	},
	methods: {
		onSelectRow (rows) {
		},
		onSortTable (sortObj) {
			let sortFunc = this.$helpers.sortArray(sortObj.name, sortObj.type !== 'asc', null);
			this.nutrition.sort(sortFunc);
		}
	}
};
