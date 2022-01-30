import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DateTime } from "luxon";

const GameChart = ({ game }) => {
  console.log(game);
  const startDate = new Date(game.info.gameCreation).toJSON();
  console.log(typeof startDate);
  return (
    <Box sx={{ maxWidth: "50%", m: "auto", my: 1 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {DateTime.fromMillis(game.info.gameCreation).toISO()}
          </Typography>
          <Typography variant="h5" component="div">
            {game.info.gameMode}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Duration: {Math.floor(game.info.gameDuration / 60)} mins
          </Typography>
          {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

GameChart.propTypes = {
  game: PropTypes.object.isRequired,
};

export default GameChart;
