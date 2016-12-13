import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


if ( Meteor.isClient )
{
    Template.listItem.events
    ({
        'click #plus': function (event, template) {
            event.preventDefault();
            var me = this;
            Meteor.call('plus',{
                id: me.id,
                note: me.note
                }, function(error, result){

                if(result){
                console.log("hello");
                }
            }
            );
        },
        'click #moins': function (event, template) {
            event.preventDefault();
            var me = this;
            Meteor.call('moins',{
                    id: me.id,
                    note: me.note
                }, function(error, result){

                    if(result){
                        console.log("hello");
                    }
                }
            );
        }
    })
}