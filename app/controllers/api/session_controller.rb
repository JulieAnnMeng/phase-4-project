class Api::SessionController < ApplicationController
    # skip_before_action :authorize, only: :create

    def create
        # byebug
        model = params[:user]
        if model == 'parent'
            parent = Parent.find_by(username: params[:username])
            if parent&.authenticate(params[:password])
                session[:user_id] = parent.id
                render json: parent
            else
                render json: { errors: ["Invalid username or password"] }, status: :unauthorized
            end
        else
            student = Student.find_by(username: params[:username])
            if student&.authenticate(params[:password])
                session[:user_id] = student.id
                render json: student
            else
                render json: { errors: ["Invalid username or password"] }, status: :unauthorized
            end
        end
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end
end