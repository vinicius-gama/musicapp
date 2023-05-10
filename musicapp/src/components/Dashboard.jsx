import { useState } from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const [online, setOnline] = useState(true);
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState(1);
  const [notifications, setNotifications] = useState([]);

  const handleOnlineSwitch = () => {
    setOnline(!online);
    if (!online) {
      setNotifications([
        ...notifications,
        "Your application is offline. You won't be able to share or stream music to other devices.",
      ]);
    }
  };

  const handleVolumeChange = (event, value) => {
    setVolume(value);
    if (value > 80) {
      setNotifications([
        ...notifications,
        "Listening to music at a high volume could cause long-term hearing loss.",
      ]);
    }
  };

  const handleQualityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuality(value);
    if (value === 1) {
      setNotifications([
        ...notifications,
        "Music quality is degraded. Increase quality if your connection allows it.",
      ]);
    }
  };

  return (
    <div>
      <div className="card">
        <h2>ONLINE STATUS</h2>
        <Switch value={online} onClick={handleOnlineSwitch} />
      </div>
      <div className="card">
        <h2>MASTER VOLUME</h2>
        <Slider
          value={volume}
          step={10}
          min={0}
          max={100}
          onChange={handleVolumeChange}
        />
      </div>
      <div className="card">
        <h2>SOUND QUALITY</h2>
        <Select value={quality} onChange={handleQualityChange}>
          <option value={1}>Low</option>
          <option value={2}>Normal</option>
          <option value={3}>High</option>
        </Select>
      </div>
      <div className="notifications">
        {notifications.map((notification, index) => (
          <p key={index}>{notification}</p>
        ))}
      </div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}




