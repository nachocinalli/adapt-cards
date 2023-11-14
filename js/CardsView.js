import ComponentView from 'core/js/views/componentView';
class CardsView extends ComponentView {
  className() {
    let classes = super.className();

    if (this.model.get('_animateItems')) {
      classes += ' is-animated';
    }

    return classes;
  }

  preRender() {
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  postRender() {
    this.$('.cards__widget').imageready(() => {
      this.setReadyStatus();
      if (this.model.get('_autoSetHeight')) {
        this.setHeight();
      }
    });
    if (this.model.get('_animateItems')) {
      this.$('.cards__widget').on('onscreen.animate', this.checkIfOnScreen.bind(this));
    }

    if (this.model.get('_setCompletionOn') !== 'inview') {
      this.setupInviewCompletion('.component__inner', this.setupItems);
    } else {
      this.setupInviewCompletion();
    }
  }

  setHeight() {
    const $collection = $(this.el).find('.cards__item-description');
    const maxHeight = this.getMaxScrollHeight($collection) + this.model.get('_scrollPadding');
    $(this.el).find('.cards__item').css({ height: maxHeight });
  }

  getMaxScrollHeight($collection) {
    let maxHeight = 0;
    $collection.each(function () {
      maxHeight = Math.max(maxHeight, $(this)[0].scrollHeight);
    });
    return maxHeight;
  }

  checkIfOnScreen({ currentTarget }, { percentInviewVertical }) {
    if (percentInviewVertical < this.model.get('_percentInviewVertical')) return;

    $(currentTarget).off('onscreen.animate');
    this.animateItems();
  }

  setupItems() {
    this.model.getChildren().forEach((item) => {
      if (!item.get('_hasAction')) {
        item.toggleVisited();
      }
    });
  }

  animateItems() {
    const _transitionSpeed = this.model.get('_transitionSpeed');
    this.model.getChildren().forEach((item, index) => {
      setTimeout(() => item.set('_isAnimated', true), _transitionSpeed * index);
    });
  }

  onKeyDown(event) {
    if (event.keyCode === 27) {
      const itemIndex = $(event.currentTarget).closest('.cards__item').data('index');
      const item = this.model.getItem(itemIndex);
      if (item.get('_isActive')) {
        this.model.toggleItemsState(itemIndex);
      }
    }
  }

  onClick(event) {
    const $item = $(event.currentTarget).closest('.cards__item');
    const itemIndex = $item.data('index');
    this.model.toggleItemsState(itemIndex);
  }

  remove() {
    this.$('.cards__widget').off('onscreen.animate');
    super.remove();
  }
}
CardsView.template = 'cards.jsx';

export default CardsView;
