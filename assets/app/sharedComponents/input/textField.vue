<template>
	<div class="TextField" :class="classes">
		<div class="mdc-textfield">
			<input type="text"
						 class="mdc-textfield__input"
						 :id="id"
						 :name="name"
						 :value="value"
						 :aria-controls="id+'-helptext'"
						 @change="fireEvent"
			>
			<label :for="id" class="mdc-textfield__label">{{ label }}</label>
		</div>
		<p :id="id+'-helptext'" class="mdc-textfield-helptext"
			 aria-hidden="true" style="display:none;">
			{{ validationMessage }}
		</p>
	</div>
</template>
<script src="./textField.js"></script>
<style scoped lang="scss" src="./textField.scss"></style>