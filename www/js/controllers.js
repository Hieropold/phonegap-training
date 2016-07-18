angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('LampsCtrl', function ($scope, Lamps) {
  
  $scope.lamp = false;

  $scope.scanBarcode = function () {

    if (typeof cordova === 'undefined' || !cordova.plugins || !cordova.plugins.barcodeScanner) {
      alert('Barcode scanner is required');
      return;
    }

    cordova.plugins.barcodeScanner.scan(
        function (result) {
          if (result.text) {
            $scope.lamp = Lamps.getByBarcode(result.text);

            if (!$scope.lamp) {
              alert('Nothing found in the local DB');
            }
          }

        },
        function (error) {
          alert("Scanning failed: " + error);
        },
        {
          "preferFrontCamera" : true, // iOS and Android
          "showFlipCameraButton" : true, // iOS and Android
          "prompt" : "Place a barcode inside the scan area" // supported on Android only
        }
    );
    
    var barcode = '0043168179294';
    
    $scope.lamp = Lamps.getByBarcode(barcode);
  };

});
