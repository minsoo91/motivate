window.Motivate.Views.Index = Backbone.CompositeView.extend({
	className: "bbIndexView",
	template: JST['index'],
	initialize: function (options) {
		this.goals = options.goals
		this.listenTo(this.goals, "sync add", this.render)
	},
	render: function () {

		console.log("rendered index")
		var content = this.template();
		this.$el.html(content);
		this.renderRandomQuote();
		this.renderReminderSection();
		this.renderProgressSection();
		this.renderGoalsSection();
		return this;
	},

	renderRandomQuote: function () {
		var quoteSubview = new Motivate.Views.Quote({ model: this.quote })
		this.addSubview('#inspiring-quote', quoteSubview)
	},

	renderReminderSection: function () {
		var reminderSubview = new Motivate.Views.Reminder()
		this.addSubview('#remind-section', reminderSubview)
	},

	renderProgressSection: function () {
		var progressSubview = new Motivate.Views.Progress({
			collection: this.goals
		})
		this.addSubview('#data-visualization', progressSubview)
	},

	renderGoalsSection: function () {
		var goalsSubview = new Motivate.Views.Goal({
			collection: this.goals
		})
		this.addSubview('#goals-section', goalsSubview)
	}
})