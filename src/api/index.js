const axios = require('axios');
const { API_KEY } = require('../../config/keys');
const { API_FOOTBALL_URI, API_FOOTBALL_HOST } = require('../../config/dev');

const options = {
    "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": API_FOOTBALL_HOST,
        "x-rapidapi-key": API_KEY
    },
};

const team = {
    id: async function(id) {
        let result = await axios.get(`${API_FOOTBALL_URI}/teams/team/${id}`, options);
        
        return result.data.api.teams[0];
    },
    leagues: async function(id) {
        let result = await axios.get(`${API_FOOTBALL_URI}/leagues/team/${id}/2019`, options);

        return result.data.api.leagues;
    },
    leagueFixtures: async function(id, league) {
        let result = await axios.get(`${API_FOOTBALL_URI}/fixtures/team/${id}/${league}`, options);

        return result.data.api.fixtures;
    },
    fixtures: async function(id) {
        let result = await axios.get(`${API_FOOTBALL_URI}/fixtures/team/${id}`, options);

        return result.data.api.fixtures;
    }
}

const league = {
    id: async function(id) {
        let result = await axios.get(`${API_FOOTBALL_URI}/leagues/league/${id}`, options);
        
        return result.data.api.leagues[0];
    },
    teams: async function(id) {
        let result = await axios.get(`${API_FOOTBALL_URI}/teams/league/${id}`, options) ;
        
        return result.data.api.teams;
    },
    teamFixtures: async function(id, team){
        let result = await axios.get(`${API_FOOTBALL_URI}/fixtures/team/${team}/${id}`, options);

        return result.data.api.fixtures;
    },
    fixtures: async function(id) {
        let result = await axios.get(`${API_FOOTBALL_URI}/fixtures/league/${id}`, options);

        return result.data.api.fixtures;
    }
}

const fixture = {
    id: async function(id) {
        let result = await axios.get(`${API_FOOTBALL_URI}/fixtures/id/${id}`, options);

        return result.data.api.fixtures[0];
    },
    h2h: async function(team1, team2) {
        let result = await axios.get(`${API_FOOTBALL_URI}/fixtures/h2h/${team1}/${team2}`, options);
        
        return result.data.api.fixtures;
    },
}

module.exports = {
    team,
    league,
    fixture,
}