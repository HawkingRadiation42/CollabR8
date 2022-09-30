// import logo from './logo.svg';
import './App.css';
import { 
  NavBar,
  Homepagecollection,
  Addnewpost
} from './ui-components';

import {withAuthenticator} from "@aws-amplify/ui-react";
import { useState } from 'react';

function App({signOut}) {

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [Tags, setTags] = useState("");
  const [UserRequirements, setUserRequirements] = useState("");
  const [name, setName] = useState("");

  const navbarOverrides = {
    "image":{
      src: "https://i.postimg.cc/4xPkhQfF/logo.png"
    },
    "Button35332517":{
      onClick: signOut
    }
  }

  return (
    <div className="App" style={{
      backgroundColor: 'white',
    }}>
      <NavBar overrides={navbarOverrides} width="100%" />
      <header className="App-header">
        <Homepagecollection />
      </header>
    </div>
  );
}

export default withAuthenticator( App );
