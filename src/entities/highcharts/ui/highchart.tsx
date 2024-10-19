import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";

const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "Hours",
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

export const HighChart = () => {
  return <HighchartsReact highcharts={Highchart} options={options} />;
};
