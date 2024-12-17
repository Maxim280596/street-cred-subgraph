import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SetBaseURI as SetBaseURIEvent,
  SetHustleMarket as SetHustleMarketEvent,
  StreetSoulMinted as StreetSoulMintedEvent,
  Transfer as TransferEvent,
} from "../generated/StreetCred/StreetCred"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  SetBaseURI,
  SetHustleMarket,
  StreetSoulMinted,
  Transfer,
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetBaseURI(event: SetBaseURIEvent): void {
  let entity = new SetBaseURI(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.baseURI = event.params.baseURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetHustleMarket(event: SetHustleMarketEvent): void {
  let entity = new SetHustleMarket(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.hustleMarket = event.params.hustleMarket

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStreetSoulMinted(event: StreetSoulMintedEvent): void {
  let entity = new StreetSoulMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.tokenID = event.params.tokenID
  entity.tokenType = event.params.tokenType
  entity.homie1 = event.params.homie1
  entity.homie2 = event.params.homie2

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
