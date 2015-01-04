window.Motivate.Views.Goal = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render)
	},
	template: JST['goals/index'],
	events: {
		"click #add-goal": "addNewGoal",
		"click [type='checkbox']": "completeGoal"
	},
	render: function () {
		var content = this.template({
			goals: this.collection
		});
		this.$el.html(content);
		return this;
	},

	addNewGoal: function (event) {
		event.preventDefault();
		var newGoalBody = this.$('#new-goal').val();
		this.collection.create({ body: newGoalBody});
		this.$('#new-goal').val("")
	},

	completeGoal: function (event) {
		event.preventDefault();
		var that = this;
		var goalId = event.currentTarget.dataset.id;
		var goal = this.collection.get(goalId);
		var goalChecked = this.$("#completed"+goalId).prop("checked")
		goal.save({ completed: goalChecked }, {
			success: function () {
				that.collection.set(goal,{remove: false})
			}
		});
	}
});