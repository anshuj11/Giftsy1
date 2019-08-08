    json.extract! @listing, :id, :title, :description, :price, :shipping
    json.photoUrl  url_for(@listing.image)