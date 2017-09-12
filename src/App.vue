<template>
	<div class="app theme--light">
		<!--<v-navigation-drawer-->
			<!--persistent-->
			<!--class="MainMenu"-->
			<!--v-model="drawer"-->

			<!--absolute>-->
			<!--<v-toolbar>-->
				<!--<v-list>-->
					<!--<v-list-tile>-->
						<!--<v-list-tile-content>-->
							<!--aaaaaaaaaaaaaa-->
						<!--</v-list-tile-content>-->
					<!--</v-list-tile>-->
				<!--</v-list>-->
			<!--</v-toolbar>-->

		<!--</v-navigation-drawer>-->
		<!--<v-toolbar fixed class="Toolbar" dark>-->
			<!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
			<!--<v-toolbar-title>Toolbar</v-toolbar-title>-->
		<!--</v-toolbar>-->
		<main>
				<router-view></router-view>
		</main>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
			return {
				drawer: false
			};
		}
	};
</script>

<style lang="scss" src="./App.scss">

</style>
