import Component from '@glimmer/component';

export default class ClickHereV2Component extends Component {
    modeText = this.args.mode === "save" ? "Save" : "Cancel"

    code = `<button onClick={{@someClick}} class="my-button">
  {{modeText}}
</button>`
}
