class ReminderTextsController < ApplicationController
	def create
		# TODO: Use Figaro and move the id and tokens
		account_sid = 'AC40d3b60a26464b8ea25aa8c3b1d069e8' 
		auth_token = '0493060719714b521287a12b167fb172' 
		@client = ::Twilio::REST::Client.new(account_sid, auth_token)
		@message = @client.account
		 				  .messages
		 				  .create({ to: params[:to],
		 				  			from: params[:from],
		 				  			body: params[:body]})
		render nothing: true
	end
end
