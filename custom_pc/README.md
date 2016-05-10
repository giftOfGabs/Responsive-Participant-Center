Custom Participant Center Reset
==============================
##Updating CSS for specific projects
Just update variables file in sass/theme. Here you can update font stack, font sizes, branded colors and margins. For more customizations than just basic styles you will need to either update the other core files or create a override file and add its reference to the bottom of the custom.scss file

##Adding CSS
When you save any changes to a sass file while Gulp is running it will compile it into css in the dist/styles folder. Use the minified version and ftp it up to the client's server. 

##PC WRAPPER
Update the pcWrapper.html file with the logo of the client and the link to the TeamRaiser. There is also html for the thermometers and the badges. Update the badges accordingly. Paste this file into the Edit Particpant Wrapper section

##Custom JavaScript
Add the scripts in the custom.js file to the Edit Custom JavaScript section in the Participant Center. JavaScript was added to move the thermometers and badges into place, populate the custom thermometer as well as allow for a 1 column layout on the home page view. Also, a script was added to load the page towards the top when the view is changed. This is to prevent users from clicking links and the screen loading at the bottom.




