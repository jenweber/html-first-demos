import Component from '@glimmer/component';

export default class ClickHereV2Component extends Component {
    modeText = this.args.mode === "save" ? "Save" : "Cancel"

    code = `<button onClick={{@someClick}} class="my-button">
  {{modeText}}
</button>`

  answerCode = `<!-- In the template where you use the component -->
<MyButton @someClick={{this.someClick}}>
  Save
</MyButton>

<!-- MyButton -->
<button {{on "click" @someClick}} class="my-button">
  {{yield}}
</button>`
}
