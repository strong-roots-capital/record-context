import test from 'ava'

/**
 * Library under test
 */

import RecordContext from '../src/record-context'

test('should be importable', t => {
    t.pass()
})

test('should be of expected form', t => {
    function returnRecordContext(): RecordContext {
        return {
            exchange: 'TestExchange',
            timeframe: 1440,
            tradepair: 'TESTTRADEPAIR'
        }
    }
    const context: RecordContext = returnRecordContext()
    t.pass()
})

//  LocalWords:  TESTTRADEPAIR
