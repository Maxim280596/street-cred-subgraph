import {
  BoxOpened as BoxOpenedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/HustleBox/HustleBox"
import { BoxOpened, OwnershipTransferred } from "../generated/schema"

export function handleBoxOpened(event: BoxOpenedEvent): void {
  let entity = new BoxOpened(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.tokenId = event.params.tokenId
  entity.winningsAmount = event.params.winningsAmount

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
