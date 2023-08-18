# adapt-cards
 **Cards** is a presentation component. You can see it [here](https://adaptlearning-no-core.web.app/#/id/po-05)

## Settings Overview
The attributes are used in components.json are properly formatted as JSON in [*example.json*](https://github.com/nachocinalli/adapt-cards/blob/master/example.json).

## Adding basic CSS style

```
.cards {
  &__item {
    &.is-active {
      .cards__item__image {
        transform: translateY(2rem);
      }
      .cards__item-description {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }
  &__item__image {
    transform: translateY(0);
    padding: 2rem;
    transition: transform @duration @animation-easing;
  }

  &.is-animated &__widget {
    overflow: hidden;
  }

  &.is-animated &__item {
    opacity: 0;
    transform: translate(0px, 60px);
    .transition(all 0.8s ease-in-out);
    &.is-animating {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  &__item-description {
    opacity: 0;
    transform: translate3d(0, 60px, 0);
    .transition(transform @duration ease-in, background-color @duration  ease-in, opacity @duration ease-in;);
  }
}
.cards.is-flipable {
  .cards__item {
    perspective: 1000px;
  }
  .cards__item-inner {
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform: rotateY(0);
    height: 100%;
  }
  .cards__item.is-active .cards__item-inner {
    transform: rotateY(180deg);
  }
  .cards__item-container,
  .cards__item-toolbar {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .cards__item-toolbar {
    transform: rotateY(180deg);
  }
}
```

**Author / maintainer:** [Ignacio Cinalli] (https://github.com/nachocinalli)  
