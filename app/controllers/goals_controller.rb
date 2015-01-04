class GoalsController < ApplicationController
	def index
		if current_user
			@goals = Goal.where({ user_id: current_user.id })
			render json: @goals
		else 
			render json: 'No user signed in'
		end
	end

	def create
		@goal = Goal.new(goal_params)
		@goal.user_id = current_user.id
		if @goal.save
			render json: @goal
		else
			render json: @goal.errors.full_messages
		end
	end

	def update
		@goal = Goal.find(params[:id])
		if @goal.update(goal_params)
			render json: @goal
		else
			render json: @goal.errors.full_messages
		end
	end

	def destroy
		@goal = Goal.destroy(params[:id])
		render json: @goal
	end

	private

	def goal_params
		params.require(:goal).permit(:body, :completed)
	end
end
