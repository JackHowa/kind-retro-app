import Route from '@ember/routing/route';

// uuid is unique string auto-generated
export const ALL_BOARDS = [
  {
    uuid: '8374938',
    name: 'Robust convo on robustness',
  },
  {
    uuid: '824373847',
    name: 'Hunting socks accident in the woods',
  },
  {
    uuid: '34587457',
    name: 'Engineers talking about prs',
  },
];

export default class BoardsRoute extends Route {
  model() {
    return ALL_BOARDS;
  }
}
