/**
 * record-context
 * Interface definition of the context of a timeseries-record
 */


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
