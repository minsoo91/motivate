window.Motivate.Views.Progress = Backbone.View.extend({
	template: JST['progress/index'],
	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.drawChart();
		return this;
	},

	drawChart: function () {
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
	        	max: 5,
	            title: {
	                text: 'Goals completed'
	            }
	        },
	        series: [{
	            name: 'Goals',
	            data: [5]
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