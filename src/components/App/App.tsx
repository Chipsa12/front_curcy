import React, {useState} from "react";
import { hot } from 'react-hot-loader/root';
import Form from "../Form";
import Main from "../main";


const App = (): React.ReactElement => {
  const [message, setMessage] = useState<string | undefined>();

  const handleChangeMessage = (message:string) => setMessage(message);

  return <div>
    <Form onChangeMessage={handleChangeMessage}/>
    {message && <Main message={message}/>}
  </div>
};

export default hot(App);
