window.Motivate.Views.Reminder = Backbone.View.extend({
	template: JST['reminders/index'],

	events: {
		'click #send':'sendText'
	},

	render: function () {
		console.log("rendered reminder subview")
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	sendText: function (event) {
		event.preventDefault();
		reminderText = new Motivate.Models.ReminderText()
		var toInputVal = this.$('#to').val() // TODO: sanitize input
		var bodyInputVal = this.$('#body').val()

		reminderText.save({ to: toInputVal,
							from: "+12406540188",
							body: bodyInputVal})
	}
});	