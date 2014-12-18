window.Motivate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new window.Motivate.Routers.Router({
    	$rootEl: $('#content-wrapper')
    })
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Motivate.initialize();
});
