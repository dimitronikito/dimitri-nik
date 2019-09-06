const cheerio = require("cheerio");
const axios = require("axios");

const siteUrl = "http://www.livescores.com/";
let siteName = "";

function Match(time, homeTeam, awayTeam, score) {
  this.time = time;
  this.homeTeam = homeTeam;
  this.awayTeam = awayTeam;
  this.score = score;
  this.active = function() {
    if (this.time.includes('\'') || this.time.includes('HT'))
      return 'in-progress';
    else if (this.time.includes('FT'))
      return "full-time";
    else return "inactive";
  };
}

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
}

const getScores = async () => {
  var games = [];
  var times = [];
  var teams = [];
  var homeTeams = [];
  var awayTeams = [];
  var scores = [];
  var homeTeamScores = [];
  var awayTeamScores = [];

  const $ = await fetchData();

  // get times
  $('.min').each(function (i) {
    times.push($(this).text());
  });
  // get home teams
  $('.ply.name').each(function (i) {
    teams.push($(this).text());
  });
  $('.sco').each(function(i) {
    var score = $(this).text();
    scores.push(score);
  });

  while (teams.length !== 0) {
    homeTeams.push(teams.shift());
    awayTeams.push(teams.shift());
  }

  for (var i = 0; i < scores.length; i++) {
    var match = new Match(times[i], homeTeams[i], awayTeams[i], scores[i]);
    games.push(match);
    match.active = match.active();
  }

  return games;
}

module.exports = getScores;
