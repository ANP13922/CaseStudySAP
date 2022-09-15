sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageBox",
        "sap/m/MessageToast"
      
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("bus.ticket.userbusbooking.controller.controller.App", {
        onInit() {
          var sUrl = "/ES5/sap/opu/odata/sap/ZUI_C_ZBTBCS/";
                  var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
                  sap.ui.getCore().setModel(oModel);  
        },
        GoToInfo: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			    oRouter.navTo("RouteUserInfoPage", {} );
        }
  
      });
    }
  );
  