sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/ODataModel",
    'sap/ui/core/Fragment',
	'sap/m/MessageToast',
	"sap/m/MenuItem",
    'sap/ui/model/json/JSONModel',
	"sap/ui/core/Core",
	"sap/ui/core/library",
	"sap/ui/unified/library",
	"sap/ui/unified/DateTypeRange"

],
    
    function (Controller, ODataModel, Fragment, MessageToast, MenuItem) {
        "use strict";
		var myview ;
        return Controller.extend("bus.ticket.userbusbooking.controller.UserMainPage", {
            onInit: function () {
                var sUrl = "/ES5/sap/opu/odata/sap/ZUI_C_ZBTBCS/";
                var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
                sap.ui.getCore().setModel(oModel);
				myview= this.getView();
            },
            GoToLogin: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("RouteUserLoginPage", {} );
            },
            onSearchTap: function(){
				
				var from_val= myview.byId("box0").getValue();
				var to_val= this.getView().byId("box1").getValue();
				var travel_no= this.getView().byId("box2").getValue();
				var date_val= this.getView().byId("DP4").getValue();
				console.log(from_val);
				console.log(travel_no);
				console.log(to_val);
				console.log(date_val);

				var from_val = sap.ui.getCore().byId(this.createId("box0")).getValue();
				var to_val = sap.ui.getCore().byId(this.createId("box1")).getValue();
				var travel_n0 = sap.ui.getCore().byId(this.createId("box2")).getValue();
				var date_val = sap.ui.getCore().byId(this.createId("DP4")).getValue();

				this.getView().getModel("TempDataModel").setProperty("/",{ "From":from_val} );
				this.getView().getModel("TempDataModel").setProperty("/",{ "To":to_val} );
				this.getView().getModel("TempDataModel").setProperty("/",{ "Travel_No":travel_no} );
				this.getView().getModel("TempDataModel").setProperty("/",{ "DateOfJourne":date_val} );

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("RouteUserResultPage", {} );
            },
            onPress: function () {
				var oView = this.getView(),
					oButton = oView.byId("button");

				if (!this._oMenuFragment) {
					this._oMenuFragment = Fragment.load({
						id: oView.getId(),
						name: "bus.ticket.userbusbooking.Menu",
						controller: this
					}).then(function(oMenu) {
						oMenu.openBy(oButton);
						this._oMenuFragment = oMenu;
						return this._oMenuFragment;
					}.bind(this));
				} else {
					this._oMenuFragment.openBy(oButton);
				}
			},
			onMenuAction: function(oEvent) {
				var oItem = oEvent.getParameter("item"),
					sItemPath = "";

				while (oItem instanceof MenuItem) {
					sItemPath = oItem.getText() + " > " + sItemPath;
					oItem = oItem.getParent();
				}

				sItemPath = sItemPath.substr(0, sItemPath.lastIndexOf(" > "));

				MessageToast.show("Let's go to " + sItemPath);
			}
        });
    });