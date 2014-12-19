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
		reminderText.save({ to: "2402157380",
							from: "+12406540188",
							body: "Making ajax call via backbone to rails on localhost!"})
	}
});