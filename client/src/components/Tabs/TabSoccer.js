import React from 'react';
import { Button } from 'reactstrap';

export default class TabSoccer extends React.Component {
  constructor(props) {
    super(props);
    this.getScores = this.getScores.bind(this);
    this.state = {
      games: []
    }
  }
  getScores = () => {
    fetch('/scores')
      .then(res => res.json())
      .then(games => this.setState({ games }));
  }

  render() {
    const { games } = this.state;

    if (games != null) {
      var rows = games.map(function(games, i) {
        return <div key={i} id="scoreboard">
                 <p className="lead time"> {games.time}</p>
                 <p className="lead home"> {games.homeTeam}</p>
                 <p className="lead away"> {games.awayTeam}</p>
                 <p className="lead score"> {games.score}></p>
               </div>;
      });
    }

    return (
      <div>
        <Button color="warning" onClick={this.getScores}>
          Get Scores
        </Button>
        {rows}
      </div>
    )
  }
}
