const warriorsGames = [
  {
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: false,
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false,
    },
  },
];

// *****************************************
//            JAVASCRIPT CODE
// *****************************************

const makeChart = (games) => {
  const ulParent = document.createElement('ul');
  for (let game of games) {
    const { awayTeam, homeTeam } = game;
    const gameLi = document.createElement('li');
    gameLi.innerHTML = getScoreLine(game);

    awayTeam.isWinner
      ? gameLi.classList.add('win')
      : gameLi.classList.add('lose');

    ulParent.appendChild(gameLi);
  }
  return ulParent;
};

const getScoreLine = ({ awayTeam, homeTeam }) => {
  const { points: aPoint } = awayTeam;
  const { points: hPoint } = homeTeam;
  const teamName = `${awayTeam.team} @ ${homeTeam.team}`;

  let scoreLine = '';
  if (aPoint > hPoint) {
    scoreLine = `<b>${awayTeam.points}</b> - ${homeTeam.points}`;
  } else {
    scoreLine = `${awayTeam.points} - <b>${homeTeam.points}</b>`;
  }
  return `${teamName} ${scoreLine}`;
};

const chart1 = makeChart(warriorsGames);
document.body.prepend(chart1);
