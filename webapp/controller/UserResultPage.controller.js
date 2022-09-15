sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    
    function (Controller) {
        "use strict";

        return Controller.extend("bus.ticket.userbusbooking.controller.UserResultPage", {
            onInit: function () {
                   
            },
            GoToMain: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("RouteUserMainPage", {} );
            },
            onBookClick: function(){
                var to_val= this.getView().byId("_IDGenControlConfiguration1");
				var travel_no= this.getView().byId("_IDGenControlConfiguration2");
                
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("RouteUserInfoPage", {} );
            }
        });
    });
