require 'rails_helper'

RSpec.describe "Pets", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/pets/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/pets/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destory" do
    it "returns http success" do
      get "/pets/destory"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/pets/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/pets/update"
      expect(response).to have_http_status(:success)
    end
  end

end
