import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PageExampleComponent extends Component {
    @tracked page = 'Dashboard'

    @action pageClick (page) {
        this.page = page
    }

    code = `<div class="page-example">
  <button {{on 'click' (fn this.pageClick 'Dashboard')}}>
      Dashboard
  </button>
  <button {{on 'click' (fn this.pageClick 'Reports')}}>
      Reports
  </button>

  {{#if (is-equal this.page 'Dashboard')}}
      <div>Dashboard Page Component goes here</div>
  {{else if (is-equal this.page 'Reports')}}
      <div>Reports Page Component goes here</div>
  {{/if}}
</div>`
}
