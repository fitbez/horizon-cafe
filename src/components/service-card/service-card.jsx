import styled from "styled-components";
import { useContext } from "react";
import { HorizonContext } from "../../context";

const StyledServices = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
`;

const StyledCardContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
`;

const StyledHeader = styled.h2`
  margin-top: 2rem;
`;

const ServiceCard = () => {
  const { products } = useContext(HorizonContext);

  return (
    <StyledServices>
      <StyledHeader>Services</StyledHeader>
      <StyledCardContainer>
        {products.map((service) => {
          return (
            <StyledCard key={service.id}>
              <StyledImage src={service.imageUrl} alt="" />
              <h5 style={{ marginTop: "5px" }}>{service.name}</h5>
              <p style={{ marginTop: "5px" }}>${service.price}</p>
            </StyledCard>
          );
        })}
      </StyledCardContainer>
    </StyledServices>
  );
};

export default ServiceCard;
