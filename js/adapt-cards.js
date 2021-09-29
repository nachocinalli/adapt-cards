import Adapt from 'core/js/adapt';
import CardsModel from './CardsModel';
import CardsView from './CardsView';

export default Adapt.register('cards', {
  model: CardsModel,
  view: CardsView
});
