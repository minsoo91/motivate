window.Motivate.Views.Goal = Backbone.View.extend({
	template: JST['goals/index'],
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});