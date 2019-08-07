class Api::ListingsController < ApplicationController
    def show
        @listing = Listing.find(params[:id])
        @listing.images.attach(params[:images])
    end

    def index
        @listings = Listing.all;    
    end

    def create
    @listing = Listing.new(listing_params)

        if @listing.save
            
            render "api/listings/show"
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end
  private
  def listing_params
    params.require(:listing).permit(:title, :description, :price, :shipping, images: [] )
  end
end