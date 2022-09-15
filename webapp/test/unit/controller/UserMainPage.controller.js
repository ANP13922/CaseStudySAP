/*global QUnit*/

sap.ui.define([
	"busticket/userbusbooking/controller/UserMainPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("UserMainPage Controller");

	QUnit.test("I should test the UserMainPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
