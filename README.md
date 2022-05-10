# adapt-cards
 **Cards** is a presentation component. You can see it [here](https://adaptlearning-no-core.web.app/#/id/po-05)

## Settings Overview
The attributes listed below are used in components.json and are properly formatted as JSON in  [*example.json*](https://github.com/nachocinalli/adapt-cards/blob/master/example.json).

### Attributes

**_setCompletionOn** (string)

**_animateItems** (boolean)

**_percentInviewVertical** (number)

**_transitionSpeed** (number)

**_items** (array)

>**title** (string)

>**body** (string)

>**_graphic** (object)
>>**src** (string)
>>**alt** (string)

>**_hasAction** (boolean)

>**_buttons** (object)
>>**_open** (object)  
>>>**buttonText** (string)  
>>>**ariaLabel** (string)  

>>**_close** (object)  
>>>**buttonText** (string)  
>>>**ariaLabel** (string)  

>**description** (object)  
>>**title** (string)  
>>**body** (string)  
>>**_graphic** (object)  
>>>**src** (string)  
>>>**alt** (string)  

>**_classes** (string)

## Adding basic CSS style

```
.cards {
  &__widget.has-columns &__item-inner {
    margin: 0 @item-margin;
    height: 100%;
  }
  &__item-inner {
    background-color: @item-color;
    color: @item-color-inverted;
    border-radius: @item-border-radius;
  }
  &__item-description {
    top: 0;
    height: 100%;
    background-color: @item-color-hover;
    color: @item-color-inverted;
    border-radius: @item-border-radius;
  }
  &__item-title,
  &__item-description-title {
    font-weight: 700;
    padding: @item-padding @item-padding 0;
  }
  &__item-body,
  &__item-description-body {
    padding: 0 @item-padding;
  }
  &.is-animated &__widget {
    overflow: hidden;
  }
  &.is-animated &__item {
    opacity: 0;
    transform: translate(0px, 3rem);
    .transition(all 0.8s ease-in-out);
    &.is-animating {
      transform: translate(0, 0);
      opacity: 1;
    }
    &.is-active {
      .cards__item__image {
        transform: translateY(3rem);
      }
      .cards__item-description {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    .cards__item__image {
      transform: translateY(0);
      padding: 2rem;
      transition: transform 0.4s @animation-easing;
    }
    .cards__item-description {
      opacity: 0;
      transform: translate3d(0, 2rem, 0);
      .transition(all 0.4s ease-in);
    }
  }
}
```
## Limitations

No known limitations.

----------------------------
**Version number:**  1.1.0  
**Framework versions:** 5.14.0+  
**Author / maintainer:** [Ignacio Cinalli] (https://github.com/nachocinalli)  
**Accessibility support:** 
**RTL support:**   
**Cross-platform coverage:** 