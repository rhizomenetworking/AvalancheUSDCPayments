// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Customer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("sales", Value.fromBigInt(BigInt.zero()));
    this.set("revenue", Value.fromBigInt(BigInt.zero()));
    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("register_address", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Customer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Customer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Customer", id.toString(), this);
    }
  }

  static load(id: string): Customer | null {
    return changetype<Customer | null>(store.get("Customer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sales(): BigInt {
    let value = this.get("sales");
    return value!.toBigInt();
  }

  set sales(value: BigInt) {
    this.set("sales", Value.fromBigInt(value));
  }

  get revenue(): BigInt {
    let value = this.get("revenue");
    return value!.toBigInt();
  }

  set revenue(value: BigInt) {
    this.set("revenue", Value.fromBigInt(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get register_address(): Bytes {
    let value = this.get("register_address");
    return value!.toBytes();
  }

  set register_address(value: Bytes) {
    this.set("register_address", Value.fromBytes(value));
  }
}
