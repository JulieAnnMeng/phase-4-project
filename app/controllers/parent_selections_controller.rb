class ParentSelectionsController < ApplicationController

    def index
        render json: ParentSelection.all, status: :ok
    end

    def show
        selection = ParentSelection.find(params[:id])
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
        selection = ParentSelection.find(params[:id])
        selection.destroy
        head :no_content
    end

    private

    def parent_selection_params
        params.permit(:cafeteria_menu_id, :parent_id)
    end
end