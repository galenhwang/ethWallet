import { formatEther, parseEther } from "@ethersproject/units";
import { BigNumber } from 'ethers'
import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "./Input";

const SendTransaction: React.FC = () => {
  const { account } = useEthers()
  const balance = useEtherBalance(account)
  const [address, setAddress] = useState("init")
  const [amount, setAmount] = useState("init")
  const [disabled, setDisabled] = useState(false)
  const { sendTransaction, state } = useSendTransaction({ transactionName: 'Send Ethereum' })
  useEffect(() => {
    if (state.status != 'Mining') {
      setDisabled(false)
      setAmount('0')
      setAddress('')
    }
  }, [state])
  const handleClick = () => {
    setDisabled(true)
    sendTransaction({ to: address, value: parseEther(amount) })
  };

  return (
    <>
      <p>Your wallet address: {account}</p>
      <p>Balance is: {formatEther(balance ?? BigNumber.from("0"))}</p>
      <p>Wallet to send to: <Input type="text" value={address} onChange={e => setAddress(e.target.value)} disabled={disabled}></Input></p>
      <p>Amount to send: <Input type="number" value={amount} onChange={e => setAmount(e.target.value)} disabled={disabled}></Input></p>
      <Button onClick={handleClick} disabled={disabled}>Send</Button>
      {" "}
      <div></div>{" "}
    </>
  );
};

export default SendTransaction;
