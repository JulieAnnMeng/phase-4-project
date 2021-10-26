class StudentSelectionsController < ApplicationController

    def index
        render json: StudentSelection.all, status: :ok
    end

    def show
        menu = StudentSelection.find(params[:id])
        render json: menu, status: :ok
    end
end
