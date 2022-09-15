sap.ui.define(
  [
      "sap/ui/core/mvc/Controller",
      "sap/m/MessageBox",
      "sap/m/MessageToast"
    
  ],
  function(BaseController, MessageBox, MessageToast) {
    "use strict";

    return BaseController.extend("bus.ticket.userbusbooking.controller.controller.App", {
      onInit() {
        var sUrl = "/ES5/sap/opu/odata/sap/ZUI_C_ZBTBCS/";
                var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
                sap.ui.getCore().setModel(oModel);
  

      },
      onBeforeRendering: function(){

      },
      onAfterRendering: function(){

      },
      
      onLoginPress1: function(){
        var username = this.getView().byId('inp_usernameId');
        var password = this.getView().byId('inp_passwordId');
        var user = "1234"
        var pass = "1234"

        if(username.getValue() === ''){
          MessageBox.error("Please Enter Username!");
          return;
        }
        else if(password.getValue() === ''){
          MessageBox.error("Please Enter Password!");
          return;
        }
        else{
          if(username.getValue() === user && password.getValue() === pass){
            MessageToast.show("Login Successfull!");
            
            this.getOwnerComponent().getTargets().display("TargetHomePage");
            
  
          }
          else{
            MessageBox.error("Invalid Username and Password!");
            return;

          }
        }
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("RouteUserMainPage");
      }

    });
  }
);
