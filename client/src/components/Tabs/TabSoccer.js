import React from 'react';
import { Container, ButtonGroup, Button, Table, Spinner } from 'reactstrap';

export default class TabSoccer extends React.Component {
  constructor(props) {
    super(props);
    this.getScores = this.getScores.bind(this);
    this.showActive = this.showActive.bind(this);
    this.showFinished = this.showFinished.bind(this);
    this.showAll = this.showAll.bind(this);
    this.state = {
      games: [],
      loading: false
    }
  }

  getScores = () => {
    this.setState({ loading: true });
    fetch('/scores')
      .then(res => res.json())
      .then(games => this.setState({
        games: games.allGames,
        allGames: games.allGames,
        activeGames: games.activeGames,
        completedGames: games.completedGames,
        loading: false }));
  }

  showActive() {
    this.setState({
      games: this.state.activeGames,
      allGames: this.state.allGames,
      activeGames: this.state.activeGames,
      completedGames: this.state.completedGames,
    });
  }
  showAll() {
    this.setState({
      games: this.state.allGames,
      allGames: this.state.allGames,
      activeGames: this.state.activeGames,
      completedGames: this.state.completedGames,
  });
  }

  showFinished() {
    this.setState({
      games: this.state.completedGames,
      allGames: this.state.allGames,
      activeGames: this.state.activeGames,
      completedGames: this.state.completedGames,
    });

  }

  render() {
    const { games, loading } = this.state;

    if (games != null) {
      var matches = games.map(function(games, i) {
        return <tbody key={i} id="scoreboard">
                  <tr className={games.active}>
                   <td> {games.time} </td>
                   <td> {games.homeTeam} </td>
                   <td> {games.score} </td>
                   <td> {games.awayTeam} </td>
                  </tr>
               </tbody>;
      });
    }

    if (loading) {
      return (
        <div id = "spinner">
          <Spinner style={{ width: '5rem', height:
          '5rem'}} type="grow" color = "warning" />
        </div>
      )
    }

    return (
      <Container fluid id="scores">
        <Button size="lg" block color="warning" onClick={this.getScores}>
          Update Scores
        </Button>
        <ButtonGroup id="soccer-tab-button-group">
          <Button outline color="success" onClick={this.showActive}>
            In Progress
          </Button>
          <Button outline color="primary" onClick={this.showAll}>
            Show All
          </Button>
          <Button outline color="danger" onClick={this.showFinished}>
            Completed
          </Button>
        </ButtonGroup>
        <Table responsive id="scoretable">
          <thead>
            <tr>
              <th> Time </th>
              <th> Home Team </th>
              <th> Score </th>
              <th> Away Team </th>
            </tr>
          </thead>
          {matches}
        </Table>
      </Container>
    )
  }
}
