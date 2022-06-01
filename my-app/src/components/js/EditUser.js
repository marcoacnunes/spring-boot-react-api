import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

export const EditUser = () => {
  return (
    <Form>
    <FormGroup>
      <Label>Name</Label>
      <Input type="text" placeholder="Enter Name"></Input>
    </FormGroup>
    <FormGroup>
      <Label>Occupation</Label>
      <Input type="text" placeholder="Enter Occupation"></Input>
    </FormGroup>
    <FormGroup>
      <Label>Email</Label>
      <Input type="text" placeholder="Enter Email"></Input>
    </FormGroup>
    <FormGroup>
      <Label>Phone Number</Label>
      <Input type="text" placeholder="Enter Phone Number"></Input>
    </FormGroup>
    <Button type="submit">Edit Name</Button>
    <Link to='/' className="btn btn-danger ml-2">Cancel</Link>
  </Form>
  )
}
