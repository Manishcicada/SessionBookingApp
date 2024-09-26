import { Input, Form } from "antd";

export default function FormComponent(){
  
  return(
    <Form>
      <Form.Item label= 'Your Name'>
        <Input type="text"/>
      </Form.Item>
      <Form.Item label= 'Your Email'>
        <Input type="email"/>
      </Form.Item>
    </Form>
  );
}