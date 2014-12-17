window.Motivate.Routers.Router = Backbone.Router.extend({
	routes: {
		"/": "index"
	},

	index: function () {
		var indexView = new window.Motivate.Views.Index
	}
})