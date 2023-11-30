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
    var observable3 = new Observable4();
    observable3.source = this;
    observable3.operator = operator;
    return observable3;
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
    var observable3 = new Observable();
    observable3.source = this;
    return observable3;
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

// node_modules/rxjs/dist/esm5/internal/observable/throwError.js
function throwError(errorOrErrorFactory, scheduler) {
  var errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
    return errorOrErrorFactory;
  };
  var init = function(subscriber) {
    return subscriber.error(errorFactory());
  };
  return new Observable(scheduler ? function(subscriber) {
    return scheduler.schedule(init, 0, subscriber);
  } : init);
}

// node_modules/rxjs/dist/esm5/internal/Notification.js
var NotificationKind;
(function(NotificationKind2) {
  NotificationKind2["NEXT"] = "N";
  NotificationKind2["ERROR"] = "E";
  NotificationKind2["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = function() {
  function Notification2(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === "N";
  }
  Notification2.prototype.observe = function(observer) {
    return observeNotification(this, observer);
  };
  Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
    var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
    return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
  };
  Notification2.prototype.accept = function(nextOrObserver, error, complete) {
    var _a;
    return isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
  };
  Notification2.prototype.toObservable = function() {
    var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
    var result = kind === "N" ? of(value) : kind === "E" ? throwError(function() {
      return error;
    }) : kind === "C" ? EMPTY : 0;
    if (!result) {
      throw new TypeError("Unexpected notification kind " + kind);
    }
    return result;
  };
  Notification2.createNext = function(value) {
    return new Notification2("N", value);
  };
  Notification2.createError = function(err) {
    return new Notification2("E", void 0, err);
  };
  Notification2.createComplete = function() {
    return Notification2.completeNotification;
  };
  Notification2.completeNotification = new Notification2("C");
  return Notification2;
}();
function observeNotification(notification, observer) {
  var _a, _b, _c;
  var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
  if (typeof kind !== "string") {
    throw new TypeError('Invalid notification, missing "kind"');
  }
  kind === "N" ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
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

// node_modules/rxjs/dist/esm5/internal/observable/defer.js
function defer(observableFactory) {
  return new Observable(function(subscriber) {
    innerFrom(observableFactory()).subscribe(subscriber);
  });
}

// node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js
function forkJoin() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var resultSelector = popResultSelector(args);
  var _a = argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
  var result = new Observable(function(subscriber) {
    var length = sources.length;
    if (!length) {
      subscriber.complete();
      return;
    }
    var values = new Array(length);
    var remainingCompletions = length;
    var remainingEmissions = length;
    var _loop_1 = function(sourceIndex2) {
      var hasValue = false;
      innerFrom(sources[sourceIndex2]).subscribe(createOperatorSubscriber(subscriber, function(value) {
        if (!hasValue) {
          hasValue = true;
          remainingEmissions--;
        }
        values[sourceIndex2] = value;
      }, function() {
        return remainingCompletions--;
      }, void 0, function() {
        if (!remainingCompletions || !hasValue) {
          if (!remainingEmissions) {
            subscriber.next(keys ? createObject(keys, values) : values);
          }
          subscriber.complete();
        }
      }));
    };
    for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
      _loop_1(sourceIndex);
    }
  });
  return resultSelector ? result.pipe(mapOneOrManyArgs(resultSelector)) : result;
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

// node_modules/rxjs/dist/esm5/internal/observable/never.js
var NEVER = new Observable(noop);

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

// node_modules/rxjs/dist/esm5/internal/operators/mapTo.js
function mapTo(value) {
  return map(function() {
    return value;
  });
}

// node_modules/rxjs/dist/esm5/internal/operators/dematerialize.js
function dematerialize() {
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(notification) {
      return observeNotification(notification, subscriber);
    }));
  });
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

