import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import ConnectWallet from "../components/ConnectWallet";
import { Button } from "../components/Button";
import { useEthers } from "@usedapp/core";
import SendTransaction from "../components/SendTransaction";

const Home: NextPage = () => {
  const { account, deactivate } = useEthers()
   //implement logic to find if account is logged in or not = DONE
   return account == null ? (
    <ConnectWallet></ConnectWallet>
  ) : (
    <>
      <SendTransaction></SendTransaction>
      <Button onClick={deactivate}>Disconnect</Button>
    </>
  );
};

export default Home;
