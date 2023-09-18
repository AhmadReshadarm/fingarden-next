import color from 'components/store/lib/ui.colors';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { devices } from '../lib/Devices';
type props = {
  width?: string;
  height?: string;
  flex_direction?: string;
  justify_content?: string;
  position?: string;
  padding?: string;
  top?: string;
  z_index?: string;
  bg_color?: string;
  align_items?: string;
  gap?: string;
  box_shadow?: string;
};

const Btns = styled(motion.button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 2px;
  user-select: none;
  cursor: pointer;
  width: 52px;
  span {
    font-size: 14px;
    line-height: 1;
  }
  &:hover {
    color: ${color.hover};
  }
`;

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: ${(p: props) => p.flex_direction};
  justify-content: ${(p: props) => p.justify_content};
  align-items: center;
  position: ${(p: props) => p.position};
  padding: ${(p: props) => p.padding};
  top: ${(p: props) => p.top};
  z-index: ${(p: props) => p.z_index};
  background: ${(p: props) => p.bg_color};
  box-shadow: ${(p: props) => p.box_shadow};
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1230px;
  display: flex;
  flex-direction: row;
  gap: ${(p: props) => p.gap};

  @media ${devices.laptopM} {
    max-width: 990px;
  }

  @media ${devices.laptopS} {
    max-width: 728px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: ${(p: props) => p.height};
  display: flex;
  flex-direction: ${(p: props) => p.flex_direction};
  justify-content: ${(p: props) => p.justify_content};
  align-items: ${(p: props) => p.align_items};
  gap: ${(p: props) => p.gap};
`;

export { Container, Wrapper, Content, Btns };
