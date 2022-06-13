import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            author="Camila Castro"
            date="13/06/2022"
            content="Bom dia!!"
          />
        ))}

        <ChannelMessage
          author="Gabriel Bellon"
          date="13/06/2022"
          content={
            <>
              <Mention>@Camila Castro</Mention>, vamos jogar?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #conversolândia" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;