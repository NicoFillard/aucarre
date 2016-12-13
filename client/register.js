import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './register.html';



Template.register.events({
    'click #submit_user' : function( event, template ){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
        Router.go("home");
    }
});
