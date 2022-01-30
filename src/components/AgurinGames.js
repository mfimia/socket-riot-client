import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import GameChart from "../layout/GameChart";

const AgurinGames = (props) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_ENDPOINT);
    socket.on("agurinGames", (data) => setGames(data));

    return () => socket.disconnect();
  }, []);

  const agurinGames = games.map((game, index) => (
    <GameChart key={game.info.gameId} game={game} />
  ));

  return agurinGames;
};

AgurinGames.propTypes = {};

export default AgurinGames;
