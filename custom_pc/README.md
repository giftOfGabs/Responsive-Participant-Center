Custom PC Reset
==============================
##File Organization
SASS files are all in the sass folder and organized as follows:

###components
This contains reusable componenets used in the site such as buttons, tables, progress meters, forms, etc.

###layout
Styles for specific sections of the PC and controls the layout of the PC. Includes masthead, navigation, and sidebar

###pages
Different view avliable in the PC. This includes home, email, report and personal/team. All subview code will be in the the parent views file.

###theme
This controls the look and feel of PC. Includes variables and typography. For most default PC the variable file should be the only thing that needs updated. This includes branded colors, fonts, font-sizes, and spacing. 


##Updating CSS for specific projects
Just update variables file in sass/theme. Here you can update font stack, font sizes, branded colers and margins. For more customizations than just basic styles you will need to either update the other core files or create a override file and add its reference to the bottom of the custom.scss file

##Adding CSS
When you save any changes to a sass file while Gulp is running it will compile it into css in the dist/styles folder. Use the minified version and ftp it up to the client's server. I suggest not adding it to the Participant Center directory you created in Luminate because it will get deleted when an upgrade occurs. Once this file is on the server, you can include it in the custom CSS file by adding @import into the Custom Styles section under Related Actions in the PC:

**@import url("https://secure3.convio.net/cdbox/css/custom_pc/custom.min.css?v=[[S55:0:10000:5]]")**



##PC WRAPPER
Update the pcWrapper.html file with the logo of the client and the link to the TeamRaiser. There is also html for the thermometers and the badges. Update the badges accordingly. Paste this file into the Edit Particpant Wrapper section

##Custom JavaScript
Add the scripts in the custom.js file to the Edit Custom JavaScript section in the Participant Center. JavaScript was added to move the thermometers and badges into place, populate the custom thermometer as well as allow for a 1 column layout on the home page view. Also, a script was added to load the page towards the top when the view is changed. This is to prevent users from clicking links and the screen loading at the bottom.




