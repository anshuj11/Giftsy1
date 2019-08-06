export const createListing = listing => {
  return $.ajax({
    url: "/api/listings",
    method: "POST",
    data: { listing }
  });
};

export const fetchListing = id => {
  return $.ajax({
    url: "/api/listings/" + id,
    method: "GET"
  });
};

export const fetchListings = () => {
  return $.ajax({
    url: "/api/listings",
    method: "GET"
  });
};
