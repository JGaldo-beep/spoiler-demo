import React from "react";
import index from "./index.js";
import { useState } from "react";

import * as solanaWeb3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";
import bs58 from "bs58";
import { PublicKey } from "@solana/web3.js";

const Donacion = () => {
	const mintAddress = "88DFvssGpzB5DNBLKAftJUskbV1P6Q9TU82cAabMetR7";

	const handleTransaction = () => {
		async function main() {
			const connection = new solanaWeb3.Connection(
				"https://nd-071-050-044.p2pify.com/c0a00eeb6d478436f6c3dfb7b7a985f2",
				{
					wsEndpoint:
						"wss://ws-nd-071-050-044.p2pify.com/c0a00eeb6d478436f6c3dfb7b7a985f2",
				}
			);

			const walletKeyPair = solanaWeb3.Keypair.fromSecretKey(
				new Uint8Array(
					bs58.decode(
						"3wRT1bvbxAfxUbfUnRiQBZDRK63VZtDiN5XYuTTxnDT9rWJrpRbB1nruVvKtNRBFXxLLd7KzwECFDpKHEXWa6Uup"
					)
				)
			);

			let balance = connection.getBalance(walletKeyPair.publicKey);
			console.log(balance / solanaWeb3.LAMPORTS_PER_SOL);

			const tokenAccount =
				await splToken.getOrCreateAssociatedTokenAccount(
					connection,
					walletKeyPair,
					new PublicKey(mintAddress),
					walletKeyPair.publicKey
				);
			console.log(tokenAccount);

			// const secondWalletKeyPair = solanaWeb3.Keypair.fromSecretKey(
			// 	new Uint8Array(
			// 		bs58.decode(
			// 			"7RP3TdZzDhy3hohEEGssK33PFJo8EkKSzw8cb7ENee6aNZpws2fCFZxvTgSLx9J2Ybt4dP9e1rPmhuppw6sRd2X"
			// 		)
			// 	)
			// );

			const transaction = new solanaWeb3.Transaction().add(
				solanaWeb3.SystemProgram.transfer({
					fromPubkey: "39z5jK94ufJzaYgbtoC7fuP9ZxxcEzaox2QbZErtiXmL",
					toPubkey: "4nj3eiBoi5rT6JgCVuHRMKpjGgZEESi4TTuzYCaq9iPd",
					lamports: solanaWeb3.LAMPORTS_PER_SOL * 0.01,
				})
			);

			const signature = await solanaWeb3.sendAndConfirmTransaction(
				connection,
				transaction,
				[walletKeyPair]
			);
		}

		main();
	};

	return (
		<>
			<button
				// onClick={handleConnectWallet}
				className="m-4 p-2 border-2 border-black rounded-full"
			>
				Connect
			</button>
			<input
				type="text"
				placeholder="Inserte solanas..."
				id="quantity"
				className="border-2 border-black rounded-md px-1"
				// onChange={0.01}
			/>
			<button
				onClick={handleTransaction}
				className="m-4 p-2 border-2 border-black rounded-full"
			>
				Send Money
			</button>

			<p id="status_p" className="p-4">
				Status: <span id="status">Disconnected</span>
			</p>
		</>
	);
};

export default Donacion;
