import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RevealComponent extends Component {
    @tracked shouldReveal = false

    @action handleClick () {
        this.shouldReveal = !this.shouldReveal
    }
}
