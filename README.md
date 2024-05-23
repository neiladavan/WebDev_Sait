Web Development Course Exercises/Assignment
Day 1   
│   ├───Assignment
│   │   │   contact.html
│   │   │   finalassignment.html
│   │   │   home.html
│   │   │   index.html
│   │   │   register.html
│   │   │   
│   │   ├───css
│   │   │       style.css
│   │   │       
│   │   └───js
│   │           script.js
│   └───images

home.html:
  a. Improve version for index.html (all the functionality was here)

finalassignment.html:
  a. Add another array to your page that will have a URL of a website for each image in the images array. Try to find websites that fit well with the images that you are using.
  b. Modify your image and description table. For each image, include a mouseclick handler that will call a function to open a new window and start a timer that will close the window after a few seconds.
  c. Whenever you open a new window in step 2 (above), point the window to the website that corresponds to the image.
  d. Try this for extra challenge: Add a small image to your page that will be positioned using CSS. 
    Use a timer to make the image move across the screen and back (get the window size from the window object and use it to determine when to reverse directions). 
    If you want to add any extra features such as using a mouseover on the image to make it bounce away from the mouse pointer you are free to experiment. Have fun with it.

**contact.html:**
  a. lists and paragraph tags to display the contact information for the agency and the individual agents.

  a. Style the page using css. In addition to the list of agents and include a feedback form for users. 
    Also include contact details such as email, address, phone number. fUse corresponding icons for the contact details.
  
**index.html:**
  a. Display an image at the top of the page that will be your travel agency logo.
  b. Next, display an “h1” heading with the text “Welcome to Travel Experts” inside it.
  c. As a challenge, see if you can find a way to make both of these display on the same line.
  d. On the next line, display some travel pictures (there are some in the media folder if you don’t have time to find any free images online).
  e. On the next line, display two images that are links to the “contact.html” and “register.html” pages (wrap them inside an anchor tag).
  f. At the bottom of the index.html page display a copyright message with a copyright symbol.

  a. use css elements to format the page
  
**register.html:**
  a. Just have a heading that indicates that the page is under construction.

  a. Set up a form that has fields for entering and submitting customer data. 
      Let the customer data be as detailed as possible with the understanding that the data will be used in a database.

  a. Add an onfocus listener to each of the text fields in your form, that will display a
    paragraph with a description of the data the field requires (such as special data
    format instructions, etc.). Create a paragraph for each field and hide them when
    the page loads. Use CSS to set their size and position so they are in a stack.
    Change CSS visibility settings to make the appropriate paragraph visible and the
    rest hidden whenever a field gets focus.
  b. When the visitor submits the web form, validate the form to ensure that all
    fields have been entered. If your form does not have a postal code field, add
    one, and use a regular expression to ensure that it is properly formatted. The
    following regular expression will be sufficient: /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/
