import { motion } from 'framer-motion';
import styled from 'styled-components';
import { styleProps } from 'components/store/lib/types';
import { devices } from 'components/store/lib/Devices';
const ArrowBtns = styled(motion.button)`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  position: ${(p: styleProps) => p.position};
  right: ${(p: styleProps) => p.right};
  left: ${(p: styleProps) => p.left};
  top: ${(p: styleProps) => p.top};
  background-color: ${(P: styleProps) => P.bgcolor};
  box-shadow: ${(P: styleProps) => P.boxshadow};
  backdrop-filter: ${(P: styleProps) => P.filterdropback};
  -webkit-backdrop-filter: ${(P: styleProps) => P.filterdropback};
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  @media ${devices.mobileL} {
    width: 45px;
    height: 45px;
    top: ${(p: styleProps) => p.topMobile};
  }
`;

const ArrowSpan = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: rotate(${(p: styleProps) => p.rotate}deg);
`;

export { ArrowBtns, ArrowSpan };
