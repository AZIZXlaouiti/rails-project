require 'rails_helper'

RSpec.describe "Dogs", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/dogs/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/dogs/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/dogs/destroy"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/dogs/update"
      expect(response).to have_http_status(:success)
    end
  end

end
