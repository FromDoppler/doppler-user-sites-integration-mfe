import styled from "styled-components";
import iconTop from "../assets/images/icon-top.svg";
import rightDiagram from "../assets/images/right-diagram.svg";

export const LandingContainer = styled.div`
  padding: 4rem 0;
`;

export const LandingBreadcrumb = styled.div`
  padding: 0 0 15px 0;
  font-size: 10px;
`;

export const LandingContent = styled.div`
  padding: 20px 0 0 0;
  && p {
    padding: 0 0 25px 0;
    font-size: 18px;
    line-height: 30px;
  }
`;

const iconImg = ({ className }: any) => (
  <img className={className} src={iconTop} alt="Icon" />
);
export const LandingIconImg = styled(iconImg)`
  margin: 20px 0 20px 0;
  width: 90px;
  height: 64px;
`;

const rightDiagramImg = ({ className }: any) => (
  <img className={className} src={rightDiagram} alt="Diagram" />
);
export const LandingRightDiagramImg = styled(rightDiagramImg)`
  width: 627px;
  height: 588px;
`;
