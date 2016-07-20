// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
  $routeProvider
  // route for the home page
    .when('/', {
      templateUrl: 'login.html',
      controller: 'loginController'
    })

    .when('/home/', {
      templateUrl: 'home/targil.html',
      controller: 'mainController'
    })

    .when('/home/:number', {
      templateUrl: 'home/targil.html',
      controller: 'mainController'
    });
});

scotchApp.controller('loginController', function ($rootScope, $scope, $routeParams, $location) {
  // create a message to display in our view
  $scope.targilNumber = $routeParams.number;
  $scope.title = $routeParams.number;
  $scope.message = 'Everyone come and see how good I look!';
  $scope.content = "";
  sessionStorage.setItem('correctTargilim', "");

  $("#login-button").click(function (event) {
    event.preventDefault();

    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
    if ($scope.username.indexOf('script') !== -1) {
      alert("Kishta!");
      $location.path("www.dontmesswithme.com");
      return;
    }
    $rootScope.username = $scope.username.replaceAll("'","").replaceAll("alert","").replaceAll("script","").replaceAll("<","");
    $('#users').show();

    $rootScope.$apply(function () {
      $location.path("/home");
    });
  });
});


var socket;

scotchApp.controller('mainController', function ($window, $rootScope, $scope, $location, $routeParams) {
  $('#users').show();
  removeCSSRule();
  var lsUsername = $window.localStorage.getItem("currentUser");
  var currentUser = ($rootScope.username) ? $rootScope.username : lsUsername;
  $rootScope.greeting = "Welcome " + currentUser;


  var addStyleString = function(str) {
    var node = document.createElement('style');
    node.setAttribute("id", "targilCSS");
    node.innerHTML = str;
    document.body.appendChild(node);
  };

  function removeCSSRule() {
    var styleTag = document.getElementById("targilCSS");
    if (!styleTag) return;
    styleTag.parentNode.removeChild(styleTag);
  }

  $rootScope.success = false;
  $rootScope.correctTargilim = (sessionStorage.getItem('correctTargilim')) ? JSON.parse(sessionStorage.getItem('correctTargilim')) : [];

  if ($routeParams.number && $routeParams.number == 18) {
    $rootScope.showTargil = false;
    $rootScope.title = "Flex Workshop";
    $rootScope.showButton = false;
    $rootScope.targil_title = "Flex Workshop is done! Good job :)";
    $rootScope.targil_subtitle = "";
    $rootScope.description1 = "";
    $rootScope.description2 = "";
    $rootScope.values = "Your score is " + Math.round(($rootScope.correctTargilim.length*100) / Object.keys(targilim).length) + "% :)"
  }
  else if ($routeParams.number) {
    $rootScope.showTargil = true;
    $rootScope.showButton = false;
    $rootScope.title = "Exercise Number " + $routeParams.number;
    $rootScope.targil_title = targilim[$routeParams.number]["targil_title"];
    $rootScope.targil_subtitle = targilim[$routeParams.number]["targil_subtitle"];
    $rootScope.description1 = targilim[$routeParams.number]["description1"];
    $rootScope.description2 = targilim[$routeParams.number]["description2"];
    $rootScope.values = targilim[$routeParams.number]["values"];
    $rootScope.element = targilim[$routeParams.number]["targetSelector"];
    $rootScope.items = targilim[$routeParams.number]["items"];

    setTimeout(function() {
      $('.target ' + targilim[$routeParams.number]["targetSelector"]).attr('style', targilim[$routeParams.number]["targetCss"]);
    }, 5);

    if (targilim[$routeParams.number]["injectCssOnFlexItem"]) {
      addStyleString(targilim[$routeParams.number]["injectCssOnFlexItem"]);
    }
  }
  else {
    $rootScope.title = "Flex Workshop";
    $rootScope.showButton = true;
    $rootScope.showTargil = true;
    $rootScope.targil_title = "Welcome To The Flex Workshop";
  }

  $window.localStorage.setItem("currentUser", currentUser);


  if (!socket) {
    socket = io.connect();
    socket.emit("join", currentUser, $rootScope.correctTargilim.length);
  }

  if ($rootScope.correctTargilim  != []) { // refresg is done. load score from storage.
    socket.emit("success", $rootScope.correctTargilim.length);
  }


  socket.on("update-people", function (people) {
    $("#people").empty();
    $.each(people, function (clientid, userObj) {
      if (parseInt(userObj["exercises"]) === 0) {
        $('#people').append("<li id='" + clientid.substr(2) + "' class='" + ((userObj.name === currentUser) ? "myuser" : "") + "'><i class=\"fa fa-user\" aria-hidden=\"true\"></i>  " + userObj.name + "</li>");
      }
      else {
        $('#people').append("<li id='" + clientid.substr(2) + "' class='" + ((userObj.name === currentUser) ? "myuser" : "") + "'><i class=\"fa fa-user\" aria-hidden=\"true\"></i>  " + userObj.name + " <i class=\"fa fa-check\" aria-hidden=\"true\"></i>" + "  x" + userObj["exercises"] + "</li>");
      }
    });
  });

  socket.on("disconnect", function () {
    $("#msgs").append("<li><strong><span class='text-warning'>The server is not available</span></strong></li>");
    $("#msg").attr("disabled", "disabled");
    $("#send").attr("disabled", "disabled");
  });


  $scope.go = function (path) {
    $location.path(path);
  };

  $scope.goNext = function () {
    $location.path("/home/" + (parseInt($routeParams.number) + 1));
  };

  $rootScope.getNumber = function(num) {
    return new Array(num);
  };

  $('#code').keyup(function () {
    applyStyles();
  });


  var checkAnswer = function () {
    var code = $('#code').val().toLocaleLowerCase().replaceAll(";","").split(":");
    code = code[0].trim() + ":" + ((!code[1]) ? "" : code[1].trim());
    if (code == targilim[$routeParams.number]["result"]) {
      $rootScope.$apply(function () {
        $rootScope.success = true;
      });
      if ($.inArray($routeParams.number, $rootScope.correctTargilim) === -1) {
        $rootScope.correctTargilim.push($routeParams.number);
      }
      sessionStorage.setItem('correctTargilim', JSON.stringify($rootScope.correctTargilim));
      socket.emit("success", $rootScope.correctTargilim.length);
    }
  };

  var applyStyles = function () {
    var code = $('#code').val().replaceAll("'","").replaceAll("alert","").replaceAll("script","");
    $('.result ' + targilim[$routeParams.number]["targetSelector"]).attr('style', code);
    checkAnswer();
  };

});


String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

