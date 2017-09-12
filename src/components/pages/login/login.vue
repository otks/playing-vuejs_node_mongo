<template>
  <div class="Login">
		<mu-card class="Login-card">
			<mu-card-text>
				<mu-text-field class="TextField" :errorText="loginErrorMsg" label="Login" hintText="teste@aliensdesign.com.br" type="email" labelFloat/>
				<mu-text-field class="TextField" :errorText="passwordErrorMsg" label="Senha" type="password" labelFloat/>
			</mu-card-text>
			<mu-card-actions class="Login-cardActions">
				<mu-raised-button label="Entrar" labelPosition="after"  primary @click.native="sendLogin" :disabled="isSendingLogin">
					<mu-circular-progress :size="20" color="white"/>
				</mu-raised-button>
			</mu-card-actions>
		</mu-card>
  </div>
</template>
<script src="./login.js"></script>
<style lang="scss" scoped src="./login.scss"></style>
