import styled from "styled-components";
import * as React from "react";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #e2e2e2;
`;

const FlexGrow = styled.div`
  position: relative;
  flex-grow: 1;
`;
const ToastWrapper = styled.div`
  position: absolute;
  top: 76px;
  right: 160px;
  min-width: 272px;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <FlexGrow>{children}</FlexGrow>
    </Wrapper>
  );
}
