// node_modules/tslib/tslib.es6.mjs
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from2.length, ar; i < l; i++) {
      if (ar || !(i in from2)) {
        if (!ar)
          ar = Array.prototype.slice.call(from2, 0, i);
        ar[i] = from2[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}

// node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
}

// node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

// node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError = createErrorClass(function(_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join("\n  ") : "";
    this.name = "UnsubscriptionError";
    this.errors = errors;
  };
});

// node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b;
    var errors;
    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                _a.call(_parentage_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];
              if (err instanceof UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
              _b.call(_finalizers_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
      if (errors) {
        throw new UnsubscriptionError(errors);
      }
    }
  };
  Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };
  Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };
  Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };
  Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove(_parentage, parent);
    }
  };
  Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown);
    if (teardown instanceof Subscription2) {
      teardown._removeParent(this);
    }
  };
  Subscription2.EMPTY = function() {
    var empty = new Subscription2();
    empty.closed = true;
    return empty;
  }();
  return Subscription2;
}();
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

// node_modules/rxjs/dist/esm5/internal/config.js
var config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

// node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider = {
  setTimeout: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = timeoutProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearTimeout: function(handle) {
    var delegate = timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

// node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() {
}

// node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = function() {
  return createNotification("C", void 0, void 0);
}();
function errorNotification(error) {
  return createNotification("E", void 0, error);
}
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

// node_modules/rxjs/dist/esm5/internal/util/errorContext.js
var context = null;
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;
    if (isRoot) {
      context = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a = context, errorThrown = _a.errorThrown, error = _a.error;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

// node_modules/rxjs/dist/esm5/internal/Subscriber.js
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    _this.isStopped = false;
    if (destination) {
      _this.destination = destination;
      if (isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = EMPTY_OBSERVER;
    }
    return _this;
  }
  Subscriber2.create = function(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };
  Subscriber2.prototype.next = function(value) {
    if (this.isStopped) {
      handleStoppedNotification(nextNotification(value), this);
    } else {
      this._next(value);
    }
  };
  Subscriber2.prototype.error = function(err) {
    if (this.isStopped) {
      handleStoppedNotification(errorNotification(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  };
  Subscriber2.prototype.complete = function() {
    if (this.isStopped) {
      handleStoppedNotification(COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  };
  Subscriber2.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.isStopped = true;
      _super.prototype.unsubscribe.call(this);
      this.destination = null;
    }
  };
  Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  };
  Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };
  Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };
  return Subscriber2;
}(Subscription);
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
var ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };
  ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };
  return ConsumerObserver2;
}();
var SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;
    var partialObserver;
    if (isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
        error: error !== null && error !== void 0 ? error : void 0,
        complete: complete !== null && complete !== void 0 ? complete : void 0
      };
    } else {
      var context_1;
      if (_this && config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);
        context_1.unsubscribe = function() {
          return _this.unsubscribe();
        };
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error);
  } else {
    reportUnhandledError(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function() {
    return onStoppedNotification(notification, subscriber);
  });
}
var EMPTY_OBSERVER = {
  closed: true,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
};

// node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();

// node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
  return x;
}

// node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}

// node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = function() {
  function Observable4(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  Observable4.prototype.lift = function(operator) {
    var observable2 = new Observable4();
    observable2.source = this;
    observable2.operator = operator;
    return observable2;
  };
  Observable4.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this;
    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };
  Observable4.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };
  Observable4.prototype.forEach = function(next, promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  };
  Observable4.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };
  Observable4.prototype[observable] = function() {
    return this;
  };
  Observable4.prototype.pipe = function() {
    var operations = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }
    return pipeFromArray(operations)(this);
  };
  Observable4.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x) {
        return value = x;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  };
  Observable4.create = function(subscribe) {
    return new Observable4(subscribe);
  };
  return Observable4;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}

// node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source) {
  return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return function(source) {
    if (hasLift(source)) {
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }
  OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this);
      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };
  return OperatorSubscriber2;
}(Subscriber);

// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrameProvider.js
var animationFrameProvider = {
  schedule: function(callback) {
    var request = requestAnimationFrame;
    var cancel = cancelAnimationFrame;
    var delegate = animationFrameProvider.delegate;
    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }
    var handle = request(function(timestamp) {
      cancel = void 0;
      callback(timestamp);
    });
    return new Subscription(function() {
      return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
    });
  },
  requestAnimationFrame: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  },
  cancelAnimationFrame: function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var delegate = animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError = createErrorClass(function(_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);
    this.name = "ObjectUnsubscribedError";
    this.message = "object unsubscribed";
  };
});

// node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject = function(_super) {
  __extends(Subject2, _super);
  function Subject2() {
    var _this = _super.call(this) || this;
    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }
  Subject2.prototype.lift = function(operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };
  Subject2.prototype._throwIfClosed = function() {
    if (this.closed) {
      throw new ObjectUnsubscribedError();
    }
  };
  Subject2.prototype.next = function(value) {
    var _this = this;
    errorContext(function() {
      var e_1, _a;
      _this._throwIfClosed();
      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }
        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
    });
  };
  Subject2.prototype.error = function(err) {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };
  Subject2.prototype.complete = function() {
    var _this = this;
    errorContext(function() {
      _this._throwIfClosed();
      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };
  Subject2.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };
  Object.defineProperty(Subject2.prototype, "observed", {
    get: function() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });
  Subject2.prototype._trySubscribe = function(subscriber) {
    this._throwIfClosed();
    return _super.prototype._trySubscribe.call(this, subscriber);
  };
  Subject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  };
  Subject2.prototype._innerSubscribe = function(subscriber) {
    var _this = this;
    var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
    if (hasError || isStopped) {
      return EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription(function() {
      _this.currentObservers = null;
      arrRemove(observers, subscriber);
    });
  };
  Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };
  Subject2.prototype.asObservable = function() {
    var observable2 = new Observable();
    observable2.source = this;
    return observable2;
  };
  Subject2.create = function(destination, source) {
    return new AnonymousSubject(destination, source);
  };
  return Subject2;
}(Observable);
var AnonymousSubject = function(_super) {
  __extends(AnonymousSubject2, _super);
  function AnonymousSubject2(destination, source) {
    var _this = _super.call(this) || this;
    _this.destination = destination;
    _this.source = source;
    return _this;
  }
  AnonymousSubject2.prototype.next = function(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };
  AnonymousSubject2.prototype.error = function(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  AnonymousSubject2.prototype.complete = function() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  AnonymousSubject2.prototype._subscribe = function(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
  };
  return AnonymousSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js
var BehaviorSubject = function(_super) {
  __extends(BehaviorSubject2, _super);
  function BehaviorSubject2(_value) {
    var _this = _super.call(this) || this;
    _this._value = _value;
    return _this;
  }
  Object.defineProperty(BehaviorSubject2.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });
  BehaviorSubject2.prototype._subscribe = function(subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };
  BehaviorSubject2.prototype.getValue = function() {
    var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  };
  BehaviorSubject2.prototype.next = function(value) {
    _super.prototype.next.call(this, this._value = value);
  };
  return BehaviorSubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
  now: function() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
var ReplaySubject = function(_super) {
  __extends(ReplaySubject2, _super);
  function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
    if (_bufferSize === void 0) {
      _bufferSize = Infinity;
    }
    if (_windowTime === void 0) {
      _windowTime = Infinity;
    }
    if (_timestampProvider === void 0) {
      _timestampProvider = dateTimestampProvider;
    }
    var _this = _super.call(this) || this;
    _this._bufferSize = _bufferSize;
    _this._windowTime = _windowTime;
    _this._timestampProvider = _timestampProvider;
    _this._buffer = [];
    _this._infiniteTimeWindow = true;
    _this._infiniteTimeWindow = _windowTime === Infinity;
    _this._bufferSize = Math.max(1, _bufferSize);
    _this._windowTime = Math.max(1, _windowTime);
    return _this;
  }
  ReplaySubject2.prototype.next = function(value) {
    var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    _super.prototype.next.call(this, value);
  };
  ReplaySubject2.prototype._subscribe = function(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    var subscription = this._innerSubscribe(subscriber);
    var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
    var copy = _buffer.slice();
    for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  };
  ReplaySubject2.prototype._trimBuffer = function() {
    var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
    var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      var now = _timestampProvider.now();
      var last2 = 0;
      for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last2 = i;
      }
      last2 && _buffer.splice(0, last2 + 1);
    }
  };
  return ReplaySubject2;
}(Subject);

// node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
var Action = function(_super) {
  __extends(Action2, _super);
  function Action2(scheduler, work) {
    return _super.call(this) || this;
  }
  Action2.prototype.schedule = function(state, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return this;
  };
  return Action2;
}(Subscription);

// node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
var intervalProvider = {
  setInterval: function(handler, timeout) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    var delegate = intervalProvider.delegate;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }
    return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  },
  clearInterval: function(handle) {
    var delegate = intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: void 0
};

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
var AsyncAction = function(_super) {
  __extends(AsyncAction2, _super);
  function AsyncAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }
  AsyncAction2.prototype.schedule = function(state, delay) {
    var _a;
    if (delay === void 0) {
      delay = 0;
    }
    if (this.closed) {
      return this;
    }
    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };
  AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  };
  AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      intervalProvider.clearInterval(id);
    }
    return void 0;
  };
  AsyncAction2.prototype.execute = function(state, delay) {
    if (this.closed) {
      return new Error("executing a cancelled action");
    }
    this.pending = false;
    var error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };
  AsyncAction2.prototype._execute = function(state, _delay) {
    var errored = false;
    var errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error("Scheduled action threw falsy error");
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };
  AsyncAction2.prototype.unsubscribe = function() {
    if (!this.closed) {
      var _a = this, id = _a.id, scheduler = _a.scheduler;
      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      _super.prototype.unsubscribe.call(this);
    }
  };
  return AsyncAction2;
}(Action);

