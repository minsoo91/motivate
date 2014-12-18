window.Motivate.Views.Index = Backbone.CompositeView.extend({
	className: "bbIndexView",
	template: JST['index'],
	initialize: function (options) {},
	render: function () {
		console.log("rendered index")
		var content = this.template();
		this.$el.html(content);
		this.renderRandomQuote();
		return this;
	},

	renderRandomQuote: function () {
		var quoteSubview = new Motivate.Views.Quote({ model: this.quote })
		this.addSubview('#inspiring-quote', quoteSubview)
	}
})