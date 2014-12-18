window.Motivate.Routers.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},

	routes: {
		"": "index"
	},

	index: function () {
		var quote = new window.Motivate.Models.PositiveQuote();
		quote.fetch();
		var indexView = new Motivate.Views.Index({
			model: quote
		});

		this._swapView(indexView);
	},

	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
})