// node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler = function() {
  function Scheduler2(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler2.now;
    }
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  Scheduler2.prototype.schedule = function(work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  };
  Scheduler2.now = dateTimestampProvider.now;
  return Scheduler2;
}();

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler = function(_super) {
  __extends(AsyncScheduler2, _super);
  function AsyncScheduler2(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }
    var _this = _super.call(this, SchedulerAction, now) || this;
    _this.actions = [];
    _this._active = false;
    return _this;
  }
  AsyncScheduler2.prototype.flush = function(action) {
    var actions = this.actions;
    if (this._active) {
      actions.push(action);
      return;
    }
    var error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AsyncScheduler2;
}(Scheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/async.js
var asyncScheduler = new AsyncScheduler(AsyncAction);
var async = asyncScheduler;

// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameAction.js
var AnimationFrameAction = function(_super) {
  __extends(AnimationFrameAction2, _super);
  function AnimationFrameAction2(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;
    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }
  AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(function() {
      return scheduler.flush(void 0);
    }));
  };
  AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
    var _a;
    if (delay === void 0) {
      delay = 0;
    }
    if (delay != null ? delay > 0 : this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }
    var actions = scheduler.actions;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      animationFrameProvider.cancelAnimationFrame(id);
      scheduler._scheduled = void 0;
    }
    return void 0;
  };
  return AnimationFrameAction2;
}(AsyncAction);

// node_modules/rxjs/dist/esm5/internal/scheduler/AnimationFrameScheduler.js
var AnimationFrameScheduler = function(_super) {
  __extends(AnimationFrameScheduler2, _super);
  function AnimationFrameScheduler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  AnimationFrameScheduler2.prototype.flush = function(action) {
    this._active = true;
    var flushId = this._scheduled;
    this._scheduled = void 0;
    var actions = this.actions;
    var error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  };
  return AnimationFrameScheduler2;
}(AsyncScheduler);

// node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js
var animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);

// node_modules/rxjs/dist/esm5/internal/observable/empty.js
var EMPTY = new Observable(function(subscriber) {
  return subscriber.complete();
});

// node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
  return value && isFunction(value.schedule);
}

// node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === "number" ? args.pop() : defaultValue;
}

// node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = function(x) {
  return x && typeof x.length === "number" && typeof x !== "function";
};

// node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}

// node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return isFunction(input[observable]);
}

// node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

// node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator = getSymbolIterator();

// node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}

// node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          if (false)
            return [3, 8];
          return [4, __await(reader.read())];
        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done)
            return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

// node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
          _a.call(iterable_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
            return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
            return [3, 8];
          return [4, _a.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2)
            throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
  if (delay === void 0) {
    delay = 0;
  }
  if (repeat === void 0) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}

// node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay));
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i = 0;
    return scheduler.schedule(function() {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator2;
    executeSchedule(subscriber, scheduler, function() {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a;
        var value;
        var done;
        try {
          _a = iterator2.next(), value = _a.value, done = _a.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
    };
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}

// node_modules/rxjs/dist/esm5/internal/observable/of.js
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  return from(args, scheduler);
}

// node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function isObservable(obj) {
  return !!obj && (obj instanceof Observable || isFunction(obj.lift) && isFunction(obj.subscribe));
}

// node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

// node_modules/rxjs/dist/esm5/internal/operators/map.js
function map(project, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
var isArray = Array.isArray;
function callOrApply(fn, args) {
  return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return map(function(args) {
    return callOrApply(fn, args);
  });
}

// node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js
var isArray2 = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf;
var objectProto = Object.prototype;
var getKeys = Object.keys;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    var first_1 = args[0];
    if (isArray2(first_1)) {
      return { args: first_1, keys: null };
    }
    if (isPOJO(first_1)) {
      var keys = getKeys(first_1);
      return {
        args: keys.map(function(key) {
          return first_1[key];
        }),
        keys
      };
    }
  }
  return { args, keys: null };
}
function isPOJO(obj) {
  return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
}

// node_modules/rxjs/dist/esm5/internal/util/createObject.js
function createObject(keys, values) {
  return keys.reduce(function(result, key, i) {
    return result[key] = values[i], result;
  }, {});
}

