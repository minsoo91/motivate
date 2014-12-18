window.Motivate.Views.Index = Backbone.CompositeView.extend({
	className: "bbIndexView",
	template: JST['index'],
	initialize: function (options) {},
	events: {
		"click #add-goal": "addNewGoal"
	},
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
	},

	addNewGoal: function (event) {
		event.preventDefault();
		this.$("#goals-section ul").append("<li>"+this.$('#new-goal').val() + "</li>");
		this.$('#new-goal').val("")
	}
})