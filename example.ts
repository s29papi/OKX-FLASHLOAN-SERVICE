
import { PublicKey } from "@solana/web3.js"
import { buildSimulatedFlashLoanInstructions } from "./sdk/flash_swap"
async function main() {
    const targetTokenMint = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v")
    const desiredTargetAmount = "100000000"
    await buildSimulatedFlashLoanInstructions({targetTokenMint, desiredTargetAmount})
}

main()