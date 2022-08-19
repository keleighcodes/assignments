/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */


var body = (
  <div>
    <img src = "./react-logo.png" width = "40px"></img>
    <h1>Fun Facts About React</h1>
    <ul>
      <li>Was originally released in 2013</li>
      <li>Is composable and declarative</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, many of which are mobile</li>
    </ul>
  </div>
)

ReactDOM.render(body, document.getElementById("root"))