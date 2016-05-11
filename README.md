Participant Center Reset
==============================
This package is baseline reset to make Particpant Centers in Luminate TeamRaiser responsive and easy to skin.


##Setup
To get started, first copy the folder of the reset you want (either the default or custom), and place in your project's directory.
  
The reset was created using SASS and build tools for compiling purposes (both Grunt and Gulp workflows are set up, pick your poison), so you will need to have [Node](https://nodejs.org/en/) and Ruby (Mac users have this automatically, [PC folks go here](https://www.ruby-lang.org/en/documentation/installation/) installed on your machine. Here is some basic documentaiton on setting up [Gulp with SASS](https://travismaynard.com/writing/getting-started-with-gulp) or [Getting Started With Gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/)

Install gulp globally (if you have never done so). If these are already on your machine then no need:

     $ npm install -g gulp

Navigate to the folder where you placed the copy of the reset in your project directory:

    $ cd my-project/default_pc

Install gulp and the neccesaary dependencies locally:

    $ npm install --save-dev gulp gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-rename gulp-scss-lint

To start gulp compiling and watching tasks type:

    $ gulp

##Updating CSS for specific projects
Just update variables file in sass/theme. Here you can update font stack, font sizes, branded colers and margins. For more customizations than just basic styles you will need to either update the other core files or create a override file and add its reference to the bottom of the custom.scss file

##Adding CSS
When you save any changes to a sass file while Gulp is running it will compile it into css in the dist/styles folder. Use the minified version and ftp it up to the client's server. 


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



##Front End Examples
 Both examples can be accessed using westest as username and password.
 * [Default PC](http://cdbox.convio.net/site/TR?fr_id=2860&pg=entry) - basic skin responsive particpant center
 * [Custom Baseline PC](http://cdbox.convio.net/site/TR?fr_id=2990&pg=entry) - adding custom 1 column layout, custom thermometer