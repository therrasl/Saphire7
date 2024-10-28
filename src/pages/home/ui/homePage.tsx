import { HighChart } from "@/entities/highcharts";
import { TimeForm } from "@/entities/time-form";

export const HomePage = () => {
  return (
    <section
      style={{
        display: "flex",
        marginTop: "20px",
        border: "2px solid rgba(55, 67, 117)",
        borderRadius: "4px",
       backgroundColor:'white',
       alignItems:'center',
       maxWidth:"1200px"
      }}
    >
      <div style={{ marginRight: "40px" }}>
        <TimeForm />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <HighChart />
      </div>
    </section>
  );
};
