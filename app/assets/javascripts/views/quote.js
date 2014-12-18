window.Motivate.Views.Quote = Backbone.View.extend({
	template: JST['quotes/index'],
	initialize: function () {
		this.model = new window.Motivate.Models.PositiveQuote();
		this.model.fetch();
		this.listenTo(this.model, "sync", this.render)
	},

	events: {
		'click #another-quote':'reRender'
	},

	render: function () {
		console.log("rendered quote subview")
		var content = this.template({ quote: this.model });
		this.$el.html(content);
		return this;
	},

	reRender: function (event) {
		var self = this;
		event.preventDefault();
		this.model = new window.Motivate.Models.PositiveQuote();
		this.model.fetch({
			success: function () {
				self.render()
			}
		});
	}
});