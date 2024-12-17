import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  SetBaseURI,
  SetHustleMarket,
  StreetSoulMinted,
  Transfer
} from "../generated/StreetCred/StreetCred"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
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

export function createSetBaseURIEvent(baseURI: string): SetBaseURI {
  let setBaseUriEvent = changetype<SetBaseURI>(newMockEvent())

  setBaseUriEvent.parameters = new Array()

  setBaseUriEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )

  return setBaseUriEvent
}

export function createSetHustleMarketEvent(
  hustleMarket: Address
): SetHustleMarket {
  let setHustleMarketEvent = changetype<SetHustleMarket>(newMockEvent())

  setHustleMarketEvent.parameters = new Array()

  setHustleMarketEvent.parameters.push(
    new ethereum.EventParam(
      "hustleMarket",
      ethereum.Value.fromAddress(hustleMarket)
    )
  )

  return setHustleMarketEvent
}

export function createStreetSoulMintedEvent(
  tokenID: BigInt,
  tokenType: i32,
  homie1: Address,
  homie2: Address
): StreetSoulMinted {
  let streetSoulMintedEvent = changetype<StreetSoulMinted>(newMockEvent())

  streetSoulMintedEvent.parameters = new Array()

  streetSoulMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenID",
      ethereum.Value.fromUnsignedBigInt(tokenID)
    )
  )
  streetSoulMintedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenType))
    )
  )
  streetSoulMintedEvent.parameters.push(
    new ethereum.EventParam("homie1", ethereum.Value.fromAddress(homie1))
  )
  streetSoulMintedEvent.parameters.push(
    new ethereum.EventParam("homie2", ethereum.Value.fromAddress(homie2))
  )

  return streetSoulMintedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
