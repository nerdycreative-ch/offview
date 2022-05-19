import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/web/utils/Header";
import PropertyDetailsSideBar from "../components/web/utils/PropertyDetailsSideBar";
import { useWebContext } from "../context/webContext";
import MakeAnOfferModal from "../components/web/utils/MakeAnOfferModal";
import Modal from "../components/web/utils/Modal";
import RegisterSuccessFullModal from "../components/app/auth/register/RegisterSuccessFullModal";

const PropertyDetails = () => {
  const { modalIsOpen, setIsOpen } = useWebContext();

  useEffect(() => {}, [modalIsOpen]);

  return (
    <PropertyDetailsStyled>

      {modalIsOpen && <MakeAnOfferModal />}

      {/* HEADER */}

      <Header
        title="Parkdale House"
        content="Preston Rd. Inglewood, Maine"
        price="820.000"
        category="House"
        additionalData
      />

      {/* IMAGE */}
      <div className="imageContainer">
        <img src="../assets/images/web/listingDetailsMainImage.png" alt="" />
      </div>

      {/* CONTENT */}

      <div className="listDetailsContent">
        <div className="leftSide">
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
            varius duis at consectetur lorem donec. Aenean pharetra magna ac
            placerat vestibulum lectus. Sapien et ligula ullamcorper malesuada
            proin libero nunc. Feugiat vivamus at augue eget arcu dictum. Lorem
            donec massa sapien faucibus et molestie ac. Mi ipsum faucibus vitae
            aliquet nec ullamcorper sit. Sit amet venenatis urna cursus eget
            nunc. Lacus luctus accumsan tortor posuere. Amet aliquam id diam
            maecenas ultricies. Commodo odio aenean sed adipiscing diam donec
            adipiscing tristique risus. Facilisi morbi tempus iaculis urna id.
            Vestibulum rhoncus est pellentesque elit. Nisl vel pretium lectus
            quam id. Sed libero enim sed faucibus turpis in. Cursus turpis massa
            tincidunt dui ut ornare lectus sit amet. Massa tempor nec feugiat
            nisl pretium fusce id velit ut. Donec ac odio tempor orci. Nunc
            scelerisque viverra mauris in. Fames ac turpis egestas maecenas
            pharetra. Condimentum mattis pellentesque id nibh tortor id aliquet.
            Turpis egestas pretium aenean pharetra. Diam donec adipiscing
            tristique risus nec feugiat in fermentum posuere. Aenean et tortor
            at risus viverra adipiscing at in tellus. Non nisi est sit amet
            facilisis magna. Sagittis purus sit amet volutpat consequat mauris
            nunc. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi.
            Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Risus
            nec feugiat in fermentum posuere. Platea dictumst vestibulum rhoncus
            est. Sociis natoque penatibus et magnis dis parturient montes
            nascetur ridiculus. Praesent tristique magna sit amet purus gravida
            quis blandit turpis. Pharetra vel turpis nunc eget lorem dolor.
            Turpis egestas sed tempus urna et pharetra pharetra massa. Sit amet
            mauris commodo quis imperdiet massa.
          </p>

          <div className="mapView">Map View Here</div>
        </div>
        <div className="rightSide">
          <PropertyDetailsSideBar />
        </div>
      </div>
    </PropertyDetailsStyled>
  );
};

const PropertyDetailsStyled = styled.div`
  .imageContainer img {
    height: 540px;
    width: 100%;
  }

  .listDetailsContent {
    padding: 80px 11.25%;
    display: flex;
    justify-content: space-between;
  }
  .leftSide {
    flex: 2.5;
  }
  .listDetailsContent .rightSide {
    flex: 1;
    margin-left: 48px;
  }

  .mapView {
    background: #f5f5f5;
    border-radius: 4px;
    height: 416px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }

  @media (max-width: 991.98px) {
    .mapView {
      flex: 1;
    }
    .imageContainer img {
      height: 320px;
      width: 100%;
    }
  }

  @media (max-width: 767.98px) {
    .listDetailsContent {
      display: flex;
      flex-direction: column;
      padding: 40px 5%;
    }
    .listDetailsContent .rightSide {
      flex: 1;
      margin-left: 0px;
      margin-top: 32px;
    }
  }
`;

export default PropertyDetails;
