@listings.each do |listing|
 json.set! listing.id do
    json.extract! listing, :id, :title, :description, :price, :shipping
    json.photoUrl  url_for(listing.image)
end
end