// node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js
function combineLatest() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  var resultSelector = popResultSelector(args);
  var _a = argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
  if (observables.length === 0) {
    return from([], scheduler);
  }
  var result = new Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
    return createObject(keys, values);
  } : identity));
  return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform) {
  if (valueTransform === void 0) {
    valueTransform = identity;
  }
  return function(subscriber) {
    maybeSchedule(scheduler, function() {
      var length = observables.length;
      var values = new Array(length);
      var active = length;
      var remainingFirstValues = length;
      var _loop_1 = function(i2) {
        maybeSchedule(scheduler, function() {
          var source = from(observables[i2], scheduler);
          var hasFirstValue = false;
          source.subscribe(createOperatorSubscriber(subscriber, function(value) {
            values[i2] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, function() {
            if (!--active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      };
      for (var i = 0; i < length; i++) {
        _loop_1(i);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    executeSchedule(subscription, scheduler, execute);
  } else {
    execute();
  }
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [];
  var active = 0;
  var index = 0;
  var isComplete = false;
  var checkComplete = function() {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  var outerNext = function(value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  };
  var doInnerSub = function(value) {
    expand && subscriber.next(value);
    active++;
    var innerComplete = false;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function() {
      innerComplete = true;
    }, void 0, function() {
      if (innerComplete) {
        try {
          active--;
          var _loop_1 = function() {
            var bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              executeSchedule(subscriber, innerSubScheduler, function() {
                return doInnerSub(bufferedValue);
              });
            } else {
              doInnerSub(bufferedValue);
            }
          };
          while (buffer.length && active < concurrent) {
            _loop_1();
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
    isComplete = true;
    checkComplete();
  }));
  return function() {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  if (isFunction(resultSelector)) {
    return mergeMap(function(a, i) {
      return map(function(b, ii) {
        return resultSelector(a, b, i, ii);
      })(innerFrom(project(a, i)));
    }, concurrent);
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return operate(function(source, subscriber) {
    return mergeInternals(source, subscriber, project, concurrent);
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  return mergeMap(identity, concurrent);
}

// node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
function concatAll() {
  return mergeAll(1);
}

// node_modules/rxjs/dist/esm5/internal/observable/concat.js
function concat() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return concatAll()(from(args, popScheduler(args)));
}

// node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js
var nodeEventEmitterMethods = ["addListener", "removeListener"];
var eventTargetMethods = ["addEventListener", "removeEventListener"];
var jqueryMethods = ["on", "off"];
function fromEvent(target, eventName, options, resultSelector) {
  if (isFunction(options)) {
    resultSelector = options;
    options = void 0;
  }
  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
  }
  var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
    return function(handler) {
      return target[methodName](eventName, handler, options);
    };
  }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
  if (!add) {
    if (isArrayLike(target)) {
      return mergeMap(function(subTarget) {
        return fromEvent(subTarget, eventName, options);
      })(innerFrom(target));
    }
  }
  if (!add) {
    throw new TypeError("Invalid event target");
  }
  return new Observable(function(subscriber) {
    var handler = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return subscriber.next(1 < args.length ? args : args[0]);
    };
    add(handler);
    return function() {
      return remove(handler);
    };
  });
}
function toCommonHandlerRegistry(target, eventName) {
  return function(methodName) {
    return function(handler) {
      return target[methodName](eventName, handler);
    };
  };
}
function isNodeStyleEventEmitter(target) {
  return isFunction(target.addListener) && isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
  return isFunction(target.on) && isFunction(target.off);
}
function isEventTarget(target) {
  return isFunction(target.addEventListener) && isFunction(target.removeEventListener);
}

// node_modules/rxjs/dist/esm5/internal/observable/timer.js
function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function(subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n = 0;
    return scheduler.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(void 0, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/interval.js
function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }
  if (scheduler === void 0) {
    scheduler = asyncScheduler;
  }
  if (period < 0) {
    period = 0;
  }
  return timer(period, period, scheduler);
}

// node_modules/rxjs/dist/esm5/internal/observable/merge.js
function merge() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  var concurrent = popNumber(args, Infinity);
  var sources = args;
  return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}

// node_modules/rxjs/dist/esm5/internal/operators/filter.js
function filter(predicate, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/bufferTime.js
function bufferTime(bufferTimeSpan) {
  var _a, _b;
  var otherArgs = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    otherArgs[_i - 1] = arguments[_i];
  }
  var scheduler = (_a = popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : asyncScheduler;
  var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
  var maxBufferSize = otherArgs[1] || Infinity;
  return operate(function(source, subscriber) {
    var bufferRecords = [];
    var restartOnEmit = false;
    var emit = function(record) {
      var buffer = record.buffer, subs = record.subs;
      subs.unsubscribe();
      arrRemove(bufferRecords, record);
      subscriber.next(buffer);
      restartOnEmit && startBuffer();
    };
    var startBuffer = function() {
      if (bufferRecords) {
        var subs = new Subscription();
        subscriber.add(subs);
        var buffer = [];
        var record_1 = {
          buffer,
          subs
        };
        bufferRecords.push(record_1);
        executeSchedule(subs, scheduler, function() {
          return emit(record_1);
        }, bufferTimeSpan);
      }
    };
    if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
      executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
    } else {
      restartOnEmit = true;
    }
    startBuffer();
    var bufferTimeSubscriber = createOperatorSubscriber(subscriber, function(value) {
      var e_1, _a2;
      var recordsCopy = bufferRecords.slice();
      try {
        for (var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
          var record = recordsCopy_1_1.value;
          var buffer = record.buffer;
          buffer.push(value);
          maxBufferSize <= buffer.length && emit(record);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a2 = recordsCopy_1.return))
            _a2.call(recordsCopy_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }, function() {
      while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
        subscriber.next(bufferRecords.shift().buffer);
      }
      bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
      subscriber.complete();
      subscriber.unsubscribe();
    }, void 0, function() {
      return bufferRecords = null;
    });
    source.subscribe(bufferTimeSubscriber);
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
  return function(source, subscriber) {
    var hasState = hasSeed;
    var state = seed;
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var i = index++;
      state = hasState ? accumulator(state, value, i) : (hasState = true, value);
      emitOnNext && subscriber.next(state);
    }, emitBeforeComplete && function() {
      hasState && subscriber.next(state);
      subscriber.complete();
    }));
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js
function distinctUntilChanged(comparator, keySelector) {
  if (keySelector === void 0) {
    keySelector = identity;
  }
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return operate(function(source, subscriber) {
    var previousKey;
    var first = true;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}

// node_modules/rxjs/dist/esm5/internal/operators/scan.js
function scan(accumulator, seed) {
  return operate(scanInternals(accumulator, seed, arguments.length >= 2, true));
}

// node_modules/rxjs/dist/esm5/internal/operators/share.js
function share(options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.connector, connector = _a === void 0 ? function() {
    return new Subject();
  } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
  return function(wrapperSource) {
    var connection;
    var resetConnection;
    var subject;
    var refCount = 0;
    var hasCompleted = false;
    var hasErrored = false;
    var cancelReset = function() {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = void 0;
    };
    var reset = function() {
      cancelReset();
      connection = subject = void 0;
      hasCompleted = hasErrored = false;
    };
    var resetAndUnsubscribe = function() {
      var conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return operate(function(source, subscriber) {
      refCount++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(function() {
        refCount--;
        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection && refCount > 0) {
        connection = new SafeSubscriber({
          next: function(value) {
            return dest.next(value);
          },
          error: function(err) {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: function() {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        innerFrom(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset, on) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (on === true) {
    reset();
    return;
  }
  if (on === false) {
    return;
  }
  var onSubscriber = new SafeSubscriber({
    next: function() {
      onSubscriber.unsubscribe();
      reset();
    }
  });
  return innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
}

// node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
function shareReplay(configOrBufferSize, windowTime, scheduler) {
  var _a, _b, _c;
  var bufferSize;
  var refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === "object") {
    _a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return share({
    connector: function() {
      return new ReplaySubject(bufferSize, windowTime, scheduler);
    },
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/switchMap.js
function switchMap(project, resultSelector) {
  return operate(function(source, subscriber) {
    var innerSubscriber = null;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
      return isComplete && !innerSubscriber && subscriber.complete();
    };
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      var innerIndex = 0;
      var outerIndex = index++;
      innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function(innerValue) {
        return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
      }, function() {
        innerSubscriber = null;
        checkComplete();
      }));
    }, function() {
      isComplete = true;
      checkComplete();
    }));
  });
}

// node_modules/butterfloat/events.js
var ButterfloatEvent = Symbol("Butterfloat Event");
var EventProxyHandler = class {
  #subjects = /* @__PURE__ */ new WeakMap();
  #componentName;
  get componentName() {
    return this.#componentName;
  }
  constructor(componentName) {
    this.#componentName = componentName;
  }
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    const subject = new Subject();
    const observable2 = subject.asObservable();
    observable2[ButterfloatEvent] = `${this.componentName} ${prop}`;
    this.#subjects.set(observable2, subject);
    target[prop] = observable2;
    return target[prop];
  }
  applyEvent(event, element, eventName) {
    const subject = this.#subjects.get(event);
    if (!subject) {
      throw new Error(`Unhandled event subject: ${event[ButterfloatEvent]}`);
    }
    if (eventName === "bfDomAttach") {
      subject.next(element);
      return new Subscription();
    }
    const observable2 = fromEvent(element, eventName);
    return observable2.subscribe(subject);
  }
};
function makeEventProxy(componentName, baseEvents = {}) {
  const events = { ...baseEvents };
  const handler = new EventProxyHandler(componentName);
  const proxy = new Proxy(events, handler);
  return { events: proxy, handler };
}

// node_modules/butterfloat/component.js
function hasAnyBinds(description) {
  return Boolean(description.childrenBind) || Object.keys(description.bind).length > 0 || Object.keys(description.immediateBind).length > 0 || Object.keys(description.events).length > 0 || Object.keys(description.styleBind).length > 0 || Object.keys(description.immediateStyleBind).length > 0 || Object.keys(description.classBind).length > 0 || Object.keys(description.immediateClassBind).length > 0;
}

// node_modules/butterfloat/butterfly.js
function butterfly(startingValue) {
  const subject = new BehaviorSubject(startingValue);
  function setState(value) {
    if (typeof value === "function") {
      const setter = value;
      subject.next(setter(subject.getValue()));
    } else {
      subject.next(value);
    }
  }
  return [
    subject.asObservable(),
    setState,
    subject.error.bind(subject),
    subject.complete.bind(subject)
  ];
}

// node_modules/butterfloat/jsx.js
function Children({ context: context2 }) {
  return {
    type: "children",
    context: context2
  };
}
function Fragment(attributes, ...children) {
  const { childrenBind, childrenBindMode, ...otherAttributes } = attributes ?? {};
  return {
    type: "fragment",
    attributes: otherAttributes,
    children,
    childrenBind,
    childrenBindMode
  };
}
function Static({ element }) {
  return {
    type: "static",
    element
  };
}
function jsx(element, attributes, ...children) {
  if (typeof element === "string") {
    const { bind: bind2, immediateBind, childrenBind, childrenBindMode, events, styleBind, immediateStyleBind, classBind, immediateClassBind, ...otherAttributes } = attributes ?? {};
    return {
      type: "element",
      element,
      attributes: otherAttributes,
      bind: bind2 ?? {},
      immediateBind: immediateBind ?? {},
      children,
      childrenBind,
      childrenBindMode,
      events: events ?? {},
      styleBind: styleBind ?? {},
      immediateStyleBind: immediateStyleBind ?? {},
      classBind: classBind ?? {},
      immediateClassBind: immediateClassBind ?? {}
    };
  }
  if (typeof element === "function") {
    if (element === Fragment || element === Children || element === Static) {
      const func = element;
      return func(attributes ?? {}, ...children);
    }
    const { childrenBind, childrenBindMode, ...otherAttributes } = attributes ?? {};
    return {
      type: "component",
      component: element,
      properties: otherAttributes,
      children,
      childrenBind,
      childrenBindMode
    };
  }
  throw new Error(`Unsupported jsx in ${element}`);
}
/* @__PURE__ */ (function(jsx2) {
})(jsx || (jsx = {}));

// node_modules/butterfloat/binding.js
function bindObjectKey(item, key, observable2, error, complete) {
  return observable2.subscribe({
    next: (value) => {
      item[key] = value;
    },
    error,
    complete: () => {
      console.debug(`${key.toString()} binding completed`, item);
      complete();
    }
  });
}
function bindObjectChanges(item, observable2, error, complete) {
  return observable2.subscribe({
    next: (changes) => {
      Object.assign(item, changes);
    },
    error,
    complete: () => {
      console.debug(`Change binding completed`, item);
      complete();
    }
  });
}
function bindClassListKey(item, key, observable2, error, complete) {
  return observable2.subscribe({
    next: (value) => {
      if (value) {
        item.classList.add(key);
      } else {
        item.classList.remove(key);
      }
    },
    error,
    complete: () => {
      console.debug(`${key.toString()} classList binding completed`, item);
      complete();
    }
  });
}
function bindClassListChanges(item, observable2, error, complete) {
  return observable2.subscribe({
    next: (changes) => {
      const adds = [];
      const removes = [];
      for (const [key, add] of Object.entries(changes)) {
        if (add) {
          adds.push(key);
        } else {
          removes.push(key);
        }
      }
      if (adds.length > 0) {
        item.classList.add(...adds);
      }
      if (removes.length > 0) {
        item.classList.remove(...removes);
      }
    },
    error,
    complete: () => {
      console.debug(`classList changes binding completed`, item);
      complete();
    }
  });
}
function bufferEntries(observable2, suspense) {
  if (suspense) {
    return combineLatest([suspense, observable2]).pipe(bufferTime(0, animationFrameScheduler), map((states) => states.reduce((acc, [suspend, entry]) => ({
      suspend,
      entries: [...acc.entries, entry]
    }), { suspend: false, entries: [] })), scan((acc, cur) => ({
      changes: acc.suspend && cur.suspend ? Object.assign(acc.changes, Object.fromEntries(cur.entries)) : Object.fromEntries(cur.entries),
      suspend: cur.suspend
    }), { suspend: false, changes: {} }), filter(({ suspend }) => !suspend), map(({ changes }) => changes));
  }
  return observable2.pipe(bufferTime(0, animationFrameScheduler), map((entries) => Object.fromEntries(entries)));
}
function schedulable(key, immediate) {
  return !(immediate || key === "value");
}
function scheduledKey(key) {
  if (key === "bfDelayValue") {
    return "value";
  }
  return key;
}
function makeEntries(key, observable2) {
  return observable2.pipe(map((value) => [key, value]));
}
function bindElementBinds(element, description, { complete, error, suspense, subscription }) {
  const schedulables = [];
  const binds = [
    ...Object.entries(description.bind).map(([key, observable2]) => [key, observable2, false]),
    ...Object.entries(description.immediateBind).map(([key, observable2]) => [key, observable2, true])
  ];
  for (const [key, observable2, immediate] of binds) {
    if (schedulable(key, immediate)) {
      schedulables.push([scheduledKey(key), observable2]);
    } else {
      subscription.add(bindObjectKey(element, key, observable2, error, complete));
    }
  }
  if (schedulables.length) {
    const scheduled2 = schedulables.map(([key, observable2]) => makeEntries(key, observable2));
    subscription.add(bindObjectChanges(element, bufferEntries(merge(...scheduled2), suspense), error, complete));
  }
}
function bindElementEvents(element, description, { eventBinder, subscription }) {
  for (const [key, event] of Object.entries(description.events)) {
    subscription.add(eventBinder.applyEvent(event, element, key));
  }
}
function bindElementChildren(element, description, context2, document2 = globalThis.document) {
  const { complete, componentRunner, componentWirer, error, subscription } = context2;
  if (description.childrenBind) {
    if (description.childrenBindMode === "replace") {
      const placeholder = document2.createComment(`replaceable child component`);
      element.append(placeholder);
      const activeChild = description.childrenBind.pipe(switchMap((child) => componentWirer(child, context2, void 0, document2)));
      const childComponent = activeChild;
      childComponent.name = `${element.nodeName} replaceable child`;
      subscription.add(componentRunner(element, childComponent, context2, placeholder, document2));
    } else {
      subscription.add(description.childrenBind.subscribe({
        next(child) {
          const placeholder = document2.createComment(`${child.name} component`);
          if (description.childrenBindMode === "prepend") {
            element.prepend(placeholder);
          } else {
            element.append(placeholder);
          }
          subscription.add(componentRunner(element, child, context2, placeholder, document2));
        },
        error,
        complete: () => {
          console.debug(`Children binding completed`, element);
          complete();
        }
      }));
    }
  }
}
function bindElementClasses(element, description, { complete, error, subscription, suspense }) {
  if (Object.keys(description.classBind).length > 0) {
    const entries = [];
    for (const [key, observable2] of Object.entries(description.classBind)) {
      entries.push(makeEntries(key, observable2));
    }
    subscription.add(bindClassListChanges(element, bufferEntries(merge(...entries), suspense), error, complete));
  }
  for (const [key, observable2] of Object.entries(description.immediateClassBind)) {
    subscription.add(bindClassListKey(element, key, observable2, error, complete));
  }
}
function bindElementStyles(element, description, { complete, error, subscription, suspense }) {
  if (Object.keys(description.styleBind).length > 0) {
    const entries = [];
    for (const [key, observable2] of Object.entries(description.styleBind)) {
      entries.push(makeEntries(key, observable2));
    }
    subscription.add(bindObjectChanges(element.style, bufferEntries(merge(...entries), suspense), error, complete));
  }
  for (const [key, observable2] of Object.entries(description.immediateStyleBind)) {
    subscription.add(bindObjectKey(element.style, key, observable2, error, complete));
  }
}
function bindElement(element, description, context2, document2 = globalThis.document) {
  const { subscription } = context2;
  bindElementBinds(element, description, context2);
  bindElementEvents(element, description, context2);
  bindElementChildren(element, description, context2, document2);
  bindElementClasses(element, description, context2);
  bindElementStyles(element, description, context2);
  return subscription;
}
function bindFragmentChildren(nodeDescription, node, subscription, context2, document2 = globalThis.document) {
  const { complete, error, componentRunner, componentWirer } = context2;
  if (nodeDescription.childrenBind) {
    const parent = node.parentElement;
    if (!parent) {
      throw new Error("Attempted to bind children to an unattached fragment");
    }
    if (nodeDescription.childrenBindMode === "replace") {
      const activeChild = nodeDescription.childrenBind.pipe(switchMap((child) => componentWirer(child, context2, void 0, document2)));
      const childComponent = activeChild;
      childComponent.name = `${node.nodeName} replaceable child`;
      subscription.add(componentRunner(node.parentElement, childComponent, context2, node, document2));
    } else {
      subscription.add(nodeDescription.childrenBind.subscribe({
        next(child) {
          const placeholder = document2.createComment(`${child.name} component`);
          if (nodeDescription.childrenBindMode === "prepend") {
            parent.insertBefore(node, placeholder);
          } else {
            const next = node.nextSibling;
            if (next) {
              parent.insertBefore(next, placeholder);
            } else {
              parent.append(placeholder);
            }
          }
          subscription.add(componentRunner(parent, {
            type: "component",
            component: child,
            properties: {},
            children: []
          }, context2, placeholder));
        },
        error,
        complete
      }));
    }
  }
}

// node_modules/butterfloat/suspense.js
var Suspense = () => {
  throw new Error("Suspense is a custom-wired component");
};
function wireSuspense(description, context2, document2 = globalThis.document) {
  context2.isStaticComponent = false;
  context2.isStaticTree = false;
  const props = description.properties;
  const suspense = context2.suspense ? combineLatest([props.when, context2.suspense]).pipe(map(([a, b]) => a || b)) : props.when;
  const mainComponentFragment = {
    type: "fragment",
    attributes: {},
    children: description.children,
    childrenBind: description.childrenBind,
    childrenBindMode: description.childrenBindMode
  };
  const mainComponent = () => mainComponentFragment;
  const mainContext = { ...context2, suspense };
  const main = wire(mainComponent, mainContext, void 0, document2);
  if (props.suspenseView) {
    const suspenseView = wire(props.suspenseView, { ...context2 }, void 0, document2);
    return combineLatest([props.when, main, suspenseView]).pipe(map(([suspend, main2, suspenseView2]) => suspend ? suspenseView2 : main2), distinctUntilChanged());
  } else {
    return main;
  }
}

// node_modules/butterfloat/wiring.js
var contextChildrenDescriptions = /* @__PURE__ */ new WeakMap();
function wireInternal(description, subscriber, context2, outerContainer, document2 = globalThis.document) {
  const { treeError } = context2;
  const subscription = new Subscription();
  const componentName = description.component.name;
  const error = treeError ? (error2) => {
    console.error(`Error in component ${componentName}`, error2);
    treeError(error2);
  } : (error2) => {
    console.error(`Error in component ${componentName}`, error2);
  };
  const { events, handler } = makeEventProxy(componentName);
  const componentContext = {
    bindEffect(observable2, effect) {
      context2.isStaticComponent = false;
      subscription.add(observable2.pipe(observeOn(animationFrameScheduler)).subscribe({
        next(value) {
          const promise = effect(value);
          if (promise && "catch" in promise) {
            promise.catch(error);
          }
        },
        error,
        complete: () => {
          console.debug(`Effect in component ${componentName} completed`);
          subscriber.complete();
        }
      }));
    },
    bindImmediateEffect(observable2, effect) {
      context2.isStaticComponent = false;
      subscription.add(observable2.subscribe({
        next(value) {
          const promise = effect(value);
          if (promise && "catch" in promise) {
            promise.catch(error);
          }
        },
        error,
        complete: () => {
          console.debug(`Immediate effect in component ${componentName} completed`);
          subscriber.complete();
        }
      }));
    },
    events
  };
  contextChildrenDescriptions.set(componentContext, description);
  try {
    const { elementBinds, nodeBinds, container: container2, isSameContainer } = context2.domStrategy(description.component, description.properties, componentContext, outerContainer, document2);
    context2.isStaticComponent &&= elementBinds.length === 0;
    context2.isStaticTree &&= context2.isStaticComponent;
    if (!isSameContainer) {
      subscriber.next(container2);
    } else {
      subscriber.next(document2.createComment("prestamp bound"));
    }
    const bindContext = {
      ...context2,
      complete: () => {
        console.debug(`Binding in component ${componentName} completed`);
        subscriber.complete();
      },
      error,
      componentRunner: runInternal,
      componentWirer: wire,
      eventBinder: handler,
      subscription
    };
    for (const [element, bindDescription] of elementBinds) {
      subscription.add(bindElement(element, bindDescription, bindContext, document2));
    }
    for (const [node, nodeDescription] of nodeBinds) {
      switch (nodeDescription.type) {
        case "component": {
          const nestedContext = {
            ...context2,
            isStaticComponent: true,
            isStaticTree: true
          };
          subscription.add(runInternal(container2, nodeDescription, nestedContext, node));
          context2.isStaticTree &&= nestedContext.isStaticTree;
          break;
        }
        case "children": {
          const nestedContext = {
            ...context2,
            isStaticComponent: true,
            isStaticTree: true
          };
          subscription.add(wireChildrenComponent(nodeDescription, componentContext, description, container2, nestedContext, node));
          context2.isStaticTree &&= nestedContext.isStaticTree;
          break;
        }
        case "fragment":
          context2.isStaticComponent = false;
          context2.isStaticTree = false;
          bindFragmentChildren(nodeDescription, node, subscription, bindContext);
          break;
      }
    }
  } catch (err) {
    subscriber.error(err);
  }
  return () => {
    subscription.unsubscribe();
  };
}
function wireChildrenComponent(nodeDescription, componentContext, description, container2, context2, node) {
  const parentDescription = contextChildrenDescriptions.get(nodeDescription.context ?? componentContext);
  if (!parentDescription) {
    throw new Error(`Unable to bind children for Children request in ${description.component.name}`);
  }
  const childrenComponent = () => ({
    type: "fragment",
    attributes: {},
    children: [...parentDescription.children],
    childrenBind: parentDescription.childrenBind,
    childrenBindMode: parentDescription.childrenBindMode
  });
  return runInternal(container2, {
    type: "component",
    component: childrenComponent,
    properties: {},
    children: []
  }, context2, node);
}
function wire(component, context2, outerContainer, document2 = globalThis.document) {
  if (isObservable(component)) {
    return component;
  }
  let description;
  if ("type" in component) {
    description = component;
  } else {
    description = {
      type: "component",
      component,
      children: [],
      properties: {}
    };
  }
  if (description.component === ErrorBoundary) {
    return wireErrorBoundary(description, context2, document2);
  }
  if (description.component === Suspense) {
    return wireSuspense(description, context2, document2);
  }
  return new Observable((subscriber) => wireInternal(description, subscriber, context2, outerContainer, document2));
}
function runInternal(container2, component, context2, placeholder, document2 = globalThis.document) {
  const observable2 = isObservable(component) ? component : wire(component, context2, container2, document2);
  let previousNode = null;
  const componentName = "type" in component ? component.component.name : component.name;
  return observable2.subscribe({
    next(node) {
      if (previousNode) {
        try {
          previousNode.replaceWith(node);
        } catch (error) {
          console.warn("Cannot exactly replace previous node, replacing all children in container", previousNode);
          container2.replaceChildren(node);
        }
      } else if (placeholder) {
        placeholder.replaceWith(node);
      } else {
        container2.appendChild(node);
      }
      previousNode = node;
    },
    error(error) {
      console.error(`Error in component ${componentName}`, error);
    },
    complete() {
      if (!context2?.preserveOnComplete && previousNode) {
        container2.removeChild(previousNode);
      }
    }
  });
}

// node_modules/butterfloat/error-boundary.js
var ErrorBoundary = () => {
  throw new Error("ErrorBoundary is a custom-wired component");
};
function wireErrorBoundary(description, context2, document2 = globalThis.document) {
  context2.isStaticComponent = false;
  context2.isStaticTree = false;
  const { errorView, errorViewBindMode, preserveOnComplete } = description.properties;
  const errorOccurred = new Subject();
  const treeError = errorOccurred.next.bind(errorOccurred);
  const errorViewChildren = errorOccurred.pipe(map((error) => () => {
    const childComponent = {
      type: "component",
      component: errorView,
      children: [],
      properties: { error }
    };
    return childComponent;
  }));
  const mainComponentFragment = {
    type: "fragment",
    attributes: {},
    children: description.children,
    childrenBind: description.childrenBind,
    childrenBindMode: description.childrenBindMode
  };
  const errorViewComponentFragment = {
    type: "fragment",
    attributes: {},
    children: [mainComponentFragment],
    childrenBind: errorViewChildren,
    childrenBindMode: errorViewBindMode ?? "prepend"
  };
  const mainComponent = () => errorViewComponentFragment;
  const mainContext = { ...context2, treeError, preserveOnComplete };
  const main = wire(mainComponent, mainContext, void 0, document2);
  return main;
}

// node_modules/butterfloat/static-dom.js
function buildElement(description, nsContext, document2 = globalThis.document) {
  if (description.attributes.xmlns) {
    nsContext = {
      defaultNamespace: description.attributes.xmlns,
      namespaceMap: { ...nsContext?.namespaceMap }
    };
  }
  let element;
  if (description.element.includes(":")) {
    const [nsAbbrev, elementName] = description.element.split(":");
    let ns = nsContext?.namespaceMap[nsAbbrev];
    if (!ns) {
      for (const [key, value] of Object.entries(description.attributes)) {
        if (key.startsWith("xmlns:")) {
          const nsAbbrev2 = key.replace("xmlns:", "");
          nsContext = {
            defaultNamespace: nsContext?.defaultNamespace ?? null,
            namespaceMap: {
              ...nsContext?.namespaceMap,
              [nsAbbrev2]: value
            }
          };
        }
      }
      ns = nsContext?.namespaceMap[nsAbbrev];
      if (!ns) {
        throw new Error(`Unknown namespace for '${description.element}'`);
      }
    }
    element = document2.createElementNS(ns, elementName);
  } else if (nsContext?.defaultNamespace) {
    element = document2.createElementNS(nsContext.defaultNamespace, description.element);
  } else {
    element = document2.createElement(description.element);
  }
  for (const [key, value] of Object.entries(description.attributes)) {
    if (key.startsWith("xmlns:")) {
      const nsAbbrev = key.replace("xmlns:", "");
      nsContext = {
        defaultNamespace: nsContext?.defaultNamespace ?? null,
        namespaceMap: {
          ...nsContext?.namespaceMap,
          [nsAbbrev]: value
        }
      };
    } else if (key.includes(":")) {
      const [nsAbbrev, attributeName] = key.split(":");
      const ns = nsContext?.namespaceMap?.[nsAbbrev];
      if (!ns) {
        throw new Error(`Unknown namespace for '${key}' attribute`);
      }
      element.setAttributeNS(ns, attributeName, (value ?? "").toString());
    } else if (key.includes("-")) {
      element.setAttribute(key, (value ?? "").toString());
    } else if (key === "class") {
      element.className = value;
    } else if (key === "for") {
      ;
      element.htmlFor = value;
    } else {
      ;
      element[key] = value;
    }
  }
  return { element, nsContext };
}
function buildNode(description, container2, elementBinds, nodeBinds, nsContext, document2 = globalThis.document) {
  switch (description.type) {
    case "element": {
      const { element, nsContext: newContext } = buildElement(description, nsContext, document2);
      if (hasAnyBinds(description)) {
        elementBinds.push([element, description]);
      }
      container2.appendChild(element);
      return { container: element, nsContext: newContext };
    }
    case "children": {
      const childrenComment = document2.createComment("Children component");
      container2.appendChild(childrenComment);
      nodeBinds.push([childrenComment, description]);
      return null;
    }
    case "component": {
      const componentComment = document2.createComment(`${description.component.name} component`);
      container2.appendChild(componentComment);
      nodeBinds.push([componentComment, description]);
      return null;
    }
    case "fragment":
      if (description.childrenBind && description.childrenBindMode === "prepend") {
        const fragmentComment = document2.createComment("fragment children binding");
        container2.appendChild(fragmentComment);
        nodeBinds.push([fragmentComment, description]);
      }
      for (const child of description.children) {
        if (typeof child === "string") {
          container2.appendChild(document2.createTextNode(child));
          continue;
        }
        buildTree(child, container2, elementBinds, nodeBinds, nsContext, document2);
      }
      if (description.childrenBind && description.childrenBindMode !== "prepend") {
        const fragmentComment = document2.createComment("fragment children binding");
        container2.appendChild(fragmentComment);
        nodeBinds.push([fragmentComment, description]);
      }
      return { container: container2, nsContext };
    case "static":
      container2.appendChild(description.element);
      return { container: container2, nsContext };
  }
}
function buildTree(description, container2 = null, elementBinds = [], nodeBinds = [], nsContext, document2 = globalThis.document) {
  if (!container2 && description.type === "element") {
    const { element, nsContext: newContext } = buildElement(description, nsContext, document2);
    nsContext = newContext;
    container2 = element;
    if (hasAnyBinds(description)) {
      elementBinds.push([element, description]);
    }
  } else if (!container2 && description.type === "static") {
    return {
      elementBinds,
      nodeBinds,
      container: description.element
    };
  } else if (!container2) {
    container2 = document2.createDocumentFragment();
    buildNode(description, container2, elementBinds, nodeBinds, nsContext, document2);
  } else {
    const nextNode = buildNode(description, container2, elementBinds, nodeBinds, nsContext, document2);
    if (nextNode !== null) {
      const { container: newContainer, nsContext: newContext } = nextNode;
      container2 = newContainer;
      nsContext = newContext;
    }
  }
  if (description.type !== "children" && description.type !== "fragment" && description.type !== "static") {
    for (const child of description.children) {
      if (typeof child === "string") {
        container2.appendChild(document2.createTextNode(child));
        continue;
      }
      buildTree(child, container2, elementBinds, nodeBinds, nsContext, document2);
    }
  }
  return {
    elementBinds,
    nodeBinds,
    container: container2
  };
}

// node_modules/butterfloat/wiring-dom-build.js
var buildDomStrategy = (component, properties, context2, container2, document2) => {
  const tree = component(properties, context2);
  return {
    ...buildTree(tree, void 0, void 0, void 0, void 0, document2),
    isSameContainer: false
  };
};
var wiring_dom_build_default = buildDomStrategy;

// node_modules/butterfloat/runtime.js
function run(container2, component, options, placeholder, document2 = globalThis.document) {
  const { preserveOnComplete } = options ?? {};
  return runInternal(container2, component, {
    domStrategy: wiring_dom_build_default,
    isStaticComponent: true,
    isStaticTree: true,
    preserveOnComplete
  }, placeholder, document2);
}

// src/nav-bar.tsx
function NavBar({ router }) {
  const homeActive = router.page.pipe(
    map((page) => page === "home" ? true : false)
  );
  const aboutActive = router.page.pipe(
    map((page) => page === "about" ? true : false)
  );
  return /* @__PURE__ */ jsx("div", { className: "navbar navbar-inverse navbar-fixed-top", role: "navigation" }, /* @__PURE__ */ jsx("div", { className: "container" }, /* @__PURE__ */ jsx("div", { className: "navbar-header" }, /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "navbar-toggle",
      "data-toggle": "collapse",
      "data-target": ".navbar-collapse"
    },
    /* @__PURE__ */ jsx("span", { className: "sr-only" }, "Toggle navigation"),
    /* @__PURE__ */ jsx("span", { className: "icon-bar" }),
    /* @__PURE__ */ jsx("span", { className: "icon-bar" }),
    /* @__PURE__ */ jsx("span", { className: "icon-bar" })
  ), /* @__PURE__ */ jsx("a", { className: "navbar-brand", href: "#" }, "macrotx")), /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse" }, /* @__PURE__ */ jsx("ul", { className: "nav navbar-nav" }, /* @__PURE__ */ jsx("li", { classBind: { active: homeActive } }, /* @__PURE__ */ jsx("a", { href: "#" }, "Home")), /* @__PURE__ */ jsx("li", { classBind: { active: aboutActive } }, /* @__PURE__ */ jsx("a", { href: "#about" }, "About"))))));
}

// src/pages/home.tsx
function HomePage() {
  return /* @__PURE__ */ jsx("div", { className: "jumbotron" }, /* @__PURE__ */ jsx("h1", null, "Macro Transaction Force Go!"), /* @__PURE__ */ jsx("p", null, "For as long as you can remember you've wanted to be a member of the universe-renowned Macro Transaction Force, one of the most elite forces in the galaxy. Their barrier to entry is rather high, but everyone knows it must be worth it."), /* @__PURE__ */ jsx("p", null, /* @__PURE__ */ jsx("em", null, /* @__PURE__ */ jsx("strong", null, "NOTE:"), " This is a work of satire from 2014. Some of the jokes may not have aged well, as satire is hard on the modern internet. Unfortunately, some of the jokes seem to be timeless.")), /* @__PURE__ */ jsx("a", { className: "btn btn-primary", href: "#play" }, "Play the Game"));
}

// src/pages/about.tsx
function AboutPage() {
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("h1", null, "About"), /* @__PURE__ */ jsx("p", null, /* @__PURE__ */ jsx("em", null, "Macro Transaction Force Go!"), " is a serious study in", " ", /* @__PURE__ */ jsx("a", { href: "http://itch.io/jam/ruinjam2014" }, "the ruination of videogames"), " ", "by ", /* @__PURE__ */ jsx("a", { href: "http://worldmaker.net" }, "Max Battcher"), "."), /* @__PURE__ */ jsx("p", null, "Nothing quite says ", /* @__PURE__ */ jsx("strong", null, "videogames"), " like a custom engine, because why should we share our nice toys? This unnamed semi-proprietary TypeScript game engine is cobbled together (in 2023) with", " ", /* @__PURE__ */ jsx("a", { href: "https://github.com/WorldMaker/butterfloat" }, "Butterfloat"), " ", "components."));
}

// node_modules/rxjs-spy/esm/operators/index.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function tag(tag2) {
  return function tagOperation(source) {
    return source.lift(new TagOperator(tag2));
  };
}
var TagOperator = /* @__PURE__ */ function() {
  function TagOperator2(tag2) {
    _classCallCheck(this, TagOperator2);
    _defineProperty(this, "tag", void 0);
    this.tag = tag2;
  }
  _createClass(TagOperator2, [{
    key: "call",
    value: function call(subscriber, source) {
      return source.subscribe(subscriber);
    }
  }]);
  return TagOperator2;
}();

// src/nodes/race.tsx
function RaceNode({ game }, { bindImmediateEffect, events }) {
  const { darkstar, rabbit, seductrix } = events;
  const { raceVm } = game;
  bindImmediateEffect(darkstar, (e) => {
    e.preventDefault();
    raceVm.darkstar();
  });
  bindImmediateEffect(rabbit, (e) => {
    e.preventDefault();
    raceVm.rabbit();
  });
  bindImmediateEffect(seductrix, (e) => {
    e.preventDefault();
    raceVm.seductrix();
  });
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("h1", null, "Choose Your Race"), /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: darkstar } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Darkstar Orc"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Outwardly terrifying, the Darkstar Orcs were once the unpaid labor force of the Galaxy due to their good work ethic, even if few people will pay them that compliment.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: rabbit } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Gamma Rabbit"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Meak and nearly extinct, the Gamma Rabbit is a quiet, friendly and fluffy species.")), /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Human", " ", /* @__PURE__ */ jsx("span", { className: "label label-primary" }, "6000 ", /* @__PURE__ */ jsx("span", { className: "fa fa-btc" }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "One of the most dangerous species in the Galaxy.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: seductrix } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Seductrix"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Wily and sly, the Seductrix people fill the galaxy with both desirable dreams and endless lies."))));
}

// src/nodes/class.tsx
function ClassNode({ game }, { bindImmediateEffect, events }) {
  const { chef, enchanter, sjw } = events;
  const { classVm } = game;
  bindImmediateEffect(chef, (e) => {
    e.preventDefault();
    classVm.chef();
  });
  bindImmediateEffect(enchanter, (e) => {
    e.preventDefault();
    classVm.enchanter();
  });
  bindImmediateEffect(sjw, (e) => {
    e.preventDefault();
    classVm.sjw();
  });
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("h1", null, "Choose Your Class"), /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Assassin", " ", /* @__PURE__ */ jsx("span", { className: "label label-primary" }, "6000 ", /* @__PURE__ */ jsx("span", { className: "fa fa-btc" }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Once a specialized role of choice for dangerous people, there seems to be a new one every year.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: chef } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Chef"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "A good meal can explode minds and save worlds.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: enchanter } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Enchanter"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Enchanters harness the powers of illusion.")), /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Gamer", " ", /* @__PURE__ */ jsx("span", { class: "label label-primary" }, "6000 ", /* @__PURE__ */ jsx("span", { class: "fa fa-btc" }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Gamers can command the respect of the entire galaxy with their elite skills and monster hardcore abilities.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: sjw } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Social Justice Warrior"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "The blind fury of Justice, these Warriors fight for a just society, or so they claim.")))));
}

// src/nodes/gender.tsx
function GenderNode({ game }, { bindImmediateEffect, events }) {
  const { agender, female, herm, transfemale, transmale } = events;
  const { genderVm } = game;
  bindImmediateEffect(agender, (e) => {
    e.preventDefault();
    genderVm.agender();
  });
  bindImmediateEffect(female, (e) => {
    e.preventDefault();
    genderVm.female();
  });
  bindImmediateEffect(herm, (e) => {
    e.preventDefault();
    genderVm.herm();
  });
  bindImmediateEffect(transfemale, (e) => {
    e.preventDefault();
    genderVm.transfemale();
  });
  bindImmediateEffect(transmale, (e) => {
    e.preventDefault();
    genderVm.transmale();
  });
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("h1", null, "Choose Your Gender"), /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: agender } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Agender"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Dymorphism is not for you.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: female } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Female"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Woman; lady; girl.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: herm } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Hermaphrodite"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Be all that you can be.")), /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Male", " ", /* @__PURE__ */ jsx("span", { className: "label label-primary" }, "6000 ", /* @__PURE__ */ jsx("span", { className: "fa fa-btc" }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Man; guy; dude; bro; broham.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: transfemale } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Transfemale"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "You have succesfully navigated the over-complicated gender divide.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: transmale } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Transmale"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "You have succesfully navigated the over-complicated gender divide."))));
}

// src/nodes/pronoun.tsx
function PronounNode({ game }) {
  const pronounChoice = game.pronoun.pipe(
    map(
      (pronoun) => !pronoun || pronoun === "" ? () => /* @__PURE__ */ jsx(PronounChoice, { pronounVm: game.pronounVm }) : () => /* @__PURE__ */ jsx(AfterPronoun, { pronounVm: game.pronounVm })
    )
  );
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("h1", null, "Welcome to the Macro Transaction Force HQ!"), /* @__PURE__ */ jsx("p", null, "The building secretary robot eyeballs you just enough to feel like it knows everything about you, audibly sighs, and then presses an intercom button on its button-covered chest, not even bothering to try to catch your name."), /* @__PURE__ */ jsx("p", null, '"Mr. Gravel?" the robot mechanically chirps to itself. You cannot hear the reply, only the robot continuing to itself, "You had an interview scheduled this space afternoon?" The robot nods in frustration, presumably while Mr. Gravel on the other end of the intercom remembers his agenda for the day. "Well, ', /* @__PURE__ */ jsx("em", null, "she"), `'s here\u2026" The tone of the robot's pronoun choice sounds rather condescending for a machine.`), /* @__PURE__ */ jsx("div", { childrenBind: pronounChoice, childrenBindMode: "replace" }));
}
function PronounChoice({ pronounVm }, { bindImmediateEffect, events }) {
  const { she, he, they } = events;
  bindImmediateEffect(she, (e) => {
    e.preventDefault();
    pronounVm.she();
  });
  bindImmediateEffect(he, (e) => {
    e.preventDefault();
    pronounVm.he();
  });
  bindImmediateEffect(they, (e) => {
    e.preventDefault();
    pronounVm.they();
  });
  return /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: she } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, '"She" is fine'), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, 'Even if the tone was suspect, you are ok with "she".')), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: he } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, '"HE"'), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "You attempt to forcefully correct the robot.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: they } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, `"I'm sorry, but it is 'they'\u2026"`), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "This robot is truly mistaken.")), /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, '"Xie"'), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, /* @__PURE__ */ jsx("em", null, "Module not found."))));
}
function RobotResponseToShe() {
  return /* @__PURE__ */ jsx("p", null, "You don't bother to correct the robot's pronoun usage, but you do give some wicked side-eye for its choice of tone.");
}
function RobotResponseToHe() {
  return /* @__PURE__ */ jsx("p", null, '"HE" you loudly point out to the robot. The robot huffs into its intercom, "', /* @__PURE__ */ jsx("em", null, "He"), ' is here\u2026".');
}
function RobotResponseToThey() {
  return /* @__PURE__ */ jsx("p", null, `"I'm sorry, but it is 'they'\u2026" you politely try to correct the robot. The robot glares at you and snarks back to the intercom, "They`, " ", /* @__PURE__ */ jsx("em", null, "is"), ' here\u2026".');
}
function AfterPronoun({ pronounVm }, { bindImmediateEffect, events }) {
  const { next } = events;
  const robotResponse = pronounVm.pronoun.pipe(
    map((pronoun) => {
      switch (pronoun) {
        case "he":
          return RobotResponseToHe;
        case "they":
          return RobotResponseToThey;
        case "she":
        default:
          return RobotResponseToShe;
      }
    })
  );
  bindImmediateEffect(next, (e) => {
    e.preventDefault();
    pronounVm.next();
  });
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("hr", null), /* @__PURE__ */ jsx("div", { childrenBind: robotResponse, childrenBindMode: "replace" }), /* @__PURE__ */ jsx("p", null, '"Mr. Gravel will see you in a few moments," the robot comes back to you.'), /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Shoot the Robot", " ", /* @__PURE__ */ jsx("span", { className: "label label-info" }, "Collector's Edition")), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "In addition to the robot's rudeness, you finally notice the robot wears the insignia of the Devices of Devastation, a galactic gang of murderous robots you've sworn to destroy on sight.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: next } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Wait Patiently"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "You can wait patiently for the interview."))));
}

// src/nodes/weapon.tsx
function Empty() {
  return /* @__PURE__ */ jsx(Fragment, null);
}
function WeaponNode({ game }, { bindEffect, events }) {
  const { playerNameChanged } = events;
  const { weaponVm } = game;
  const weaponChoice = game.weapon.pipe(
    map(
      (weapon) => !weapon || weapon === "" ? () => /* @__PURE__ */ jsx(WeaponChoice, { weaponVm }) : () => /* @__PURE__ */ jsx(AfterWeapon, { weaponVm })
    )
  );
  const afterExciting = weaponVm.exciting.pipe(
    map(
      (exciting) => exciting ? () => /* @__PURE__ */ jsx(AfterExciting, { weaponVm }) : Empty
    )
  );
  bindEffect(playerNameChanged, (e) => {
    weaponVm.changePlayerName(e.target.value);
  });
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("h1", null, "Mr. Gravel's Office"), /* @__PURE__ */ jsx("p", null, '"Ah, ', /* @__PURE__ */ jsx("span", { bind: { innerText: game.honorific } }), " ", /* @__PURE__ */ jsx(
    "input",
    {
      title: "Player Name",
      type: "text",
      bind: { defaultValue: game.playerName },
      events: { change: playerNameChanged }
    }
  ), ', I see you have brought your\u2026"'), /* @__PURE__ */ jsx("div", { childrenBind: weaponChoice, childrenBindMode: "replace" }), /* @__PURE__ */ jsx("div", { childrenBind: afterExciting, childrenBindMode: "replace" }));
}
function WeaponChoice({ weaponVm }, { bindImmediateEffect, events }) {
  const { winks, clothes, swagger } = events;
  bindImmediateEffect(winks, (e) => {
    e.preventDefault();
    weaponVm.winks();
  });
  bindImmediateEffect(clothes, (e) => {
    e.preventDefault();
    weaponVm.clothes();
  });
  bindImmediateEffect(swagger, (e) => {
    e.preventDefault();
    weaponVm.swagger();
  });
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("h2", null, "Choose Your Weapon"), /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: winks } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Arsenal of Sly Winks"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Sometimes all you need is a well timed twitch of the eye.")), /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Blaster", " ", /* @__PURE__ */ jsx("span", { className: "label label-primary" }, "2000 ", /* @__PURE__ */ jsx("span", { className: "fa fa-btc" }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "The quintessential laser projectile weapon of this age.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: clothes } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Foppish Clothes"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Snazzy dress can be a devastating weapon on the right person.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: swagger } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Sophisticated Swagger"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Sometimes you start commanding an army, by commanding a room.")), /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Space Ninja Saber", " ", /* @__PURE__ */ jsx("span", { className: "label label-primary" }, "2100 ", /* @__PURE__ */ jsx("span", { className: "fa fa-btc" }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, /* @__PURE__ */ jsx("em", null, "Coming soon in our ", /* @__PURE__ */ jsx("strong", null, "Ninja Pack"), " DLC.")))));
}
function AfterWeapon({ weaponVm }) {
  const excitingChoice = weaponVm.exciting.pipe(
    map(
      (exciting) => !exciting ? () => /* @__PURE__ */ jsx(ExcitingChoice, { weaponVm }) : Empty
    )
  );
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("hr", null), /* @__PURE__ */ jsx("p", null, '"\u2026', /* @__PURE__ */ jsx("span", { bind: { innerText: weaponVm.weapon } }), '. Excellent. That should come in handy later during our 8 hour testing phase of the interview."'), /* @__PURE__ */ jsx("div", { childrenBind: excitingChoice, childrenBindMode: "replace" }));
}
function ExcitingChoice({ weaponVm }, { bindImmediateEffect, events }) {
  const { nextExciting } = events;
  bindImmediateEffect(nextExciting, (e) => {
    e.preventDefault();
    weaponVm.nextExciting();
  });
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx(
    "a",
    {
      className: "list-group-item",
      href: "#",
      events: { click: nextExciting }
    },
    /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, '"That sounds exciting."'),
    /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Of course a good interview would require plenty of testing time.")
  ), /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, `"You've got to be kidding me!"`, /* @__PURE__ */ jsx("span", { className: "label label-primary" }, "9001 ", /* @__PURE__ */ jsx("span", { className: "fa fa-btc" }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Mr. Gravel has clearly seen your extensive portfolio, detailed resume, years of study at respected institutions, and talked to at least a few of your many references. Does it really take 8 hours to prove that you aren't a liar with a giant ability to pull off a major conspiracy that will pass even the strictest of background checks?"))));
}
function AfterExciting({ weaponVm }, { bindImmediateEffect, events }) {
  const { nextPassion } = events;
  bindImmediateEffect(nextPassion, (e) => {
    e.preventDefault();
    weaponVm.nextPassion();
  });
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("hr", null), /* @__PURE__ */ jsx("p", null, '"That sounds exciting," you say, thinking about the upcoming 8 space hours for testing.'), /* @__PURE__ */ jsx("p", null, 'Mr. Gravel nodded in that manner that clearly showed that he would not put up with anything less than excited for mandatory testing. "I like that passion. The Macro Transaction Force was founded on passion. When you spend 60 to 80 hours per space week working for the force you have to make sure that everyone shares the same passions. The team is so important to the galaxy!"'), /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: nextPassion } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, `"I'm full of passion."`), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Or maybe it is angst. Hard to tell the difference sometimes.")), /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, '"What about balance?"', /* @__PURE__ */ jsx("span", { className: "label label-primary" }, "9902 ", /* @__PURE__ */ jsx("span", { className: "fa fa-btc" }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Why can't there be a reasonable work-life balance? Passion is no substitute for having a full life with friends outside work, maybe a family, and even some personal time."))));
}

