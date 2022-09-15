sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "bus/ticket/userbusbooking/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("bus.ticket.userbusbooking.Component", {
            metadata: {
                manifest: "json"
            },

            
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                this.setModel(new sap.ui.model.json.JSONModel() , "TempDataModel");
                
                var s=this.getModel()

                console.log(s)

                console.log(document.body)

                s.read("/Connection",{

                    success: function(data){

                        console.log(data)
                    }

                })
            }
        });
    }
);