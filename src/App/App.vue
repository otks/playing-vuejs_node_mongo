<template>
	<div id="app">
		<router-view></router-view>
		<md-snackbar md-position="bottom center" ref="snackbarDisconnected" :md-duration="Infinity">
			<span>Connection timeout.</span>
			<md-button class="md-accent" @click="$refs.snackbar.close()">Retry</md-button>
		</md-snackbar>
		<md-snackbar md-position="bottom center" ref="snackbarGlobal" :md-duration="4000">
			<span>Anything</span>
		</md-snackbar>
	</div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>
