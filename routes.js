'use strict';

var hugs = [
  {
    id: 1,
    name: 'Guitar'
  },
  {
    id: 2,
    name: 'Banjo'
  }
];

function getHugs(request) {
  request.reply(hugs);
}


module.exports = [
  { method: 'GET', path: '/hugs', config: { handler: getHugs } }
];
