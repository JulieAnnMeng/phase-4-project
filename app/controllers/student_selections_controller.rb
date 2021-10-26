class StudentSelectionsController < ApplicationController

    def index
        render json: StudentSelection.all, status: :ok
    end

    def show
        selection = StudentSelection.find(params[:id])
        render json: selection, status: :ok
    end

    def create
        selection = StudentSelection.new(student_selection_params)
        if selection.save
            render json: selection, status: :created
        else
            render json: {errors: selection.errors}, status: :unauthorized
        end
    end

    def update
        selection = StudentSelection.find(params[:id])
        if selection.update(student_selection_params)
            render json: selection, status: :created
        else
            render json: {errors: selection.errors}, status: :unauthorized
        end
    end

    def destroy
        selection = StudentSelection.find(params[:id])
        selection.destroy
        head :no_content
    end

    private

    def student_selection_params
        params.permit(:parent_selection_id, :student_id)
    end
end
