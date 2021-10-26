class CafeteriaMenusController < ApplicationController

    def index
        render json: CafeteriaMenu.all, status: :ok
    end

    def show
        menu = CafeteriaMenu.find(params[:id])
        render json: menu, status: :ok
    end
end
