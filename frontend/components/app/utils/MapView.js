import styled from "styled-components";

const MapView = () => {
  return (
    <MapViewStyled>
      <p className="mapView">Map View Here</p>
    </MapViewStyled>
  );
};

const MapViewStyled = styled.div`
  background: #f5f5f5;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 416px;
  margin-bottom: 40px;
  .mapView {
    font-family: "Messina Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #878786;
  }
`;

export default MapView;
