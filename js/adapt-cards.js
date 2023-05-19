import components from 'core/js/components';
import CardsModel from './CardsModel';
import CardsView from './CardsView';

export default components.register('cards', {
  model: CardsModel,
  view: CardsView
});
