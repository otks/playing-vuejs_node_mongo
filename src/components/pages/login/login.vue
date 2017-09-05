<template>
  <div class="Login">
    <v-card class="grey lighten-4 elevation-2">
      <v-card-text>
        <v-text-field
          name="input-1"
          label="Label Text"
          id="testing"
        ></v-text-field>
        <v-text-field
          name="input-2"
          label="Label Text"
          value="Input text"
          class="input-group--focused"
        ></v-text-field>
        <v-btn
          :loading="isSendingLogin"
          @click.native="loader = 'isSendingLogin'"
          :disabled="isSendingLogin"
          class="blue-grey white--text"
        >
          Enter
          <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>
<script src="./login.js"></script>
<style lang="scss" scoped src="./login.scss"></style>
