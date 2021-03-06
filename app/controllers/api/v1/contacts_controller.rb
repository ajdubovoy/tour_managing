class Api::V1::ContactsController < ApplicationController
  def index
    @contacts = Contact.all.order(:last_name)
    render json: @contacts
  end

  def show
    @contact = Contact.find(params[:id])
    render json: @contact
  end
end
