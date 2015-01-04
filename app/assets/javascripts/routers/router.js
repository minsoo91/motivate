window.Motivate.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},

	routes: {
		"": "index"
	},

	index: function () {
		var goals = new Motivate.Collections.Goals();
		goals.fetch();
		var indexView = new Motivate.Views.Index({
			goals: goals
		});
		this._swapView(indexView);
	},

	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
})