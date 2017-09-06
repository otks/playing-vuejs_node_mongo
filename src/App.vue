<template>
	<div class="app theme--light">
		<v-navigation-drawer
			persistent
			v-model="drawer"
			light
			overflow
			absolute>
				aaaaaaaa
		</v-navigation-drawer>
		<v-toolbar fixed class="indigo darken-4" dark>
			<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title>Toolbar</v-toolbar-title>
		</v-toolbar>
		<main>
				bbbbbbbbbbbbbbb
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

<style lang="stylus">
	@require '~@/../node_modules/vuetify/src/stylus/settings/_colors.styl'

	$theme := {
		primary: $light-green.darken-2
		accent: $light-green.accent-2
		secondary: $grey.lighten-1
		info: $blue.lighten-1
		warning: $green.darken-2
		error: $red.accent-4
		success: $green.lighten-2
	}

	@import '~@/../node_modules/vuetify/src/stylus/main'
</style>

<style lang="scss">
	@import '~@/assets/_scss/_color.scss';

	@font-face {
		font-family: 'Material Icons';
		font-style: normal;
		font-weight: 400;
		src: local('Material Icons'),
		local('MaterialIcons-Regular'),
		url(~@/../static/fonts/MaterialIcons-Regular.woff2) format('woff2'),
		url(~@/../static/fonts/MaterialIcons-Regular.woff) format('woff');
	}

	.material-icons {
		font-family: 'Material Icons';
		font-weight: normal;
		font-style: normal;
		font-size: 24px; /* Preferred icon size */
		display: inline-block;
		line-height: 1;
		text-transform: none;
		letter-spacing: normal;
		word-wrap: normal;
		white-space: nowrap;
		direction: ltr;

		/* Support for all WebKit browsers. */
		-webkit-font-smoothing: antialiased;
		/* Support for Safari and Chrome. */
		text-rendering: optimizeLegibility;

		/* Support for Firefox. */
		-moz-osx-font-smoothing: grayscale;

		/* Support for IE. */
		font-feature-settings: 'liga';
	}

	.theme--light {
		.input-group:not(.input-group--error) .input-group__details:before {
			background-color: $aluminium;
		}
	}
</style>
