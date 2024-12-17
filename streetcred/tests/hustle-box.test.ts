import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { BoxOpened } from "../generated/schema"
import { BoxOpened as BoxOpenedEvent } from "../generated/HustleBox/HustleBox"
import { handleBoxOpened } from "../src/hustle-box"
import { createBoxOpenedEvent } from "./hustle-box-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let tokenId = BigInt.fromI32(234)
    let winningsAmount = BigInt.fromI32(234)
    let newBoxOpenedEvent = createBoxOpenedEvent(user, tokenId, winningsAmount)
    handleBoxOpened(newBoxOpenedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BoxOpened created and stored", () => {
    assert.entityCount("BoxOpened", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BoxOpened",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BoxOpened",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "BoxOpened",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "winningsAmount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
