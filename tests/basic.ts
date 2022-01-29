import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:3000`;

test('My first test', async t => {
    // Test code
await t
        .expect(Selector('.App').exists)
        .ok();
});
