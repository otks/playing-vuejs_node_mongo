<template>
  <div class="Login">
		<md-card class="Login-card">
			<md-card-header>
				<md-input-container>
					<label>Login</label>
					<md-input v-model="login" :required="true"></md-input>
				</md-input-container>
				<md-input-container md-has-password>
					<label>Senha</label>
					<md-input v-model="password" :required="true" type="password"></md-input>
				</md-input-container>
			</md-card-header>

			<md-card-actions>
				<md-button @click.stop="sendLogin" class="md-raised md-primary">Entrar</md-button>
			</md-card-actions>
		</md-card>

		<md-snackbar md-position="top center" ref="snackbar" :md-duration="msgDuration">
			<span>{{ errorMsg }}</span>
		</md-snackbar>
  </div>
</template>
<script src="./login.js"></script>
<style lang="scss" scoped src="./login.scss"></style>
