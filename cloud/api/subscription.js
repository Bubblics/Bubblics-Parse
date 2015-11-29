Parse.Cloud.afterSave("Subscription", function(request) {

   // afterCreate
   if(request.object.existed() == false) {
      var Mailgun = require('mailgun');
      Mailgun.initialize('email.instastckr.com', 'key-f4192217cca5fd88a34089983e9562a9');
      Mailgun.sendEmail({
         to: request.object.get("email"),
         from: "InstaStckr@thefinestartist.com",
         subject: "Subscription Confirmation: InstaStckr iOS application",
         text: "We are currently building iOS version of InstaStckr.\nWe will let you know as soon as we publish InstaStckr iOS application on the Apple app store.\n\nThank you for your insterest,\nInstaStckr Team"
      }, {
         success: function(httpResponse) {
            console.log("Success in Mailgun");
            console.log(httpResponse);
         },
         error: function(httpResponse) {
            console.error("Error in Mailgun");
            console.error(httpResponse);
         }
      });
   }
});
