<template>
	<div class="Login">
		<section id="demo-textfield-wrapper">
			<div class="mdc-textfield">
				<input type="text" class="mdc-textfield__input" id="my-textfield"
							 name="email" aria-controls="my-textfield-helptext"
							 data-demo-no-auto-js autocomplete="email">
				<label for="my-textfield" class="mdc-textfield__label">Email Address</label>
			</div>
			<p id="my-textfield-helptext" class="mdc-textfield-helptext"
				 aria-hidden="true" style="display:none;">
				Help Text (possibly validation message)
			</p>
		</section>
	</div>
</template>
<script src="./login.js"></script>
<style lang="scss" scoped src="./login.scss"></style>