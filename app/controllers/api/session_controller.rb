class Api::SessionController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        model = params[:user]
        if model == 'parent'
            parent = Parent.find_by(username: params[:username])
            if parent&.authenticate(params[:password])
                session[:parent_id] = parent.id
                render json: parent, status: :ok
            else
                render json: { errors: "Invalid username or password" }, status: :unauthorized
            end
        else
            student = Student.find_by(username: params[:username])
            if student&.authenticate(params[:password])
                session[:student_id] = student.id
                render json: student, status: :created
            else
                render json: { errors: "Invalid username or password" }, status: :unauthorized
            end
        end
    end

    def show
        render json: @current_user
    end
  
    def destroy
        if session[:parent_id]
            session.delete :parent_id
            head :no_content
        end
        if session[:student_id]
            session.delete :student_id
            head :no_content
        end
    end
end

# include: ['student_selections.parent_selections', include: ['cafeteria_menu']]