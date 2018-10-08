angular.module('reserva', [])
.controller('controller', function($scope, $http) {
	$scope.newPost = {};
	$scope.consultar=[];
    $scope.edad={edad:18}

    
	$scope.consultarReserva= function(){
    $http.get('http://localhost:8085/controller/consultar/'+ $scope.id).  
        then(function(response) {
            $scope.consultar = response.data;
        });
	}



    $scope.guardarVuelo= function(){
    	$http.post("http://localhost:8085/controller/ingresarReserva", {
    		"idUsuario": $scope.idUsuario,
    		"salida": $scope.salida,
    		"destino": $scope.destino,
    		"dia": $scope.dia,
    		"hora": $scope.hora,
    		"precio": 40000
    	}).
    	then(function(response){
    		$scope.reserva=response.data;
    	})
	}

    $scope.mostrar=function(){
        $scope.Consulta=true;
    }

});