import React from "react";

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ( {nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot? ' bot' : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
   <Container>
    <Role>Disponível - 1</Role>
    <UserRow nickname="Camila Castro"/>
    
    <Role>Offline - 6</Role>
    <UserRow nickname="Gabriel Bellon" isBot/>
    <UserRow nickname="Mia Bellon"/>
    <UserRow nickname="Fibrasek"/>
    <UserRow nickname="Lina" />
    <UserRow nickname="Zeny"/>
    <UserRow nickname="Scorphol"/>
   </Container> 
  );
};

export default UserList;
