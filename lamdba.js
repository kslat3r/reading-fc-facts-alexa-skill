const Alexa = require('alexa-sdk');

const readingFcFacts = [
  'Reading are nicknamed The Royals, due to Reading\'s location in the Royal County of Berkshire, though they were previously known as The Biscuitmen',
  'The club is one of the oldest teams in England, but did not join The Football League until 1920',
  'The club holds the record for the number of successive league wins at the start of a season, with a total of 13 wins at the start of the 1985–86 Third Division campaign',
  'Reading were formed on 25 December 1871, following a public meeting at the Bridge Street Rooms organised by the future club secretary Joseph Edward Sydenham.',
  'Reading won the 2005–06 Championship with a league record 106 points, scoring 99 goals and losing only twice.',
  'The first crest to appear on a Reading kit was in 1953, it featured just the letter "R".',
  'Before going out of business in 1992, Aldershot were Reading\'s biggest rivals.',
  'The club\'s largest win was a 10–2 victory over Crystal Palace on 4 September 1946 in the Football League Third Division South.',
  'The player with the most league appearances is Martin Hicks, with 500 from 1978 to 1991.',
  'The highest attendance at the Madejski Stadium is 24,184 for the Premier League game with Everton on 17 November 2012.'
];

const handlers = {
  LaunchRequest: function () {
    this.emit(':ask', 'Hello, would you like a fact about Reading F.C.?', 'Would you like a fact about Reading F.C.?');
  },

  DeliverFact: function () {
    this.emit('GetFact');
  },

  GetFact: function () {
    const factIndex = Math.floor(Math.random() * readingFcFacts.length);
    const randomFact = readingFcFacts[factIndex];
    const anotherFact = 'Would you like another fact about Reading F.C.?';

    this.emit(':ask', `${randomFact}, ${anotherFact}`, anotherFact);
  },

  'AMAZON.HelpIntent': function () {
    const helpMessage = 'You can ask me for a random fact about Reading F.C.';

    this.emit(':ask', helpMessage, helpMessage);
  },

  'AMAZON.YesIntent': function () {
    this.emit('GetFact');
  },

  'AMAZON.NoIntent': function () {
    this.emit(':tell', 'Goodbye');
  },

  'AMAZON.CancelIntent': function () {
    this.emit(':tell', 'Goodbye');
  },

  'AMAZON.StopIntent': function () {
    this.emit(':tell', 'Goodbye');
  },

  'SessionEndedRequest': function () {
    this.emit(':tell', 'Goodbye');
  },
};

exports.handler = (event, context) => {
  const alexa = Alexa.handler(event, context);

  alexa.registerHandlers(handlers);
  alexa.execute();
};
