define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.selectedDate = null;

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-materialize-bridge', function (b) {
      return b.useAll();
    });

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"materialize-css/css/materialize.css\"></require>\n  <h1>${message}</h1>\n  <div class=\"collapsible-basic-use\">\n    <ul md-collapsible>\n      <li>\n        <div class=\"collapsible-header\"><i class=\"mdi-image-filter-drama\"></i>First</div>\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\n      </li>\n      <li>\n        <div class=\"collapsible-header\"><i class=\"mdi-maps-place\"></i>Second</div>\n        <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\n      </li>\n    </ul>\n  </div>\n  <div>\n    <input md-datepicker=\"container: body; value.two-way: selectedDate;\" type=\"date\" placeholder=\"pick a date\" />\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map