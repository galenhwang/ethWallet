import { useEthers } from "@usedapp/core";
import { Button } from "./Button";

const ConnectWallet: React.FC = () => {
  const { activateBrowserWallet } = useEthers();
  return (
    <Button onClick={() => activateBrowserWallet()}>Connect</Button>
  )
};

export default ConnectWallet;