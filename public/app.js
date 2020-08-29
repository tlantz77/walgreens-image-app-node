'use strict'

window.addEventListener('load', () => {
  $('#source-image').attr('src', '#');

  //Add your endpoint i.e. "https://<YOUR_APP>.cognitiveservices.azure.com/"
  const ENDPOINT_URL = '';

  //Add your api key here
  const API_KEY = '';

  const uriBase = ENDPOINT_URL + 'vision/v3.0/analyze';
  const params = {
    "visualFeatures": "Categories,Description",
    "language": "en"
  };

  const submitButton = document.getElementById('submit-button');

  submitButton.addEventListener('click', event => {
    event.preventDefault();
    $('#analysis-results').text('');
    const sourceImageUrl = $('#image-input').val();
    $('#source-image').attr('src', sourceImageUrl);
    sendImg(sourceImageUrl);
  });

  const sendImg = sourceImageUrl => {
    $.ajax({
      url: uriBase + '?' + $.param(params),
      beforeSend: xhrObj => {
        xhrObj.setRequestHeader('Content-Type','application/json');
        xhrObj.setRequestHeader(
            'Ocp-Apim-Subscription-Key', API_KEY);
      },
      type: 'POST',
      data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })
    .done(data => {
      const analysisResults = analyzeResponse(data);
      $('#analysis-results').text(analysisResults);
    })
    .fail(jqXHR => {
      var errorText = jQuery.parseJSON(jqXHR.responseText).message;
      alert('ERROR: ' + errorText);
    });
  };

  const analyzeResponse = data => {
    const imageTags = data.description.tags;
    const tagsToCheck = ['person', 'people', 'man', 'woman', 'child', 'boy', 'girl'];
    for (let i = 0; i < tagsToCheck.length; i++) {
      if (imageTags.includes(tagsToCheck[i])) return 'Image contains a person!';
    };
    return 'No person found!';
  };
})
