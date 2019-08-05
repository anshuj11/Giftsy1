@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :title, :description, :price, :shipping
  end
end