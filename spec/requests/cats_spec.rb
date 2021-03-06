require 'rails_helper'

RSpec.describe "Cats", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/cats/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/cats/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/cats/destroy"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/cats/update"
      expect(response).to have_http_status(:success)
    end
  end

end