// src/models/bossvm.ts
var BossVm = class {
  #tea;
  #setTea;
  get tea() {
    return this.#tea;
  }
  constructor() {
    ;
    [this.#tea, this.#setTea] = butterfly(false);
  }
  nextTea() {
    this.#setTea(true);
  }
};

// src/nodes/boss.tsx
function BossNode({ game }) {
  const bossVm = new BossVm();
  const teaChoice = bossVm.tea.pipe(
    map(
      (tea) => !tea ? () => /* @__PURE__ */ jsx(TeaChoice, { bossVm }) : () => /* @__PURE__ */ jsx(AfterTea, { game })
    )
  );
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("h1", null, "Boss Stage!"), /* @__PURE__ */ jsx("p", null, `Just as you utter the words, "I'm full of passion," the entire space station begins to shudder and shake. Very quickly a large laser beam blasts through station walls incinerating Mr. Gravel where he sat at his desk. Your emergency space suit activates just in time as the oxygen levels start to fall in the station.`), /* @__PURE__ */ jsx("p", null, "Through the hole in the hull of the station a giant cyborg in top to bottom unrevealing power armor flies in, sealing the hole with a flick of the wrist while passing. You quickly recognize the emblem as the symbol for", /* @__PURE__ */ jsx("em", null, "The Elucidator"), ". She is one of the most rogue of the Macro Transaction Force's rogue's gallery."), /* @__PURE__ */ jsx("p", null, "You can feel The Elucidator's scanning beam examing you, and you prepare your ", /* @__PURE__ */ jsx("span", { bind: { innerText: game.weapon } }), " for a possible fight."), /* @__PURE__ */ jsx("div", { childrenBind: teaChoice, childrenBindMode: "replace" }));
}
function TeaChoice({ bossVm }, { bindImmediateEffect, events }) {
  const { nextTea } = events;
  bindImmediateEffect(nextTea, (e) => {
    e.preventDefault();
    bossVm.nextTea();
  });
  return /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Fight!", " ", /* @__PURE__ */ jsx("span", { className: "label label-primary" }, "6000 ", /* @__PURE__ */ jsx("span", { className: "fa fa-btc" }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "This would clearly be an amazing boss battle full of trying to find a weak point, exploiting said weak point, and then repeating those steps at least two more times.")), /* @__PURE__ */ jsx("a", { className: "list-group-item", href: "#", events: { click: nextTea } }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Invite to Tea"), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "It may not be your office, but there's no reason to be uncivil even to an uninvited guest.")));
}
function Empty2() {
  return /* @__PURE__ */ jsx(Fragment, null);
}
function ChefTea() {
  return /* @__PURE__ */ jsx(Fragment, null, "You manage to collect a couple biscotti from an emergency chef pouch and even work a small number of spaceberries into an impromptu spaceberry jam.");
}
function AfterTea({ game }) {
  const chefTea = game.className.pipe(
    map((className) => className === "Chef" ? ChefTea : Empty2)
  );
  const rechargeDate = 23 * 60 * 6e4;
  const recharge = interval(
    1e3
    /* ms */
  ).pipe(
    map(
      (count) => Math.max(
        rechargeDate - count * 1e3,
        5e3
        /* ms */
      )
    ),
    map(
      (time) => new Date(time).toLocaleTimeString(void 0, {
        hour12: false,
        timeZone: "UTC"
      })
    ),
    map((formatted) => `AP ${formatted}`)
  );
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("hr", null), /* @__PURE__ */ jsx("p", null, '"Would you mind a cup of tea, Ms. The Elucidator?" you ask cordially.'), /* @__PURE__ */ jsx("p", null, "Removing her helmet it becomes clear that The Elucidator is a fellow", " ", /* @__PURE__ */ jsx("span", { bind: { innerText: game.race } }), ", which you never would have guessed. She nods patiently and sits down in Mr. Gravel's slightly scorched chair. Presumably she was unworried about the bits and pieces of Mr. Gravel between her power armor and the chair."), /* @__PURE__ */ jsx("p", null, "You prepare a couple cups of tea.", " ", /* @__PURE__ */ jsx("span", { childrenBind: chefTea, childrenBindMode: "replace" }), ` The Elucidator smiles a broad smile, "Here to try to fill one of the Macro Transaction Force's diversity quotas?"`), /* @__PURE__ */ jsx("p", null, 'Although unhappy with how blunt she was, you could only admit that she might have a point, "Seemed that way."'), /* @__PURE__ */ jsx("p", null, '"Getting the full spiel? Passion to save the galaxy from itself? Long hours, terrible pay, no free time?" She sips, a sly smile on her lips.'), /* @__PURE__ */ jsx("p", null, 'You shrug, "We were working towards that. What is it to you?"'), /* @__PURE__ */ jsx("p", null, '"What has Macro Transaction Force done for ', /* @__PURE__ */ jsx("i", null, "us"), ' lately?"'), /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, '"So Much!"', " ", /* @__PURE__ */ jsx("span", { className: "label label-primary" }, "6000 ", /* @__PURE__ */ jsx("span", { className: "fa fa-btc" }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Macro Transaction Force is the best and I will start by destroying one of its nemeses right here!")), /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Did you bring a full presentation to help convince me?", " ", /* @__PURE__ */ jsx("span", { className: "label label-danger" }, /* @__PURE__ */ jsx("span", { className: "fa fa-clock-o" }), " ", /* @__PURE__ */ jsx("span", { bind: { innerText: recharge } }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "I only join criminal organizations with killer slide decks.")), /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, `"Let's Join Forces!"`, " ", /* @__PURE__ */ jsx("span", { className: "label label-info" }, "Coming Soon")), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "Maybe The Elucidator is right and it is the Macro Transaction Force that should be taken down a peg! ", /* @__PURE__ */ jsx("em", null, "Buy our Season Pass Today"), " ", "and Get the ", /* @__PURE__ */ jsx("strong", null, "Sidekick to The Elucidator Pack"), " as soon as it releases.")), /* @__PURE__ */ jsx("div", { className: "alert alert-info" }, /* @__PURE__ */ jsx("h3", null, "Coming Soon"), /* @__PURE__ */ jsx("p", null, "Spam your friends, acquaintances, and significant frenemies on social networks to acquire more action points!"))));
}

