class Api::StudentsController < ApplicationController
    skip_before_action :authorize, only: :create
    def index
        render json: Student.all, status: :ok
    end

    def show
        student = Student.find(params[:id])
        render json: student, include: ['student_selections.cafeteria_menu'] status: :ok
    end

    def create
        student = Student.new(student_params)
        if student.save
            render json: student, status: :created
        else
            render json: {errors: student.errors}, status: :unprocessable_entity
        end
    end

    def update
        byebug
        student = Student.find(params[:id])
        if student.update(student_params)
            render json: student, status: :created
        else
            render json: {errors: student.errors}, status: :unprocessable_entity
        end
        byebug
    end

    def destroy
        student = Student.find(params[:id])
        student.destroy
        head :no_content
    end

    private

    def student_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation, :parent_id)
    end
end

