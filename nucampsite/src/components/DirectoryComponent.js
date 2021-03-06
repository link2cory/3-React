import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDirectoryItem({ campsite }) {
  return (
    <div className="col-md-5 m-1" key={campsite.id}>
      <Card>
        <Link to={`/directory/${campsite.id}`}>
          <CardImg width="100%" src={campsite.image} alt={campsite.name} />
          <CardImgOverlay>
            <CardTitle>{campsite.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    </div>
  );
}

function Directory(props) {
  const directory = props.campsites.map((campsite) => (
    <RenderDirectoryItem campsite={campsite} />
  ));
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Directory</BreadcrumbItem>
          </Breadcrumb>
          <h2>Directory</h2>
        </div>
      </div>
      <div className="row">{directory}</div>
    </div>
  );
}

export default Directory;
