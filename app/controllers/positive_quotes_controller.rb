class PositiveQuotesController < ApplicationController
	def index
		@quotes = PositiveQuote.all
		render json: @quotes
	end
end
