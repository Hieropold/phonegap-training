(function (angular, lampDB) {

	angular.module('starter').factory('Lamps', Lamps);

	function Lamps() {
		var service = this;

		service.getByBarcode = getByBarcode;

		function getByBarcode(code) {
			if (angular.isDefined(lampDB[code])) {
				return lampDB[code];
			}

			return false;
		}

		return service;
	}

})(angular, lampDB);