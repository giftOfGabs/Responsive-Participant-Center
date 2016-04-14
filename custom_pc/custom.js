//YAHOO.Convio.PC2.Utils.LoadingMessage="Loading, please wait.";
//YAHOO.Convio.PC2.Utils.LoadingMessage_en_US="Loading, please wait.";

var loadCustomHandlers = function() {
    /*
     * This is an example for subscribing to the registrationLoaded event.
     * The single argument passed is the Registration object, which is also
     * saved to YAHOO.Convio.PC2.Data.Registration
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:registrationLoaded", function(registration) {
    //    YAHOO.log("registrationId: " + registration.registrationId, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the constituentLoaded event.
     * The single argument passed is the user object, which is also
     * saved to YAHOO.Convio.PC2.Data.User
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:constituentLoaded", function(user) {
    //    YAHOO.log("name: " + user.name.first + ' ' + user.name.last, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the wrapperLoaded event.
     * The single argument passed is the wrapper object.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:wrapperLoaded", function(wrapper) {
    //    YAHOO.log("personal page URL: " + wrapper.personalPageUrl, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the configurationLoaded event.
     * The single argument passed is the config object, which is also
     * saved to YAHOO.Convio.PC2.Data.TeamraiserConfig
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:configurationLoaded", function(config) {
    //    YAHOO.log("Accepting donations: " + config.acceptingDonations, "debug", "custom.js");
	//    YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.showAdminNewsFeed = false;
	//    YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.feedCount = 1;
	//    YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.cycleInterval = 0;
	// 	  YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.maxTextLength = 50;
	// 	  YAHOO.Convio.PC2.Data.TeamraiserConfig.AdminNewsFeed.showBelowProgress = true;
    //});
    
    /*
     * This is an example for subscribing to the participantProgressLoaded event.
     * The single argument passed is the progressData object, which is also
     * saved to YAHOO.Convio.PC2.Data.ProgressData
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:participantProgressLoaded", function(progressData) {
    //    YAHOO.log("Days left: " + progressData.daysLeft, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the viewChanged event.
     * The single argument passed is the viewChange object, which has 
     * these attributes.
     * 
     * oldView: the name of the old primary view.
     * oldSubview: the name of the old subview.
     * view: the name of the new primary view.
     * subview: the name of the new subview.
     */
    YAHOO.Convio.PC2.Utils.publisher.on("pc2:viewChanged", function(viewChange) {
        console.log("View changed. Old was: " + viewChange.oldView + "-" + viewChange.oldSubview 
                + ". New is: " + viewChange.view + "-" + viewChange.subview + ".", "debug", "custom.js");
        var theView = viewChange.view + "-" + viewChange.subview;
        var oldView = viewChange.oldView + "-" + viewChange.oldSubview;

        //adding to force load to the top - adidng viewport conditional to have it load farther down when mobile nav is activated
        var viewportWidth = jQuery(window).width();
        if (viewportWidth > 1023) {
            jQuery("html,body").scrollTop(100);
        }else{
            jQuery("html,body").scrollTop(350);
        }
        
        //MAKING DASHBOARD VIEW 1 COLUMN
        if(theView == 'dashboard-home') {
            jQuery('#bd').addClass('full');
            jQuery('#sidebar').insertBefore('#bd-recent-activity');
            jQuery('#sidebar').addClass('homeSide');
            /*jQuery('#dashboard-sidebar').addClass('hidden-form');*/
        }else{
            jQuery('#bd').removeClass('full');
            jQuery('#sidebar').insertAfter('#yui-main');
            jQuery('#sidebar').removeClass('homeSide');
            
        }

    });
    
    /*
     * This is an example for subscribing to the contactAdded event.
     * The single argument passed is the contact, or array of contacts, added
     * by an explicit API call.
     * 
     * Note that this event will not fire if a contact is added as a 
     * side effect of another action such as processing an offline gift.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:contactAdded", function(contacts) {
    //    contacts = YAHOO.Convio.PC2.Utils.ensureArray(contacts);
    //    YAHOO.log("Number of contacts added: " + contacts.length, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the emailSent event.
     * The single argument passed is the JSON object containing a 
     * success flag.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:emailSent", function(response) {
    //    YAHOO.log("Email sent: " + response.success, "debug", "custom.js");
    //});
    
    /*
     * This is an example for subscribing to the personalPageUpdated event.
     * The single argument passed is the JSON object containing a 
     * success flag.
     */
    //YAHOO.Convio.PC2.Utils.publisher.on("pc2:personalPageUpdated", function(response) {
    //    YAHOO.log("Personal page updated: " + response.success, "debug", "custom.js");
    //});
	
	/*
     * This is an example for subscribing to the suggestionLoaded event.
     * The single argument passed is the Suggestion object.
     */
//    YAHOO.Convio.PC2.Utils.publisher.on("pc2:suggestionLoaded", function(suggestion) {
//    	
//        YAHOO.log("Loaded default 'what next?' suggestion: " + suggestion.success, "debug", "custom.js");
//        
//        // resolve a self-donation URL
//        var personalDonationUrl = YAHOO.Convio.PC2.Data.personalDonationUrl;
//        
//        // if users has self-donation URL and is not already a self-donor
//        if (personalDonationUrl && YAHOO.Convio.PC2.Data.Registration.selfDonor == 'false') {
//        	
//        	var el = YAHOO.util.Dom.get("what-next-answer");
//        	el.innerHTML = "<a href=\"" + personalDonationUrl + "\"> Make a self-donation.</a>";
//        	
//        	YAHOO.log("Overwrote default 'what next?' suggestion; self-donation message", "debug", "custom.js");
//        }
//        
//    });
}

/* Executes after new JS is dynamically loaded, 
 * and before new view load begins. */
var loadOverrides = function(view, subview) {
    // Override functions defined in external JS files
}

var loadCustom = function() {
    /*
     * You can execute a function once all of the specified
     * events have fired with the YAHOO.Convio.PC2.Utils.require
     * function. 
     */
    YAHOO.Convio.PC2.Utils.require("pc2:registrationLoaded", "pc2:constituentLoaded", "pc2:configurationLoaded", "pc2:wrapperLoaded", function() {
       YAHOO.log("Registration, Constituent, Configuration, and Wrapper are all loaded.", "debug", "custom.js");
        therm();
        //Move badges after next steps and pc content section
        jQuery('.badges').insertAfter('#bd-org-html');
    });  
};


function therm() { 
    //Move therms into place
    jQuery('.thermWrap.personal').insertAfter('#msg_cat_progress_bar_title');
    jQuery('.thermWrap.team').insertAfter('#msg_cat_team_progress_bar_title');

    var progress = jQuery('#progress-percent-value').html();
    var percentSplit = progress.replace('%','');
    percentSplit = parseInt(percentSplit);
    var teamProgress = jQuery('#team-progress-percent-value').html();
    var teamPercentSplit = teamProgress.replace('%','');
    teamPercentSplit = parseInt(teamPercentSplit);
     
    jQuery('.thermWrap.personal .therm-inner').css({'width': percentSplit+'%'});        
    jQuery('.thermWrap.team .therm-inner').css({'width': teamPercentSplit+'%'});   
}



