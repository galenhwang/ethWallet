import styled from "styled-components";
import { useEthers } from "@usedapp/core";

const onError = (error: Error) => {
  console.log(error.message) // for debugging purposes as I couldn't connect; the message was No Ethereum provider was found on window.ethereum.
}

const ConnectWallet: React.FC = () => {
  const { activateBrowserWallet } = useEthers();
  //implement logic and button to connect wallet to dapp = DONE
  return (
    <Button onClick={() => activateBrowserWallet(onError)}>Connect</Button>
  )
};

const Button = styled.button`
  /* Default; didn't have time to style */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;`

export default ConnectWallet;
export { Button };
