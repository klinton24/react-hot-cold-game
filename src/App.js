import React from "react";
import { Grid, Typography, Paper, Divider, Button } from "@material-ui/core";
import "./styles.css";
import { getInitialState, getFeedback } from "./util";
import { Form, Info, Progress } from "./components";
import { Helmet } from "react-helmet";

const Title = "Hot or Cold Game";

class App extends React.Component {
  state = getInitialState();

  resetGame = () => this.setState(getInitialState());

  updateAppState = guess => {
    const { actual } = this.state;

    const absDiff = Math.abs(guess - actual);
    console.log(actual);

    const { feedbackMessage, feedbackColor } = getFeedback(absDiff);

    this.setState(prevState => ({
      guess,
      allGuesses: [...prevState.allGuesses, { guess, feedbackColor }],
      attempt: prevState.attempt + 1,
      feedbackMessage,
      block: absDiff === 0
    }));
  };
  render() {
    const { allGuesses, attempt, feedbackMessage, block, show } = this.state;

    const guessList = allGuesses.map((item, index) => (
      <li key={index}>
        <span>{item.guess}</span>
      </li>
    ));
    return (
      <div>
        <Helmet>
          <title>{Title}</title>
        </Helmet>
        <Grid container className="gridContainer">
          <Grid item xs={12} sm={6}>
            <Paper elevation={6} className="paper">
              <Typography
                className="header"
                align="center"
                variant="h2"
                gutterBottom
              >
                Hot or Cold
              </Typography>
              <Divider className="appDivider" />
              <div
                style={{ marginTop: "20px" }}
                className={`feedback ${feedbackMessage[0].toLowerCase()}`}
              >
                <h2 className="feedback-text">{feedbackMessage}</h2>
              </div>
              <Form
                block={block}
                returnGuessToApp={value => this.updateAppState(value)}
              />
              <Progress
                feedbackMessage={feedbackMessage}
                attempt={attempt}
                guessList={guessList}
              />
              <Button
                style={{ marginBottom: "15px" }}
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.resetGame}
              >
                Reset Game
              </Button>
              <Info show={show} onClose={this.handleClose} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
