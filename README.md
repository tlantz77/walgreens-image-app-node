# walgreens-image-app-node
## MS Computer Vision Application for Tech Test

This is a simple Node - Express application in which the user can submit an image URL and the app will then call the Microsoft Azure Computer Vision API in order to determine if a person is present in the picture.

### Setup

A valid endpoint URL (i.e. "https://<YOUR_APP>.cognitiveservices.azure.com/") and api key for an Azure Computer Vision resource will need to be provided to the `public/app.js` file.

### Running the App
- `npm install`
- `npm start`
- App will be runnning at __http://localhost:8080__
- __OR__ you can simply open the `public/index.html` file in your browser if you do not wish to use Node.

### Using the App
- Enter a valid image URL in the provided field and click "Analyze Image".
- Image should then be displayed.
- Results of image analysis will be displayed under "Analysis Results".
