class Api::ParentSelectionsController < ApplicationController

    def index
        render json: ParentSelection.all, status: :ok
    end

    def show
        # parent = Parent.find(params[:id])
        selection = ParentSelection.where(:parent_id => params[:id])
        # byebug
        render json: selection, status: :ok
    end

    def create
        selection = ParentSelection.new(parent_selection_params)
        if selection.save
            render json: selection, status: :created
        else
            render json: {errors: selection.errors}, status: :unauthorized
        end
    end

    def update
        selection = ParentSelection.find(params[:id])
        if selection.update(parent_selection_params)
            render json: selection, status: :created
        else
            render json: {errors: selection.errors}, status: :unauthorized
        end
    end

    def destroy
        byebug
        selection = ParentSelection.find_by(cafeteria_menu_id: params[:id])
        selection.destroy
        head :no_content
    end

    private

    def parent_selection_params
        params.permit(:cafeteria_menu_id, :parent_id)
    end
end