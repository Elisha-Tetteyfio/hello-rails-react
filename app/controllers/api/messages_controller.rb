class Api::MessagesController < ApplicationController
  # GET /messages or /messages.json
  def index
    @message = Message.all.sample
    render :json => @message
  end
end
