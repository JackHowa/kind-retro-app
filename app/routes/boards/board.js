import Route from '@ember/routing/route';
import { ALL_BOARDS } from '../boards';

export default class BoardsBoardRoute extends Route {
  model({ board_id }) {
    const matches = ALL_BOARDS.filter(
      (board) => `${board.uuid}` === `${board_id}`
    );
    return matches[0];
  }
}
