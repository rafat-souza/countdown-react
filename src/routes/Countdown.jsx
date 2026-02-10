import Title from "../components/Title";
import Counter from "../components/Counter";
import useCountdown from "../hooks/useCountdown";

import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { CountdownContext } from "../context/CountdownContext";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  const [day, hour, minute, second] = useCountdown("Jan 1, 2027 00:00:00");

  return (
    <>
      <Title title="Contagem regressiva para 2027" />
      <div className="countdown-container">
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour} />
        <Counter title="Minutos" number={minute} />
        <Counter title="Segundos" number={second} />
      </div>
    </>
  );
};

export default Countdown;
