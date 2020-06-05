import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(Date.parse(date)));
}

function RenderComments({ comments }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div>
              <p>{comment.text}</p>
              <p>
                -- {comment.author}, {formatDate(comment.date)}
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div />;
  }
}

function CampsiteInfo(props) {
  return props.campsite ? (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/directory">Directory</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
          </Breadcrumb>
          <h2>{props.campsite.name}</h2>
        </div>
      </div>
      <div className="row">
        <RenderCampsite campsite={props.campsite} />
        <RenderComments comments={props.comments} />
      </div>
    </div>
  ) : (
    <div />
  );
}

export default CampsiteInfo;
