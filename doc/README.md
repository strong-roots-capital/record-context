
record-context [![Build status](https://travis-ci.org/strong-roots-capital/record-context.svg?branch=master)](https://travis-ci.org/strong-roots-capital/record-context) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/record-context.svg)](https://npmjs.org/package/@strong-roots-capital/record-context) [![codecov](https://codecov.io/gh/strong-roots-capital/record-context/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/record-context)
=================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Interface definition of the context of a timeseries-record

Install
-------

```shell
npm install @strong-roots-capital/record-context
```

Use
---

```typescript
import RecordContext from '@strong-roots-capital/record-context'
```

The `RecordContext` interface is defined as

```typescript
/**
 * Context of a timeseries `Record`.
 */
export default interface RecordContext {
    /**
     * Timeframe of `Record` denominated in minutes.
     */
    timeframe: number
    /**
     * Concatenation of both asset-names available for trade.
     *
     * @remarks
     * The second asset-name in `tradepair` will be the same units in
     * which associated `Record`s prices are valued.
     */
    tradepair: string
    /**
     * Name of exchange from which `Record` was collected.
     */
    exchange: string
}
```

Related
-------

*   [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)

## Index

### Interfaces

* [RecordContext](interfaces/recordcontext.md)

---

