<template>
	<div class="Login">

		<md-card class="Login-container">
			<md-card-content>

				<md-input-container :class="{'md-input-invalid': userError}">
					<label>User</label>
					<md-input type="email" v-model="user" required></md-input>
					<span class="md-error">{{ userError }}</span>
				</md-input-container>

				<md-input-container :class="{'md-input-invalid': passwordError}" md-has-password>
					<label>Password</label>
					<md-input type="password" v-model="password" required></md-input>
					<span class="md-error">{{ passwordError }}</span>
				</md-input-container>

			</md-card-content>

			<md-card-actions>
				<md-button class="md-raised Login-button--send" @click.prevent="onClickSend">Login</md-button>
			</md-card-actions>
		</md-card>

	</div>
</template>
<script src="./Login.js"></script>
<style scoped lang="scss" src="./Login.scss"></style>
