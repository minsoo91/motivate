class PositiveQuotesController < ApplicationController
	def index
		@quotes = PositiveQuote.randomly_select_one
		render json: @quotes
	end
end
