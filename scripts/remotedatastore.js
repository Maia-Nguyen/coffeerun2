(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteDataStore(url) {
        if(!url) {
            throw new Error('No remote URL supplied.');
        }
        this.serverURL = url;
    }

    RemoteDataStore.prototype.add = function (key, val) {
        // this.data[key] = val;
        $.post(this.serverURL, val, function (serverResponse) {
            console.log(serverResponse);
        });
    };

    RemoteDataStore.prototype.getAll = function (cb) {
        // delete this.data;
        $.get(this.serverURL, function (serverResponse) {
            console.log(serverResponse);
        });
    };

    RemoteDataStore.prototype.get = function (key, cb) {
        // return this.data[key];
        $.get(this.serverURL + '/' + key, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.remove = function (key) {
        // delete this.data[key];
        $.ajax(this.serverURL + '/' + key, {
            type: 'DELETE'
        });
    };
    RemoteDataStore.prototype.removeAll = function (key) {
        // delete this.data[key];
        $.ajax(this.serverURL, {
            type: 'DELETE'
        });
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
}) (window);