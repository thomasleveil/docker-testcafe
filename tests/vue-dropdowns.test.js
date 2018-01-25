import {Selector} from 'testcafe'
import VueSelector from 'testcafe-vue-selectors'

fixture `vue-dropdowns`
    .page `https://mikerodham.github.io/vue-dropdowns/`

test('Title is vue-dropdowns', async t => {
    const title = Selector('html > head > title')
    await t
        .expect(title.exists).ok()
        .expect(title.textContent).eql('vue-dropdowns')
})

test('There is one and only one h1', async t => {
    await t.expect(Selector('h1').count).eql(1)
})

const dropdown = VueSelector('dropdown')

test('VueSelector can select the dropdown Vue component', async t => {
    await t.expect(dropdown.exists).ok()
})

test('dropdown has 3 options', async t => {
    await t.expect(dropdown.exists).ok()
    const dropdownState = await dropdown.getVue()
    await t.expect(dropdownState.props.options).eql([
        {id: 1, name: 'First Option'},
        {id: 2, name: 'Second Option'},
        {id: 3, name: 'Third Option'},
    ])
})

test('dropdown has no selection', async t => {
    await t.expect(dropdown.exists).ok()
    const dropdownState = await dropdown.getVue()
    await t.expect(dropdownState.state.selectedOption).eql({})
})

const menu = dropdown.find('ul.dropdown-menu')

test('click on dropdown shows menu', async t => {
    await t
        .expect(menu.exists).ok()
        .expect(menu.visible).notOk()
        .click(dropdown)
        .expect(menu.exists).ok()
        .expect(menu.visible).ok()
})


test('menu option can be selected', async t => {
    await t
        .expect(dropdown.getVue(({ state }) => state.selectedOption)).eql({})
        .click(dropdown)
        .click(dropdown.find('li').nth(2))
        .expect(dropdown.getVue(({ state }) => state.selectedOption)).eql({id: 2, name: 'Second Option'})
})
