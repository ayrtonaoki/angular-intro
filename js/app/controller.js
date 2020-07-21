angular.module('myModule')
  .controller('indexController', function ($scope) {
    $scope.title = 'Contacts list';
    $scope.contacts = [
      {
        name: 'Camila',
        number: '(11) 98765-4321'
      },
      {
        name: 'Pedro',
        number: '(21) 91234-5678'
      },
      {
        name: 'Murilo',
        number: '(11) 92345-6789'
      },
      {
        name: 'Claudia',
        number: '(31) 97654-9812'
      },
    ];

    var init = function () {
      $scope.contacts.forEach(function (Contact) {
        Contact.location = location(Contact.number);
      });
      clearForm();
    };

    var location = function (number) {
      switch (number.substring(1, 3)) {
        case '11':
          return 'SP'
        case '21':
          return 'RJ'
        case '31':
          return 'MG'
      }
    };

    $scope.openAddContact = function () {
      $scope.editing = false;
      clearForm();
      M.Modal.getInstance($('#modal1')).open();
    };

    $scope.addContact = function (Contact) {
      Contact.location = location(Contact.number);
      $scope.contacts.push(Contact);
      M.Modal.getInstance($('#modal1')).close();
      clearForm();
    };

    $scope.editing = false

    var contactEdit;

    $scope.editContact = function (Contact) {
      M.Modal.getInstance($('#modal1')).open();
      $scope.editing = true;
      angular.copy(Contact, $scope.Contact);
      contactEdit = Contact;
    };

    $scope.saveContact = function (Contact) {
      contactEdit.name = Contact.name;
      contactEdit.number = Contact.number;
      contactEdit.location = location(Contact.number);
      M.Modal.getInstance($('#modal1')).close();
    };

    $scope.deleteContact = function (Contact) {
      for (var index in $scope.contacts) {
        var aux = $scope.contacts[index];
        if (aux === Contact) {
          $scope.contacts.splice(index, 1);
        }
      }
    };

    var clearForm = function () {
      $scope.Contact = {
        name: '',
        number: '',
        location: ''
      };
    };

    init();
  })