  (function (window) {
      "use strict";
      var App = window.App || {};

      function Payment(db) {
          this.db = db;
      }

      Payment.prototype.createPayment = function (order) {
          /* eslint-disable no-console */
          console.log("Paying order for " + order.usermail);
          this.db.add(order.usermail, order);
      };

      Payment.prototype.printPayment = function () {
          var customerIdArray = Object.keys(this.db.getAll());

          /* eslint-disable no-console */
          console.log("Payment has pending orders:");
          customerIdArray.forEach(function (id) {
              /* eslint-disable no-console */
              console.log(this.db.get(id));
          }.bind(this));
      };

      App.Payment = Payment;
      window.App = App;
  })(window);