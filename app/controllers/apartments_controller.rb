class ApartmentsController < ApplicationController
    def index
        apartment = Apartment.all
        render json: apartment
    end

    def show
        apartment = Apartment.find(params[:id])
        render json: apartment
    end
end
