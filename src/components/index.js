import * as solanaWeb3 from "@solana/web3.js";
import * as splToken from "@solana/spl-token";
import bs58 from "bs58";
import { PublicKey } from "@solana/web3.js";

// const solanaWeb3 = require("@solana/web3.js");
// const splToken = require("@solana/spl-token");
// const bs58 = require("bs58");
// const { PublicKey } = require("@solana/web3.js");

const mintAddress = "88DFvssGpzB5DNBLKAftJUskbV1P6Q9TU82cAabMetR7";

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

	// SLP Token
	// const mint = await splToken.createMint(
	//   connection,
	//   walletKeyPair,
	//   walletKeyPair.publicKey,
	//   null,
	//   9,
	//   undefined,
	//   {},
	//   splToken.TOKEN_PROGRAM_ID,
	// );
	// console.log(mint)

	const tokenAccount = await splToken.getOrCreateAssociatedTokenAccount(
		connection,
		walletKeyPair,
		new PublicKey(mintAddress),
		walletKeyPair.publicKey
	);
	console.log(tokenAccount);

	// await splToken.mintTo(
	//   connection,
	//   walletKeyPair,
	//   mint,
	//   tokenAccount.address,
	//   walletKeyPair.publicKey,
	//   1000000000000,
	// );

	// Transaction
	// const secondWalletKeyPair = solanaWeb3.Keypair.generate();
	// const secondWalletKeyPair = solanaWeb3.Keypair.fromSecretKey(new Uint8Array(bs58.decode("3wRT1bvbxAfxUbfUnRiQBZDRK63VZtDiN5XYuTTxnDT9rWJrpRbB1nruVvKtNRBFXxLLd7KzwECFDpKHEXWa6Uup")));
	const secondWalletKeyPair = solanaWeb3.Keypair.fromSecretKey(
		new Uint8Array(
			bs58.decode(
				"7RP3TdZzDhy3hohEEGssK33PFJo8EkKSzw8cb7ENee6aNZpws2fCFZxvTgSLx9J2Ybt4dP9e1rPmhuppw6sRd2X"
			)
		)
	);

	const transaction = new solanaWeb3.Transaction().add(
		solanaWeb3.SystemProgram.transfer({
			fromPubkey: walletKeyPair.publicKey,
			toPubkey: secondWalletKeyPair.publicKey,
			lamports: solanaWeb3.LAMPORTS_PER_SOL * 0.01,
		})
	);

	const signature = await solanaWeb3.sendAndConfirmTransaction(
		connection,
		transaction,
		[walletKeyPair]
	);
}

export default main();
