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
    
    function (Controller,Fragment) {
        "use strict";
        var sUrl = "https://ldcisd5.wdf.sap.corp:44311/sap/opu/odata/sap/ZUI_C_ZBTBCS";
                var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
        return Controller.extend("bus.ticket.userbusbooking.controller.UserInfoPage", {
            onInit: function () {
                
                sap.ui.getCore().setModel(oModel);
                
            },
            
            GoToResult: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("RouteUserResultPage", {} );
            },
            GoToPay: function(){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("RouteUserPayPage", {} );
            },
            SaveTravData1: function(){
                var trav_name_1= this.getView().byId("name").getValue();
                var trav_aaid_1= this.getView().byId("aaid").getValue();
                var trav_age_1= this.getView().byId("age").getValue();
var x = ''
                var Odata = {
                    // "TravellerId" :x
                    // "BookingId" :x
                    "Name":trav_name_1,
                    "Aadhar":trav_aaid_1,
                    "Age":trav_age_1
                  };
                  console.log(Odata);

                let s=this.getOwnerComponent().getModel();
                oModel.createEntry("/Traveller", Odata, {
                    success: function(data, response){
                      alert("Traveller Info added");
                    },
                    error: function(error){
                        console.log(error);
                        alert("Some error occurred");
                    }

                });
            }
        });
    });
