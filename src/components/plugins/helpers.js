let Helpers = function install (Vue, options) {
	Object.defineProperties(Vue.prototype, {
		$helpers: {
			get () {
				return {
					/**
					 * Sort array with Quicksort
					 * @param field {String} Object key that will be used to sort
					 * @param reverse {Boolean} Asc or Desc
					 * @param primer {Function} Manipulate value from array
					 * @returns {Function}
					 */
					sortArray (field, reverse, primer) {
						let key;

						if (primer) {
							key = function (x) {
								return primer(x[field]);
							};
						} else {
							key = function (x) {
								return x[field];
							};
						}

						let reverseInt = !reverse ? 1 : -1;

						return function (a, b) {
							a = key(a);
							b = key(b);

							return reverseInt * ((a > b) - (b > a));
						};
					}
				};
			}
		}
	});
};

export default Helpers;
