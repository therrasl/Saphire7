import { HighChart } from "@/entities/highcharts";
import { TimeForm } from "@/entities/time-form";

export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <TimeForm></TimeForm>
      <HighChart></HighChart>
    </div>
  );
};
