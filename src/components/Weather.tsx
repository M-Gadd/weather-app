import React from "react";
import { useWeather } from "../hooks/useWeather";
import { Container, Row, Col } from "reactstrap";
import DailyWeather from "./pages/DailyWeather";

export interface WeatherProps {
  lat: any;
  long: any;
}

const Weather: React.SFC<WeatherProps> = ({ lat, long }) => {
  const { weather, city, isLoading } = useWeather(lat, long);

  if (isLoading) {
    return (
      <Row className="mt-5">
        <Col>
          <h2 style={{ color: "white" }}>Loading...</h2>
        </Col>
      </Row>
    );
  }

  return (
    <Container>
      <h2 className="mt-4" style={{ color: "white" }}>
        {city}
      </h2>
      <Row className="mt-5">
        {weather &&
          weather.map((day: any, i: number) => (
            <Col key={i} xs={12} md={6}>
              <DailyWeather weather={day} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Weather;
