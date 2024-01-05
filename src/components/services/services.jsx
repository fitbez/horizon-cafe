import Hero from "../hero/hero";
import ServiceCard from "../service-card/service-card";

const Services = (props) => {
  console.log("props", props);
  return (
    <>
      <Hero />
      <ServiceCard serviceData={props.serviceData} test={props.test} />
    </>
  );
};

export default Services;
