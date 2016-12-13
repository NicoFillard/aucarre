import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



if ( Meteor.isServer )
{
	Meteor.startup
	(
		function ()
		{
			// Populate once
			if ( !ideas.find().count() )
			{
				ideas.insert( { title : "java", content : "javascript", note : 0} );
			}
		}
	);
}

if ( Meteor.isClient )
{

	// Helpers
	Template.viewIdea.helpers
	(
		{
			all_ideas : function ()
			{
				return ideas.find().map
				(
					function( ideas, index, cursor )
					{
						return { id : ideas._id, title : ideas.title, content : ideas.content, note : ideas.note};
					}
				);
			},
			getResult: function() {
                //retourne tout le listItem
            return ideas.find().fetch();
        }

		}
	);

	// Events
	Template.viewIdea.events
	( {
		'click #submit_idea' : function( event, template ) {
            event.preventDefault();
            var $title = template.find("#title");
            var $content = template.find("#content");

            if ($title.value !== "" && $content.value !== "") {

                ideas.insert({title: $title.value, content: $content.value, note: 0});
            }
        }
	} );
}
