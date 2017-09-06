<template>
  <div class="Login">
    <v-card class="grey lighten-4 elevation-2">
      <v-card-text>
        <v-text-field
          name="user"
          label="Login"
          :error="loginHasError"
					:autofocus="true"
					type="email"
					v-model="login"
        ></v-text-field>
        <v-text-field
          name="password"
          label="Password"
					:error="passwordHasError"
          value=""
          class=""
					type="password"
					v-model="password"
        ></v-text-field>
				<div class="Login-buttons">
					<v-btn
						:loading="isSendingLogin"
						@click.native="sendLogin"
						:disabled="isSendingLogin"
						class="Login-button--send primary white--text"
					>
						Enter
						<v-icon right dark>cloud_upload</v-icon>
					</v-btn>
				</div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script src="./login.js"></script>
<style lang="scss" scoped src="./login.scss"></style>
