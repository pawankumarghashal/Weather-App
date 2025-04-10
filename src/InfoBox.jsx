import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SearchBox from './SearchBox';
import "./SearchBox.css"
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';



export default function InfoBox({info}){
    const HOT_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1737472794232-4c8be24ba535?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
    <div className='infoBox'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL : info.temp > 15 ?  HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        {info.city} <span></span>
             {info.humidity >80 ? <ThunderstormOutlinedIcon/> : info.temp > 15? <WbSunnyOutlinedIcon/> : < AcUnitOutlinedIcon/>}
        <Typography gutterBottom variant="h5" component="div">
     
        </Typography>
        <Typography variant="body2"  component="div" sx={{ color: 'text.secondary' }}>
        
         <p> <b>Temperature</b>: {info.temp}&deg;C</p>
         <p> <b>Min Temp</b>: {info.tempMin}&deg;C</p>
         <p> <b> Max Temp</b>: {info.tempMax}&deg;C</p>
         <p> <b>Humidity</b>: {info.humidity}</p>
         <p>The Weather can be described as<i>{info.weather}</i> and feel like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
    
    </Card>
    </div>
   )
}