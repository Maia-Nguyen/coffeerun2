(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-payment-form="form"]';
    var App = window.App;
    var Payment = App.Payment;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myPayment = new Payment(new DataStore());
    window.myPayment = myPayment;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myPayment.createPayment.bind(myPayment));
    console.log(formHandler);
}) (window);