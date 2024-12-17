import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BoxOpened,
  OwnershipTransferred
} from "../generated/HustleBox/HustleBox"

export function createBoxOpenedEvent(
  user: Address,
  tokenId: BigInt,
  winningsAmount: BigInt
): BoxOpened {
  let boxOpenedEvent = changetype<BoxOpened>(newMockEvent())

  boxOpenedEvent.parameters = new Array()

  boxOpenedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  boxOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  boxOpenedEvent.parameters.push(
    new ethereum.EventParam(
      "winningsAmount",
      ethereum.Value.fromUnsignedBigInt(winningsAmount)
    )
  )

  return boxOpenedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
