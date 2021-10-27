class Api::ParentsController < ApplicationController

    def index
        render json: Parent.all, status: :ok
    end

    def show
        parent = Parent.find(params[:id])
        render json: parent, status: :ok
    end

    def create
        parent = Parent.new(parent_params)
        if parent.save
            render json: parent, status: :created
        else
            render json: {errors: parent.errors}, status: :unauthorized
        end
    end

    def update
        parent = Parent.find(params[:id])
        if parent.update(parent_params)
            render json: parent, status: :created
        else
            render json: {errors: parent.errors}, status: :unauthorized
        end
    end

    def destroy
        parent = Parent.find(params[:id])
        parent.destroy
        head :no_content
    end

    private

    def parent_params
        params.permit(:first_name, :last_name, :username)
    end
end
