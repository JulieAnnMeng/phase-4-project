class CafeteriaMenusController < ApplicationController

    def index
        render json: CafeteriaMenu.all, status: :ok
    end

    def show
        menu = CafeteriaMenu.find(params[:id])
        render json: menu, status: :ok
    end

    def create
        menu_item = CafeteriaMenu.new(cafeteria_menu_params)
        if menu_item.save
            render json: menu_item, status: :created
        else
            render json: {errors: menu_item.errors}, status: :unauthorized
        end
    end

    def update
        menu_item = CafeteriaMenu.find(params[:id])
        if menu_item.update(cafeteria_menu_params)
            render json: menu_item, status: :created
        else
            render json: {errors: menu_item.errors}, status: :unauthorized
        end
    end

    def destroy
        menu_item = CafeteriaMenu(params[:id])
        menu_item.destroy
        head :no_content
    end

    private
    
    def cafeteria_menu_params
        params.permit(:meal, :item, :picture)
    end
end
