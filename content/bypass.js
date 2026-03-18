(function () {
  'use strict';

  let _value;

  Object.defineProperty(window, '__INITIAL_STATE__', {
    configurable: true,
    enumerable: true,
    set(newValue) {
      if (newValue && typeof newValue === 'object') {
        try {
          if (newValue.featureSwitch) {
            if (!newValue.featureSwitch.customOverrides) {
              newValue.featureSwitch.customOverrides = {};
            }
            newValue.featureSwitch.customOverrides['rweb_age_assurance_flow_enabled'] = false;
          }
        } catch (e) {}
      }
      _value = newValue;
    },
    get() {
      return _value;
    },
  });
})();
