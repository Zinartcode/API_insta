$(document).ready(function() {
  var formURL = 'https://igpi.ga/spacex/media/';
  $.getJSON(formURL, function(api_data) {
    console.log(api_data.items);


    var i = 0;
    api_data.items.forEach(function(key, value) {

      console.log(api_data.items[1].images.standard_resolution.url);
      output.innerHTML += '<li>' + '<a href=#>' + api_data.items[i].images.standard_resolution.url + '</a>' + '</li>';


      output.innerHTML += "<img src=" + api_data.items[i].images.standard_resolution.url + " />"
      i++;

    });
  });
});
