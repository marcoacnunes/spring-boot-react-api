import React from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'react-strap';

export const AddUser = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" placeholder="Enter Name"></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to='/' className="btn btn-danger m1-2">Cancel</Link>
    </Form>
  )
}