// node_modules/rxjs/dist/esm5/internal/operators/materialize.js
function materialize() {
  return operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(Notification.createNext(value));
    }, function() {
      subscriber.next(Notification.createComplete());
      subscriber.complete();
    }, function(err) {
      subscriber.next(Notification.createError(err));
      subscriber.complete();
    }));
  });
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
    const observable3 = subject.asObservable();
    observable3[ButterfloatEvent] = `${this.componentName} ${prop}`;
    this.#subjects.set(observable3, subject);
    target[prop] = observable3;
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
    const observable3 = fromEvent(element, eventName);
    return observable3.subscribe(subject);
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
  return description.childrenBind || Object.keys(description.bind).length > 0 || Object.keys(description.immediateBind).length > 0 || Object.keys(description.events).length > 0;
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
function jsx(element, attributes, ...children) {
  if (typeof element === "string") {
    const { bind: bind2, immediateBind, childrenBind, childrenBindMode, events, ...otherAttributes } = attributes ?? {};
    return {
      type: "element",
      element,
      attributes: otherAttributes,
      bind: bind2 ?? {},
      immediateBind: immediateBind ?? {},
      children,
      childrenBind,
      childrenBindMode,
      events: events ?? {}
    };
  }
  if (typeof element === "function") {
    const { childrenBind, childrenBindMode, ...otherAttributes } = attributes ?? {};
    if (element === Fragment) {
      return {
        type: "fragment",
        attributes: otherAttributes,
        children,
        childrenBind,
        childrenBindMode
      };
    } else if (element === Children) {
      const { context: context2 } = otherAttributes;
      return {
        type: "children",
        context: context2
      };
    }
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
function bindObjectKey(item, key, observable3, error, complete) {
  return observable3.subscribe({
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
function bindObjectChanges(item, observable3, error, complete) {
  return observable3.subscribe({
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
function bufferEntries(observable3, suspense) {
  if (suspense) {
    return combineLatest([suspense, observable3]).pipe(bufferTime(0, animationFrameScheduler), map((states) => states.reduce((acc, [suspend, entry]) => ({
      suspend,
      entries: [...acc.entries, entry]
    }), { suspend: false, entries: [] })), scan((acc, cur) => ({
      changes: acc.suspend && cur.suspend ? Object.assign(acc.changes, Object.fromEntries(cur.entries)) : Object.fromEntries(cur.entries),
      suspend: cur.suspend
    }), { suspend: false, changes: {} }), filter(({ suspend }) => !suspend), map(({ changes }) => changes));
  }
  return observable3.pipe(bufferTime(0, animationFrameScheduler), map((entries) => Object.fromEntries(entries)));
}
function schedulable(key, immediate) {
  return !(immediate || key === "value");
}
function makeEntries(key, observable3) {
  return observable3.pipe(map((value) => [key, value]));
}
function bindElement(element, description, context2, document2 = globalThis.document) {
  const { complete, componentRunner, componentWirer, error, eventBinder, suspense, subscription } = context2;
  const schedulables = [];
  const binds = [
    ...Object.entries(description.bind).map(([key, observable3]) => [key, observable3, false]),
    ...Object.entries(description.immediateBind).map(([key, observable3]) => [key, observable3, true])
  ];
  for (const [key, observable3, immediate] of binds) {
    if (schedulable(key, immediate)) {
      schedulables.push([key, observable3]);
    } else {
      subscription.add(bindObjectKey(element, key, observable3, error, complete));
    }
  }
  if (schedulables.length) {
    const scheduled2 = schedulables.map(([key, observable3]) => makeEntries(key, observable3));
    subscription.add(bindObjectChanges(element, bufferEntries(merge(...scheduled2), suspense), error, complete));
  }
  for (const [key, event] of Object.entries(description.events)) {
    subscription.add(eventBinder.applyEvent(event, element, key));
  }
  if (description.childrenBind) {
    if (description.childrenBindMode === "replace") {
      const placeholder = document2.createComment(`replaceable child component`);
      element.append(placeholder);
      const activeChild = description.childrenBind.pipe(switchMap((child) => componentWirer(child, context2, document2)));
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
      const activeChild = nodeDescription.childrenBind.pipe(switchMap((child) => componentWirer(child, context2, document2)));
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

// node_modules/butterfloat/static-dom.js
function buildElement(description, document2 = globalThis.document) {
  const element = document2.createElement(description.element);
  for (const [key, value] of Object.entries(description.attributes)) {
    ;
    element[key] = value;
  }
  return element;
}
function buildNode(description, container2, elementBinds, nodeBinds, document2 = globalThis.document) {
  switch (description.type) {
    case "element": {
      const element = buildElement(description, document2);
      if (hasAnyBinds(description)) {
        elementBinds.push([element, description]);
      }
      container2.appendChild(element);
      return element;
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
        buildTree(child, container2, elementBinds, nodeBinds, document2);
      }
      if (description.childrenBind && description.childrenBindMode !== "prepend") {
        const fragmentComment = document2.createComment("fragment children binding");
        container2.appendChild(fragmentComment);
        nodeBinds.push([fragmentComment, description]);
      }
      return container2;
  }
}
function buildTree(description, container2 = null, elementBinds = [], nodeBinds = [], document2 = globalThis.document) {
  if (!container2 && description.type === "element") {
    const element = buildElement(description, document2);
    container2 = element;
    if (hasAnyBinds(description)) {
      elementBinds.push([element, description]);
    }
  } else if (!container2) {
    container2 = document2.createDocumentFragment();
    buildNode(description, container2, elementBinds, nodeBinds, document2);
  } else {
    const nextNode = buildNode(description, container2, elementBinds, nodeBinds, document2);
    if (nextNode !== null) {
      container2 = nextNode;
    }
  }
  if (description.type !== "children" && description.type !== "fragment") {
    for (const child of description.children) {
      if (typeof child === "string") {
        container2.appendChild(document2.createTextNode(child));
        continue;
      }
      buildTree(child, container2, elementBinds, nodeBinds, document2);
    }
  }
  return {
    elementBinds,
    nodeBinds,
    container: container2
  };
}

// node_modules/butterfloat/wiring.js
var contextChildrenDescriptions = /* @__PURE__ */ new WeakMap();
function wireInternal(description, subscriber, context2, document2 = globalThis.document) {
  const subscription = new Subscription();
  const error = (error2) => {
    console.error(`Error in component ${description.component.name}`, error2);
  };
  const { events, handler } = makeEventProxy(description.component.name);
  const componentContext = {
    bindEffect(observable3, effect) {
      context2.isStaticComponent = false;
      subscription.add(observable3.pipe(observeOn(animationFrameScheduler)).subscribe({
        next: effect,
        error,
        complete: () => {
          console.debug(`Effect in component ${description.component.name} completed`);
          subscriber.complete();
        }
      }));
    },
    bindImmediateEffect(observable3, effect) {
      context2.isStaticComponent = false;
      subscription.add(observable3.subscribe({
        next: effect,
        error,
        complete: () => {
          console.debug(`Immediate effect in component ${description.component.name} completed`);
          subscriber.complete();
        }
      }));
    },
    events
  };
  contextChildrenDescriptions.set(componentContext, description);
  const tree = description.component(description.properties, componentContext);
  const { elementBinds, nodeBinds, container: container2 } = buildTree(tree, void 0, void 0, void 0, document2);
  context2.isStaticComponent &&= elementBinds.length === 0;
  context2.isStaticTree &&= context2.isStaticComponent;
  subscriber.next(container2);
  const bindContext = {
    ...context2,
    complete: () => {
      console.debug(`Binding in component ${description.component.name} completed`);
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
function wire(component, context2, document2 = globalThis.document) {
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
  if (description.component === Suspense) {
    return wireSuspense(description, context2, document2);
  }
  return new Observable((subscriber) => wireInternal(description, subscriber, context2, document2));
}
function runInternal(container2, component, context2, placeholder, document2 = globalThis.document) {
  const observable3 = isObservable(component) ? component : wire(component, context2 ?? { isStaticComponent: true, isStaticTree: true }, document2);
  let previousNode = null;
  return observable3.subscribe({
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
      if ("type" in component) {
        console.error(`Error in component ${component.component.name}`, error);
      } else {
        console.error(`Error in component ${component.name}`, error);
      }
    },
    complete() {
      if (!context2?.preserveOnComplete && previousNode) {
        container2.removeChild(previousNode);
      }
    }
  });
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
  const main = wire(mainComponent, mainContext, document2);
  if (props.suspenseView) {
    const suspenseView = wire(props.suspenseView, { ...context2 }, document2);
    return combineLatest([props.when, main, suspenseView]).pipe(map(([suspend, main2, suspenseView2]) => suspend ? suspenseView2 : main2), distinctUntilChanged());
  } else {
    return main;
  }
}

// node_modules/butterfloat/runtime.js
function run(container2, component, options, placeholder, document2 = globalThis.document) {
  const { preserveOnComplete } = options ?? {};
  return runInternal(container2, component, { isStaticComponent: true, isStaticTree: true, preserveOnComplete }, placeholder, document2);
}

// node_modules/rxjs-spy/esm/index.js
var noop_ = function noop_2() {
};
var hook_ = noop_;
function detect(id) {
  hook_(id);
}
function hook(hook2) {
  hook_ = hook2 || noop_;
}
var defaultLogger = console;
function toLogger(partialLogger) {
  if (partialLogger.error && partialLogger.group && partialLogger.groupCollapsed && partialLogger.groupEnd && partialLogger.warn) {
    return partialLogger;
  }
  var spaces = 2;
  var indent = 0;
  return {
    error: function error(message) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      call.apply(void 0, ["error", message].concat(args));
    },
    group: function group(title) {
      call("log", title);
      indent += spaces;
    },
    groupCollapsed: function groupCollapsed(title) {
      call("log", title);
      indent += spaces;
    },
    groupEnd: function groupEnd() {
      indent = Math.max(0, indent - spaces);
    },
    log: function log(message) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }
      call.apply(void 0, ["log", message].concat(args));
    },
    warn: function warn(message) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      call.apply(void 0, ["warn", message].concat(args));
    }
  };
  function call(method, message) {
    var _ref;
    var padding = " ".repeat(indent);
    if (message) {
      message = padding + message;
    } else {
      message = padding;
    }
    for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      args[_key4 - 2] = arguments[_key4];
    }
    (_ref = partialLogger[method] || partialLogger.log).call.apply(_ref, [partialLogger, message].concat(args));
  }
}
var idSymbol = Symbol("id");
var lastId = 0;
function identify(instance) {
  var id = instance[idSymbol] = instance[idSymbol] || (++lastId).toString();
  return id;
}
function isSubscriptionRef(subscriberRef) {
  return subscriberRef && subscriberRef["subscription"];
}
function inferPath(observable3) {
  var _ref = observable3, source = _ref.source;
  if (source) {
    return "".concat(inferPath(source), "/").concat(inferType(observable3));
  }
  return "/".concat(inferType(observable3));
}
function inferType(observable3) {
  var _ref2 = observable3, operator = _ref2.operator;
  var prototype = Object.getPrototypeOf(operator ? operator : observable3);
  if (prototype.constructor && prototype.constructor.name) {
    var name = prototype.constructor.name;
    name = "".concat(name.charAt(0).toLowerCase()).concat(name.substring(1));
    return name.replace(/^(\w+)(Observable|Operator)$/, function(match, p) {
      return p;
    });
  }
  return "unknown";
}
function isObservable2(arg) {
  return arg && arg.subscribe;
}
var SafeSubscriberCtor;
var observable2 = new Observable(function(subscriber) {
  SafeSubscriberCtor = Object.getPrototypeOf(subscriber).constructor;
});
observable2.subscribe(function() {
}).unsubscribe();
function toSubscriber(observerOrNext, error, complete) {
  if (observerOrNext instanceof Subscriber) {
    return observerOrNext;
  }
  var next;
  if (typeof observerOrNext === "function") {
    next = observerOrNext;
  } else if (observerOrNext) {
    complete = observerOrNext.complete;
    error = observerOrNext.error;
    next = observerOrNext.next;
    next = next ? function(value) {
      return observerOrNext.next(value);
    } : void 0;
    error = error ? function(error2) {
      return observerOrNext.error(error2);
    } : void 0;
    complete = complete ? function() {
      return observerOrNext.complete();
    } : void 0;
  }
  return new SafeSubscriberCtor({
    complete,
    error,
    next
  });
}
function matches(arg, match, value) {
  var observable3;
  var subscriber = void 0;
  var subscription = void 0;
  if (isObservable2(arg)) {
    observable3 = arg;
  } else {
    observable3 = arg.observable;
    subscriber = arg.subscriber;
    subscription = isSubscriptionRef(arg) ? arg.subscription : void 0;
  }
  if (isObservable2(match)) {
    return observable3 === match;
  }
  var observableId = identify(observable3);
  var subscriberId = subscriber ? identify(subscriber) : void 0;
  var subscriptionId = subscription ? identify(subscription) : void 0;
  var tag2 = value || read(observable3);
  if (typeof match === "function") {
    return match(tag2, observable3);
  }
  if (typeof match === "string") {
    return match === observableId || match === subscriberId || match === subscriptionId || match === tag2;
  }
  if (tag2 === void 0) {
    return false;
  }
  return match.test(tag2);
}
function read(observable3) {
  var operator = observable3["operator"];
  if (!operator) {
    return void 0;
  }
  var tag2 = operator["tag"];
  if (!tag2) {
    return void 0;
  }
  return tag2;
}
function toString(match) {
  if (isObservable2(match)) {
    return "[Observable]";
  } else if (typeof match === "function") {
    return "[Function]";
  }
  return match.toString();
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
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
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var BasePlugin = /* @__PURE__ */ function() {
  function BasePlugin2(name) {
    _classCallCheck(this, BasePlugin2);
    this.name = name;
  }
  _createClass(BasePlugin2, [{
    key: "afterComplete",
    value: function afterComplete(ref) {
    }
  }, {
    key: "afterError",
    value: function afterError(ref, error) {
    }
  }, {
    key: "afterNext",
    value: function afterNext(ref, value) {
    }
  }, {
    key: "afterSubscribe",
    value: function afterSubscribe(ref) {
    }
  }, {
    key: "afterUnsubscribe",
    value: function afterUnsubscribe(ref) {
    }
  }, {
    key: "beforeComplete",
    value: function beforeComplete(ref) {
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
    }
  }, {
    key: "flush",
    value: function flush() {
    }
  }, {
    key: "select",
    value: function select(ref) {
      return void 0;
    }
  }, {
    key: "teardown",
    value: function teardown() {
    }
  }]);
  return BasePlugin2;
}();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var stackframe = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    function _isNumber(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function _capitalize(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    }
    function _getter(p) {
      return function() {
        return this[p];
      };
    }
    var booleanProps = ["isConstructor", "isEval", "isNative", "isToplevel"];
    var numericProps = ["columnNumber", "lineNumber"];
    var stringProps = ["fileName", "functionName", "source"];
    var arrayProps = ["args"];
    var objectProps = ["evalOrigin"];
    var props = booleanProps.concat(numericProps, stringProps, arrayProps, objectProps);
    function StackFrame(obj) {
      if (!obj)
        return;
      for (var i2 = 0; i2 < props.length; i2++) {
        if (obj[props[i2]] !== void 0) {
          this["set" + _capitalize(props[i2])](obj[props[i2]]);
        }
      }
    }
    StackFrame.prototype = {
      getArgs: function getArgs() {
        return this.args;
      },
      setArgs: function setArgs(v) {
        if (Object.prototype.toString.call(v) !== "[object Array]") {
          throw new TypeError("Args must be an Array");
        }
        this.args = v;
      },
      getEvalOrigin: function getEvalOrigin() {
        return this.evalOrigin;
      },
      setEvalOrigin: function setEvalOrigin(v) {
        if (v instanceof StackFrame) {
          this.evalOrigin = v;
        } else if (v instanceof Object) {
          this.evalOrigin = new StackFrame(v);
        } else {
          throw new TypeError("Eval Origin must be an Object or StackFrame");
        }
      },
      toString: function toString2() {
        var fileName = this.getFileName() || "";
        var lineNumber = this.getLineNumber() || "";
        var columnNumber = this.getColumnNumber() || "";
        var functionName = this.getFunctionName() || "";
        if (this.getIsEval()) {
          if (fileName) {
            return "[eval] (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
          }
          return "[eval]:" + lineNumber + ":" + columnNumber;
        }
        if (functionName) {
          return functionName + " (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
        }
        return fileName + ":" + lineNumber + ":" + columnNumber;
      }
    };
    StackFrame.fromString = function StackFrame$$fromString(str) {
      var argsStartIndex = str.indexOf("(");
      var argsEndIndex = str.lastIndexOf(")");
      var functionName = str.substring(0, argsStartIndex);
      var args = str.substring(argsStartIndex + 1, argsEndIndex).split(",");
      var locationString = str.substring(argsEndIndex + 1);
      if (locationString.indexOf("@") === 0) {
        var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, "");
        var fileName = parts[1];
        var lineNumber = parts[2];
        var columnNumber = parts[3];
      }
      return new StackFrame({
        functionName,
        args: args || void 0,
        fileName,
        lineNumber: lineNumber || void 0,
        columnNumber: columnNumber || void 0
      });
    };
    for (var i = 0; i < booleanProps.length; i++) {
      StackFrame.prototype["get" + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
      StackFrame.prototype["set" + _capitalize(booleanProps[i])] = /* @__PURE__ */ function(p) {
        return function(v) {
          this[p] = Boolean(v);
        };
      }(booleanProps[i]);
    }
    for (var j = 0; j < numericProps.length; j++) {
      StackFrame.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]);
      StackFrame.prototype["set" + _capitalize(numericProps[j])] = /* @__PURE__ */ function(p) {
        return function(v) {
          if (!_isNumber(v)) {
            throw new TypeError(p + " must be a Number");
          }
          this[p] = Number(v);
        };
      }(numericProps[j]);
    }
    for (var k = 0; k < stringProps.length; k++) {
      StackFrame.prototype["get" + _capitalize(stringProps[k])] = _getter(stringProps[k]);
      StackFrame.prototype["set" + _capitalize(stringProps[k])] = /* @__PURE__ */ function(p) {
        return function(v) {
          this[p] = String(v);
        };
      }(stringProps[k]);
    }
    return StackFrame;
  });
});
var errorStackParser = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(stackframe);
    }
  })(commonjsGlobal, function ErrorStackParser(StackFrame) {
    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
    return {
      /**
       * Given an Error object, extract the most information from it.
       *
       * @param {Error} error object
       * @return {Array} of StackFrames
       */
      parse: function ErrorStackParser$$parse(error) {
        if (typeof error.stacktrace !== "undefined" || typeof error["opera#sourceloc"] !== "undefined") {
          return this.parseOpera(error);
        } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
          return this.parseV8OrIE(error);
        } else if (error.stack) {
          return this.parseFFOrSafari(error);
        } else {
          throw new Error("Cannot parse given Error object");
        }
      },
      // Separate line and column numbers from a string of the form: (URI:Line:Column)
      extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
        if (urlLike.indexOf(":") === -1) {
          return [urlLike];
        }
        var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
        var parts = regExp.exec(urlLike.replace(/[()]/g, ""));
        return [parts[1], parts[2] || void 0, parts[3] || void 0];
      },
      parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
        var filtered = error.stack.split("\n").filter(function(line) {
          return !!line.match(CHROME_IE_STACK_REGEXP);
        }, this);
        return filtered.map(function(line) {
          if (line.indexOf("(eval ") > -1) {
            line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, "");
          }
          var sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(");
          var location2 = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);
          sanitizedLine = location2 ? sanitizedLine.replace(location2[0], "") : sanitizedLine;
          var tokens = sanitizedLine.split(/\s+/).slice(1);
          var locationParts = this.extractLocation(location2 ? location2[1] : tokens.pop());
          var functionName = tokens.join(" ") || void 0;
          var fileName = ["eval", "<anonymous>"].indexOf(locationParts[0]) > -1 ? void 0 : locationParts[0];
          return new StackFrame({
            functionName,
            fileName,
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }, this);
      },
      parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
        var filtered = error.stack.split("\n").filter(function(line) {
          return !line.match(SAFARI_NATIVE_CODE_REGEXP);
        }, this);
        return filtered.map(function(line) {
          if (line.indexOf(" > eval") > -1) {
            line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
          }
          if (line.indexOf("@") === -1 && line.indexOf(":") === -1) {
            return new StackFrame({
              functionName: line
            });
          } else {
            var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
            var matches2 = line.match(functionNameRegex);
            var functionName = matches2 && matches2[1] ? matches2[1] : void 0;
            var locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
            return new StackFrame({
              functionName,
              fileName: locationParts[0],
              lineNumber: locationParts[1],
              columnNumber: locationParts[2],
              source: line
            });
          }
        }, this);
      },
      parseOpera: function ErrorStackParser$$parseOpera(e) {
        if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
          return this.parseOpera9(e);
        } else if (!e.stack) {
          return this.parseOpera10(e);
        } else {
          return this.parseOpera11(e);
        }
      },
      parseOpera9: function ErrorStackParser$$parseOpera9(e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
        var lines = e.message.split("\n");
        var result = [];
        for (var i = 2, len = lines.length; i < len; i += 2) {
          var match = lineRE.exec(lines[i]);
          if (match) {
            result.push(new StackFrame({
              fileName: match[2],
              lineNumber: match[1],
              source: lines[i]
            }));
          }
        }
        return result;
      },
      parseOpera10: function ErrorStackParser$$parseOpera10(e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
        var lines = e.stacktrace.split("\n");
        var result = [];
        for (var i = 0, len = lines.length; i < len; i += 2) {
          var match = lineRE.exec(lines[i]);
          if (match) {
            result.push(new StackFrame({
              functionName: match[3] || void 0,
              fileName: match[2],
              lineNumber: match[1],
              source: lines[i]
            }));
          }
        }
        return result;
      },
      // Opera 10.65+ Error.stack very similar to FF/Safari
      parseOpera11: function ErrorStackParser$$parseOpera11(error) {
        var filtered = error.stack.split("\n").filter(function(line) {
          return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
        }, this);
        return filtered.map(function(line) {
          var tokens = line.split("@");
          var locationParts = this.extractLocation(tokens.pop());
          var functionCall = tokens.shift() || "";
          var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
          var argsRaw;
          if (functionCall.match(/\(([^)]*)\)/)) {
            argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, "$1");
          }
          var args = argsRaw === void 0 || argsRaw === "[arguments not available]" ? void 0 : argsRaw.split(",");
          return new StackFrame({
            functionName,
            args,
            fileName: locationParts[0],
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }, this);
      }
    };
  });
});
var util = createCommonjsModule(function(module, exports) {
  function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
      return aArgs[aName];
    } else if (arguments.length === 3) {
      return aDefaultValue;
    } else {
      throw new Error('"' + aName + '" is a required argument.');
    }
  }
  exports.getArg = getArg;
  var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
  var dataUrlRegexp = /^data:.+\,.+$/;
  function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) {
      return null;
    }
    return {
      scheme: match[1],
      auth: match[2],
      host: match[3],
      port: match[4],
      path: match[5]
    };
  }
  exports.urlParse = urlParse;
  function urlGenerate(aParsedUrl) {
    var url = "";
    if (aParsedUrl.scheme) {
      url += aParsedUrl.scheme + ":";
    }
    url += "//";
    if (aParsedUrl.auth) {
      url += aParsedUrl.auth + "@";
    }
    if (aParsedUrl.host) {
      url += aParsedUrl.host;
    }
    if (aParsedUrl.port) {
      url += ":" + aParsedUrl.port;
    }
    if (aParsedUrl.path) {
      url += aParsedUrl.path;
    }
    return url;
  }
  exports.urlGenerate = urlGenerate;
  function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
      if (!url.path) {
        return aPath;
      }
      path = url.path;
    }
    var isAbsolute = exports.isAbsolute(path);
    var parts = path.split(/\/+/);
    for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
      part = parts[i];
      if (part === ".") {
        parts.splice(i, 1);
      } else if (part === "..") {
        up++;
      } else if (up > 0) {
        if (part === "") {
          parts.splice(i + 1, up);
          up = 0;
        } else {
          parts.splice(i, 2);
          up--;
        }
      }
    }
    path = parts.join("/");
    if (path === "") {
      path = isAbsolute ? "/" : ".";
    }
    if (url) {
      url.path = path;
      return urlGenerate(url);
    }
    return path;
  }
  exports.normalize = normalize;
  function join(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    if (aPath === "") {
      aPath = ".";
    }
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) {
      aRoot = aRootUrl.path || "/";
    }
    if (aPathUrl && !aPathUrl.scheme) {
      if (aRootUrl) {
        aPathUrl.scheme = aRootUrl.scheme;
      }
      return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) {
      return aPath;
    }
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
      aRootUrl.host = aPath;
      return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
    if (aRootUrl) {
      aRootUrl.path = joined;
      return urlGenerate(aRootUrl);
    }
    return joined;
  }
  exports.join = join;
  exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === "/" || !!aPath.match(urlRegexp);
  };
  function relative(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    aRoot = aRoot.replace(/\/$/, "");
    var level = 0;
    while (aPath.indexOf(aRoot + "/") !== 0) {
      var index = aRoot.lastIndexOf("/");
      if (index < 0) {
        return aPath;
      }
      aRoot = aRoot.slice(0, index);
      if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
        return aPath;
      }
      ++level;
    }
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
  }
  exports.relative = relative;
  var supportsNullProto = function() {
    var obj = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in obj);
  }();
  function identity2(s) {
    return s;
  }
  function toSetString(aStr) {
    if (isProtoString(aStr)) {
      return "$" + aStr;
    }
    return aStr;
  }
  exports.toSetString = supportsNullProto ? identity2 : toSetString;
  function fromSetString(aStr) {
    if (isProtoString(aStr)) {
      return aStr.slice(1);
    }
    return aStr;
  }
  exports.fromSetString = supportsNullProto ? identity2 : fromSetString;
  function isProtoString(s) {
    if (!s) {
      return false;
    }
    var length = s.length;
    if (length < 9) {
      return false;
    }
    if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
      return false;
    }
    for (var i = length - 10; i >= 0; i--) {
      if (s.charCodeAt(i) !== 36) {
        return false;
      }
    }
    return true;
  }
  function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = mappingA.source - mappingB.source;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    return mappingA.name - mappingB.name;
  }
  exports.compareByOriginalPositions = compareByOriginalPositions;
  function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
      return cmp;
    }
    cmp = mappingA.source - mappingB.source;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return mappingA.name - mappingB.name;
  }
  exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
  function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) {
      return 0;
    }
    if (aStr1 > aStr2) {
      return 1;
    }
    return -1;
  }
  function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
});
var binarySearch = createCommonjsModule(function(module, exports) {
  exports.GREATEST_LOWER_BOUND = 1;
  exports.LEAST_UPPER_BOUND = 2;
  function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) {
      return mid;
    } else if (cmp > 0) {
      if (aHigh - mid > 1) {
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return aHigh < aHaystack.length ? aHigh : -1;
      } else {
        return mid;
      }
    } else {
      if (mid - aLow > 1) {
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return mid;
      } else {
        return aLow < 0 ? -1 : aLow;
      }
    }
  }
  exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) {
      return -1;
    }
    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);
    if (index < 0) {
      return -1;
    }
    while (index - 1 >= 0) {
      if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
        break;
      }
      --index;
    }
    return index;
  };
});
var has = Object.prototype.hasOwnProperty;
function ArraySet$1() {
  this._array = [];
  this._set = /* @__PURE__ */ Object.create(null);
}
ArraySet$1.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet$1();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};
ArraySet$1.prototype.size = function ArraySet_size() {
  return Object.getOwnPropertyNames(this._set).length;
};
ArraySet$1.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = util.toSetString(aStr);
  var isDuplicate = has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    this._set[sStr] = idx;
  }
};
ArraySet$1.prototype.has = function ArraySet_has(aStr) {
  var sStr = util.toSetString(aStr);
  return has.call(this._set, sStr);
};
ArraySet$1.prototype.indexOf = function ArraySet_indexOf(aStr) {
  var sStr = util.toSetString(aStr);
  if (has.call(this._set, sStr)) {
    return this._set[sStr];
  }
  throw new Error('"' + aStr + '" is not in the set.');
};
ArraySet$1.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error("No element indexed by " + aIdx);
};
ArraySet$1.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};
var ArraySet_1 = ArraySet$1;
var arraySet = {
  ArraySet: ArraySet_1
};
var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
var encode$1 = function encode(number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};
var decode$1 = function decode(charCode) {
  var bigA = 65;
  var bigZ = 90;
  var littleA = 97;
  var littleZ = 122;
  var zero = 48;
  var nine = 57;
  var plus = 43;
  var slash = 47;
  var littleOffset = 26;
  var numberOffset = 52;
  if (bigA <= charCode && charCode <= bigZ) {
    return charCode - bigA;
  }
  if (littleA <= charCode && charCode <= littleZ) {
    return charCode - littleA + littleOffset;
  }
  if (zero <= charCode && charCode <= nine) {
    return charCode - zero + numberOffset;
  }
  if (charCode == plus) {
    return 62;
  }
  if (charCode == slash) {
    return 63;
  }
  return -1;
};
var base64 = {
  encode: encode$1,
  decode: decode$1
};
var VLQ_BASE_SHIFT = 5;
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
var VLQ_BASE_MASK = VLQ_BASE - 1;
var VLQ_CONTINUATION_BIT = VLQ_BASE;
function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
var encode2 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);
  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);
  return encoded;
};
var decode2 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;
  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }
    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }
    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);
  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};
