import {Selector} from 'testcafe'

fixture `example.com`
    .page `http://example.com/`

test('Title is Example Domain', async t => {
    const title = Selector('html > head > title')
    await t
        .expect(title.exists).ok()
        .expect(title.textContent).eql('Example Domain')
})

test('There is one and only one h1', async t => {
    await t.expect(Selector('h1').count).eql(1)
})
