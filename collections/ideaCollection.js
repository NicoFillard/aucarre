ideas = new Mongo.Collection( "ideas" );

Meteor.methods({

    plus: function(item){
        ideas.update
        (
            item.id
            ,{
                $set : { note : item.note+1 }
            }
        );

    },
    moins: function(item){
        ideas.update
        (
            item.id
            ,{
                $set : { note : item.note-1 }
            }
        );
    },

});