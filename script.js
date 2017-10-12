$(document).ready(function() {
var formURL = 'https://igpi.ga/spacex/media/';
$.getJSON(formURL, function(api_data) {
  console.log(api_data.items);

  // Creating list of articles
  api_data.items.forEach(function(item, index) {

    console.log(api_data.items);
  });
});
});
