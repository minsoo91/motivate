window.Motivate.Views.Goal = Backbone.View.extend({
	template: JST['goals/index'],
	events: {
		"click #add-goal": "addNewGoal"
	},
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	addNewGoal: function (event) {
		event.preventDefault();
		this.$("ul").append("<li>"+this.$('#new-goal').val() + "</li>");
		this.$('#new-goal').val("")
	}
});