var base64Vlq = {
  encode: encode2,
  decode: decode2
};
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}
function randomIntInRange(low, high) {
  return Math.round(low + Math.random() * (high - low));
}
function doQuickSort(ary, comparator, p, r) {
  if (p < r) {
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;
    swap(ary, pivotIndex, r);
    var pivot = ary[r];
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }
    swap(ary, i + 1, j);
    var q = i + 1;
    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}
var quickSort_1 = function quickSort_12(ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};
var quickSort$1 = {
  quickSort: quickSort_1
};
var ArraySet = arraySet.ArraySet;
var quickSort = quickSort$1.quickSort;
function SourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ""));
  }
  return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap) : new BasicSourceMapConsumer(sourceMap);
}
SourceMapConsumer.fromSourceMap = function(aSourceMap) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
};
SourceMapConsumer.prototype._version = 3;
SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
  get: function get() {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__generatedMappings;
  }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
  get: function get2() {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__originalMappings;
  }
});
SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
  var c = aStr.charAt(index);
  return c === ";" || c === ",";
};
SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
  var context2 = aContext || null;
  var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
  var mappings;
  switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
  }
  var sourceRoot = this.sourceRoot;
  mappings.map(function(mapping) {
    var source = mapping.source === null ? null : this._sources.at(mapping.source);
    if (source != null && sourceRoot != null) {
      source = util.join(sourceRoot, source);
    }
    return {
      source,
      generatedLine: mapping.generatedLine,
      generatedColumn: mapping.generatedColumn,
      originalLine: mapping.originalLine,
      originalColumn: mapping.originalColumn,
      name: mapping.name === null ? null : this._names.at(mapping.name)
    };
  }, this).forEach(aCallback, context2);
};
SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
  var line = util.getArg(aArgs, "line");
  var needle = {
    source: util.getArg(aArgs, "source"),
    originalLine: line,
    originalColumn: util.getArg(aArgs, "column", 0)
  };
  if (this.sourceRoot != null) {
    needle.source = util.relative(this.sourceRoot, needle.source);
  }
  if (!this._sources.has(needle.source)) {
    return [];
  }
  needle.source = this._sources.indexOf(needle.source);
  var mappings = [];
  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
  if (index >= 0) {
    var mapping = this._originalMappings[index];
    if (aArgs.column === void 0) {
      var originalLine = mapping.originalLine;
      while (mapping && mapping.originalLine === originalLine) {
        mappings.push({
          line: util.getArg(mapping, "generatedLine", null),
          column: util.getArg(mapping, "generatedColumn", null),
          lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
        });
        mapping = this._originalMappings[++index];
      }
    } else {
      var originalColumn = mapping.originalColumn;
      while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
        mappings.push({
          line: util.getArg(mapping, "generatedLine", null),
          column: util.getArg(mapping, "generatedColumn", null),
          lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
        });
        mapping = this._originalMappings[++index];
      }
    }
  }
  return mappings;
};
var SourceMapConsumer_1 = SourceMapConsumer;
function BasicSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ""));
  }
  var version = util.getArg(sourceMap, "version");
  var sources = util.getArg(sourceMap, "sources");
  var names = util.getArg(sourceMap, "names", []);
  var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
  var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
  var mappings = util.getArg(sourceMap, "mappings");
  var file = util.getArg(sourceMap, "file", null);
  if (version != this._version) {
    throw new Error("Unsupported version: " + version);
  }
  sources = sources.map(String).map(util.normalize).map(function(source) {
    return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
  });
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);
  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap) {
  var smc = Object.create(BasicSourceMapConsumer.prototype);
  var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
  var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
  smc.sourceRoot = aSourceMap._sourceRoot;
  smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
  smc.file = aSourceMap._file;
  var generatedMappings = aSourceMap._mappings.toArray().slice();
  var destGeneratedMappings = smc.__generatedMappings = [];
  var destOriginalMappings = smc.__originalMappings = [];
  for (var i = 0, length = generatedMappings.length; i < length; i++) {
    var srcMapping = generatedMappings[i];
    var destMapping = new Mapping();
    destMapping.generatedLine = srcMapping.generatedLine;
    destMapping.generatedColumn = srcMapping.generatedColumn;
    if (srcMapping.source) {
      destMapping.source = sources.indexOf(srcMapping.source);
      destMapping.originalLine = srcMapping.originalLine;
      destMapping.originalColumn = srcMapping.originalColumn;
      if (srcMapping.name) {
        destMapping.name = names.indexOf(srcMapping.name);
      }
      destOriginalMappings.push(destMapping);
    }
    destGeneratedMappings.push(destMapping);
  }
  quickSort(smc.__originalMappings, util.compareByOriginalPositions);
  return smc;
};
BasicSourceMapConsumer.prototype._version = 3;
Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
  get: function get3() {
    return this._sources.toArray().map(function(s) {
      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
    }, this);
  }
});
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings2(aStr, aSourceRoot) {
  var generatedLine = 1;
  var previousGeneratedColumn = 0;
  var previousOriginalLine = 0;
  var previousOriginalColumn = 0;
  var previousSource = 0;
  var previousName = 0;
  var length = aStr.length;
  var index = 0;
  var cachedSegments = {};
  var temp = {};
  var originalMappings = [];
  var generatedMappings = [];
  var mapping, str, segment, end, value;
  while (index < length) {
    if (aStr.charAt(index) === ";") {
      generatedLine++;
      index++;
      previousGeneratedColumn = 0;
    } else if (aStr.charAt(index) === ",") {
      index++;
    } else {
      mapping = new Mapping();
      mapping.generatedLine = generatedLine;
      for (end = index; end < length; end++) {
        if (this._charIsMappingSeparator(aStr, end)) {
          break;
        }
      }
      str = aStr.slice(index, end);
      segment = cachedSegments[str];
      if (segment) {
        index += str.length;
      } else {
        segment = [];
        while (index < end) {
          base64Vlq.decode(aStr, index, temp);
          value = temp.value;
          index = temp.rest;
          segment.push(value);
        }
        if (segment.length === 2) {
          throw new Error("Found a source, but no line and column");
        }
        if (segment.length === 3) {
          throw new Error("Found a source and line, but no column");
        }
        cachedSegments[str] = segment;
      }
      mapping.generatedColumn = previousGeneratedColumn + segment[0];
      previousGeneratedColumn = mapping.generatedColumn;
      if (segment.length > 1) {
        mapping.source = previousSource + segment[1];
        previousSource += segment[1];
        mapping.originalLine = previousOriginalLine + segment[2];
        previousOriginalLine = mapping.originalLine;
        mapping.originalLine += 1;
        mapping.originalColumn = previousOriginalColumn + segment[3];
        previousOriginalColumn = mapping.originalColumn;
        if (segment.length > 4) {
          mapping.name = previousName + segment[4];
          previousName += segment[4];
        }
      }
      generatedMappings.push(mapping);
      if (typeof mapping.originalLine === "number") {
        originalMappings.push(mapping);
      }
    }
  }
  quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
  this.__generatedMappings = generatedMappings;
  quickSort(originalMappings, util.compareByOriginalPositions);
  this.__originalMappings = originalMappings;
};
BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
  if (aNeedle[aLineName] <= 0) {
    throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
  }
  if (aNeedle[aColumnName] < 0) {
    throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
  }
  return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
  for (var index = 0; index < this._generatedMappings.length; ++index) {
    var mapping = this._generatedMappings[index];
    if (index + 1 < this._generatedMappings.length) {
      var nextMapping = this._generatedMappings[index + 1];
      if (mapping.generatedLine === nextMapping.generatedLine) {
        mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
        continue;
      }
    }
    mapping.lastGeneratedColumn = Infinity;
  }
};
BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, "line"),
    generatedColumn: util.getArg(aArgs, "column")
  };
  var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
  if (index >= 0) {
    var mapping = this._generatedMappings[index];
    if (mapping.generatedLine === needle.generatedLine) {
      var source = util.getArg(mapping, "source", null);
      if (source !== null) {
        source = this._sources.at(source);
        if (this.sourceRoot != null) {
          source = util.join(this.sourceRoot, source);
        }
      }
      var name = util.getArg(mapping, "name", null);
      if (name !== null) {
        name = this._names.at(name);
      }
      return {
        source,
        line: util.getArg(mapping, "originalLine", null),
        column: util.getArg(mapping, "originalColumn", null),
        name
      };
    }
  }
  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
  if (!this.sourcesContent) {
    return false;
  }
  return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
    return sc == null;
  });
};
BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  if (!this.sourcesContent) {
    return null;
  }
  if (this.sourceRoot != null) {
    aSource = util.relative(this.sourceRoot, aSource);
  }
  if (this._sources.has(aSource)) {
    return this.sourcesContent[this._sources.indexOf(aSource)];
  }
  var url;
  if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
    var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
    if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
      return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
    }
    if ((!url.path || url.path == "/") && this._sources.has("/" + aSource)) {
      return this.sourcesContent[this._sources.indexOf("/" + aSource)];
    }
  }
  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
  var source = util.getArg(aArgs, "source");
  if (this.sourceRoot != null) {
    source = util.relative(this.sourceRoot, source);
  }
  if (!this._sources.has(source)) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }
  source = this._sources.indexOf(source);
  var needle = {
    source,
    originalLine: util.getArg(aArgs, "line"),
    originalColumn: util.getArg(aArgs, "column")
  };
  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
  if (index >= 0) {
    var mapping = this._originalMappings[index];
    if (mapping.source === needle.source) {
      return {
        line: util.getArg(mapping, "generatedLine", null),
        column: util.getArg(mapping, "generatedColumn", null),
        lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
      };
    }
  }
  return {
    line: null,
    column: null,
    lastColumn: null
  };
};
var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;
function IndexedSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ""));
  }
  var version = util.getArg(sourceMap, "version");
  var sections = util.getArg(sourceMap, "sections");
  if (version != this._version) {
    throw new Error("Unsupported version: " + version);
  }
  this._sources = new ArraySet();
  this._names = new ArraySet();
  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function(s) {
    if (s.url) {
      throw new Error("Support for url field in sections not implemented.");
    }
    var offset = util.getArg(s, "offset");
    var offsetLine = util.getArg(offset, "line");
    var offsetColumn = util.getArg(offset, "column");
    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
      throw new Error("Section offsets must be ordered and non-overlapping.");
    }
    lastOffset = offset;
    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, "map"))
    };
  });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
IndexedSourceMapConsumer.prototype._version = 3;
Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
  get: function get4() {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});
IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, "line"),
    generatedColumn: util.getArg(aArgs, "column")
  };
  var sectionIndex = binarySearch.search(needle, this._sections, function(needle2, section2) {
    var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
    if (cmp) {
      return cmp;
    }
    return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
  });
  var section = this._sections[sectionIndex];
  if (!section) {
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }
  return section.consumer.originalPositionFor({
    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
    bias: aArgs.bias
  });
};
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
  return this._sections.every(function(s) {
    return s.consumer.hasContentsOfAllSources();
  });
};
IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var content = section.consumer.sourceContentFor(aSource, true);
    if (content) {
      return content;
    }
  }
  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    if (section.consumer.sources.indexOf(util.getArg(aArgs, "source")) === -1) {
      continue;
    }
    var generatedPosition = section.consumer.generatedPositionFor(aArgs);
    if (generatedPosition) {
      var ret = {
        line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
        column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
      };
      return ret;
    }
  }
  return {
    line: null,
    column: null
  };
};
IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  this.__generatedMappings = [];
  this.__originalMappings = [];
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var sectionMappings = section.consumer._generatedMappings;
    for (var j = 0; j < sectionMappings.length; j++) {
      var mapping = sectionMappings[j];
      var source = section.consumer._sources.at(mapping.source);
      if (section.consumer.sourceRoot !== null) {
        source = util.join(section.consumer.sourceRoot, source);
      }
      this._sources.add(source);
      source = this._sources.indexOf(source);
      var name = section.consumer._names.at(mapping.name);
      this._names.add(name);
      name = this._names.indexOf(name);
      var adjustedMapping = {
        source,
        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
        generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name
      };
      this.__generatedMappings.push(adjustedMapping);
      if (typeof adjustedMapping.originalLine === "number") {
        this.__originalMappings.push(adjustedMapping);
      }
    }
  }
  quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
  quickSort(this.__originalMappings, util.compareByOriginalPositions);
};
var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;
var sourceMapConsumer = {
  SourceMapConsumer: SourceMapConsumer_1,
  BasicSourceMapConsumer: BasicSourceMapConsumer_1,
  IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};
