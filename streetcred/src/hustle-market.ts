import {
  AddNewNftType as AddNewNftTypeEvent,
  AddToUsersQueue as AddToUsersQueueEvent,
  Buy as BuyEvent,
  LotterySetted as LotterySettedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RefSetted as RefSettedEvent,
  Sell as SellEvent
} from "../generated/HustleMarket/HustleMarket"
import {
  AddNewNftType,
  AddToUsersQueue,
  Buy,
  LotterySetted,
  OwnershipTransferred,
  RefSetted,
  Sell
} from "../generated/schema"

export function handleAddNewNftType(event: AddNewNftTypeEvent): void {
  let entity = new AddNewNftType(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenType = event.params.tokenType
  entity.price = event.params.price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddToUsersQueue(event: AddToUsersQueueEvent): void {
  let entity = new AddToUsersQueue(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.tokenType = event.params.tokenType

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBuy(event: BuyEvent): void {
  let entity = new Buy(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.user = event.params.user
  entity.tokenType = event.params.tokenType
  entity.tokenId = event.params.tokenId
  entity.price = event.params.price
  entity.homie1 = event.params.homie1
  entity.homie2 = event.params.homie2
  entity.isFromQueue = event.params.isFromQueue

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLotterySetted(event: LotterySettedEvent): void {
  let entity = new LotterySetted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.lottery = event.params.lottery

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRefSetted(event: RefSettedEvent): void {
  let entity = new RefSetted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.ref = event.params.ref

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSell(event: SellEvent): void {
  let entity = new Sell(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.homie1 = event.params.homie1
  entity.homie2 = event.params.homie2
  entity.tokenType = event.params.tokenType
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
