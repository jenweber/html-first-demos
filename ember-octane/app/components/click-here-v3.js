import Component from '@glimmer/component';

export default class ClickHereV3Component extends Component {
    code = `{{#let
  (concat @data.title '-button my-button')
  @data.displayName
  as |classes text|
}}
  <button class={{classes}}>
    {{text}}
  </button>
{{/let}}`
}
