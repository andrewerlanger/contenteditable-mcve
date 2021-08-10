class HomeController < ApplicationController
  def index
    @item = Item.any? ? Item.last : Item.create
  end
end
