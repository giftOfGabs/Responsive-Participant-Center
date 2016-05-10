Custom Participant Center Reset
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
When you save any changes to a sass file while Gulp is running it will compile it into css in the dist/styles folder. Use the minified version and ftp it up to the client's server. 

##PC WRAPPER
Update the pcWrapper.html file with the logo of the client and the link to the TeamRaiser. Paste this file into the Edit Particpant Wrapper section

##Custom JavaScript
No cusotm JavaScript as this version uses out-of-the-box functionality