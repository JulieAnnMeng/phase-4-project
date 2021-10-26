class ParentsController < ApplicationController

    def index
        render json: Parent.all, status: :ok
    end

    def show
        parent = Parent.find(params[:id])
        render json: parent, status: :ok
    end
end
