import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


if ( Meteor.isClient )
{
    Template.listItem.events
    ({
        'click #plus': function (event, template) {
            event.preventDefault();

            //console.log(this);
            //this.note = this.note +1;
            //.update({ note : this.note+1});
            //console.log(this);

            //template.listItem.update();
        }
    })
}