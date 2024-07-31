import config from "./config.json";
import { KeanuContainer } from './components/KeanuContainer';
import { KeanuForm } from './components/KeanuForm';
import { validate } from './ValidationSchema';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { KeanuHeader } from "./components/KeanuHeader";
import { Alert } from "@mui/material";

const KeanuApp = () => {

  if (!validate(config)) {
    return <KeanuContainer>
      <Alert variant="filled" severity="error">
        Oh noo! The config.json validation did not passed!
      </Alert>
    </KeanuContainer>
  }
  
  return (
    <KeanuContainer>
        <KeanuHeader />
        <KeanuForm />
    </KeanuContainer>
  );
};

export default KeanuApp;
