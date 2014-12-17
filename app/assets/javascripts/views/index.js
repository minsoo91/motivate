window.Motivate.Views.Index = Backbone.CompositeView.extend({
	className: "main",
	template: JST['index'],
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})