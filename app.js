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

const ulParent = document.createElement('ul');

for (let game of warriorsGames) {
  const { awayTeam, homeTeam } = game;
  const gameLi = document.createElement('li');
  const { team: aTeam, points: aPoint } = awayTeam;
  const { team: hTeam, points: hPoint } = homeTeam;
  let scoreLine = '';
  if (aPoint > hPoint) {
    scoreLine = `<b>${awayTeam.points}</b> - ${homeTeam.points}`;
  } else {
    scoreLine = `${awayTeam.points} - <b>${homeTeam.points}</b>`;
  }

  awayTeam.isWinner
    ? gameLi.classList.add('win')
    : gameLi.classList.add('lose');

  const teamName = `${awayTeam.team} @ ${homeTeam.team}`;
  gameLi.innerHTML = `${teamName} ${scoreLine}`;
  ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);