var stacktraceGps = createCommonjsModule(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(sourceMapConsumer, stackframe);
    }
  })(commonjsGlobal, function(SourceMap, StackFrame) {
    function _xdr(url) {
      return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open("get", url);
        req.onerror = reject;
        req.onreadystatechange = function onreadystatechange() {
          if (req.readyState === 4) {
            if (req.status >= 200 && req.status < 300 || url.substr(0, 7) === "file://" && req.responseText) {
              resolve(req.responseText);
            } else {
              reject(new Error("HTTP status: " + req.status + " retrieving " + url));
            }
          }
        };
        req.send();
      });
    }
    function _atob(b64str) {
      if (typeof window !== "undefined" && window.atob) {
        return window.atob(b64str);
      } else {
        throw new Error("You must supply a polyfill for window.atob in this environment");
      }
    }
    function _parseJson(string) {
      if (typeof JSON !== "undefined" && JSON.parse) {
        return JSON.parse(string);
      } else {
        throw new Error("You must supply a polyfill for JSON.parse in this environment");
      }
    }
    function _findFunctionName(source, lineNumber) {
      var syntaxes = [
        // {name} = function ({args}) TODO args capture
        /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/,
        // function {name}({args}) m[1]=name m[2]=args
        /function\s+([^('"`]*?)\s*\(([^)]*)\)/,
        // {name} = eval()
        /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/,
        // fn_name() {
        /\b(?!(?:if|for|switch|while|with|catch)\b)(?:(?:static)\s+)?(\S+)\s*\(.*?\)\s*\{/,
        // {name} = () => {
        /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*\(.*?\)\s*=>/
      ];
      var lines = source.split("\n");
      var code = "";
      var maxLines = Math.min(lineNumber, 20);
      for (var i = 0; i < maxLines; ++i) {
        var line = lines[lineNumber - i - 1];
        var commentPos = line.indexOf("//");
        if (commentPos >= 0) {
          line = line.substr(0, commentPos);
        }
        if (line) {
          code = line + code;
          var len = syntaxes.length;
          for (var index = 0; index < len; index++) {
            var m = syntaxes[index].exec(code);
            if (m && m[1]) {
              return m[1];
            }
          }
        }
      }
      return void 0;
    }
    function _ensureSupportedEnvironment() {
      if (typeof Object.defineProperty !== "function" || typeof Object.create !== "function") {
        throw new Error("Unable to consume source maps in older browsers");
      }
    }
    function _ensureStackFrameIsLegit(stackframe2) {
      if (_typeof(stackframe2) !== "object") {
        throw new TypeError("Given StackFrame is not an object");
      } else if (typeof stackframe2.fileName !== "string") {
        throw new TypeError("Given file name is not a String");
      } else if (typeof stackframe2.lineNumber !== "number" || stackframe2.lineNumber % 1 !== 0 || stackframe2.lineNumber < 1) {
        throw new TypeError("Given line number must be a positive integer");
      } else if (typeof stackframe2.columnNumber !== "number" || stackframe2.columnNumber % 1 !== 0 || stackframe2.columnNumber < 0) {
        throw new TypeError("Given column number must be a non-negative integer");
      }
      return true;
    }
    function _findSourceMappingURL(source) {
      var sourceMappingUrlRegExp = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/mg;
      var lastSourceMappingUrl;
      var matchSourceMappingUrl;
      while (matchSourceMappingUrl = sourceMappingUrlRegExp.exec(source)) {
        lastSourceMappingUrl = matchSourceMappingUrl[1];
      }
      if (lastSourceMappingUrl) {
        return lastSourceMappingUrl;
      } else {
        throw new Error("sourceMappingURL not found");
      }
    }
    function _extractLocationInfoFromSourceMapSource(stackframe2, sourceMapConsumer2, sourceCache) {
      return new Promise(function(resolve, reject) {
        var loc = sourceMapConsumer2.originalPositionFor({
          line: stackframe2.lineNumber,
          column: stackframe2.columnNumber
        });
        if (loc.source) {
          var mappedSource = sourceMapConsumer2.sourceContentFor(loc.source);
          if (mappedSource) {
            sourceCache[loc.source] = mappedSource;
          }
          resolve(
            // given stackframe and source location, update stackframe
            new StackFrame({
              functionName: loc.name || stackframe2.functionName,
              args: stackframe2.args,
              fileName: loc.source,
              lineNumber: loc.line,
              columnNumber: loc.column
            })
          );
        } else {
          reject(new Error("Could not get original source for given stackframe and source map"));
        }
      });
    }
    return function StackTraceGPS(opts) {
      if (!(this instanceof StackTraceGPS)) {
        return new StackTraceGPS(opts);
      }
      opts = opts || {};
      this.sourceCache = opts.sourceCache || {};
      this.sourceMapConsumerCache = opts.sourceMapConsumerCache || {};
      this.ajax = opts.ajax || _xdr;
      this._atob = opts.atob || _atob;
      this._get = function _get(location2) {
        return new Promise(function(resolve, reject) {
          var isDataUrl = location2.substr(0, 5) === "data:";
          if (this.sourceCache[location2]) {
            resolve(this.sourceCache[location2]);
          } else if (opts.offline && !isDataUrl) {
            reject(new Error("Cannot make network requests in offline mode"));
          } else {
            if (isDataUrl) {
              var supportedEncodingRegexp = /^data:application\/json;([\w=:"-]+;)*base64,/;
              var match = location2.match(supportedEncodingRegexp);
              if (match) {
                var sourceMapStart = match[0].length;
                var encodedSource = location2.substr(sourceMapStart);
                var source = this._atob(encodedSource);
                this.sourceCache[location2] = source;
                resolve(source);
              } else {
                reject(new Error("The encoding of the inline sourcemap is not supported"));
              }
            } else {
              var xhrPromise = this.ajax(location2, {
                method: "get"
              });
              this.sourceCache[location2] = xhrPromise;
              xhrPromise.then(resolve, reject);
            }
          }
        }.bind(this));
      };
      this._getSourceMapConsumer = function _getSourceMapConsumer(sourceMappingURL, defaultSourceRoot) {
        return new Promise(function(resolve) {
          if (this.sourceMapConsumerCache[sourceMappingURL]) {
            resolve(this.sourceMapConsumerCache[sourceMappingURL]);
          } else {
            var sourceMapConsumerPromise = new Promise(function(resolve2, reject) {
              return this._get(sourceMappingURL).then(function(sourceMapSource) {
                if (typeof sourceMapSource === "string") {
                  sourceMapSource = _parseJson(sourceMapSource.replace(/^\)\]\}'/, ""));
                }
                if (typeof sourceMapSource.sourceRoot === "undefined") {
                  sourceMapSource.sourceRoot = defaultSourceRoot;
                }
                resolve2(new SourceMap.SourceMapConsumer(sourceMapSource));
              }, reject);
            }.bind(this));
            this.sourceMapConsumerCache[sourceMappingURL] = sourceMapConsumerPromise;
            resolve(sourceMapConsumerPromise);
          }
        }.bind(this));
      };
      this.pinpoint = function StackTraceGPS$$pinpoint(stackframe2) {
        return new Promise(function(resolve, reject) {
          this.getMappedLocation(stackframe2).then(function(mappedStackFrame) {
            function resolveMappedStackFrame() {
              resolve(mappedStackFrame);
            }
            this.findFunctionName(mappedStackFrame).then(resolve, resolveMappedStackFrame)["catch"](resolveMappedStackFrame);
          }.bind(this), reject);
        }.bind(this));
      };
      this.findFunctionName = function StackTraceGPS$$findFunctionName(stackframe2) {
        return new Promise(function(resolve, reject) {
          _ensureStackFrameIsLegit(stackframe2);
          this._get(stackframe2.fileName).then(function getSourceCallback(source) {
            var lineNumber = stackframe2.lineNumber;
            var columnNumber = stackframe2.columnNumber;
            var guessedFunctionName = _findFunctionName(source, lineNumber);
            if (guessedFunctionName) {
              resolve(new StackFrame({
                functionName: guessedFunctionName,
                args: stackframe2.args,
                fileName: stackframe2.fileName,
                lineNumber,
                columnNumber
              }));
            } else {
              resolve(stackframe2);
            }
          }, reject)["catch"](reject);
        }.bind(this));
      };
      this.getMappedLocation = function StackTraceGPS$$getMappedLocation(stackframe2) {
        return new Promise(function(resolve, reject) {
          _ensureSupportedEnvironment();
          _ensureStackFrameIsLegit(stackframe2);
          var sourceCache = this.sourceCache;
          var fileName = stackframe2.fileName;
          this._get(fileName).then(function(source) {
            var sourceMappingURL = _findSourceMappingURL(source);
            var isDataUrl = sourceMappingURL.substr(0, 5) === "data:";
            var defaultSourceRoot = fileName.substring(0, fileName.lastIndexOf("/") + 1);
            if (sourceMappingURL[0] !== "/" && !isDataUrl && !/^https?:\/\/|^\/\//i.test(sourceMappingURL)) {
              sourceMappingURL = defaultSourceRoot + sourceMappingURL;
            }
            return this._getSourceMapConsumer(sourceMappingURL, defaultSourceRoot).then(function(sourceMapConsumer2) {
              return _extractLocationInfoFromSourceMapSource(stackframe2, sourceMapConsumer2, sourceCache).then(resolve)["catch"](function() {
                resolve(stackframe2);
              });
            });
          }.bind(this), reject)["catch"](reject);
        }.bind(this));
      };
    };
  });
});
var StackTraceGps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), stacktraceGps, {
  "default": stacktraceGps
}));
function hide() {
  return function hideOperation(source) {
    return source.lift(new HideOperator());
  };
}
var HideOperator = /* @__PURE__ */ function() {
  function HideOperator2() {
    _classCallCheck(this, HideOperator2);
    _defineProperty(this, "hide", true);
  }
  _createClass(HideOperator2, [{
    key: "call",
    value: function call(subscriber, source) {
      return source.subscribe(subscriber);
    }
  }]);
  return HideOperator2;
}();
var stackTraceRefSymbol = Symbol("stackTraceRef");
function getMappedStackTrace(ref) {
  var stackTraceRef = getStackTraceRef(ref);
  return stackTraceRef ? stackTraceRef.mappedStackTrace : of([]);
}
function getStackTrace(ref) {
  var stackTraceRef = getStackTraceRef(ref);
  return stackTraceRef ? stackTraceRef.stackTrace : [];
}
function getStackTraceRef(ref) {
  return ref[stackTraceRefSymbol];
}
function setStackTraceRef(ref, value) {
  ref[stackTraceRefSymbol] = value;
  return value;
}
var StackTracePlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(StackTracePlugin2, _BasePlugin);
  var _super = _createSuper(StackTracePlugin2);
  function StackTracePlugin2() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$sourceMaps = _ref.sourceMaps, sourceMaps = _ref$sourceMaps === void 0 ? false : _ref$sourceMaps;
    _classCallCheck(this, StackTracePlugin2);
    _this = _super.call(this, "stackTrace");
    _defineProperty(_assertThisInitialized(_this), "sourceCache_", void 0);
    _defineProperty(_assertThisInitialized(_this), "sourceMaps_", void 0);
    _this.sourceCache_ = {};
    _this.sourceMaps_ = sourceMaps;
    return _this;
  }
  _createClass(StackTracePlugin2, [{
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var _this2 = this;
      var stackFrames = this.getStackFrames_();
      if (this.sourceMaps_ && typeof window !== "undefined" && window.location.protocol !== "file:") {
        setStackTraceRef(ref, {
          mappedStackTrace: defer(function() {
            var gps = new StackTraceGps({
              sourceCache: _this2.sourceCache_
            });
            return Promise.all(stackFrames.map(function(stackFrame) {
              return gps.pinpoint(stackFrame)["catch"](function() {
                return stackFrame;
              });
            }));
          }).pipe(shareReplay(1), hide()),
          stackTrace: stackFrames
        });
      } else {
        setStackTraceRef(ref, {
          mappedStackTrace: of(stackFrames).pipe(hide()),
          stackTrace: stackFrames
        });
      }
    }
  }, {
    key: "teardown",
    value: function teardown() {
      this.sourceCache_ = {};
    }
  }, {
    key: "getStackFrames_",
    value: function getStackFrames_() {
      try {
        throw new Error();
      } catch (error) {
        var core = true;
        return errorStackParser.parse(error).filter(function(stackFrame) {
          var result = !core;
          if (/coreSubscribe_/.test(stackFrame.functionName || "")) {
            core = false;
          }
          return result;
        });
      }
    }
  }]);
  return StackTracePlugin2;
}(BasePlugin);
var cycleDetectedSymbol = Symbol("cycleDetected");
var cycleWarnedSymbol = Symbol("cycleWarned");
var CyclePlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(CyclePlugin2, _BasePlugin);
  var _super = _createSuper(CyclePlugin2);
  function CyclePlugin2(spy, partialLogger) {
    var _this;
    _classCallCheck(this, CyclePlugin2);
    _this = _super.call(this, "cycle");
    _defineProperty(_assertThisInitialized(_this), "logger_", void 0);
    _defineProperty(_assertThisInitialized(_this), "nexts_", []);
    _defineProperty(_assertThisInitialized(_this), "spy_", void 0);
    _this.logger_ = toLogger(partialLogger);
    _this.spy_ = spy;
    return _this;
  }
  _createClass(CyclePlugin2, [{
    key: "afterNext",
    value: function afterNext(ref, value) {
      var nexts_ = this.nexts_;
      nexts_.pop();
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var logger_ = this.logger_, nexts_ = this.nexts_, spy_ = this.spy_;
      var observable3 = ref.observable, subscription = ref.subscription;
      if (nexts_.indexOf(ref) !== -1) {
        if (!subscription[cycleDetectedSymbol]) {
          subscription[cycleDetectedSymbol] = true;
          if (nexts_.findIndex(function(n) {
            return n.subscription[cycleWarnedSymbol];
          }) === -1) {
            subscription[cycleWarnedSymbol] = true;
            var stackFrames = getStackTrace(ref);
            if (stackFrames.length === 0) {
              spy_.warnOnce(console, "Stack tracing is not enabled; add the StackTracePlugin before the CyclePlugin.");
            }
            var stackTrace = stackFrames.length ? "; subscribed at\n".concat(stackFrames.join("\n")) : "";
            var type = inferType(observable3);
            logger_.warn("Cyclic next detected; type = ".concat(type, "; value = ").concat(value).concat(stackTrace));
          }
        }
      }
      nexts_.push(ref);
    }
  }]);
  return CyclePlugin2;
}(BasePlugin);
var DebugPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(DebugPlugin2, _BasePlugin);
  var _super = _createSuper(DebugPlugin2);
  function DebugPlugin2(match, notifications) {
    var _this;
    _classCallCheck(this, DebugPlugin2);
    _this = _super.call(this, "debug(".concat(toString(match), ")"));
    _defineProperty(_assertThisInitialized(_this), "notifications_", void 0);
    _defineProperty(_assertThisInitialized(_this), "matcher_", void 0);
    _this.notifications_ = notifications;
    _this.matcher_ = function(ref, notification) {
      return matches(ref, match) && _this.notifications_.indexOf(notification) !== -1;
    };
    return _this;
  }
  _createClass(DebugPlugin2, [{
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      var matcher_ = this.matcher_;
      if (matcher_(ref, "complete")) {
        debugger;
      }
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      var matcher_ = this.matcher_;
      if (matcher_(ref, "error")) {
        debugger;
      }
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var matcher_ = this.matcher_;
      if (matcher_(ref, "next")) {
        debugger;
      }
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var matcher_ = this.matcher_;
      if (matcher_(ref, "subscribe")) {
        debugger;
      }
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      var matcher_ = this.matcher_;
      if (matcher_(ref, "unsubscribe")) {
        debugger;
      }
    }
  }]);
  return DebugPlugin2;
}(BasePlugin);
var graphRefSymbol = Symbol("graphRef");
function getGraphRef(ref) {
  return ref[graphRefSymbol];
}
function setGraphRef(ref, value) {
  ref[graphRefSymbol] = value;
  return value;
}
var GraphPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(GraphPlugin2, _BasePlugin);
  var _super = _createSuper(GraphPlugin2);
  function GraphPlugin2() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$keptDuration = _ref.keptDuration, keptDuration = _ref$keptDuration === void 0 ? 3e4 : _ref$keptDuration;
    _classCallCheck(this, GraphPlugin2);
    _this = _super.call(this, "graph");
    _defineProperty(_assertThisInitialized(_this), "flushIntervalId_", void 0);
    _defineProperty(_assertThisInitialized(_this), "flushQueue_", void 0);
    _defineProperty(_assertThisInitialized(_this), "keptDuration_", void 0);
    _defineProperty(_assertThisInitialized(_this), "notifications_", void 0);
    _defineProperty(_assertThisInitialized(_this), "sentinel_", void 0);
    _this.flushIntervalId_ = void 0;
    _this.flushQueue_ = [];
    _this.keptDuration_ = keptDuration;
    _this.notifications_ = [];
    _this.sentinel_ = {
      depth: 0,
      flattened: false,
      flattenings: [],
      flatteningsFlushed: 0,
      link: void 0,
      rootSink: void 0,
      sentinel: void 0,
      sink: void 0,
      sources: [],
      sourcesFlushed: 0
    };
    _this.sentinel_.link = _this.sentinel_;
    _this.sentinel_.sentinel = _this.sentinel_;
    return _this;
  }
  _createClass(GraphPlugin2, [{
    key: "afterNext",
    value: function afterNext(ref, value) {
      var notifications_ = this.notifications_;
      notifications_.pop();
    }
  }, {
    key: "afterSubscribe",
    value: function afterSubscribe(ref) {
      var notifications_ = this.notifications_;
      notifications_.pop();
    }
  }, {
    key: "afterUnsubscribe",
    value: function afterUnsubscribe(ref) {
      var notifications_ = this.notifications_;
      notifications_.pop();
      this.flush_(ref);
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var notifications_ = this.notifications_;
      notifications_.push({
        notification: "next",
        ref
      });
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var notifications_ = this.notifications_, sentinel_ = this.sentinel_;
      var graphRef = setGraphRef(ref, {
        depth: 1,
        flattened: false,
        flattenings: [],
        flatteningsFlushed: 0,
        link: sentinel_,
        rootSink: void 0,
        sentinel: sentinel_,
        sink: void 0,
        sources: [],
        sourcesFlushed: 0
      });
      var length = notifications_.length;
      if (length > 0 && notifications_[length - 1].notification === "next") {
        var sinkRef = notifications_[length - 1].ref;
        var sinkGraphRef = getGraphRef(sinkRef);
        sinkGraphRef.flattenings.push(ref);
        graphRef.link = sinkGraphRef;
        graphRef.flattened = true;
        graphRef.rootSink = sinkGraphRef.rootSink || sinkRef;
        graphRef.sink = sinkRef;
      } else {
        for (var n = length - 1; n > -1; --n) {
          if (notifications_[n].notification === "subscribe") {
            var _sinkRef = notifications_[length - 1].ref;
            var _sinkGraphRef = getGraphRef(_sinkRef);
            _sinkGraphRef.sources.push(ref);
            graphRef.depth = _sinkGraphRef.depth + 1;
            graphRef.link = _sinkGraphRef;
            graphRef.rootSink = _sinkGraphRef.rootSink || _sinkRef;
            graphRef.sink = _sinkRef;
            break;
          }
        }
      }
      if (graphRef.link === graphRef.sentinel) {
        graphRef.sentinel.sources.push(ref);
      }
      notifications_.push({
        notification: "subscribe",
        ref
      });
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      var notifications_ = this.notifications_;
      notifications_.push({
        notification: "unsubscribe",
        ref
      });
    }
  }, {
    key: "teardown",
    value: function teardown() {
      if (this.flushIntervalId_ !== void 0) {
        clearInterval(this.flushIntervalId_);
        this.flushIntervalId_ = void 0;
      }
    }
  }, {
    key: "flush_",
    value: function flush_(ref) {
      var _this2 = this;
      var graphRef = getGraphRef(ref);
      var flattenings = graphRef.flattenings, sources = graphRef.sources;
      if (!ref.unsubscribed || !flattenings.every(function(ref2) {
        return ref2.unsubscribed;
      }) || !sources.every(function(ref2) {
        return ref2.unsubscribed;
      })) {
        return;
      }
      var keptDuration_ = this.keptDuration_;
      var link = graphRef.link;
      var flush = function flush2() {
        var flattenings2 = link.flattenings, sources2 = link.sources;
        var flatteningIndex = flattenings2.indexOf(ref);
        if (flatteningIndex !== -1) {
          flattenings2.splice(flatteningIndex, 1);
          ++link.flatteningsFlushed;
        }
        var sourceIndex = sources2.indexOf(ref);
        if (sourceIndex !== -1) {
          sources2.splice(sourceIndex, 1);
          ++link.sourcesFlushed;
        }
      };
      if (keptDuration_ === 0) {
        flush();
      } else if (keptDuration_ > 0 && keptDuration_ < Infinity) {
        this.flushQueue_.push({
          due: Date.now() + keptDuration_,
          flush
        });
        if (this.flushIntervalId_ === void 0) {
          this.flushIntervalId_ = setInterval(function() {
            var now = Date.now();
            _this2.flushQueue_ = _this2.flushQueue_.filter(function(q) {
              if (q.due > now) {
                return true;
              }
              q.flush();
              return false;
            });
            if (_this2.flushQueue_.length === 0) {
              clearInterval(_this2.flushIntervalId_);
              _this2.flushIntervalId_ = void 0;
            }
          }, keptDuration_);
        }
      }
    }
  }]);
  return GraphPlugin2;
}(BasePlugin);
var LetPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(LetPlugin2, _BasePlugin);
  var _super = _createSuper(LetPlugin2);
  function LetPlugin2(match, select) {
    var _this;
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$complete = _ref.complete, complete = _ref$complete === void 0 ? true : _ref$complete;
    _classCallCheck(this, LetPlugin2);
    _this = _super.call(this, "let(".concat(toString(match), ")"));
    _defineProperty(_assertThisInitialized(_this), "match_", void 0);
    _defineProperty(_assertThisInitialized(_this), "select_", void 0);
    _this.match_ = match;
    _this.select_ = complete ? select : function(source) {
      return merge(NEVER, select(source));
    };
    return _this;
  }
  _createClass(LetPlugin2, [{
    key: "select",
    value: function select(ref) {
      var match_ = this.match_, select_ = this.select_;
      if (matches(ref, match_)) {
        return select_;
      }
      return void 0;
    }
  }]);
  return LetPlugin2;
}(BasePlugin);
var LogPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(LogPlugin2, _BasePlugin);
  var _super = _createSuper(LogPlugin2);
  function LogPlugin2(spy, tagMatch) {
    var _this;
    _classCallCheck(this, LogPlugin2);
    _this = _super.call(this, "log(".concat(toString(tagMatch), ")"));
    _defineProperty(_assertThisInitialized(_this), "auditor_", void 0);
    _defineProperty(_assertThisInitialized(_this), "logger_", void 0);
    _defineProperty(_assertThisInitialized(_this), "notificationMatch_", void 0);
    _defineProperty(_assertThisInitialized(_this), "tagMatch_", void 0);
    _this.auditor_ = spy.auditor;
    _this.tagMatch_ = tagMatch;
    var defaultMatch = /.+/;
    switch (arguments.length <= 2 ? 0 : arguments.length - 2) {
      case 0:
        _this.notificationMatch_ = defaultMatch;
        _this.logger_ = toLogger(defaultLogger);
        break;
      case 1:
        if (typeof (arguments.length <= 2 ? void 0 : arguments[2]) === "function") {
          _this.notificationMatch_ = arguments.length <= 2 ? void 0 : arguments[2];
          _this.logger_ = toLogger(defaultLogger);
        } else {
          _this.notificationMatch_ = defaultMatch;
          _this.logger_ = toLogger(arguments.length <= 2 ? void 0 : arguments[2]);
        }
        break;
      default:
        _this.notificationMatch_ = arguments.length <= 2 ? void 0 : arguments[2];
        _this.logger_ = toLogger(arguments.length <= 3 ? void 0 : arguments[3]);
        break;
    }
    return _this;
  }
  _createClass(LogPlugin2, [{
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      this.log_(ref, "complete");
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      this.log_(ref, "error", error);
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      this.log_(ref, "next", value);
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      this.log_(ref, "subscribe");
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      this.log_(ref, "unsubscribe");
    }
  }, {
    key: "log_",
    value: function log_(ref, notification, param) {
      var _this2 = this;
      var auditor_ = this.auditor_, notificationMatch_ = this.notificationMatch_, tagMatch_ = this.tagMatch_;
      if (matches(ref, tagMatch_) && matches(ref, notificationMatch_, notification)) {
        auditor_.audit(this, function(ignored) {
          var logger_ = _this2.logger_;
          var observable3 = ref.observable;
          var tag2 = read(observable3);
          var type = inferType(observable3);
          var matching = typeof tagMatch_ === "string" ? "" : "; matching ".concat(toString(tagMatch_));
          var audit = ignored === 0 ? "" : "; ignored ".concat(ignored);
          var description = tag2 ? "Tag = ".concat(tag2, "; notification = ").concat(notification).concat(matching).concat(audit) : "Type = ".concat(type, "; notification = ").concat(notification).concat(matching).concat(audit);
          switch (notification) {
            case "error":
              logger_.error("".concat(description, "; error ="), param);
              break;
            case "next":
              logger_.log("".concat(description, "; value ="), param);
              break;
            default:
              logger_.log(description);
              break;
          }
        });
      }
    }
  }]);
  return LogPlugin2;
}(BasePlugin);
var Deck = /* @__PURE__ */ function() {
  function Deck2(match) {
    _classCallCheck(this, Deck2);
    _defineProperty(this, "teardown", void 0);
    _defineProperty(this, "match_", void 0);
    _defineProperty(this, "paused_", true);
    _defineProperty(this, "states_", /* @__PURE__ */ new Map());
    _defineProperty(this, "stats_", void 0);
    this.match_ = match;
    this.stats_ = new Subject();
  }
  _createClass(Deck2, [{
    key: "stats",
    get: function get5() {
      return this.stats_.asObservable();
    }
  }, {
    key: "paused",
    get: function get5() {
      return this.paused_;
    }
  }, {
    key: "clear",
    value: function clear() {
      var predicate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
        return true;
      };
      this.states_.forEach(function(state) {
        state.notifications_ = state.notifications_.filter(function(notification) {
          return !predicate(notification);
        });
      });
      this.broadcast_();
    }
  }, {
    key: "log",
    value: function log() {
      var partialLogger = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultLogger;
      var logger = toLogger(partialLogger);
      logger.group("Deck matching ".concat(toString(this.match_)));
      logger.log("Paused =", this.paused_);
      this.states_.forEach(function(state) {
        logger.group("Observable; tag = ".concat(state.tag_));
        logger.log("Notifications =", state.notifications_);
        logger.groupEnd();
      });
      logger.groupEnd();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused_ = true;
      this.broadcast_();
    }
  }, {
    key: "resume",
    value: function resume() {
      this.states_.forEach(function(state) {
        while (state.notifications_.length > 0) {
          state.subject_.next(state.notifications_.shift());
        }
      });
      this.paused_ = false;
      this.broadcast_();
    }
  }, {
    key: "select",
    value: function select(ref) {
      var _this = this;
      var observable3 = ref.observable;
      return function(source) {
        var state = _this.states_.get(observable3);
        if (state) {
          state.subscription_.unsubscribe();
        } else {
          state = {
            notifications_: [],
            subject_: new Subject(),
            subscription_: void 0,
            tag_: read(observable3)
          };
          _this.states_.set(observable3, state);
        }
        state.subscription_ = source.pipe(materialize(), hide()).subscribe({
          next: function next(notification) {
            if (_this.paused_) {
              state.notifications_.push(notification);
            } else {
              state.subject_.next(notification);
            }
            _this.broadcast_();
          }
        });
        _this.broadcast_();
        return state.subject_.asObservable().pipe(dematerialize());
      };
    }
  }, {
    key: "skip",
    value: function skip() {
      this.states_.forEach(function(state) {
        if (state.notifications_.length > 0) {
          state.notifications_.shift();
        }
      });
      this.broadcast_();
    }
  }, {
    key: "step",
    value: function step() {
      this.states_.forEach(function(state) {
        if (state.notifications_.length > 0) {
          state.subject_.next(state.notifications_.shift());
        }
      });
      this.broadcast_();
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this.states_.forEach(function(state) {
        if (state.subscription_) {
          state.subscription_.unsubscribe();
          state.subscription_ = void 0;
        }
      });
      this.broadcast_();
    }
  }, {
    key: "broadcast_",
    value: function broadcast_() {
      var paused_ = this.paused_, states_ = this.states_, stats_ = this.stats_;
      var notifications = 0;
      states_.forEach(function(state) {
        return notifications += state.notifications_.length;
      });
      stats_.next({
        notifications,
        paused: paused_
      });
    }
  }]);
  return Deck2;
}();
var PausePlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(PausePlugin2, _BasePlugin);
  var _super = _createSuper(PausePlugin2);
  function PausePlugin2(match) {
    var _this2;
    _classCallCheck(this, PausePlugin2);
    _this2 = _super.call(this, "pause(".concat(toString(match), ")"));
    _defineProperty(_assertThisInitialized(_this2), "match_", void 0);
    _defineProperty(_assertThisInitialized(_this2), "deck_", void 0);
    _this2.deck_ = new Deck(match);
    _this2.match_ = match;
    return _this2;
  }
  _createClass(PausePlugin2, [{
    key: "deck",
    get: function get5() {
      var deck_ = this.deck_;
      return deck_;
    }
  }, {
    key: "match",
    get: function get5() {
      var match_ = this.match_;
      return match_;
    }
  }, {
    key: "select",
    value: function select(ref) {
      var deck_ = this.deck_, match_ = this.match_;
      if (matches(ref, match_)) {
        return deck_.select(ref);
      }
      return void 0;
    }
  }, {
    key: "teardown",
    value: function teardown() {
      var deck_ = this.deck_;
      if (deck_) {
        deck_.resume();
        deck_.unsubscribe();
      }
    }
  }]);
  return PausePlugin2;
}(BasePlugin);
var snapshotRefSymbol = Symbol("snapshotRef");
function getSnapshotRef(ref) {
  return ref[snapshotRefSymbol];
}
function mapStackTraces(snapshots) {
  var observables = [of(null)];
  snapshots.forEach(function(snapshot) {
    if (snapshot.subscriptions) {
      snapshot.subscriptions.forEach(mapSubscriptionStackTraces);
    } else {
      mapSubscriptionStackTraces(snapshot);
    }
  });
  return forkJoin(observables).pipe(mapTo(void 0), hide());
  function mapSubscriptionStackTraces(subscriptionSnapshot) {
    observables.push(subscriptionSnapshot.mappedStackTrace);
    if (subscriptionSnapshot.rootSink) {
      observables.push(subscriptionSnapshot.rootSink.mappedStackTrace);
    }
  }
}
function setSnapshotRef(ref, value) {
  ref[snapshotRefSymbol] = value;
  return value;
}
var SnapshotPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(SnapshotPlugin2, _BasePlugin);
  var _super = _createSuper(SnapshotPlugin2);
  function SnapshotPlugin2(spy) {
    var _this;
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$keptValues = _ref.keptValues, keptValues = _ref$keptValues === void 0 ? 4 : _ref$keptValues;
    _classCallCheck(this, SnapshotPlugin2);
    _this = _super.call(this, "snapshot");
    _defineProperty(_assertThisInitialized(_this), "keptValues_", void 0);
    _defineProperty(_assertThisInitialized(_this), "sentinel_", void 0);
    _defineProperty(_assertThisInitialized(_this), "spy_", void 0);
    _this.keptValues_ = keptValues;
    _this.sentinel_ = void 0;
    _this.spy_ = spy;
    return _this;
  }
  _createClass(SnapshotPlugin2, [{
    key: "afterUnsubscribe",
    value: function afterUnsubscribe(ref) {
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = this.spy_.tick;
      snapshotRef.unsubscribed = true;
    }
  }, {
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = this.spy_.tick;
      snapshotRef.complete = true;
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = this.spy_.tick;
      snapshotRef.error = error;
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var tick = this.spy_.tick;
      var snapshotRef = getSnapshotRef(ref);
      snapshotRef.tick = tick;
      snapshotRef.values.push({
        tick,
        timestamp: Date.now(),
        value
      });
      var keptValues_ = this.keptValues_;
      var count = snapshotRef.values.length - keptValues_;
      if (count > 0) {
        snapshotRef.values.splice(0, count);
        snapshotRef.valuesFlushed += count;
      }
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      setSnapshotRef(ref, {
        complete: false,
        error: void 0,
        tick: this.spy_.tick,
        timestamp: Date.now(),
        unsubscribed: false,
        values: [],
        valuesFlushed: 0
      });
      var graphRef = getGraphRef(ref);
      if (graphRef) {
        this.sentinel_ = graphRef.sentinel;
      } else {
        this.spy_.warnOnce(console, "Graphing is not enabled; add the GraphPlugin before the SnapshotPlugin.");
      }
    }
  }, {
    key: "snapshotAll",
    value: function snapshotAll() {
      var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, since = _ref2.since;
      var observables = /* @__PURE__ */ new Map();
      var subscribers = /* @__PURE__ */ new Map();
      var subscriptions = /* @__PURE__ */ new Map();
      var subscriptionRefs = this.getSubscriptionRefs_();
      subscriptionRefs.forEach(function(unused, ref) {
        var _subscriberSnapshot$v;
        var observable3 = ref.observable, subscriber = ref.subscriber, subscription = ref.subscription;
        var graphRef = getGraphRef(ref);
        var flatteningsFlushed = graphRef.flatteningsFlushed, sourcesFlushed = graphRef.sourcesFlushed;
        var snapshotRef = getSnapshotRef(ref);
        var complete = snapshotRef.complete, error = snapshotRef.error, tick = snapshotRef.tick, timestamp = snapshotRef.timestamp, unsubscribed = snapshotRef.unsubscribed, values = snapshotRef.values, valuesFlushed = snapshotRef.valuesFlushed;
        var subscriptionSnapshot = {
          complete,
          error,
          flattenings: /* @__PURE__ */ new Map(),
          flatteningsFlushed,
          id: identify(ref),
          mappedStackTrace: getMappedStackTrace(ref),
          observable: observable3,
          rootSink: void 0,
          sink: void 0,
          sources: /* @__PURE__ */ new Map(),
          sourcesFlushed,
          stackTrace: getStackTrace(ref),
          subscriber,
          subscription,
          tick,
          timestamp,
          unsubscribed
        };
        subscriptions.set(subscription, subscriptionSnapshot);
        var subscriberSnapshot = subscribers.get(subscriber);
        if (!subscriberSnapshot) {
          subscriberSnapshot = {
            id: identify(subscriber),
            subscriber,
            subscriptions: /* @__PURE__ */ new Map(),
            tick,
            values: [],
            valuesFlushed: 0
          };
          subscribers.set(subscriber, subscriberSnapshot);
        }
        subscriberSnapshot.subscriptions.set(subscription, subscriptionSnapshot);
        subscriberSnapshot.tick = Math.max(subscriberSnapshot.tick, tick);
        (_subscriberSnapshot$v = subscriberSnapshot.values).push.apply(_subscriberSnapshot$v, _toConsumableArray(values));
        subscriberSnapshot.valuesFlushed += valuesFlushed;
        var observableSnapshot = observables.get(observable3);
        if (!observableSnapshot) {
          observableSnapshot = {
            id: identify(observable3),
            observable: observable3,
            path: inferPath(observable3),
            subscriptions: /* @__PURE__ */ new Map(),
            tag: read(observable3),
            tick,
            type: inferType(observable3)
          };
          observables.set(observable3, observableSnapshot);
        }
        observableSnapshot.subscriptions.set(subscription, subscriptionSnapshot);
        observableSnapshot.tick = Math.max(observableSnapshot.tick, tick);
      });
      subscriptionRefs.forEach(function(unused, ref) {
        var graphRef = getGraphRef(ref);
        var subscriptionSnapshot = subscriptions.get(ref.subscription);
        if (graphRef.sink) {
          subscriptionSnapshot.sink = subscriptions.get(graphRef.sink.subscription);
        }
        if (graphRef.rootSink) {
          subscriptionSnapshot.rootSink = subscriptions.get(graphRef.rootSink.subscription);
        }
        graphRef.flattenings.forEach(function(m) {
          return subscriptionSnapshot.flattenings.set(m.subscription, subscriptions.get(m.subscription));
        });
        graphRef.sources.forEach(function(s) {
          return subscriptionSnapshot.sources.set(s.subscription, subscriptions.get(s.subscription));
        });
      });
      subscribers.forEach(function(subscriberSnapshot) {
        subscriberSnapshot.values.sort(function(a, b) {
          return a.tick - b.tick;
        });
      });
      if (since !== void 0) {
        observables.forEach(function(value, key) {
          if (value.tick <= since.tick) {
            observables["delete"](key);
          }
        });
        subscribers.forEach(function(value, key) {
          if (value.tick <= since.tick) {
            subscribers["delete"](key);
          }
        });
        subscriptions.forEach(function(value, key) {
          if (value.tick <= since.tick) {
            subscriptions["delete"](key);
          }
        });
      }
      return {
        mapStackTraces,
        observables,
        subscribers,
        subscriptions,
        tick: this.spy_.tick
      };
    }
  }, {
    key: "snapshotObservable",
    value: function snapshotObservable(ref) {
      var snapshot = this.snapshotAll();
      return snapshot.observables.get(ref.observable);
    }
  }, {
    key: "snapshotSubscriber",
    value: function snapshotSubscriber(ref) {
      var snapshot = this.snapshotAll();
      return snapshot.subscribers.get(ref.subscriber);
    }
  }, {
    key: "addSubscriptionRefs_",
    value: function addSubscriptionRefs_(ref, map2) {
      var _this2 = this;
      map2.set(ref, true);
      var graphRef = getGraphRef(ref);
      graphRef.flattenings.forEach(function(m) {
        return _this2.addSubscriptionRefs_(m, map2);
      });
      graphRef.sources.forEach(function(s) {
        return _this2.addSubscriptionRefs_(s, map2);
      });
    }
  }, {
    key: "getSubscriptionRefs_",
    value: function getSubscriptionRefs_() {
      var _this3 = this;
      var sentinel_ = this.sentinel_;
      var map2 = /* @__PURE__ */ new Map();
      if (sentinel_) {
        sentinel_.sources.forEach(function(ref) {
          return _this3.addSubscriptionRefs_(ref, map2);
        });
      }
      return map2;
    }
  }]);
  return SnapshotPlugin2;
}(BasePlugin);
var StatsPlugin = /* @__PURE__ */ function(_BasePlugin) {
  _inherits(StatsPlugin2, _BasePlugin);
  var _super = _createSuper(StatsPlugin2);
  function StatsPlugin2(spy) {
    var _this;
    _classCallCheck(this, StatsPlugin2);
    _this = _super.call(this, "stats");
    _defineProperty(_assertThisInitialized(_this), "spy_", void 0);
    _defineProperty(_assertThisInitialized(_this), "stats_", void 0);
    _defineProperty(_assertThisInitialized(_this), "time_", void 0);
    _this.spy_ = spy;
    _this.stats_ = {
      completes: 0,
      errors: 0,
      flattenedSubscribes: 0,
      leafSubscribes: 0,
      maxDepth: 0,
      nexts: 0,
      rootSubscribes: 0,
      subscribes: 0,
      tick: 0,
      timespan: 0,
      totalDepth: 0,
      unsubscribes: 0
    };
    _this.time_ = 0;
    return _this;
  }
  _createClass(StatsPlugin2, [{
    key: "afterSubscribe",
    value: function afterSubscribe(ref) {
      var stats_ = this.stats_;
      var graphRef = getGraphRef(ref);
      if (graphRef) {
        var depth = graphRef.depth, flattened = graphRef.flattened, flattenings = graphRef.flattenings, flatteningsFlushed = graphRef.flatteningsFlushed, rootSink = graphRef.rootSink, sources = graphRef.sources, sourcesFlushed = graphRef.sourcesFlushed;
        if (!rootSink) {
          stats_.rootSubscribes += 1;
        }
        if (flattened) {
          stats_.flattenedSubscribes += 1;
        }
        if (flattenings.length + flatteningsFlushed + sources.length + sourcesFlushed === 0) {
          if (stats_.maxDepth < depth) {
            stats_.maxDepth = depth;
          }
          stats_.leafSubscribes += 1;
          stats_.totalDepth += depth;
        }
      }
    }
  }, {
    key: "beforeComplete",
    value: function beforeComplete(ref) {
      var stats_ = this.stats_;
      ++stats_.completes;
      this.all_();
    }
  }, {
    key: "beforeError",
    value: function beforeError(ref, error) {
      var stats_ = this.stats_;
      ++stats_.errors;
      this.all_();
    }
  }, {
    key: "beforeNext",
    value: function beforeNext(ref, value) {
      var stats_ = this.stats_;
      ++stats_.nexts;
      this.all_();
    }
  }, {
    key: "beforeSubscribe",
    value: function beforeSubscribe(ref) {
      var stats_ = this.stats_;
      ++stats_.subscribes;
      this.all_();
    }
  }, {
    key: "beforeUnsubscribe",
    value: function beforeUnsubscribe(ref) {
      var stats_ = this.stats_;
      ++stats_.unsubscribes;
      this.all_();
    }
  }, {
    key: "stats",
    get: function get5() {
      var stats_ = this.stats_;
      return _objectSpread2({}, stats_);
    }
  }, {
    key: "all_",
    value: function all_() {
      var spy_ = this.spy_, stats_ = this.stats_, time_ = this.time_;
      if (time_ === 0) {
        this.time_ = Date.now();
      } else {
        stats_.timespan = Date.now() - time_;
      }
      stats_.tick = spy_.tick;
    }
  }]);
  return StatsPlugin2;
}(BasePlugin);
var Auditor = /* @__PURE__ */ function() {
  function Auditor2(duration) {
    _classCallCheck(this, Auditor2);
    this.duration = duration;
    _defineProperty(this, "queue_", []);
    _defineProperty(this, "timeoutId_", void 0);
  }
  _createClass(Auditor2, [{
    key: "audit",
    value: function audit(source, task) {
      var duration = this.duration, queue_ = this.queue_;
      if (duration <= 0) {
        task(0);
      } else {
        var queued = {
          ignored: 0,
          source,
          task,
          timestamp: Date.now()
        };
        var index = queue_.findIndex(function(q) {
          return q.source === source;
        });
        if (index !== -1) {
          var _queue_$index = queue_[index], _ignored = _queue_$index.ignored, timestamp = _queue_$index.timestamp;
          queued.ignored += _ignored + 1;
          queued.timestamp = timestamp;
          queue_.splice(index, 1);
        }
        queue_.push(queued);
        this.wait_();
      }
    }
  }, {
    key: "wait_",
    value: function wait_() {
      var _this = this;
      var duration = this.duration, queue_ = this.queue_;
      if (this.timeoutId_ === void 0 && queue_.length > 0) {
        var queued = queue_[0];
        this.timeoutId_ = setTimeout(function() {
          var before = Date.now() - duration;
          while (queue_.length > 0 && queue_[0].timestamp <= before) {
            var dequeued = queue_.shift();
            dequeued.task(dequeued.ignored);
          }
          _this.timeoutId_ = void 0;
          _this.wait_();
        }, Math.max(0, queued.timestamp + duration - Date.now()));
      }
    }
  }]);
  return Auditor2;
}();
var Detector = /* @__PURE__ */ function() {
  function Detector2(spy) {
    _classCallCheck(this, Detector2);
    _defineProperty(this, "detectorRecords_", void 0);
    _defineProperty(this, "snapshotPlugin_", void 0);
    _defineProperty(this, "spy_", void 0);
    this.detectorRecords_ = /* @__PURE__ */ new Map();
    this.snapshotPlugin_ = spy.find(SnapshotPlugin);
    this.spy_ = spy;
  }
  _createClass(Detector2, [{
    key: "detect",
    value: function detect2(id) {
      var detectorRecords_ = this.detectorRecords_, snapshotPlugin_ = this.snapshotPlugin_, spy_ = this.spy_;
      if (!snapshotPlugin_) {
        spy_.warnOnce(console, "Snapshotting is not enabled.");
        return void 0;
      }
      var detectorRecord = detectorRecords_.get(id);
      var snapshotRecord = this.record_(snapshotPlugin_.snapshotAll());
      if (detectorRecord) {
        detectorRecord.snapshotRecords.push(snapshotRecord);
      } else {
        detectorRecord = {
          snapshotRecords: [snapshotRecord]
        };
        detectorRecords_.set(id, detectorRecord);
      }
      if (detectorRecord.snapshotRecords.length > 2) {
        detectorRecord.snapshotRecords.shift();
      }
      if (detectorRecord.snapshotRecords.length < 2) {
        return void 0;
      }
      var _detectorRecord$snaps = _slicedToArray(detectorRecord.snapshotRecords, 2), previous = _detectorRecord$snaps[0], current = _detectorRecord$snaps[1];
      return this.compare_(id, previous, current);
    }
  }, {
    key: "compare_",
    value: function compare_(id, previous, current) {
      var subscriptions = [];
      var unsubscriptions = [];
      var flatteningSubscriptions = [];
      var flatteningUnsubscriptions = [];
      var previousSubscriptions = previous.rootSubscriptions;
      var currentSubscriptions = current.rootSubscriptions;
      previousSubscriptions.forEach(function(previous2, key) {
        if (!currentSubscriptions.has(key)) {
          unsubscriptions.push(previous2);
        }
      });
      currentSubscriptions.forEach(function(current2, key) {
        var previous2 = previousSubscriptions.get(key);
        if (previous2) {
          var previousFlattenings = previous2.flattenings;
          var currentFlattenings = current2.flattenings;
          previousFlattenings.forEach(function(flattening, key2) {
            if (!currentFlattenings.has(key2)) {
              flatteningUnsubscriptions.push(flattening);
            }
          });
          currentFlattenings.forEach(function(flattening, key2) {
            if (!previousFlattenings.has(key2)) {
              flatteningSubscriptions.push(flattening);
            }
          });
        } else {
          subscriptions.push(current2);
        }
      });
      if (flatteningSubscriptions.length === 0 && flatteningUnsubscriptions.length === 0 && subscriptions.length === 0 && unsubscriptions.length === 0) {
        return void 0;
      }
      return {
        flatteningSubscriptions,
        flatteningUnsubscriptions,
        subscriptions: subscriptions.map(function(s) {
          return s.subscriptionSnapshot;
        }),
        unsubscriptions: unsubscriptions.map(function(s) {
          return s.subscriptionSnapshot;
        })
      };
    }
  }, {
    key: "findFlatteningSubscriptions_",
    value: function findFlatteningSubscriptions_(snapshot, subscriptionRecord) {
      var flattenings = subscriptionRecord.flattenings, subscriptionSnapshot = subscriptionRecord.subscriptionSnapshot;
      snapshot.subscriptions.forEach(function(s) {
        if (s.rootSink === subscriptionSnapshot) {
          s.flattenings.forEach(function(f) {
            var subscription = f.subscription;
            if (!subscription.closed) {
              flattenings.set(subscription, f);
            }
          });
        }
      });
    }
  }, {
    key: "findRootSubscriptions_",
    value: function findRootSubscriptions_(snapshot, rootSubscriptions) {
      var _this = this;
      snapshot.observables.forEach(function(observableSnapshot) {
        observableSnapshot.subscriptions.forEach(function(subscriptionSnapshot) {
          var complete = subscriptionSnapshot.complete, error = subscriptionSnapshot.error, sink = subscriptionSnapshot.sink, subscription = subscriptionSnapshot.subscription;
          if (!complete && !error && !sink && !subscription.closed) {
            var subscriptionRecord = {
              flattenings: /* @__PURE__ */ new Map(),
              subscriptionSnapshot
            };
            _this.findFlatteningSubscriptions_(snapshot, subscriptionRecord);
            rootSubscriptions.set(subscription, subscriptionRecord);
          }
        });
      });
    }
  }, {
    key: "record_",
    value: function record_(snapshot) {
      var rootSubscriptions = /* @__PURE__ */ new Map();
      this.findRootSubscriptions_(snapshot, rootSubscriptions);
      return {
        rootSubscriptions,
        snapshot
      };
    }
  }]);
  return Detector2;
}();
function hidden(observable3) {
  var operator = observable3["operator"];
  return Boolean(operator && operator["hide"]);
}
function wrap(core) {
  var deprecation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  };
  return {
    deck: function deck(call) {
      deprecation();
      var pausePlugins = core.findAll(PausePlugin);
      if (call === void 0) {
        var logger = toLogger(defaultLogger);
        logger.group("".concat(pausePlugins.length, " Deck(s)"));
        pausePlugins.forEach(function(pausePlugin2, index) {
          return logger.log("".concat(index + 1, " pause(").concat(pausePlugin2.name, ")"));
        });
        logger.groupEnd();
      } else {
        var pausePlugin = pausePlugins[call - 1];
        return pausePlugin ? pausePlugin.deck : void 0;
      }
    },
    debug: function debug() {
      deprecation();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      core.debug.apply(core, args);
    },
    detect: function detect$1() {
      var id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      deprecation();
      detect(id);
    },
    flush: function flush() {
      deprecation();
      core.flush();
    },
    inferPath,
    inferType,
    "let": function _let() {
      deprecation();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      core["let"].apply(core, args);
    },
    log: function log() {
      deprecation();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      core.log.apply(core, args);
    },
    maxLogged: function maxLogged() {
      deprecation();
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      core.maxLogged.apply(core, args);
    },
    pause: function pause() {
      deprecation();
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return core.pause.apply(core, args);
    },
    query: function query() {
      deprecation();
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      core.query.apply(core, args);
    },
    show: function show() {
      deprecation();
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      core.show.apply(core, args);
    },
    stats: function stats() {
      deprecation();
      core.stats();
    },
    undo: function undo() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      if (args.length === 0) {
        var logger = toLogger(defaultLogger);
        logger.group("".concat(core.undos.length, " undo(s)"));
        core.undos.forEach(function(undo2, index) {
          return logger.log("".concat(index + 1, " ").concat(undo2.name));
        });
        logger.groupEnd();
      } else {
        args.map(function(at) {
          return core.undos[at - 1];
        }).filter(Boolean).forEach(function(undo2) {
          return core.unplug(undo2);
        });
      }
    }
  };
}
var observableSubscribe = Observable.prototype.subscribe;
var previousWindow = {};
var SpyCore = /* @__PURE__ */ function() {
  function SpyCore2() {
    var _this = this;
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _classCallCheck(this, SpyCore2);
    _defineProperty(this, "auditor_", void 0);
    _defineProperty(this, "defaultLogger_", void 0);
    _defineProperty(this, "maxLogged_", 20);
    _defineProperty(this, "plugins_", void 0);
    _defineProperty(this, "pluginsSubject_", void 0);
    _defineProperty(this, "teardown_", void 0);
    _defineProperty(this, "tick_", void 0);
    _defineProperty(this, "undos_", void 0);
    _defineProperty(this, "warned_", void 0);
    if (SpyCore2.spy_) {
      throw new Error("Already spying on Observable.prototype.subscribe.");
    }
    if (options.warning) {
      console.warn("Spying on Observable.prototype.subscribe.");
    }
    SpyCore2.spy_ = this;
    Observable.prototype.subscribe = SpyCore2.coreSubscribe_;
    this.auditor_ = new Auditor(options.audit || 0);
    this.defaultLogger_ = options.defaultLogger || defaultLogger;
    if (options.defaultPlugins === false) {
      this.plugins_ = [];
    } else {
      this.plugins_ = [new StackTracePlugin(options), new GraphPlugin(options), new SnapshotPlugin(this, options), new CyclePlugin(this, this.defaultLogger_), new StatsPlugin(this)];
    }
    this.pluginsSubject_ = new BehaviorSubject(this.plugins_);
    this.tick_ = 0;
    this.undos_ = [];
    this.warned_ = {};
    var detector = new Detector(this);
    hook(function(id) {
      return _this.detect_(id, detector);
    });
    if (typeof window !== "undefined") {
      [options.global || "spy", "rxSpy"].forEach(function(key) {
        if (window.hasOwnProperty(key)) {
          _this.defaultLogger_.log("Overwriting window.".concat(key));
          previousWindow[key] = window[key];
        }
        window[key] = wrap(_this, key === "rxSpy" ? function() {
          return _this.warnOnce(_this.defaultLogger_, "window.".concat(key, " is deprecated and has been renamed; use window.spy instead"));
        } : void 0);
      });
    }
    this.teardown_ = function() {
      if (typeof window !== "undefined") {
        [options.global || "spy", "rxSpy"].forEach(function(key) {
          if (previousWindow.hasOwnProperty(key)) {
            _this.defaultLogger_.log("Restoring window.".concat(key));
            window[key] = previousWindow[key];
            delete previousWindow[key];
          } else {
            delete window[key];
          }
        });
      }
      hook(void 0);
      _this.plugins_.forEach(function(plugin) {
        return plugin.teardown();
      });
      _this.plugins_ = [];
      _this.pluginsSubject_.next(_this.plugins_);
      _this.undos_ = [];
      SpyCore2.spy_ = void 0;
      Observable.prototype.subscribe = observableSubscribe;
    };
  }
  _createClass(SpyCore2, [{
    key: "auditor",
    get: function get5() {
      return this.auditor_;
    }
  }, {
    key: "tick",
    get: function get5() {
      return this.tick_;
    }
  }, {
    key: "undos",
    get: function get5() {
      return _toConsumableArray(this.undos_);
    }
  }, {
    key: "version",
    get: function get5() {
      return "8.0.2";
    }
  }, {
    key: "debug",
    value: function debug(match) {
      for (var _len = arguments.length, notifications = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        notifications[_key - 1] = arguments[_key];
      }
      if (notifications.length === 0) {
        notifications = ["complete", "error", "next", "subscribe", "unsubscribe"];
      }
      return this.plug(new DebugPlugin(match, notifications));
    }
  }, {
    key: "find",
    value: function find(ctor) {
      var found = this.plugins_.find(function(plugin) {
        return plugin instanceof ctor;
      });
      return found ? found : void 0;
    }
  }, {
    key: "findAll",
    value: function findAll(ctor) {
      return ctor ? this.plugins_.filter(function(plugin) {
        return plugin instanceof ctor;
      }) : this.plugins_;
    }
  }, {
    key: "flush",
    value: function flush() {
      this.plugins_.forEach(function(plugin) {
        return plugin.flush();
      });
    }
  }, {
    key: "let",
    value: function _let(match, select, options) {
      return this.plug(new LetPlugin(match, select, options));
    }
  }, {
    key: "log",
    value: function log() {
      var tagMatch = /.+/;
      var notificationMatch = /.+/;
      var partialLogger = this.defaultLogger_;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (args.length === 1) {
        var arg = args[0];
        if (typeof arg.log === "function") {
          partialLogger = arg;
        } else {
          tagMatch = arg;
        }
      } else if (args.length === 2) {
        var _arg;
        tagMatch = args[0];
        _arg = args[1];
        if (typeof _arg.log === "function") {
          partialLogger = _arg;
        } else {
          notificationMatch = _arg;
        }
      } else if (args.length === 3) {
        tagMatch = args[0];
        notificationMatch = args[1];
        partialLogger = args[2];
      }
      return this.plug(new LogPlugin(this, tagMatch, notificationMatch, partialLogger));
    }
  }, {
    key: "maxLogged",
    value: function maxLogged(value) {
      this.maxLogged_ = Math.max(value, 1);
    }
  }, {
    key: "pause",
    value: function pause(match) {
      var pausePlugin = new PausePlugin(match);
      var teardown = this.plug(pausePlugin);
      var deck = pausePlugin.deck;
      deck.teardown = teardown;
      return deck;
    }
  }, {
    key: "plug",
    value: function plug() {
      var _this$plugins_, _this$undos_, _this2 = this;
      for (var _len3 = arguments.length, plugins = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        plugins[_key3] = arguments[_key3];
      }
      (_this$plugins_ = this.plugins_).push.apply(_this$plugins_, plugins);
      this.pluginsSubject_.next(this.plugins_);
      (_this$undos_ = this.undos_).push.apply(_this$undos_, plugins);
      return function() {
        return _this2.unplug.apply(_this2, plugins);
      };
    }
  }, {
    key: "query",
    value: function query(predicate, partialLogger) {
      var _this3 = this;
      var snapshotPlugin = this.find(SnapshotPlugin);
      if (!snapshotPlugin) {
        this.warnOnce(console, "Snapshotting is not enabled.");
        return;
      }
      var snapshot = snapshotPlugin.snapshotAll();
      var observableSnapshots = Array.from(snapshot.observables.values());
      var logger = toLogger(partialLogger || this.defaultLogger_);
      snapshot.mapStackTraces(observableSnapshots).subscribe(function() {
        var found = [];
        observableSnapshots.forEach(function(observableSnapshot) {
          var find;
          var subscriptions = observableSnapshot.subscriptions;
          subscriptions.forEach(function(subscriptionSnapshot) {
            var subscriberSnapshot = snapshot.subscribers.get(subscriptionSnapshot.subscriber);
            if (subscriberSnapshot) {
              if (predicate({
                complete: subscriptionSnapshot.complete,
                error: subscriptionSnapshot.error,
                incomplete: !subscriptionSnapshot.complete && !subscriptionSnapshot.error,
                path: observableSnapshot.path,
                root: subscriptionSnapshot.sink === subscriptionSnapshot.rootSink,
                tag: observableSnapshot.tag,
                type: observableSnapshot.type,
                unsubscribed: subscriptionSnapshot.unsubscribed
              })) {
                if (!find) {
                  find = {
                    observable: observableSnapshot,
                    subs: []
                  };
                }
                find.subs.push({
                  subscriber: subscriberSnapshot,
                  subscription: subscriptionSnapshot
                });
              }
            }
          });
          if (find) {
            found.push(find);
          }
        });
        var maxLogged_ = _this3.maxLogged_;
        var notLogged = found.length > maxLogged_ ? found.length - maxLogged_ : 0;
        if (notLogged) {
          found.splice(maxLogged_, notLogged);
        }
        logger.group("".concat(found.length + notLogged, " snapshot(s) found"));
        var observableGroupMethod = found.length > 3 ? "groupCollapsed" : "group";
        found.forEach(function(find) {
          var observableSnapshot = find.observable;
          logger[observableGroupMethod].call(logger, observableSnapshot.tag ? "Tag = ".concat(observableSnapshot.tag) : "Type = ".concat(observableSnapshot.type));
          logger.log("Path =", observableSnapshot.path);
          var subs = find.subs;
          var subscriberGroupMethod = find.subs.length > 3 ? "groupCollapsed" : "group";
          logger.group("".concat(subs.length, " subscriber(s)"));
          subs.forEach(function(sub) {
            var subscriptionSnapshot = sub.subscription;
            var subscriberSnapshot = sub.subscriber;
            var values = subscriberSnapshot.values, valuesFlushed = subscriberSnapshot.valuesFlushed;
            logger[subscriberGroupMethod].call(logger, "Subscriber");
            logger.log("Value count =", values.length + valuesFlushed);
            if (values.length > 0) {
              logger.log("Last value =", values[values.length - 1].value);
            }
            logSubscription(logger, subscriptionSnapshot);
            var otherSubscriptions = Array.from(subscriberSnapshot.subscriptions.values()).filter(function(otherSubscriptionSnapshot) {
              return otherSubscriptionSnapshot !== subscriptionSnapshot;
            });
            otherSubscriptions.forEach(function(otherSubscriptionSnapshot) {
              logger.groupCollapsed("Other subscription");
              logSubscription(logger, otherSubscriptionSnapshot);
              logger.groupEnd();
            });
            logger.groupEnd();
          });
          logger.groupEnd();
          logger.groupEnd();
        });
        if (notLogged) {
          logger.log("... another ".concat(notLogged, " snapshot(s) not logged."));
        }
        logger.groupEnd();
      });
    }
  }, {
    key: "show",
    value: function show(match, partialLogger) {
      var anyTagged = /.+/;
      if (!match) {
        match = anyTagged;
      } else if (typeof match.log === "function") {
        partialLogger = match;
        match = anyTagged;
      }
      var snapshotPlugin = this.find(SnapshotPlugin);
      if (!snapshotPlugin) {
        this.warnOnce(console, "Snapshotting is not enabled.");
        return;
      }
      var snapshot = snapshotPlugin.snapshotAll();
      var matched = Array.from(snapshot.observables.values()).filter(function(observableSnapshot) {
        return matches(observableSnapshot.observable, match);
      });
      var logger = toLogger(partialLogger || this.defaultLogger_);
      var maxLogged_ = this.maxLogged_;
      var notLogged = matched.length > maxLogged_ ? matched.length - maxLogged_ : 0;
      if (notLogged) {
        matched.splice(maxLogged_, notLogged);
      }
      snapshot.mapStackTraces(matched).subscribe(function() {
        logger.group("".concat(matched.length + notLogged, " snapshot(s) matching ").concat(toString(match)));
        var observableGroupMethod = matched.length > 3 ? "groupCollapsed" : "group";
        matched.forEach(function(observableSnapshot) {
          logger[observableGroupMethod].call(logger, observableSnapshot.tag ? "Tag = ".concat(observableSnapshot.tag) : "Type = ".concat(observableSnapshot.type));
          logger.log("Path =", observableSnapshot.path);
          var subscriptions = observableSnapshot.subscriptions;
          var subscriberGroupMethod = subscriptions.size > 3 ? "groupCollapsed" : "group";
          logger.group("".concat(subscriptions.size, " subscriber(s)"));
          subscriptions.forEach(function(subscriptionSnapshot) {
            var subscriberSnapshot = snapshot.subscribers.get(subscriptionSnapshot.subscriber);
            if (subscriberSnapshot) {
              var values = subscriberSnapshot.values, valuesFlushed = subscriberSnapshot.valuesFlushed;
              logger[subscriberGroupMethod].call(logger, "Subscriber");
              logger.log("Value count =", values.length + valuesFlushed);
              if (values.length > 0) {
                logger.log("Last value =", values[values.length - 1].value);
              }
              logSubscription(logger, subscriptionSnapshot);
              var otherSubscriptions = Array.from(subscriberSnapshot.subscriptions.values()).filter(function(otherSubscriptionSnapshot) {
                return otherSubscriptionSnapshot !== subscriptionSnapshot;
              });
              otherSubscriptions.forEach(function(otherSubscriptionSnapshot) {
                logger.groupCollapsed("Other subscription");
                logSubscription(logger, otherSubscriptionSnapshot);
                logger.groupEnd();
              });
              logger.groupEnd();
            } else {
              logger.warn("Cannot find subscriber snapshot");
            }
          });
          logger.groupEnd();
          logger.groupEnd();
        });
        if (notLogged) {
          logger.log("... another ".concat(notLogged, " snapshot(s) not logged."));
        }
        logger.groupEnd();
      });
    }
  }, {
    key: "stats",
    value: function stats(partialLogger) {
      var statsPlugin = this.find(StatsPlugin);
      if (!statsPlugin) {
        this.warnOnce(console, "Stats are not enabled.");
        return;
      }
      var stats2 = statsPlugin.stats;
      var leafSubscribes = stats2.leafSubscribes, maxDepth = stats2.maxDepth, flattenedSubscribes = stats2.flattenedSubscribes, rootSubscribes = stats2.rootSubscribes, totalDepth = stats2.totalDepth;
      var logger = toLogger(partialLogger || this.defaultLogger_);
      logger.group("Stats");
      logger.log("Subscribes =", stats2.subscribes);
      if (rootSubscribes > 0) {
        logger.log("Root subscribes =", rootSubscribes);
      }
      if (leafSubscribes > 0) {
        logger.log("Leaf subscribes =", leafSubscribes);
      }
      if (flattenedSubscribes > 0) {
        logger.log("Flattened subscribes =", flattenedSubscribes);
      }
      logger.log("Unsubscribes =", stats2.unsubscribes);
      logger.log("Nexts =", stats2.nexts);
      logger.log("Errors =", stats2.errors);
      logger.log("Completes =", stats2.completes);
      if (maxDepth > 0) {
        logger.log("Max. depth =", maxDepth);
        logger.log("Avg. depth =", (totalDepth / leafSubscribes).toFixed(1));
      }
      logger.log("Tick =", stats2.tick);
      logger.log("Timespan =", stats2.timespan);
      logger.groupEnd();
    }
  }, {
    key: "teardown",
    value: function teardown() {
      if (this.teardown_) {
        this.teardown_();
        this.teardown_ = void 0;
      }
    }
  }, {
    key: "unplug",
    value: function unplug() {
      var _this4 = this;
      for (var _len4 = arguments.length, plugins = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        plugins[_key4] = arguments[_key4];
      }
      plugins.forEach(function(plugin) {
        plugin.teardown();
        _this4.plugins_ = _this4.plugins_.filter(function(p) {
          return p !== plugin;
        });
        _this4.pluginsSubject_.next(_this4.plugins_);
        _this4.undos_ = _this4.undos_.filter(function(u) {
          return u !== plugin;
        });
      });
    }
    /** @deprecated Use warnOnce */
  }, {
    key: "warn",
    value: function warn(logger, message) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        args[_key5 - 2] = arguments[_key5];
      }
      this.warnOnce.apply(this, [logger, message].concat(args));
    }
  }, {
    key: "warnOnce",
    value: function warnOnce(logger, message) {
      if (!this.warned_[message]) {
        var _toLogger;
        for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
          args[_key6 - 2] = arguments[_key6];
        }
        (_toLogger = toLogger(logger)).warn.apply(_toLogger, [message].concat(args));
        this.warned_[message] = true;
      }
    }
    /*tslint:disable-next-line:member-ordering*/
  }, {
    key: "detect_",
    value: function detect_(id, detector) {
      var auditor_ = this.auditor_, defaultLogger_ = this.defaultLogger_;
      auditor_.audit(id, function(ignored) {
        var detected = detector.detect(id);
        var logger = toLogger(defaultLogger_);
        if (detected) {
          var audit = ignored === 0 ? "" : "; ignored ".concat(ignored);
          logger.group("Subscription changes detected; id = '".concat(id, "'").concat(audit));
          detected.subscriptions.forEach(function(s) {
            logSubscription2(logger, "Subscription", s);
          });
          detected.unsubscriptions.forEach(function(s) {
            logSubscription2(logger, "Unsubscription", s);
          });
          detected.flatteningSubscriptions.forEach(function(s) {
            logSubscription2(logger, "Flattening subscription", s);
          });
          detected.flatteningUnsubscriptions.forEach(function(s) {
            logSubscription2(logger, "Flattening unsubscription", s);
          });
          logger.groupEnd();
        }
        function logSubscription2(logger2, name, subscription) {
          logger2.group(name);
          logger2.log("Root subscribe", subscription.rootSink ? subscription.rootSink.stackTrace : subscription.stackTrace);
          logger2.log("Subscribe", subscription.stackTrace);
          logger2.groupEnd();
        }
      });
    }
  }], [{
    key: "coreSubscribe_",
    value: function coreSubscribe_() {
      var observable3 = this;
      var spy_ = SpyCore2.spy_;
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      if (!spy_) {
        return observableSubscribe.apply(observable3, args);
      }
      if (hidden(observable3)) {
        SpyCore2.spy_ = void 0;
        try {
          return observableSubscribe.apply(observable3, args);
        } finally {
          SpyCore2.spy_ = spy_;
        }
      }
      var notify_ = function notify_2(before, block, after) {
        ++spy_.tick_;
        spy_.plugins_.forEach(before);
        block();
        spy_.plugins_.forEach(after);
      };
      var subscriber = toSubscriber.apply(void 0, args);
      var ref = {
        observable: observable3,
        subscriber,
        subscription: new Subscription(),
        timestamp: Date.now(),
        unsubscribed: false
      };
      identify(observable3);
      identify(subscriber);
      identify(ref);
      var subscriberUnsubscribe = subscriber.unsubscribe;
      subscriber.unsubscribe = function() {
        if (!subscriber.closed) {
          notify_(function(plugin) {
            return plugin.beforeUnsubscribe(ref);
          }, function() {
            ref.subscription.unsubscribe();
            ref.unsubscribed = true;
            subscriberUnsubscribe.call(subscriber);
          }, function(plugin) {
            return plugin.afterUnsubscribe(ref);
          });
        } else {
          subscriberUnsubscribe.call(subscriber);
        }
      };
      var postSelectObserver = {
        complete: function complete() {
          notify_(function(plugin) {
            return plugin.beforeComplete(ref);
          }, function() {
            return subscriber.complete();
          }, function(plugin) {
            return plugin.afterComplete(ref);
          });
        },
        error: function error(_error) {
          notify_(function(plugin) {
            return plugin.beforeError(ref, _error);
          }, function() {
            return subscriber.error(_error);
          }, function(plugin) {
            return plugin.afterError(ref, _error);
          });
        },
        next: function next(value) {
          notify_(function(plugin) {
            return plugin.beforeNext(ref, value);
          }, function() {
            return subscriber.next(value);
          }, function(plugin) {
            return plugin.afterNext(ref, value);
          });
        }
      };
      var preSelectObserver = {
        complete: function complete() {
          this.completed = true;
          if (this.preSelectSubject) {
            this.preSelectSubject.complete();
          } else {
            this.postSelectObserver.complete();
          }
        },
        completed: false,
        error: function error(_error2) {
          this.errored = true;
          if (this.preSelectSubject) {
            this.preSelectSubject.error(_error2);
          } else {
            this.postSelectObserver.error(_error2);
          }
        },
        errored: false,
        "let": function _let(plugins) {
          var selectors = plugins.map(function(plugin) {
            return plugin.select(ref);
          }).filter(Boolean);
          if (selectors.length > 0) {
            if (!this.preSelectSubject) {
              this.preSelectSubject = new Subject();
            }
            if (this.postSelectSubscription) {
              this.postSelectSubscription.unsubscribe();
            }
            var _source = this.preSelectSubject.asObservable();
            selectors.forEach(function(selector) {
              return _source = selector(_source);
            });
            this.postSelectSubscription = _source.pipe(hide()).subscribe(postSelectObserver);
          } else if (this.postSelectSubscription) {
            this.postSelectSubscription.unsubscribe();
            this.postSelectSubscription = void 0;
            this.preSelectSubject = void 0;
          }
        },
        next: function next(value) {
          if (this.preSelectSubject) {
            this.preSelectSubject.next(value);
          } else {
            this.postSelectObserver.next(value);
          }
        },
        postSelectObserver,
        postSelectSubscription: void 0,
        preSelectSubject: void 0,
        unsubscribe: function unsubscribe() {
          if (!this.unsubscribed) {
            this.unsubscribed = true;
            if (!this.completed && !this.errored) {
              if (this.postSelectSubscription) {
                this.postSelectSubscription.unsubscribe();
                this.postSelectSubscription = void 0;
              }
            }
          }
        },
        unsubscribed: false
      };
      subscriber.add(spy_.pluginsSubject_.pipe(hide()).subscribe({
        next: function next(plugins) {
          return preSelectObserver["let"](plugins);
        }
      }));
      notify_(function(plugin) {
        return plugin.beforeSubscribe(ref);
      }, function() {
        subscriber.add(observableSubscribe.call(observable3, preSelectObserver));
        subscriber.add(function() {
          return preSelectObserver.unsubscribe();
        });
      }, function(plugin) {
        return plugin.afterSubscribe(ref);
      });
      return subscriber;
    }
  }]);
  return SpyCore2;
}();
_defineProperty(SpyCore, "spy_", void 0);
function logStackTrace(logger, subscriptionSnapshot) {
  var mappedStackTrace = subscriptionSnapshot.mappedStackTrace, rootSink = subscriptionSnapshot.rootSink;
  var mapped = rootSink ? rootSink.mappedStackTrace : mappedStackTrace;
  mapped.subscribe(function(stackTrace) {
    return logger.log("Root subscribe", stackTrace);
  });
}
function logSubscription(logger, subscriptionSnapshot) {
  var complete = subscriptionSnapshot.complete, error = subscriptionSnapshot.error, unsubscribed = subscriptionSnapshot.unsubscribed;
  logger.log("State =", complete ? "complete" : error ? "error" : "incomplete");
  if (error) {
    logger.error("Error =", error);
  }
  if (unsubscribed) {
    logger.log("Unsubscribed =", true);
  }
  logStackTrace(logger, subscriptionSnapshot);
}
function create() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return new SpyCore(options);
}

