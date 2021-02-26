import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MistakesComponent extends Component {
    classes = ['something', 'my', 'example'];

    data = { title: 'experiments', displayName: 'New'}

    @action someClick() {
        alert('Clicked!')
    }
}
