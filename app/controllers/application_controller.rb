class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  # need to add unauthorized rescue here, do not know syntax for it
  # rescue_from ActiveRecord::RecordUnauthorized, with: :render_unauthorized_response

  private

  def render_not_found_response
    render json: { error: "Unable to locate entry" }, status: :not_found
  end

  def render_invalid_response invalid
    render json: { error: invalid.record.errors.first.message }, status: :unprocessable_entity
  end

  # def render_unauthorized_response
  #   render json: { error: "Unauthorized request" }, status: :unauthorized
  # end

end
