import ItemsComponentModel from 'core/js/models/itemsComponentModel';

export default class CardsModel extends ItemsComponentModel {
  defaults() {
    return ItemsComponentModel.resultExtend('defaults', {
      _animateItems: false,
      _percentInviewVertical: 70,
      _transitionSpeed: 200
    });
  }

  toggleItemsState(index) {
    const item = this.getItem(index);

    item.toggleActive();
    item.toggleVisited(true);

  }
}
