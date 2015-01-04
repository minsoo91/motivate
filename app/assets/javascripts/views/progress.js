window.Motivate.Views.Progress = Backbone.View.extend({
	template: JST['progress/index'],
	intialize: function (options) {
		this.listenTo(this.collection, "sync", this.render)
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.drawChart();
		return this;
	},

	drawChart: function () {
		var numGoals = ((this.collection) ? this.collection.length : 0)
		var numCompleted = this.collection.where({completed: true}).length
		this.$('#chart-container').highcharts({
	        chart: {
	            type: 'bar'
	        },
	        title: {
	            text: "Your Achievement Today"
	        },
	        xAxis: {
	            categories: ['Your goals']
	        },
	        yAxis: {
	        	tickInterval: 1,
	        	max: numGoals,
	            title: {
	                text: 'Goals completed'
	            }
	        },
	        series: [{
	            name: 'Goals',
	            data: [numCompleted]
	        }
	        ]
	    });
	},

	itsOverNineThousand: function () {
		var goalsCompleted = this.$('#chart-container').highcharts().userOptions.series[0].data[0]
		if (goalsCompleted === 5) {
			alert("ITS OVER 9000!")
		}
	}
});