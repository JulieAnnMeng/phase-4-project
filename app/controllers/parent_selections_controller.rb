class ParentSelectionsController < ApplicationController

    def index
        render json: ParentSelection.all, status: :ok
    end

    def show
        menu = ParentSelection.find(params[:id])
        render json: menu, status: :ok
    end
end
