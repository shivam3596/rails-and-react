import React from "react";
import { Link } from "react-router-dom";
import { Container } from '@material-ui/core';

export default () => (
  <Container>
    <h1 className="display-4">Food Recipes</h1>
    <p> A curated list of recipes for the best homemade meal and delicacies. </p>
    <Link to="/recipes"> View Recipes </Link>
  </Container>
);
