import React from 'react';
import {ControlGroup} from '../../components/control-group';
import {ControlItem} from '../../components/control-item';
import {VerticalControl} from '../../components/vertical-control';
import {HorizontalControl} from '../../components/horizontal-control';
import {MusicController} from '../../components/music-controller';

import {Row, Container, Content, Wrapper} from './styled';

const image = require('../../theme/images/bg.jpeg');

export const ControlCenter = () => (
  <Container source={image} resizeMode="cover">
    <Content>
      <Row>
        <ControlGroup />
        <MusicController />
      </Row>
      <Row>
        <Wrapper>
          <Row>
            <ControlItem name="ios-lock-closed" />
            <ControlItem name="md-copy-outline" />
          </Row>
          <HorizontalControl />
        </Wrapper>
        <Row>
          <VerticalControl name="ios-sunny" />
          <VerticalControl name="ios-volume-low-sharp" />
        </Row>
      </Row>
      <Row>
        <ControlItem name="ios-flashlight" />
        <ControlItem name="ios-calculator" />
        <ControlItem name="camera-sharp" />
        <ControlItem name="ios-stop-circle-outline" />
      </Row>
    </Content>
  </Container>
);
