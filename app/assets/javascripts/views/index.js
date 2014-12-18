window.Motivate.Views.Index = Backbone.CompositeView.extend({
	className: "bbIndexView",
	template: JST['index'],
	initialize: function () {
		this.listenTo(this.model, "sync", this.render)
	},
	render: function () {
		var content = this.template({ quote: this.model });
		this.$el.html(content);
		return this;
	}
})