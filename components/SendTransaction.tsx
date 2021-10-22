import styled from "styled-components";
import { formatEther, parseEther } from "@ethersproject/units";
import { BigNumber } from 'ethers'
import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";
import { useEffect, useState } from "react";
import head from "next/head";
import { Button } from "../components/ConnectWallet";

const SendTransaction: React.FC = () => {
  const { account } = useEthers()
  const balance  = useEtherBalance(account)
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
  //implement logic to display address of logged in wallet = DONE
  //implement logic to display eth balance of logged in wallet = DONE
  //implement logic to take in an input of a wallet address and state to hold it = DONE
  //implement logic to take in an input of a amount to send and state to hold it = DONE
  //implement logic for the button to send a transaction with the current values of the wallet = DONE
  //address state and the amount state = DONE
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

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;`

export default SendTransaction;
