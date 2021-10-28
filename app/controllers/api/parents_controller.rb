class Api::ParentsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        parent = Parent.create(parent_params)
        session[:parent_id] = parent.id
        render json: parent, status: :created
    end

        def index
        render json: Parent.all, status: :ok
    end

    def show
        parent = Parent.find(params[:id])
        render json: parent  
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
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
    end
end