// src/nav-bar.tsx
function NavBar({ router }) {
  const homeClassName = router.page.pipe(
    map((page) => page === "home" ? "active" : "")
  );
  const aboutClassName = router.page.pipe(
    map((page) => page === "about" ? "active" : "")
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
  ), /* @__PURE__ */ jsx("a", { className: "navbar-brand", href: "#" }, "macrotx")), /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse" }, /* @__PURE__ */ jsx("ul", { className: "nav navbar-nav" }, /* @__PURE__ */ jsx("li", { bind: { className: homeClassName } }, /* @__PURE__ */ jsx("a", { href: "#" }, "Home")), /* @__PURE__ */ jsx("li", { bind: { className: aboutClassName } }, /* @__PURE__ */ jsx("a", { href: "#about" }, "About"))))));
}

// src/pages/home.tsx
function HomePage() {
  return /* @__PURE__ */ jsx("div", { className: "jumbotron" }, /* @__PURE__ */ jsx("h1", null, "Macro Transaction Force Go!"), /* @__PURE__ */ jsx("p", null, "For as long as you can remember you've wanted to be a member of the universe-renowned Macro Transaction Force, one of the most elite forces in the galaxy. Their barrier to entry is rather high, but everyone knows it must be worth it."), /* @__PURE__ */ jsx("a", { className: "btn btn-primary", href: "#play" }, "Play the Game"));
}

