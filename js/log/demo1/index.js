/**
 *
 * @authors liwb (lwbhtml@163.com)
 * @date    2019-04-30 15:55
 * @description
 * @version 1.0.0
 */

var StringUtil = function () {
  return {
    format: function (n, r) {
      return n.replace(/\{(\d+)\}/g, function (n, t) {
        return typeof r[t] != 'undefined' ? r[t] : n;
      });
    }, hashCode: function (n) {
      if (typeof n != 'string') return 'not string';
      var r = 0;
      if (n.length === 0) return r;
      for (i = 0; i < n.length; i++) {
        r = (r << 5) - r + n.charCodeAt(i);
        r = r & r;
      }
      return r;
    }
  };
}();

var Log = function (isLog) {
  var now = new Date;
  var dev, prod, logModel;
  if (typeof window !== 'undefined') {
    var logType = ['debug', 'info', 'warn', 'error'];
    var f = ['assert', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'];
    if (!window.console) {
      window.console = {};
    }
    if (!window.console.log) {
      window.console.log = function () {
      };
    }
    for (var i = 0; i < f.length; ++i) {
      if (!window.console[f[i]]) {
        window.console[f[i]] = function () {
        };
      }
    }
    for (var i = 0; i < logType.length; ++i) {
      if (!window.console[logType[i]]) {
        window.console[logType[i]] = window.console.log;
      }
    }
  }
  dev = {
    DEBUG: function (msg) {
      console.debug(msg); // 这里如果上面初始化失败不能使用可直接将这里改为 console.log
    }, INFO: function (msg) {
      console.info(msg);
    }, WARN: function (msg) {
      console.warn(msg);
    }, ERROR: function (msg) {
      console.error(msg);
    }
  };
  //生产环境中使用任需要打印日志可在这里做相应的修改
  prod = {
    DEBUG: function (msg) {
    }, INFO: function (msg) {
    }, WARN: function (msg) {
    }, ERROR: function (msg) {
    }
  };
  logModel = isLog ? dev : prod;
  var s;
  var u;
  var c = [];
  var oldDate = now;

  function l(n) {
    var newDate = new Date;
    var timeStamp = newDate - oldDate;
    var message = timeStamp > 150 ? timeStamp + '(ms): ' + n.msg : n.msg;
    try {
      logModel[n.type](message);
    } catch (e) {
      return;
    }
    oldDate = newDate;
  }

  function d(n) {
    if (Object.prototype.toString.call(n) === '[object Array]') {
      var o = '[';
      for (var r = 0; r < n.length; r++) {
        o = o + d(n[r]) + ',';
      }
      return o + ']';
    } else {
      return StringUtil.hashCode(n);
    }
  }

  function w(n) {
    if (n.length == 0) return null;
    var o = n[0];
    if (typeof o != 'string') {
      throw 'not a string: ' + o;
    }
    var r = [];
    for (var t = 1; t < n.length; t++) {
      var i = n[t];
      r.push(typeof i == 'object' ? JSON.stringify(i, function (n, o) {
        if (typeof n == 'string') {
          var r = n.toLowerCase();
          return r.indexOf('password') != -1 || r == 'value' && (this.key == 'p' || this.type == 'password') ? d(o) : o;
        }
        return o;
      }) : i);
    }
    return StringUtil.format(o, r);
  }

  function v(logType, o) {
    var r = {
      type: logType,
      msg: w(o)
    };
    l(r);
    if (u == undefined) {
      c.push(r);
    } else if (u && u.passwords) {
      c.push(r);
      var t = u.passwords;
      for (var i = 0; i < t.length; i++) {
        var e = t[i];
        if ('password'.indexOf(e) != -1) {
          continue;
        }
        if (r.msg.indexOf(e) != -1) {
          var f = 'audit fail for: ' + e;
          l({
            type: 'ERROR',
            msg: f
          });
          throw f;
        }
      }
    }
  }

  return {
    setLogging: function (isLogging) {
      logModel = isLogging ? dev : prod;
    }, skipAudit: function () {
      l({
        type: 'DEBUG',
        msg: w(arguments)
      });
    }, debug: function () {
      v('DEBUG', arguments);
    }, info: function () {
      v('INFO', arguments);
    }, warn: function () {
      v('WARN', arguments);
    }, error: function () {
      v('ERROR', arguments);
    }, getAuditString: function () {
      var n = [];
      for (var o = 0; o < c.length; o++) {
        var r = c[o];
        n.push(r.type + ':' + r.msg);
      }
      return n.join('\n');
    }, init: function (flag) {
      u = flag;
      if (u === false) {
        c = [];
      }
    }
  };
}(islog);// boolean类型参数 全局控制是否打印日志

// Log.info("logging info: " + "message");
// Log.warn("log warn： " + "message");
// Log.error("log error: " + message);
// Log.debug("debug message");
