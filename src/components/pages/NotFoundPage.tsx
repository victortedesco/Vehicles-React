import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const formatSeconds = (value: number) => {
  let message: string = `${value} second`;
  if (value == 1) return message;
  return message + "s";
};

export const NotFoundPage = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      navigate("/");
    }
  }, [count, navigate]);

  return (
    <>
      <p className="text-center text-lg font-bold">
        This page does not exist! You will be redirected in{" "}
        {formatSeconds(count)}.
      </p>
    </>
  );
};
