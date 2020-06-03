import React from "react";
import { Card } from "reactstrap";
import Moment from "react-moment";

export interface DailyWeatherProps {
  weather: any;
}

const DailyWeather: React.SFC<DailyWeatherProps> = ({ weather }) => {
  console.log(weather);

  return (
    <div>
      {weather && (
        <Card className="p-4 m-3 card-hover">
          <h5>
            <Moment unix format="dddd" className="pr-2">
              {weather.dt}
            </Moment>
          </h5>
          <h6>
            {" "}
            <b>Today:</b>
            {` ${Math.round(weather.temp.day)} `} - <b>Feels Like: </b>{" "}
            {` ${Math.round(weather.feels_like.day)} `}
          </h6>
          <h6>
            {" "}
            <b>Min: </b>
            {`${Math.round(weather.temp.min)} `} - <b> Max: </b>{" "}
            {` ${Math.round(weather.temp.max)}`}
          </h6>
          <h6>
            {" "}
            <b>Weather: </b>
            {` ${weather.weather[0].main} - ${weather.weather[0].description}`}
          </h6>
          <h6>
            <b>Wind Speed:</b> {` ${weather.wind_speed}`}
          </h6>
        </Card>
      )}
      <style>
        {`
          .card-hover:hover,
          .card-hover:focus {
                      cursor: pointer;
                      transform: translateY(-1px);
                      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                    }
        `}
      </style>
    </div>
  );
};

export default DailyWeather;
