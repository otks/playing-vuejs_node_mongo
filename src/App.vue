<template>
	<div class="app">
		<md-toolbar class="md-dense">
			<md-button @click.stop="openLeftSideNavMenu" class="md-icon-button">
				<md-icon>menu</md-icon>
			</md-button>

			<h2 class="md-title" style="flex: 1">Dense</h2>
		</md-toolbar>

		<md-sidenav class="md-left" ref="leftSideNavMenu">
			<md-list>
				<md-list-item class="SideNav-linkContainer">
					<router-link :to="{name:'home'}" exact>Home </router-link>
				</md-list-item>

				<md-list-item class="SideNav-linkContainer">
					<router-link :to="{name:'about'}" exact>About </router-link>
				</md-list-item>

				<md-list-item class="SideNav-linkContainer">
					<router-link :to="{name:'login'}" exact>Login </router-link>
				</md-list-item>
			</md-list>
		</md-sidenav>

		<main>
				<router-view></router-view>
		</main>
	</div>
</template>

<script src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>
