import React from "react";
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
    label: string;  // Button text
    to: string;     // URL path to navigate to
  }

const NavButton: React.FC<ButtonLinkProps> = ({ label, to }) => (
    <Button variant="contained" component={Link} to={to} sx={{ margin: 1 }}>
      {label}
    </Button>
  );
  
  export default NavButton;