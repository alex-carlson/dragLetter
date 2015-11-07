 var postMSG="Your message";
 var url='https://graph.facebook.com/albumID/photos?access_token='+accessToken+"&message="+postMSG;
 var imgURL="http://farm4.staticflickr.com/3332/3451193407_b7f047f4b4_o.jpg";//change with your external photo url
 var formData = new FormData();
 formData.append("url",imgURL);

  $.ajax({
    url: url,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    type: 'POST',

    success: function(data){
        alert("POST SUCCESSFUL");
    }
});