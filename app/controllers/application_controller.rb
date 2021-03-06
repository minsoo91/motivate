class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  private

  def current_user
  	@current_user = User.find_by_session_token(session[:session_token])
  end

  def signed_in?
  	!!current_user
  end

  def sign_in!(user)
  	session[:session_token] = user.session_token
  end

  def sign_out!(user)
  	user.session_token = user.class.generate_session_token
  	session[:session_token] = nil
  end

  def require_signin!
  	redirect_to landing_url unless signed_in?
  end
end
