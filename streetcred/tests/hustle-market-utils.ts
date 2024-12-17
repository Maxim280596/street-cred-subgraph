import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AddNewNftType,
  AddToUsersQueue,
  Buy,
  LotterySetted,
  OwnershipTransferred,
  RefSetted,
  Sell
} from "../generated/HustleMarket/HustleMarket"

export function createAddNewNftTypeEvent(
  tokenType: i32,
  price: BigInt
): AddNewNftType {
  let addNewNftTypeEvent = changetype<AddNewNftType>(newMockEvent())

  addNewNftTypeEvent.parameters = new Array()

  addNewNftTypeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenType))
    )
  )
  addNewNftTypeEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return addNewNftTypeEvent
}

export function createAddToUsersQueueEvent(
  user: Address,
  tokenType: i32
): AddToUsersQueue {
  let addToUsersQueueEvent = changetype<AddToUsersQueue>(newMockEvent())

  addToUsersQueueEvent.parameters = new Array()

  addToUsersQueueEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  addToUsersQueueEvent.parameters.push(
    new ethereum.EventParam(
      "tokenType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenType))
    )
  )

  return addToUsersQueueEvent
}

export function createBuyEvent(
  user: Address,
  tokenType: i32,
  tokenId: BigInt,
  price: BigInt,
  homie1: Address,
  homie2: Address,
  isFromQueue: boolean
): Buy {
  let buyEvent = changetype<Buy>(newMockEvent())

  buyEvent.parameters = new Array()

  buyEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "tokenType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenType))
    )
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("homie1", ethereum.Value.fromAddress(homie1))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam("homie2", ethereum.Value.fromAddress(homie2))
  )
  buyEvent.parameters.push(
    new ethereum.EventParam(
      "isFromQueue",
      ethereum.Value.fromBoolean(isFromQueue)
    )
  )

  return buyEvent
}

export function createLotterySettedEvent(lottery: Address): LotterySetted {
  let lotterySettedEvent = changetype<LotterySetted>(newMockEvent())

  lotterySettedEvent.parameters = new Array()

  lotterySettedEvent.parameters.push(
    new ethereum.EventParam("lottery", ethereum.Value.fromAddress(lottery))
  )

  return lotterySettedEvent
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

export function createRefSettedEvent(user: Address, ref: Address): RefSetted {
  let refSettedEvent = changetype<RefSetted>(newMockEvent())

  refSettedEvent.parameters = new Array()

  refSettedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  refSettedEvent.parameters.push(
    new ethereum.EventParam("ref", ethereum.Value.fromAddress(ref))
  )

  return refSettedEvent
}

export function createSellEvent(
  homie1: Address,
  homie2: Address,
  tokenType: i32,
  tokenId: BigInt
): Sell {
  let sellEvent = changetype<Sell>(newMockEvent())

  sellEvent.parameters = new Array()

  sellEvent.parameters.push(
    new ethereum.EventParam("homie1", ethereum.Value.fromAddress(homie1))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam("homie2", ethereum.Value.fromAddress(homie2))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "tokenType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenType))
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return sellEvent
}
