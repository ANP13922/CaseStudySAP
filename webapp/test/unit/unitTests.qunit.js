/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"busticket/userbusbooking/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
