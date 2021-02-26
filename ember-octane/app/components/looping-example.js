import Component from '@glimmer/component';

export default class LoopingExampleComponent extends Component {
    restaurants = ['Sugar & Spice', 'Chilli Garden', 'Winsor Cafe']

    code=`{{#each this.restaurants as |restaurant|}}
    <Row @classes="restaurant small" showSomething={{true}}>
        {{restaurant}}
    </Row>
{{/each}}`
}
