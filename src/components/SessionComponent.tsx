import { Image, Flex, Typography} from "antd";
import Button from './Button.tsx';

type SessionComponentProps = {
  title: string;
  summary: string;
  image: string;
  id: string
}

const {Paragraph} = Typography;

export default function SessionComponent({image, title, summary, id}: SessionComponentProps){
  
  const link = '/sessions/'+id;

  return(
    <Flex vertical style={
      {
        border: 'none',
        borderRadius: '10px', 
        overflow: 'hidden', 
        background: "#373240",
        paddingBottom: '20px',
      }
    }>
      <Image src={image} style={{height: '200px',objectFit: 'cover'}}></Image>
      <Paragraph style={
        {color: '#bba4de',
         marginLeft: '15px',
         marginBottom: '0px',
         marginTop: '20px'
        }
      }>{title}</Paragraph>
      <Paragraph style={{color: 'white', marginLeft: '15px'}}>{summary}</Paragraph>
      <Flex justify="end"
        style={{paddingRight: '20px', marginTop: '10px'}}
      >
        <Button
         type="Link" 
         href={link} 
         styling="button"
         style={{
          borderRadius: '5px',
          height: '35px',
          width: '120px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
         }}
         >
          Learn More</Button>
      </Flex>
      
    </Flex>
  );
}