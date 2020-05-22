const { team, league, fixture } = require('../../src/api');

const Query = {
    team: (parent, args, context) => team.id(args.id),
    league: (parent, args, context) => league.id(args.id),
    fixture: (parent, args, context) => fixture.id(args.id),
};

const Team = {
    id: (parent) => parent.team_id,
    leagues: (parent) => team.leagues(parent.team_id),
    fixtures: (parent, args) => {
        if (args.league) {
            return team.leagueFixtures(parent.team_id, args.league);
        }
        return team.fixtures(parent.team_id);
    },
};

const League = {
    id: (parent) => parent.league_id,
    teams: (parent) => league.teams(parent.league_id),
    fixtures: (parent, args) => {
        if (args.team) {
            return league.teamFixtures(parent.league_id, args.team);
        }
        return league.fixtures(parent.league_id);
    },
};

const Fixture = {
    id: (parent) => parent.fixture_id,
    league: (parent) => league.id(parent.league_id),
    homeTeam: (parent) => team.id(parent.homeTeam.team_id),
    awayTeam: (parent) => team.id(parent.awayTeam.team_id),
    h2h: (parent) => fixture.h2h(parent.homeTeam.team_id, parent.awayTeam.team_id),
};

module.exports = {
    Query,
    Team,
    League,
    Fixture,
};