import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderDirectoryItem({ campsite, onClick }) {
  return (
    <div className="col-md-5 m-1" key={campsite.id}>
      <Card onClick={() => onClick(campsite.id)}>
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
}

function Directory(props) {
  const directory = props.campsites.map((campsite) => (
    <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
  ));
  return (
    <div className="container">
      <div className="row">{directory}</div>
    </div>
  );
}

export default Directory;
