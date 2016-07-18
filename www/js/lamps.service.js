(function (angular, lampDB) {

	angular.module('starter').factory('Lamps', Lamps);

	function Lamps() {
		var service = this;

		service.getByUPC = getByUPC;

		function getByUPC(upc) {
			if (angular.isDefined(lampDB[upc])) {
				return lampDB[upc];
			}

			return false;
		}
	}

})(angular, lampDB);