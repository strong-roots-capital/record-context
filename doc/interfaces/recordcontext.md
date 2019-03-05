[record-context](../README.md) > [RecordContext](../interfaces/recordcontext.md)

# Interface: RecordContext

Context of a timeseries `Record`.

## Hierarchy

**RecordContext**

## Index

### Properties

* [exchange](recordcontext.md#exchange)
* [timeframe](recordcontext.md#timeframe)
* [tradepair](recordcontext.md#tradepair)

---

## Properties

<a id="exchange"></a>

###  exchange

**● exchange**: *`string`*

*Defined in [record-context.ts:26](https://github.com/strong-roots-capital/record-context/blob/e68350a/src/record-context.ts#L26)*

Name of exchange from which `Record` was collected.

___
<a id="timeframe"></a>

###  timeframe

**● timeframe**: *`number`*

*Defined in [record-context.ts:14](https://github.com/strong-roots-capital/record-context/blob/e68350a/src/record-context.ts#L14)*

Timeframe of `Record` denominated in minutes.

___
<a id="tradepair"></a>

###  tradepair

**● tradepair**: *`string`*

*Defined in [record-context.ts:22](https://github.com/strong-roots-capital/record-context/blob/e68350a/src/record-context.ts#L22)*

Concatenation of both asset-names available for trade.

*__remarks__*: The second asset-name in `tradepair` will be the same units in which associated `Record`s prices are valued.

___

