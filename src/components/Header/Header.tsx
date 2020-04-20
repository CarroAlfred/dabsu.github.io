import './Header.scss';

import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  Toolbar
} from '@material-ui/core';
import React from 'react';

import avatar from '../../assets/images/avatar-sm.png';

interface Props {
  onClick: (e: any) => void;
}
export const Header = ({ onClick }: Props) => {
  return (
    <div className="header">
      <div>
        <IconButton edge="start">
          <Avatar src={avatar} />{' '}
          <span className="initials">theAlfredCarro</span>
        </IconButton>
      </div>
      <div>
        <IconButton edge="end" onClick={onClick}>
          switch here
        </IconButton>
      </div>
    </div>
  );
};
