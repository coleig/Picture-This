<<<<<<< HEAD

=======
>>>>>>> 10febbb5e7f6bc247b9afe90b3d2128010857de6
import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";


export const Answer = new Mongo.Collection("answer");

if (Meteor.isServer) {
  Meteor.publish("answer", function guessesPublish() {
    return Answer
      .find({});
  });
}

Meteor.methods({
  "answer.insert"(answer)  {
    check(answer, String);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Answer.insert({
      answer : answer,
      player : Meteor.user().username
    });
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> 10febbb5e7f6bc247b9afe90b3d2128010857de6
