sap.ui.define(
["sap/ui/core/mvc/Controller","sap/ui/model/odata/v2/ODataModel"], 
function(Controller,ODataModel) {
  "use strict";
  return Controller.extend("rsh.SplitApp", {
    onInit : function() {
      // Register the view with the message manager
		  sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);
    },
    updateStarted : function(evt) {
      console.log("updateStarted");
    },
    updateFinished : function(evt) {
      console.log("updateFinished");
    },
    itemSelected : function(evt) {
      console.log("selected Object", evt.getSource().getSelectedItem().getBindingContext("demoModel").getObject());
      var path = evt.getSource().getSelectedItem().getBindingContext("demoModel").getPath();
      var obj = evt.getSource().getSelectedItem().getBindingContext("demoModel").getObject();
      var ctx = evt.getSource().getSelectedItem().getBindingContext("demoModel");
      console.log("path", path);
      console.log("ctx", ctx);
      this.byId("idProductList").setBindingContext(ctx, "demoModel");
    },
    _deepCopy : function(obj) {
      return jQuery.extend(true, {}, obj);
    },
    onNewPress : function(evt) {
    },
    onSavePress : function(evt) {
      //console.log("onSavePress")
//      var self = this
//      F.Maybe(this.byId("idDetail"))
//          .obind('getBindingContext', "persons")
//          .bind(function(context){
//            var model = context.getModel()
//            var editObject = context.getObject()
//            editObject = self._setObjectValuesFromEditView(editObject)
//            editObject.mobileWork.status = "requested"
//            //context.getModel().setProperty(context.getPath(), editObject, context, true)
//            context.getModel().update(context.getPath(), editObject, 
//            		                  {context : context, 
//            	                 	   success : function() { console.log("TODO success", arguments)},
//            	                 	   error   : function() { console.log("TODO error", arguments)}
//            		                  })
//            if( model.hasPendingChanges() ) {
//              console.log("pending changes")
//              var res = model.submitChanges(self._successCallback, self._failureCallback) // TODO - subitChanges has  a useful ETag parameter
//              // the callbacks arent called, why??
//            }
//            self._toViewMode(true) // refrehs is asnc
//          })
    },
    onCancelPress : function() {
      //console.log("onCancelPress")
    }
  });
});
