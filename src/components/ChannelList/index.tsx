import React from "react";
import ChannelButton from '../ChannelButton';

import {Container, Category, AddCategoryIcon} from './styles';

const ChannelList: React.FC = () => {
  return (
   <Container>
    <Category>
      <span>Canais de texto</span>
      <AddCategoryIcon />
    </Category>
    <ChannelButton channelName="conversolândia" />
    <ChannelButton channelName="trabalho" />
    <ChannelButton channelName="lolzinho" />
    <ChannelButton channelName="MMORPG" />
    <ChannelButton channelName="AFK" />

   </Container> 
  );
};

export default ChannelList;