// src/pages/about.tsx
function AboutPage() {
  return /* @__PURE__ */ jsx(Fragment, null, /* @__PURE__ */ jsx("h1", null, "About"), /* @__PURE__ */ jsx("p", null, /* @__PURE__ */ jsx("em", null, "Macro Transaction Force Go!"), " is a serious study in", " ", /* @__PURE__ */ jsx("a", { href: "http://itch.io/jam/ruinjam2014" }, "the ruination of videogames"), " ", "by ", /* @__PURE__ */ jsx("a", { href: "http://worldmaker.net" }, "Max Battcher"), "."), /* @__PURE__ */ jsx("p", null, "Nothing quite says ", /* @__PURE__ */ jsx("strong", null, "videogames"), " like a custom engine, because why should we share our nice toys? This unnamed semi-proprietary TypeScript game engine is cobbled together (in 2023) with", " ", /* @__PURE__ */ jsx("a", { href: "https://github.com/WorldMaker/butterfloat" }, "Butterfloat"), " ", "components."));
}

// node_modules/rxjs-spy/esm/operators/index.js
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  return Constructor;
}
function _defineProperty2(obj, key, value) {
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
    _classCallCheck2(this, TagOperator2);
    _defineProperty2(this, "tag", void 0);
    this.tag = tag2;
  }
  _createClass2(TagOperator2, [{
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
  return /* @__PURE__ */ jsx("div", { className: "list-group" }, /* @__PURE__ */ jsx("div", { className: "list-group-item disabled" }, /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Fight!", " ", /* @__PURE__ */ jsx("span", { className: "label label-primary" }, "6000 ", /* @__PURE__ */ jsx("span", { className: "fa fa-btc" }))), /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "This would clearly be an amazing boss battle full of trying to find a weak point, exploiting said weak point, and then repeating those steps at least two more times.")), /* @__PURE__ */ jsx(
    "a",
    {
      className: "list-group-item",
      href: "#",
      "data-bind": "click: nextTea",
      events: { click: nextTea }
    },
    /* @__PURE__ */ jsx("h4", { className: "list-group-item-heading" }, "Invite to Tea"),
    /* @__PURE__ */ jsx("p", { className: "list-group-item-text" }, "It may not be your office, but there's no reason to be uncivil even to an uninvited guest.")
  ));
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
        hour12: false
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
create();
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
var container = document.getElementById("container");
run(container, Main);
/*! Bundled license information:

rxjs-spy/esm/index.js:
  (**
   * @license Use of this source code is governed by an MIT-style license that
   * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
   *)

rxjs-spy/esm/index.js:
  (**
   * @license Use of this source code is governed by an MIT-style license that
   * can be found in the LICENSE file at https://github.com/cartant/rxjs-spy
   *)

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
