sap.ui.define(
["sap/ui/core/mvc/Controller"], 
function(Controller) {
  "use strict";
  return Controller.extend("rsh.SplitApp", {
    onInit : function() {
      console.log("model", this.getOwnerComponent().getModel())
      // Register the view with the message manager
		  sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);
    },
    itemSelected : function(evt) {
//    var path = evt.getSource().getSelectedItem().getBindingContext("Categories").getPath()
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
  })
})