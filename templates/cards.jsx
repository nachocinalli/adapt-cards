import device from 'core/js/device';
import React from 'react';
import { html, classes, compile, templates } from 'core/js/reactHelpers';

export default function Cards (props) {
  const {
    _hasClickButton,
    _columns,
    _itemMinHeight,
    onKeyDown,
    onClick
  } = props;
  const screenSize = device.screenSize;
  const hasColumns = _columns[screenSize] > 1;
  const hasMinHeight = Number(_itemMinHeight) > 0;

  return (

    <div className="component__inner cards__inner">

      <templates.header {...props} />

      <div className={classes([
        'component__widget', 'cards__widget',
        hasColumns && 'has-columns'])}>

        {props._items.map(({ title, body, description, _graphic, _classes, _hasAction, _buttons, _index, _isVisited, _isActive, _isAnimated }) =>
          <div

            className={classes([
              'cards__item',
              _isVisited && 'is-visited',
              _isActive && 'is-active',
              _isAnimated && 'is-animating',
              _graphic.src && 'has-image',
              !_hasClickButton && 'is-clickable',
              !_hasClickButton && _hasAction && 'has-action',
              _classes
            ])}
            key={_index}
            data-index={_index}
            onClick={!_hasClickButton && _hasAction ? onClick : null}
            style={(hasColumns && { width: `${100 / _columns[screenSize]}%` }) || null }
          >
            <div className="cards__item-inner" style={(hasMinHeight && { minHeight: _itemMinHeight + 'px' }) || null}>
              <div className="cards__item-container" >
                { _graphic.src &&
              <templates.image {..._graphic}
                classNamePrefixes={['cards__item']}
                attributionClassNamePrefixes={['cards']}
              />
                }
                {title &&
              <div className="cards__item-title">
                {html(compile(title))}
              </div>
                }
                {body &&
              <div className="cards__item-body">
                {html(compile(body))}
              </div>
                }
              </div>

              <div className="cards__item-toolbar">

                <div className="cards__item-description">
                  { description._graphic.src &&
                  <templates.image {...description._graphic}
                    classNamePrefixes={['cards__item-description']}
                    attributionClassNamePrefixes={['cards']}
                  />
                  }
                  {description.title &&
                <div className="cards__item-description-title">
                  {html(compile(description.title))}
                </div>
                  }
                  {description.body &&
                <div className="cards__item-description-body">
                  {html(compile(description.body))}
                </div>
                  }
                </div>

                {_hasAction && _hasClickButton && <div className="cards__item-actions">
                  <button
                    onClick={_hasClickButton ? onClick : null}
                    onKeyDown={onKeyDown}
                    className="btn-text" aria-label={_isActive ? _buttons._close.ariaLabel : _buttons._open.ariaLabel}>
                    {html(compile(_isActive ? _buttons._close.buttonText : _buttons._open.buttonText))}
                  </button>
                </div>
                }
                <div className="cards__item-state">
                  <div className="icon"></div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
