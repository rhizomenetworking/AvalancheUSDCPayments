import { BigInt } from "@graphprotocol/graph-ts"
import { Transfer } from "../generated/Contract/Contract"
import { Customer } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let wallet = event.params.from
  let register = event.params.to
  let value = event.params.value
  let customer_id = wallet.toHex() + "-" + register.toHex()

  let customer = Customer.load(customer_id)
  if (!customer) {
    customer = new Customer(customer_id)
    customer.sales = BigInt.fromI32(0)
    customer.revenue = BigInt.fromI32(0)
    customer.address = wallet
    customer.register_address = register
  }

  customer.sales = customer.sales + BigInt.fromI32(1)
  customer.revenue = customer.revenue + value

  customer.save()
}