// src/nodes/index.tsx
var NodeComponents = {
  boss: (game) => () => /* @__PURE__ */ jsx(BossNode, { game }),
  class: (game) => () => /* @__PURE__ */ jsx(ClassNode, { game }),
  gender: (game) => () => /* @__PURE__ */ jsx(GenderNode, { game }),
  pronoun: (game) => () => /* @__PURE__ */ jsx(PronounNode, { game }),
  race: (game) => () => /* @__PURE__ */ jsx(RaceNode, { game }),
  weapon: (game) => () => /* @__PURE__ */ jsx(WeaponNode, { game })
};

// src/models/racevm.ts
var RaceVm = class {
  #game;
  #race;
  #setRace;
  get race() {
    return this.#race;
  }
  constructor(game) {
    this.#game = game;
    [this.#race, this.#setRace] = butterfly("");
  }
  restart() {
    this.#setRace("");
  }
  rabbit() {
    this.#setRace("Gamma Rabbit");
    this.#game.nextNode("class");
  }
  seductrix() {
    this.#setRace("Seductrix");
    this.#game.nextNode("class");
  }
  darkstar() {
    this.#setRace("Darkstar Orc");
    this.#game.nextNode("class");
  }
};

// src/models/classvm.ts
var ClassVm = class {
  #game;
  #className;
  #setClassName;
  get className() {
    return this.#className;
  }
  constructor(game) {
    this.#game = game;
    [this.#className, this.#setClassName] = butterfly("");
  }
  restart() {
    this.#setClassName("");
  }
  sjw() {
    this.#setClassName("Social Justice Warrior");
    this.#game.nextNode("gender");
  }
  enchanter() {
    this.#setClassName("Enchanter");
    this.#game.nextNode("gender");
  }
  chef() {
    this.#setClassName("Chef");
    this.#game.nextNode("gender");
  }
};

// src/models/gendervm.ts
var GenderVm = class {
  #game;
  #a;
  #setA;
  get a() {
    return this.#a;
  }
  #gender;
  #setGender;
  get gender() {
    return this.#gender;
  }
  constructor(game) {
    this.#game = game;
    [this.#a, this.#setA] = butterfly("a");
    [this.#gender, this.#setGender] = butterfly("");
  }
  restart() {
    this.#setA("a");
    this.#setGender("");
  }
  agender() {
    this.#setA("an");
    this.#setGender("agender");
    this.#game.nextNode("pronoun");
  }
  female() {
    this.#setGender("female");
    this.#game.nextNode("pronoun");
  }
  herm() {
    this.#setGender("hermaphrodite");
    this.#game.nextNode("pronoun");
  }
  transfemale() {
    this.#setGender("transfemale");
    this.#game.nextNode("pronoun");
  }
  transmale() {
    this.#setGender("transmale");
    this.#game.nextNode("pronoun");
  }
};

// src/models/pronounvm.ts
var PronounVm = class {
  #game;
  #pronoun;
  #setPronoun;
  get pronoun() {
    return this.#pronoun;
  }
  constructor(game) {
    this.#game = game;
    [this.#pronoun, this.#setPronoun] = butterfly("");
  }
  restart() {
    this.#setPronoun("");
  }
  she() {
    this.#setPronoun("she");
  }
  he() {
    this.#setPronoun("he");
  }
  they() {
    this.#setPronoun("they");
  }
  next() {
    this.#game.nextNode("weapon");
  }
};

// src/models/weaponvm.ts
var WeaponVm = class {
  #game;
  #playerName;
  #setPlayerName;
  get playerName() {
    return this.#playerName;
  }
  #weapon;
  #setWeapon;
  get weapon() {
    return this.#weapon;
  }
  #exciting;
  #setExciting;
  get exciting() {
    return this.#exciting;
  }
  constructor(game) {
    this.#game = game;
    [this.#playerName, this.#setPlayerName] = butterfly("You");
    [this.#weapon, this.#setWeapon] = butterfly("");
    [this.#exciting, this.#setExciting] = butterfly(false);
  }
  restart() {
    this.#setPlayerName("You");
    this.#setWeapon("");
    this.#setExciting(false);
  }
  changePlayerName(name) {
    this.#setPlayerName(name);
  }
  winks() {
    this.#setWeapon("Arsenal of Sly Winks");
  }
  clothes() {
    this.#setWeapon("Foppish Clothes");
  }
  swagger() {
    this.#setWeapon("Sophisticated Swagger");
  }
  nextExciting() {
    this.#setExciting(true);
  }
  nextPassion() {
    this.#game.nextNode("boss");
  }
};

// src/models/gamevm.ts
var GameVm = class {
  #node;
  #setNode;
  get node() {
    return this.#node;
  }
  #nodeComponent;
  get nodeComponent() {
    return this.#nodeComponent;
  }
  #genderVm;
  get genderVm() {
    return this.#genderVm;
  }
  get a() {
    return this.#genderVm.a;
  }
  get gender() {
    return this.#genderVm.gender;
  }
  #raceVm;
  get raceVm() {
    return this.#raceVm;
  }
  get race() {
    return this.raceVm.race;
  }
  #classVm;
  get classVm() {
    return this.#classVm;
  }
  get className() {
    return this.classVm.className;
  }
  #pronounVm;
  get pronounVm() {
    return this.#pronounVm;
  }
  get pronoun() {
    return this.pronounVm.pronoun;
  }
  #honorific;
  get honorific() {
    return this.#honorific;
  }
  #weaponVm;
  get weaponVm() {
    return this.#weaponVm;
  }
  get playerName() {
    return this.weaponVm.playerName;
  }
  get weapon() {
    return this.weaponVm.weapon;
  }
  #ap;
  #setAp;
  get ap() {
    return this.#ap;
  }
  constructor() {
    ;
    [this.#node, this.#setNode] = butterfly("race");
    [this.#ap, this.#setAp] = butterfly(5);
    this.#genderVm = new GenderVm(this);
    this.#raceVm = new RaceVm(this);
    this.#classVm = new ClassVm(this);
    this.#pronounVm = new PronounVm(this);
    this.#weaponVm = new WeaponVm(this);
    this.#nodeComponent = this.node.pipe(
      map((node) => {
        const component = NodeComponents[node];
        if (component) {
          return component(this);
        } else {
          return null;
        }
      }),
      shareReplay(1)
    );
    this.#honorific = this.pronoun.pipe(
      map((pronoun) => pronoun === "she" ? "Ms." : "Mr.")
    );
  }
  restart() {
    this.#setNode("race");
    this.genderVm.restart();
    this.raceVm.restart();
    this.classVm.restart();
    this.pronounVm.restart();
    this.weaponVm.restart();
    this.#setAp(5);
  }
  nextNode(node) {
    this.#setNode(node);
    this.#setAp((ap) => ap - 1);
  }
};

// src/pages/game.tsx
function NodeNotFound() {
  return /* @__PURE__ */ jsx("p", null, "Game node not found.");
}
function GetStarted() {
  return /* @__PURE__ */ jsx("p", null, "Please select a character race to get started.");
}
function CharacterType({ game }) {
  return /* @__PURE__ */ jsx("p", null, "You are ", /* @__PURE__ */ jsx("span", { bind: { innerText: game.a } }), " ", /* @__PURE__ */ jsx("span", { bind: { innerText: game.gender } }), " ", /* @__PURE__ */ jsx("span", { bind: { innerText: game.race } }), " ", /* @__PURE__ */ jsx("span", { bind: { innerText: game.className } }), ".");
}
function Empty3() {
  return /* @__PURE__ */ jsx(Fragment, null);
}
function Weapon({ game }) {
  return /* @__PURE__ */ jsx("p", null, "You are wielding your ", /* @__PURE__ */ jsx("span", { bind: { innerText: game.weapon } }), ".");
}
function GamePage(_props, { bindEffect, events }) {
  const game = new GameVm();
  const nodeComponent = game.nodeComponent.pipe(
    map((nodeComponent2) => nodeComponent2 ?? NodeNotFound),
    tag("game-node-component")
  );
  const characterType = game.race.pipe(
    map(
      (race) => !race || race === "" ? GetStarted : () => /* @__PURE__ */ jsx(CharacterType, { game })
    )
  );
  const ap = game.ap.pipe(map((ap2) => ap2.toLocaleString()));
  const weapon = game.weapon.pipe(
    map(
      (weapon2) => !weapon2 || weapon2 === "" ? Empty3 : () => /* @__PURE__ */ jsx(Weapon, { game })
    )
  );
  bindEffect(events.restart, () => {
    game.restart();
  });
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx(
    "div",
    {
      className: "col-md-10",
      childrenBind: nodeComponent,
      childrenBindMode: "replace"
    }
  ), /* @__PURE__ */ jsx("div", { className: "col-md-2" }, /* @__PURE__ */ jsx("h3", { bind: { innerText: game.playerName } }), /* @__PURE__ */ jsx("div", { childrenBind: characterType, childrenBindMode: "replace" }), /* @__PURE__ */ jsx("h3", null, "Assets"), /* @__PURE__ */ jsx("p", null, "You currently have", " ", /* @__PURE__ */ jsx("span", { className: "label label-danger" }, "0 ", /* @__PURE__ */ jsx("span", { className: "fa fa-btc" })), " ", "space bucks."), /* @__PURE__ */ jsx("div", { childrenBind: weapon, childrenBindMode: "replace" }), /* @__PURE__ */ jsx("p", null, "You have", " ", /* @__PURE__ */ jsx("span", { className: "label label-info", bind: { innerText: ap } }), " ", "action points remaining today."), /* @__PURE__ */ jsx("h3", null, "Game Options"), /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "btn btn-danger btn-block",
      events: { click: events.restart }
    },
    /* @__PURE__ */ jsx("span", { className: "fa fa-refresh" }),
    " Restart Game"
  )));
}

// src/router.ts
var Routes = {
  "": "home",
  "#": "home",
  "#play": "game",
  "#about": "about"
};
var PageComponents = {
  home: HomePage,
  about: AboutPage,
  game: GamePage
};
var Router = class {
  #page;
  get page() {
    return this.#page;
  }
  #component;
  get component() {
    return this.#component;
  }
  constructor() {
    const hash = concat(
      of(location.hash),
      fromEvent(window, "hashchange").pipe(
        map(() => location.hash)
      )
    );
    this.#page = hash.pipe(
      map((hash2) => Routes[hash2] ?? "home"),
      shareReplay(1)
    );
    this.#component = this.page.pipe(
      map((pageName) => PageComponents[pageName])
    );
  }
};

// src/main.tsx
function PageNotFound() {
  return /* @__PURE__ */ jsx("p", null, "Page not found");
}
function Main() {
  const router = new Router();
  const pageComponent = router.component.pipe(
    map((component) => component ?? PageNotFound)
  );
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx(NavBar, { router }), /* @__PURE__ */ jsx(
    "div",
    {
      id: "page",
      className: "container",
      childrenBind: pageComponent,
      childrenBindMode: "replace"
    }
  ), /* @__PURE__ */ jsx("hr", null), /* @__PURE__ */ jsx("footer", { className: "container" }, /* @__PURE__ */ jsx("small", null, "Copyright \xA9 2014 Max Battcher. Some rights reserved.")));
}

// src/index.ts
var container = document.getElementById("container");
run(container, Main);
/*! Bundled license information:

rxjs-spy/esm/operators/index.js:
  (**
   * @license Use of this source code is governed by an MIT-style license that
   * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
   *)

rxjs-spy/esm/operators/index.js:
  (**
   * @license Use of this source code is governed by an MIT-style license that
   * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
   *)
*/
