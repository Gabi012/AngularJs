/* 
App em AngularJS  para consulta do CEP
 */

var app = angular.module('cepApp',[]);

app.controller('cepController', function($scope,$http){
    $scope.mostraaguarde = false;
    //funcao efetuar a busca no webservice
    $scope.buscacep = function(cep){
       $scope.mostraaguarde = true;
        //efetuamos  a busca via http
        $http({method:'GET',
            url: 'http://viacep.com.br/ws/'+cep+'/json'})
                .success(function(data){
                    $scope.dados = data;
           $scope.cliente = {
            logradouro: $scope.dados.logradouro,
            complemnto: $scope.dados.complemento,
            bairro: $scope.dados.bairro,
            localidade: $scope.dados.localidade,
            uf : $scope.dados.uf};
                    
                    $scope.mostraaguarde = false;
        })
                .error(function(){
                    alert("Não foi possível obter o CEP!");
            $scope.mostraaguarde = false;
        });
    };
});

