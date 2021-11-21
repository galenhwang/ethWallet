import styled from "styled-components";
import { useEthers } from "@usedapp/core";

const ConnectWallet: React.FC = () => {
  const { activateBrowserWallet } = useEthers();
  return (
    <Button onClick={() => activateBrowserWallet()}>Connect</Button>
  )
};

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;`

export default ConnectWallet;
export { Button };
