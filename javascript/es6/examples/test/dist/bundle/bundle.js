(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

!function (t) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    var n;n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, n.bongiovi = t();
  }
}(function () {
  return function t(n, r, e) {
    function a(u, i) {
      if (!r[u]) {
        if (!n[u]) {
          var c = "function" == typeof require && require;if (!i && c) return c(u, !0);if (o) return o(u, !0);var f = new Error("Cannot find module '" + u + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var s = r[u] = { exports: {} };n[u][0].call(s.exports, function (t) {
          var r = n[u][1][t];return a(r ? r : t);
        }, s, s.exports, t, n, r, e);
      }return r[u].exports;
    }for (var o = "function" == typeof require && require, u = 0; u < e.length; u++) {
      a(e[u]);
    }return a;
  }({ 1: [function (t, n, r) {
      r.glMatrix = t("./gl-matrix/common.js"), r.mat2 = t("./gl-matrix/mat2.js"), r.mat2d = t("./gl-matrix/mat2d.js"), r.mat3 = t("./gl-matrix/mat3.js"), r.mat4 = t("./gl-matrix/mat4.js"), r.quat = t("./gl-matrix/quat.js"), r.vec2 = t("./gl-matrix/vec2.js"), r.vec3 = t("./gl-matrix/vec3.js"), r.vec4 = t("./gl-matrix/vec4.js");
    }, { "./gl-matrix/common.js": 2, "./gl-matrix/mat2.js": 3, "./gl-matrix/mat2d.js": 4, "./gl-matrix/mat3.js": 5, "./gl-matrix/mat4.js": 6, "./gl-matrix/quat.js": 7, "./gl-matrix/vec2.js": 8, "./gl-matrix/vec3.js": 9, "./gl-matrix/vec4.js": 10 }], 2: [function (t, n, r) {
      var e = {};e.EPSILON = 1e-6, e.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, e.RANDOM = Math.random, e.setMatrixArrayType = function (t) {
        GLMAT_ARRAY_TYPE = t;
      };var a = Math.PI / 180;e.toRadian = function (t) {
        return t * a;
      }, n.exports = e;
    }, {}], 3: [function (t, n, r) {
      var e = t("./common.js"),
          a = {};a.create = function () {
        var t = new e.ARRAY_TYPE(4);return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
      }, a.clone = function (t) {
        var n = new e.ARRAY_TYPE(4);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n;
      }, a.copy = function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t;
      }, a.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
      }, a.transpose = function (t, n) {
        if (t === n) {
          var r = n[1];t[1] = n[2], t[2] = r;
        } else t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3];return t;
      }, a.invert = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = n[3],
            u = r * o - a * e;return u ? (u = 1 / u, t[0] = o * u, t[1] = -e * u, t[2] = -a * u, t[3] = r * u, t) : null;
      }, a.adjoint = function (t, n) {
        var r = n[0];return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = r, t;
      }, a.determinant = function (t) {
        return t[0] * t[3] - t[2] * t[1];
      }, a.multiply = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = r[0],
            c = r[1],
            f = r[2],
            s = r[3];return t[0] = e * i + o * c, t[1] = a * i + u * c, t[2] = e * f + o * s, t[3] = a * f + u * s, t;
      }, a.mul = a.multiply, a.rotate = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = Math.sin(r),
            c = Math.cos(r);return t[0] = e * c + o * i, t[1] = a * c + u * i, t[2] = e * -i + o * c, t[3] = a * -i + u * c, t;
      }, a.scale = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = r[0],
            c = r[1];return t[0] = e * i, t[1] = a * i, t[2] = o * c, t[3] = u * c, t;
      }, a.fromRotation = function (t, n) {
        var r = Math.sin(n),
            e = Math.cos(n);return t[0] = e, t[1] = r, t[2] = -r, t[3] = e, t;
      }, a.fromScaling = function (t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t;
      }, a.str = function (t) {
        return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }, a.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2));
      }, a.LDU = function (t, n, r, e) {
        return t[2] = e[2] / e[0], r[0] = e[0], r[1] = e[1], r[3] = e[3] - t[2] * r[1], [t, n, r];
      }, n.exports = a;
    }, { "./common.js": 2 }], 4: [function (t, n, r) {
      var e = t("./common.js"),
          a = {};a.create = function () {
        var t = new e.ARRAY_TYPE(6);return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
      }, a.clone = function (t) {
        var n = new e.ARRAY_TYPE(6);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n;
      }, a.copy = function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t;
      }, a.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
      }, a.invert = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = n[3],
            u = n[4],
            i = n[5],
            c = r * o - e * a;return c ? (c = 1 / c, t[0] = o * c, t[1] = -e * c, t[2] = -a * c, t[3] = r * c, t[4] = (a * i - o * u) * c, t[5] = (e * u - r * i) * c, t) : null;
      }, a.determinant = function (t) {
        return t[0] * t[3] - t[1] * t[2];
      }, a.multiply = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = n[4],
            c = n[5],
            f = r[0],
            s = r[1],
            l = r[2],
            m = r[3],
            h = r[4],
            v = r[5];return t[0] = e * f + o * s, t[1] = a * f + u * s, t[2] = e * l + o * m, t[3] = a * l + u * m, t[4] = e * h + o * v + i, t[5] = a * h + u * v + c, t;
      }, a.mul = a.multiply, a.rotate = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = n[4],
            c = n[5],
            f = Math.sin(r),
            s = Math.cos(r);return t[0] = e * s + o * f, t[1] = a * s + u * f, t[2] = e * -f + o * s, t[3] = a * -f + u * s, t[4] = i, t[5] = c, t;
      }, a.scale = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = n[4],
            c = n[5],
            f = r[0],
            s = r[1];return t[0] = e * f, t[1] = a * f, t[2] = o * s, t[3] = u * s, t[4] = i, t[5] = c, t;
      }, a.translate = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = n[4],
            c = n[5],
            f = r[0],
            s = r[1];return t[0] = e, t[1] = a, t[2] = o, t[3] = u, t[4] = e * f + o * s + i, t[5] = a * f + u * s + c, t;
      }, a.fromRotation = function (t, n) {
        var r = Math.sin(n),
            e = Math.cos(n);return t[0] = e, t[1] = r, t[2] = -r, t[3] = e, t[4] = 0, t[5] = 0, t;
      }, a.fromScaling = function (t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t[4] = 0, t[5] = 0, t;
      }, a.fromTranslation = function (t, n) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n[0], t[5] = n[1], t;
      }, a.str = function (t) {
        return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
      }, a.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1);
      }, n.exports = a;
    }, { "./common.js": 2 }], 5: [function (t, n, r) {
      var e = t("./common.js"),
          a = {};a.create = function () {
        var t = new e.ARRAY_TYPE(9);return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
      }, a.fromMat4 = function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], t[6] = n[8], t[7] = n[9], t[8] = n[10], t;
      }, a.clone = function (t) {
        var n = new e.ARRAY_TYPE(9);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n;
      }, a.copy = function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t;
      }, a.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
      }, a.transpose = function (t, n) {
        if (t === n) {
          var r = n[1],
              e = n[2],
              a = n[5];t[1] = n[3], t[2] = n[6], t[3] = r, t[5] = n[7], t[6] = e, t[7] = a;
        } else t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8];return t;
      }, a.invert = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = n[3],
            u = n[4],
            i = n[5],
            c = n[6],
            f = n[7],
            s = n[8],
            l = s * u - i * f,
            m = -s * o + i * c,
            h = f * o - u * c,
            v = r * l + e * m + a * h;return v ? (v = 1 / v, t[0] = l * v, t[1] = (-s * e + a * f) * v, t[2] = (i * e - a * u) * v, t[3] = m * v, t[4] = (s * r - a * c) * v, t[5] = (-i * r + a * o) * v, t[6] = h * v, t[7] = (-f * r + e * c) * v, t[8] = (u * r - e * o) * v, t) : null;
      }, a.adjoint = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = n[3],
            u = n[4],
            i = n[5],
            c = n[6],
            f = n[7],
            s = n[8];return t[0] = u * s - i * f, t[1] = a * f - e * s, t[2] = e * i - a * u, t[3] = i * c - o * s, t[4] = r * s - a * c, t[5] = a * o - r * i, t[6] = o * f - u * c, t[7] = e * c - r * f, t[8] = r * u - e * o, t;
      }, a.determinant = function (t) {
        var n = t[0],
            r = t[1],
            e = t[2],
            a = t[3],
            o = t[4],
            u = t[5],
            i = t[6],
            c = t[7],
            f = t[8];return n * (f * o - u * c) + r * (-f * a + u * i) + e * (c * a - o * i);
      }, a.multiply = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = n[4],
            c = n[5],
            f = n[6],
            s = n[7],
            l = n[8],
            m = r[0],
            h = r[1],
            v = r[2],
            M = r[3],
            d = r[4],
            p = r[5],
            g = r[6],
            A = r[7],
            w = r[8];return t[0] = m * e + h * u + v * f, t[1] = m * a + h * i + v * s, t[2] = m * o + h * c + v * l, t[3] = M * e + d * u + p * f, t[4] = M * a + d * i + p * s, t[5] = M * o + d * c + p * l, t[6] = g * e + A * u + w * f, t[7] = g * a + A * i + w * s, t[8] = g * o + A * c + w * l, t;
      }, a.mul = a.multiply, a.translate = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = n[4],
            c = n[5],
            f = n[6],
            s = n[7],
            l = n[8],
            m = r[0],
            h = r[1];return t[0] = e, t[1] = a, t[2] = o, t[3] = u, t[4] = i, t[5] = c, t[6] = m * e + h * u + f, t[7] = m * a + h * i + s, t[8] = m * o + h * c + l, t;
      }, a.rotate = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = n[4],
            c = n[5],
            f = n[6],
            s = n[7],
            l = n[8],
            m = Math.sin(r),
            h = Math.cos(r);return t[0] = h * e + m * u, t[1] = h * a + m * i, t[2] = h * o + m * c, t[3] = h * u - m * e, t[4] = h * i - m * a, t[5] = h * c - m * o, t[6] = f, t[7] = s, t[8] = l, t;
      }, a.scale = function (t, n, r) {
        var e = r[0],
            a = r[1];return t[0] = e * n[0], t[1] = e * n[1], t[2] = e * n[2], t[3] = a * n[3], t[4] = a * n[4], t[5] = a * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t;
      }, a.fromTranslation = function (t, n) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n[0], t[7] = n[1], t[8] = 1, t;
      }, a.fromRotation = function (t, n) {
        var r = Math.sin(n),
            e = Math.cos(n);return t[0] = e, t[1] = r, t[2] = 0, t[3] = -r, t[4] = e, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
      }, a.fromScaling = function (t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
      }, a.fromMat2d = function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], t[7] = n[5], t[8] = 1, t;
      }, a.fromQuat = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = n[3],
            u = r + r,
            i = e + e,
            c = a + a,
            f = r * u,
            s = e * u,
            l = e * i,
            m = a * u,
            h = a * i,
            v = a * c,
            M = o * u,
            d = o * i,
            p = o * c;return t[0] = 1 - l - v, t[3] = s - p, t[6] = m + d, t[1] = s + p, t[4] = 1 - f - v, t[7] = h - M, t[2] = m - d, t[5] = h + M, t[8] = 1 - f - l, t;
      }, a.normalFromMat4 = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = n[3],
            u = n[4],
            i = n[5],
            c = n[6],
            f = n[7],
            s = n[8],
            l = n[9],
            m = n[10],
            h = n[11],
            v = n[12],
            M = n[13],
            d = n[14],
            p = n[15],
            g = r * i - e * u,
            A = r * c - a * u,
            w = r * f - o * u,
            R = e * c - a * i,
            q = e * f - o * i,
            x = a * f - o * c,
            y = s * M - l * v,
            j = s * d - m * v,
            Y = s * p - h * v,
            P = l * d - m * M,
            E = l * p - h * M,
            T = m * p - h * d,
            _ = g * T - A * E + w * P + R * Y - q * j + x * y;return _ ? (_ = 1 / _, t[0] = (i * T - c * E + f * P) * _, t[1] = (c * Y - u * T - f * j) * _, t[2] = (u * E - i * Y + f * y) * _, t[3] = (a * E - e * T - o * P) * _, t[4] = (r * T - a * Y + o * j) * _, t[5] = (e * Y - r * E - o * y) * _, t[6] = (M * x - d * q + p * R) * _, t[7] = (d * w - v * x - p * A) * _, t[8] = (v * q - M * w + p * g) * _, t) : null;
      }, a.str = function (t) {
        return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
      }, a.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
      }, n.exports = a;
    }, { "./common.js": 2 }], 6: [function (t, n, r) {
      var e = t("./common.js"),
          a = {};a.create = function () {
        var t = new e.ARRAY_TYPE(16);return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, a.clone = function (t) {
        var n = new e.ARRAY_TYPE(16);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n;
      }, a.copy = function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t;
      }, a.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, a.transpose = function (t, n) {
        if (t === n) {
          var r = n[1],
              e = n[2],
              a = n[3],
              o = n[6],
              u = n[7],
              i = n[11];t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = r, t[6] = n[9], t[7] = n[13], t[8] = e, t[9] = o, t[11] = n[14], t[12] = a, t[13] = u, t[14] = i;
        } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15];return t;
      }, a.invert = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = n[3],
            u = n[4],
            i = n[5],
            c = n[6],
            f = n[7],
            s = n[8],
            l = n[9],
            m = n[10],
            h = n[11],
            v = n[12],
            M = n[13],
            d = n[14],
            p = n[15],
            g = r * i - e * u,
            A = r * c - a * u,
            w = r * f - o * u,
            R = e * c - a * i,
            q = e * f - o * i,
            x = a * f - o * c,
            y = s * M - l * v,
            j = s * d - m * v,
            Y = s * p - h * v,
            P = l * d - m * M,
            E = l * p - h * M,
            T = m * p - h * d,
            _ = g * T - A * E + w * P + R * Y - q * j + x * y;return _ ? (_ = 1 / _, t[0] = (i * T - c * E + f * P) * _, t[1] = (a * E - e * T - o * P) * _, t[2] = (M * x - d * q + p * R) * _, t[3] = (m * q - l * x - h * R) * _, t[4] = (c * Y - u * T - f * j) * _, t[5] = (r * T - a * Y + o * j) * _, t[6] = (d * w - v * x - p * A) * _, t[7] = (s * x - m * w + h * A) * _, t[8] = (u * E - i * Y + f * y) * _, t[9] = (e * Y - r * E - o * y) * _, t[10] = (v * q - M * w + p * g) * _, t[11] = (l * w - s * q - h * g) * _, t[12] = (i * j - u * P - c * y) * _, t[13] = (r * P - e * j + a * y) * _, t[14] = (M * A - v * R - d * g) * _, t[15] = (s * R - l * A + m * g) * _, t) : null;
      }, a.adjoint = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = n[3],
            u = n[4],
            i = n[5],
            c = n[6],
            f = n[7],
            s = n[8],
            l = n[9],
            m = n[10],
            h = n[11],
            v = n[12],
            M = n[13],
            d = n[14],
            p = n[15];return t[0] = i * (m * p - h * d) - l * (c * p - f * d) + M * (c * h - f * m), t[1] = -(e * (m * p - h * d) - l * (a * p - o * d) + M * (a * h - o * m)), t[2] = e * (c * p - f * d) - i * (a * p - o * d) + M * (a * f - o * c), t[3] = -(e * (c * h - f * m) - i * (a * h - o * m) + l * (a * f - o * c)), t[4] = -(u * (m * p - h * d) - s * (c * p - f * d) + v * (c * h - f * m)), t[5] = r * (m * p - h * d) - s * (a * p - o * d) + v * (a * h - o * m), t[6] = -(r * (c * p - f * d) - u * (a * p - o * d) + v * (a * f - o * c)), t[7] = r * (c * h - f * m) - u * (a * h - o * m) + s * (a * f - o * c), t[8] = u * (l * p - h * M) - s * (i * p - f * M) + v * (i * h - f * l), t[9] = -(r * (l * p - h * M) - s * (e * p - o * M) + v * (e * h - o * l)), t[10] = r * (i * p - f * M) - u * (e * p - o * M) + v * (e * f - o * i), t[11] = -(r * (i * h - f * l) - u * (e * h - o * l) + s * (e * f - o * i)), t[12] = -(u * (l * d - m * M) - s * (i * d - c * M) + v * (i * m - c * l)), t[13] = r * (l * d - m * M) - s * (e * d - a * M) + v * (e * m - a * l), t[14] = -(r * (i * d - c * M) - u * (e * d - a * M) + v * (e * c - a * i)), t[15] = r * (i * m - c * l) - u * (e * m - a * l) + s * (e * c - a * i), t;
      }, a.determinant = function (t) {
        var n = t[0],
            r = t[1],
            e = t[2],
            a = t[3],
            o = t[4],
            u = t[5],
            i = t[6],
            c = t[7],
            f = t[8],
            s = t[9],
            l = t[10],
            m = t[11],
            h = t[12],
            v = t[13],
            M = t[14],
            d = t[15],
            p = n * u - r * o,
            g = n * i - e * o,
            A = n * c - a * o,
            w = r * i - e * u,
            R = r * c - a * u,
            q = e * c - a * i,
            x = f * v - s * h,
            y = f * M - l * h,
            j = f * d - m * h,
            Y = s * M - l * v,
            P = s * d - m * v,
            E = l * d - m * M;return p * E - g * P + A * Y + w * j - R * y + q * x;
      }, a.multiply = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = n[4],
            c = n[5],
            f = n[6],
            s = n[7],
            l = n[8],
            m = n[9],
            h = n[10],
            v = n[11],
            M = n[12],
            d = n[13],
            p = n[14],
            g = n[15],
            A = r[0],
            w = r[1],
            R = r[2],
            q = r[3];return t[0] = A * e + w * i + R * l + q * M, t[1] = A * a + w * c + R * m + q * d, t[2] = A * o + w * f + R * h + q * p, t[3] = A * u + w * s + R * v + q * g, A = r[4], w = r[5], R = r[6], q = r[7], t[4] = A * e + w * i + R * l + q * M, t[5] = A * a + w * c + R * m + q * d, t[6] = A * o + w * f + R * h + q * p, t[7] = A * u + w * s + R * v + q * g, A = r[8], w = r[9], R = r[10], q = r[11], t[8] = A * e + w * i + R * l + q * M, t[9] = A * a + w * c + R * m + q * d, t[10] = A * o + w * f + R * h + q * p, t[11] = A * u + w * s + R * v + q * g, A = r[12], w = r[13], R = r[14], q = r[15], t[12] = A * e + w * i + R * l + q * M, t[13] = A * a + w * c + R * m + q * d, t[14] = A * o + w * f + R * h + q * p, t[15] = A * u + w * s + R * v + q * g, t;
      }, a.mul = a.multiply, a.translate = function (t, n, r) {
        var e,
            a,
            o,
            u,
            i,
            c,
            f,
            s,
            l,
            m,
            h,
            v,
            M = r[0],
            d = r[1],
            p = r[2];return n === t ? (t[12] = n[0] * M + n[4] * d + n[8] * p + n[12], t[13] = n[1] * M + n[5] * d + n[9] * p + n[13], t[14] = n[2] * M + n[6] * d + n[10] * p + n[14], t[15] = n[3] * M + n[7] * d + n[11] * p + n[15]) : (e = n[0], a = n[1], o = n[2], u = n[3], i = n[4], c = n[5], f = n[6], s = n[7], l = n[8], m = n[9], h = n[10], v = n[11], t[0] = e, t[1] = a, t[2] = o, t[3] = u, t[4] = i, t[5] = c, t[6] = f, t[7] = s, t[8] = l, t[9] = m, t[10] = h, t[11] = v, t[12] = e * M + i * d + l * p + n[12], t[13] = a * M + c * d + m * p + n[13], t[14] = o * M + f * d + h * p + n[14], t[15] = u * M + s * d + v * p + n[15]), t;
      }, a.scale = function (t, n, r) {
        var e = r[0],
            a = r[1],
            o = r[2];return t[0] = n[0] * e, t[1] = n[1] * e, t[2] = n[2] * e, t[3] = n[3] * e, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = n[11] * o, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t;
      }, a.rotate = function (t, n, r, a) {
        var o,
            u,
            i,
            c,
            f,
            s,
            l,
            m,
            h,
            v,
            M,
            d,
            p,
            g,
            A,
            w,
            R,
            q,
            x,
            y,
            j,
            Y,
            P,
            E,
            T = a[0],
            _ = a[1],
            b = a[2],
            D = Math.sqrt(T * T + _ * _ + b * b);return Math.abs(D) < e.EPSILON ? null : (D = 1 / D, T *= D, _ *= D, b *= D, o = Math.sin(r), u = Math.cos(r), i = 1 - u, c = n[0], f = n[1], s = n[2], l = n[3], m = n[4], h = n[5], v = n[6], M = n[7], d = n[8], p = n[9], g = n[10], A = n[11], w = T * T * i + u, R = _ * T * i + b * o, q = b * T * i - _ * o, x = T * _ * i - b * o, y = _ * _ * i + u, j = b * _ * i + T * o, Y = T * b * i + _ * o, P = _ * b * i - T * o, E = b * b * i + u, t[0] = c * w + m * R + d * q, t[1] = f * w + h * R + p * q, t[2] = s * w + v * R + g * q, t[3] = l * w + M * R + A * q, t[4] = c * x + m * y + d * j, t[5] = f * x + h * y + p * j, t[6] = s * x + v * y + g * j, t[7] = l * x + M * y + A * j, t[8] = c * Y + m * P + d * E, t[9] = f * Y + h * P + p * E, t[10] = s * Y + v * P + g * E, t[11] = l * Y + M * P + A * E, n !== t && (t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t);
      }, a.rotateX = function (t, n, r) {
        var e = Math.sin(r),
            a = Math.cos(r),
            o = n[4],
            u = n[5],
            i = n[6],
            c = n[7],
            f = n[8],
            s = n[9],
            l = n[10],
            m = n[11];return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = o * a + f * e, t[5] = u * a + s * e, t[6] = i * a + l * e, t[7] = c * a + m * e, t[8] = f * a - o * e, t[9] = s * a - u * e, t[10] = l * a - i * e, t[11] = m * a - c * e, t;
      }, a.rotateY = function (t, n, r) {
        var e = Math.sin(r),
            a = Math.cos(r),
            o = n[0],
            u = n[1],
            i = n[2],
            c = n[3],
            f = n[8],
            s = n[9],
            l = n[10],
            m = n[11];return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = o * a - f * e, t[1] = u * a - s * e, t[2] = i * a - l * e, t[3] = c * a - m * e, t[8] = o * e + f * a, t[9] = u * e + s * a, t[10] = i * e + l * a, t[11] = c * e + m * a, t;
      }, a.rotateZ = function (t, n, r) {
        var e = Math.sin(r),
            a = Math.cos(r),
            o = n[0],
            u = n[1],
            i = n[2],
            c = n[3],
            f = n[4],
            s = n[5],
            l = n[6],
            m = n[7];return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = o * a + f * e, t[1] = u * a + s * e, t[2] = i * a + l * e, t[3] = c * a + m * e, t[4] = f * a - o * e, t[5] = s * a - u * e, t[6] = l * a - i * e, t[7] = m * a - c * e, t;
      }, a.fromTranslation = function (t, n) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t;
      }, a.fromScaling = function (t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, a.fromRotation = function (t, n, r) {
        var a,
            o,
            u,
            i = r[0],
            c = r[1],
            f = r[2],
            s = Math.sqrt(i * i + c * c + f * f);return Math.abs(s) < e.EPSILON ? null : (s = 1 / s, i *= s, c *= s, f *= s, a = Math.sin(n), o = Math.cos(n), u = 1 - o, t[0] = i * i * u + o, t[1] = c * i * u + f * a, t[2] = f * i * u - c * a, t[3] = 0, t[4] = i * c * u - f * a, t[5] = c * c * u + o, t[6] = f * c * u + i * a, t[7] = 0, t[8] = i * f * u + c * a, t[9] = c * f * u - i * a, t[10] = f * f * u + o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
      }, a.fromXRotation = function (t, n) {
        var r = Math.sin(n),
            e = Math.cos(n);return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, a.fromYRotation = function (t, n) {
        var r = Math.sin(n),
            e = Math.cos(n);return t[0] = e, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, a.fromZRotation = function (t, n) {
        var r = Math.sin(n),
            e = Math.cos(n);return t[0] = e, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = e, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, a.fromRotationTranslation = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = e + e,
            c = a + a,
            f = o + o,
            s = e * i,
            l = e * c,
            m = e * f,
            h = a * c,
            v = a * f,
            M = o * f,
            d = u * i,
            p = u * c,
            g = u * f;return t[0] = 1 - (h + M), t[1] = l + g, t[2] = m - p, t[3] = 0, t[4] = l - g, t[5] = 1 - (s + M), t[6] = v + d, t[7] = 0, t[8] = m + p, t[9] = v - d, t[10] = 1 - (s + h), t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
      }, a.fromRotationTranslationScale = function (t, n, r, e) {
        var a = n[0],
            o = n[1],
            u = n[2],
            i = n[3],
            c = a + a,
            f = o + o,
            s = u + u,
            l = a * c,
            m = a * f,
            h = a * s,
            v = o * f,
            M = o * s,
            d = u * s,
            p = i * c,
            g = i * f,
            A = i * s,
            w = e[0],
            R = e[1],
            q = e[2];return t[0] = (1 - (v + d)) * w, t[1] = (m + A) * w, t[2] = (h - g) * w, t[3] = 0, t[4] = (m - A) * R, t[5] = (1 - (l + d)) * R, t[6] = (M + p) * R, t[7] = 0, t[8] = (h + g) * q, t[9] = (M - p) * q, t[10] = (1 - (l + v)) * q, t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
      }, a.fromRotationTranslationScaleOrigin = function (t, n, r, e, a) {
        var o = n[0],
            u = n[1],
            i = n[2],
            c = n[3],
            f = o + o,
            s = u + u,
            l = i + i,
            m = o * f,
            h = o * s,
            v = o * l,
            M = u * s,
            d = u * l,
            p = i * l,
            g = c * f,
            A = c * s,
            w = c * l,
            R = e[0],
            q = e[1],
            x = e[2],
            y = a[0],
            j = a[1],
            Y = a[2];return t[0] = (1 - (M + p)) * R, t[1] = (h + w) * R, t[2] = (v - A) * R, t[3] = 0, t[4] = (h - w) * q, t[5] = (1 - (m + p)) * q, t[6] = (d + g) * q, t[7] = 0, t[8] = (v + A) * x, t[9] = (d - g) * x, t[10] = (1 - (m + M)) * x, t[11] = 0, t[12] = r[0] + y - (t[0] * y + t[4] * j + t[8] * Y), t[13] = r[1] + j - (t[1] * y + t[5] * j + t[9] * Y), t[14] = r[2] + Y - (t[2] * y + t[6] * j + t[10] * Y), t[15] = 1, t;
      }, a.fromQuat = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = n[3],
            u = r + r,
            i = e + e,
            c = a + a,
            f = r * u,
            s = e * u,
            l = e * i,
            m = a * u,
            h = a * i,
            v = a * c,
            M = o * u,
            d = o * i,
            p = o * c;return t[0] = 1 - l - v, t[1] = s + p, t[2] = m - d, t[3] = 0, t[4] = s - p, t[5] = 1 - f - v, t[6] = h + M, t[7] = 0, t[8] = m + d, t[9] = h - M, t[10] = 1 - f - l, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, a.frustum = function (t, n, r, e, a, o, u) {
        var i = 1 / (r - n),
            c = 1 / (a - e),
            f = 1 / (o - u);return t[0] = 2 * o * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * c, t[6] = 0, t[7] = 0, t[8] = (r + n) * i, t[9] = (a + e) * c, t[10] = (u + o) * f, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * o * 2 * f, t[15] = 0, t;
      }, a.perspective = function (t, n, r, e, a) {
        var o = 1 / Math.tan(n / 2),
            u = 1 / (e - a);return t[0] = o / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (a + e) * u, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * a * e * u, t[15] = 0, t;
      }, a.perspectiveFromFieldOfView = function (t, n, r, e) {
        var a = Math.tan(n.upDegrees * Math.PI / 180),
            o = Math.tan(n.downDegrees * Math.PI / 180),
            u = Math.tan(n.leftDegrees * Math.PI / 180),
            i = Math.tan(n.rightDegrees * Math.PI / 180),
            c = 2 / (u + i),
            f = 2 / (a + o);return t[0] = c, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = f, t[6] = 0, t[7] = 0, t[8] = -((u - i) * c * .5), t[9] = (a - o) * f * .5, t[10] = e / (r - e), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = e * r / (r - e), t[15] = 0, t;
      }, a.ortho = function (t, n, r, e, a, o, u) {
        var i = 1 / (n - r),
            c = 1 / (e - a),
            f = 1 / (o - u);return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * f, t[11] = 0, t[12] = (n + r) * i, t[13] = (a + e) * c, t[14] = (u + o) * f, t[15] = 1, t;
      }, a.lookAt = function (t, n, r, o) {
        var u,
            i,
            c,
            f,
            s,
            l,
            m,
            h,
            v,
            M,
            d = n[0],
            p = n[1],
            g = n[2],
            A = o[0],
            w = o[1],
            R = o[2],
            q = r[0],
            x = r[1],
            y = r[2];return Math.abs(d - q) < e.EPSILON && Math.abs(p - x) < e.EPSILON && Math.abs(g - y) < e.EPSILON ? a.identity(t) : (m = d - q, h = p - x, v = g - y, M = 1 / Math.sqrt(m * m + h * h + v * v), m *= M, h *= M, v *= M, u = w * v - R * h, i = R * m - A * v, c = A * h - w * m, M = Math.sqrt(u * u + i * i + c * c), M ? (M = 1 / M, u *= M, i *= M, c *= M) : (u = 0, i = 0, c = 0), f = h * c - v * i, s = v * u - m * c, l = m * i - h * u, M = Math.sqrt(f * f + s * s + l * l), M ? (M = 1 / M, f *= M, s *= M, l *= M) : (f = 0, s = 0, l = 0), t[0] = u, t[1] = f, t[2] = m, t[3] = 0, t[4] = i, t[5] = s, t[6] = h, t[7] = 0, t[8] = c, t[9] = l, t[10] = v, t[11] = 0, t[12] = -(u * d + i * p + c * g), t[13] = -(f * d + s * p + l * g), t[14] = -(m * d + h * p + v * g), t[15] = 1, t);
      }, a.str = function (t) {
        return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
      }, a.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2));
      }, n.exports = a;
    }, { "./common.js": 2 }], 7: [function (t, n, r) {
      var e = t("./common.js"),
          a = t("./mat3.js"),
          o = t("./vec3.js"),
          u = t("./vec4.js"),
          i = {};i.create = function () {
        var t = new e.ARRAY_TYPE(4);return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
      }, i.rotationTo = function () {
        var t = o.create(),
            n = o.fromValues(1, 0, 0),
            r = o.fromValues(0, 1, 0);return function (e, a, u) {
          var c = o.dot(a, u);return -.999999 > c ? (o.cross(t, n, a), o.length(t) < 1e-6 && o.cross(t, r, a), o.normalize(t, t), i.setAxisAngle(e, t, Math.PI), e) : c > .999999 ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e) : (o.cross(t, a, u), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = 1 + c, i.normalize(e, e));
        };
      }(), i.setAxes = function () {
        var t = a.create();return function (n, r, e, a) {
          return t[0] = e[0], t[3] = e[1], t[6] = e[2], t[1] = a[0], t[4] = a[1], t[7] = a[2], t[2] = -r[0], t[5] = -r[1], t[8] = -r[2], i.normalize(n, i.fromMat3(n, t));
        };
      }(), i.clone = u.clone, i.fromValues = u.fromValues, i.copy = u.copy, i.set = u.set, i.identity = function (t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
      }, i.setAxisAngle = function (t, n, r) {
        r = .5 * r;var e = Math.sin(r);return t[0] = e * n[0], t[1] = e * n[1], t[2] = e * n[2], t[3] = Math.cos(r), t;
      }, i.add = u.add, i.multiply = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = r[0],
            c = r[1],
            f = r[2],
            s = r[3];return t[0] = e * s + u * i + a * f - o * c, t[1] = a * s + u * c + o * i - e * f, t[2] = o * s + u * f + e * c - a * i, t[3] = u * s - e * i - a * c - o * f, t;
      }, i.mul = i.multiply, i.scale = u.scale, i.rotateX = function (t, n, r) {
        r *= .5;var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = Math.sin(r),
            c = Math.cos(r);return t[0] = e * c + u * i, t[1] = a * c + o * i, t[2] = o * c - a * i, t[3] = u * c - e * i, t;
      }, i.rotateY = function (t, n, r) {
        r *= .5;var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = Math.sin(r),
            c = Math.cos(r);return t[0] = e * c - o * i, t[1] = a * c + u * i, t[2] = o * c + e * i, t[3] = u * c - a * i, t;
      }, i.rotateZ = function (t, n, r) {
        r *= .5;var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3],
            i = Math.sin(r),
            c = Math.cos(r);return t[0] = e * c + a * i, t[1] = a * c - e * i, t[2] = o * c + u * i, t[3] = u * c - o * i, t;
      }, i.calculateW = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2];return t[0] = r, t[1] = e, t[2] = a, t[3] = Math.sqrt(Math.abs(1 - r * r - e * e - a * a)), t;
      }, i.dot = u.dot, i.lerp = u.lerp, i.slerp = function (t, n, r, e) {
        var a,
            o,
            u,
            i,
            c,
            f = n[0],
            s = n[1],
            l = n[2],
            m = n[3],
            h = r[0],
            v = r[1],
            M = r[2],
            d = r[3];return o = f * h + s * v + l * M + m * d, 0 > o && (o = -o, h = -h, v = -v, M = -M, d = -d), 1 - o > 1e-6 ? (a = Math.acos(o), u = Math.sin(a), i = Math.sin((1 - e) * a) / u, c = Math.sin(e * a) / u) : (i = 1 - e, c = e), t[0] = i * f + c * h, t[1] = i * s + c * v, t[2] = i * l + c * M, t[3] = i * m + c * d, t;
      }, i.sqlerp = function () {
        var t = i.create(),
            n = i.create();return function (r, e, a, o, u, c) {
          return i.slerp(t, e, u, c), i.slerp(n, a, o, c), i.slerp(r, t, n, 2 * c * (1 - c)), r;
        };
      }(), i.invert = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = n[3],
            u = r * r + e * e + a * a + o * o,
            i = u ? 1 / u : 0;return t[0] = -r * i, t[1] = -e * i, t[2] = -a * i, t[3] = o * i, t;
      }, i.conjugate = function (t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t;
      }, i.length = u.length, i.len = i.length, i.squaredLength = u.squaredLength, i.sqrLen = i.squaredLength, i.normalize = u.normalize, i.fromMat3 = function (t, n) {
        var r,
            e = n[0] + n[4] + n[8];if (e > 0) r = Math.sqrt(e + 1), t[3] = .5 * r, r = .5 / r, t[0] = (n[5] - n[7]) * r, t[1] = (n[6] - n[2]) * r, t[2] = (n[1] - n[3]) * r;else {
          var a = 0;n[4] > n[0] && (a = 1), n[8] > n[3 * a + a] && (a = 2);var o = (a + 1) % 3,
              u = (a + 2) % 3;r = Math.sqrt(n[3 * a + a] - n[3 * o + o] - n[3 * u + u] + 1), t[a] = .5 * r, r = .5 / r, t[3] = (n[3 * o + u] - n[3 * u + o]) * r, t[o] = (n[3 * o + a] + n[3 * a + o]) * r, t[u] = (n[3 * u + a] + n[3 * a + u]) * r;
        }return t;
      }, i.str = function (t) {
        return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }, n.exports = i;
    }, { "./common.js": 2, "./mat3.js": 5, "./vec3.js": 9, "./vec4.js": 10 }], 8: [function (t, n, r) {
      var e = t("./common.js"),
          a = {};a.create = function () {
        var t = new e.ARRAY_TYPE(2);return t[0] = 0, t[1] = 0, t;
      }, a.clone = function (t) {
        var n = new e.ARRAY_TYPE(2);return n[0] = t[0], n[1] = t[1], n;
      }, a.fromValues = function (t, n) {
        var r = new e.ARRAY_TYPE(2);return r[0] = t, r[1] = n, r;
      }, a.copy = function (t, n) {
        return t[0] = n[0], t[1] = n[1], t;
      }, a.set = function (t, n, r) {
        return t[0] = n, t[1] = r, t;
      }, a.add = function (t, n, r) {
        return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t;
      }, a.subtract = function (t, n, r) {
        return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t;
      }, a.sub = a.subtract, a.multiply = function (t, n, r) {
        return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t;
      }, a.mul = a.multiply, a.divide = function (t, n, r) {
        return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t;
      }, a.div = a.divide, a.min = function (t, n, r) {
        return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t;
      }, a.max = function (t, n, r) {
        return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t;
      }, a.scale = function (t, n, r) {
        return t[0] = n[0] * r, t[1] = n[1] * r, t;
      }, a.scaleAndAdd = function (t, n, r, e) {
        return t[0] = n[0] + r[0] * e, t[1] = n[1] + r[1] * e, t;
      }, a.distance = function (t, n) {
        var r = n[0] - t[0],
            e = n[1] - t[1];return Math.sqrt(r * r + e * e);
      }, a.dist = a.distance, a.squaredDistance = function (t, n) {
        var r = n[0] - t[0],
            e = n[1] - t[1];return r * r + e * e;
      }, a.sqrDist = a.squaredDistance, a.length = function (t) {
        var n = t[0],
            r = t[1];return Math.sqrt(n * n + r * r);
      }, a.len = a.length, a.squaredLength = function (t) {
        var n = t[0],
            r = t[1];return n * n + r * r;
      }, a.sqrLen = a.squaredLength, a.negate = function (t, n) {
        return t[0] = -n[0], t[1] = -n[1], t;
      }, a.inverse = function (t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t;
      }, a.normalize = function (t, n) {
        var r = n[0],
            e = n[1],
            a = r * r + e * e;return a > 0 && (a = 1 / Math.sqrt(a), t[0] = n[0] * a, t[1] = n[1] * a), t;
      }, a.dot = function (t, n) {
        return t[0] * n[0] + t[1] * n[1];
      }, a.cross = function (t, n, r) {
        var e = n[0] * r[1] - n[1] * r[0];return t[0] = t[1] = 0, t[2] = e, t;
      }, a.lerp = function (t, n, r, e) {
        var a = n[0],
            o = n[1];return t[0] = a + e * (r[0] - a), t[1] = o + e * (r[1] - o), t;
      }, a.random = function (t, n) {
        n = n || 1;var r = 2 * e.RANDOM() * Math.PI;return t[0] = Math.cos(r) * n, t[1] = Math.sin(r) * n, t;
      }, a.transformMat2 = function (t, n, r) {
        var e = n[0],
            a = n[1];return t[0] = r[0] * e + r[2] * a, t[1] = r[1] * e + r[3] * a, t;
      }, a.transformMat2d = function (t, n, r) {
        var e = n[0],
            a = n[1];return t[0] = r[0] * e + r[2] * a + r[4], t[1] = r[1] * e + r[3] * a + r[5], t;
      }, a.transformMat3 = function (t, n, r) {
        var e = n[0],
            a = n[1];return t[0] = r[0] * e + r[3] * a + r[6], t[1] = r[1] * e + r[4] * a + r[7], t;
      }, a.transformMat4 = function (t, n, r) {
        var e = n[0],
            a = n[1];return t[0] = r[0] * e + r[4] * a + r[12], t[1] = r[1] * e + r[5] * a + r[13], t;
      }, a.forEach = function () {
        var t = a.create();return function (n, r, e, a, o, u) {
          var i, c;for (r || (r = 2), e || (e = 0), c = a ? Math.min(a * r + e, n.length) : n.length, i = e; c > i; i += r) {
            t[0] = n[i], t[1] = n[i + 1], o(t, t, u), n[i] = t[0], n[i + 1] = t[1];
          }return n;
        };
      }(), a.str = function (t) {
        return "vec2(" + t[0] + ", " + t[1] + ")";
      }, n.exports = a;
    }, { "./common.js": 2 }], 9: [function (t, n, r) {
      var e = t("./common.js"),
          a = {};a.create = function () {
        var t = new e.ARRAY_TYPE(3);return t[0] = 0, t[1] = 0, t[2] = 0, t;
      }, a.clone = function (t) {
        var n = new e.ARRAY_TYPE(3);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n;
      }, a.fromValues = function (t, n, r) {
        var a = new e.ARRAY_TYPE(3);return a[0] = t, a[1] = n, a[2] = r, a;
      }, a.copy = function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t;
      }, a.set = function (t, n, r, e) {
        return t[0] = n, t[1] = r, t[2] = e, t;
      }, a.add = function (t, n, r) {
        return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t;
      }, a.subtract = function (t, n, r) {
        return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t;
      }, a.sub = a.subtract, a.multiply = function (t, n, r) {
        return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t;
      }, a.mul = a.multiply, a.divide = function (t, n, r) {
        return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t;
      }, a.div = a.divide, a.min = function (t, n, r) {
        return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t;
      }, a.max = function (t, n, r) {
        return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t;
      }, a.scale = function (t, n, r) {
        return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t;
      }, a.scaleAndAdd = function (t, n, r, e) {
        return t[0] = n[0] + r[0] * e, t[1] = n[1] + r[1] * e, t[2] = n[2] + r[2] * e, t;
      }, a.distance = function (t, n) {
        var r = n[0] - t[0],
            e = n[1] - t[1],
            a = n[2] - t[2];return Math.sqrt(r * r + e * e + a * a);
      }, a.dist = a.distance, a.squaredDistance = function (t, n) {
        var r = n[0] - t[0],
            e = n[1] - t[1],
            a = n[2] - t[2];return r * r + e * e + a * a;
      }, a.sqrDist = a.squaredDistance, a.length = function (t) {
        var n = t[0],
            r = t[1],
            e = t[2];return Math.sqrt(n * n + r * r + e * e);
      }, a.len = a.length, a.squaredLength = function (t) {
        var n = t[0],
            r = t[1],
            e = t[2];return n * n + r * r + e * e;
      }, a.sqrLen = a.squaredLength, a.negate = function (t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t;
      }, a.inverse = function (t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t;
      }, a.normalize = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = r * r + e * e + a * a;return o > 0 && (o = 1 / Math.sqrt(o), t[0] = n[0] * o, t[1] = n[1] * o, t[2] = n[2] * o), t;
      }, a.dot = function (t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
      }, a.cross = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = r[0],
            i = r[1],
            c = r[2];return t[0] = a * c - o * i, t[1] = o * u - e * c, t[2] = e * i - a * u, t;
      }, a.lerp = function (t, n, r, e) {
        var a = n[0],
            o = n[1],
            u = n[2];return t[0] = a + e * (r[0] - a), t[1] = o + e * (r[1] - o), t[2] = u + e * (r[2] - u), t;
      }, a.hermite = function (t, n, r, e, a, o) {
        var u = o * o,
            i = u * (2 * o - 3) + 1,
            c = u * (o - 2) + o,
            f = u * (o - 1),
            s = u * (3 - 2 * o);return t[0] = n[0] * i + r[0] * c + e[0] * f + a[0] * s, t[1] = n[1] * i + r[1] * c + e[1] * f + a[1] * s, t[2] = n[2] * i + r[2] * c + e[2] * f + a[2] * s, t;
      }, a.bezier = function (t, n, r, e, a, o) {
        var u = 1 - o,
            i = u * u,
            c = o * o,
            f = i * u,
            s = 3 * o * i,
            l = 3 * c * u,
            m = c * o;return t[0] = n[0] * f + r[0] * s + e[0] * l + a[0] * m, t[1] = n[1] * f + r[1] * s + e[1] * l + a[1] * m, t[2] = n[2] * f + r[2] * s + e[2] * l + a[2] * m, t;
      }, a.random = function (t, n) {
        n = n || 1;var r = 2 * e.RANDOM() * Math.PI,
            a = 2 * e.RANDOM() - 1,
            o = Math.sqrt(1 - a * a) * n;return t[0] = Math.cos(r) * o, t[1] = Math.sin(r) * o, t[2] = a * n, t;
      }, a.transformMat4 = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = r[3] * e + r[7] * a + r[11] * o + r[15];return u = u || 1, t[0] = (r[0] * e + r[4] * a + r[8] * o + r[12]) / u, t[1] = (r[1] * e + r[5] * a + r[9] * o + r[13]) / u, t[2] = (r[2] * e + r[6] * a + r[10] * o + r[14]) / u, t;
      }, a.transformMat3 = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2];return t[0] = e * r[0] + a * r[3] + o * r[6], t[1] = e * r[1] + a * r[4] + o * r[7], t[2] = e * r[2] + a * r[5] + o * r[8], t;
      }, a.transformQuat = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = r[0],
            i = r[1],
            c = r[2],
            f = r[3],
            s = f * e + i * o - c * a,
            l = f * a + c * e - u * o,
            m = f * o + u * a - i * e,
            h = -u * e - i * a - c * o;return t[0] = s * f + h * -u + l * -c - m * -i, t[1] = l * f + h * -i + m * -u - s * -c, t[2] = m * f + h * -c + s * -i - l * -u, t;
      }, a.rotateX = function (t, n, r, e) {
        var a = [],
            o = [];return a[0] = n[0] - r[0], a[1] = n[1] - r[1], a[2] = n[2] - r[2], o[0] = a[0], o[1] = a[1] * Math.cos(e) - a[2] * Math.sin(e), o[2] = a[1] * Math.sin(e) + a[2] * Math.cos(e), t[0] = o[0] + r[0], t[1] = o[1] + r[1], t[2] = o[2] + r[2], t;
      }, a.rotateY = function (t, n, r, e) {
        var a = [],
            o = [];return a[0] = n[0] - r[0], a[1] = n[1] - r[1], a[2] = n[2] - r[2], o[0] = a[2] * Math.sin(e) + a[0] * Math.cos(e), o[1] = a[1], o[2] = a[2] * Math.cos(e) - a[0] * Math.sin(e), t[0] = o[0] + r[0], t[1] = o[1] + r[1], t[2] = o[2] + r[2], t;
      }, a.rotateZ = function (t, n, r, e) {
        var a = [],
            o = [];return a[0] = n[0] - r[0], a[1] = n[1] - r[1], a[2] = n[2] - r[2], o[0] = a[0] * Math.cos(e) - a[1] * Math.sin(e), o[1] = a[0] * Math.sin(e) + a[1] * Math.cos(e), o[2] = a[2], t[0] = o[0] + r[0], t[1] = o[1] + r[1], t[2] = o[2] + r[2], t;
      }, a.forEach = function () {
        var t = a.create();return function (n, r, e, a, o, u) {
          var i, c;for (r || (r = 3), e || (e = 0), c = a ? Math.min(a * r + e, n.length) : n.length, i = e; c > i; i += r) {
            t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], o(t, t, u), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2];
          }return n;
        };
      }(), a.angle = function (t, n) {
        var r = a.fromValues(t[0], t[1], t[2]),
            e = a.fromValues(n[0], n[1], n[2]);a.normalize(r, r), a.normalize(e, e);var o = a.dot(r, e);return o > 1 ? 0 : Math.acos(o);
      }, a.str = function (t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }, n.exports = a;
    }, { "./common.js": 2 }], 10: [function (t, n, r) {
      var e = t("./common.js"),
          a = {};a.create = function () {
        var t = new e.ARRAY_TYPE(4);return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
      }, a.clone = function (t) {
        var n = new e.ARRAY_TYPE(4);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n;
      }, a.fromValues = function (t, n, r, a) {
        var o = new e.ARRAY_TYPE(4);return o[0] = t, o[1] = n, o[2] = r, o[3] = a, o;
      }, a.copy = function (t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t;
      }, a.set = function (t, n, r, e, a) {
        return t[0] = n, t[1] = r, t[2] = e, t[3] = a, t;
      }, a.add = function (t, n, r) {
        return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t;
      }, a.subtract = function (t, n, r) {
        return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t;
      }, a.sub = a.subtract, a.multiply = function (t, n, r) {
        return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t[3] = n[3] * r[3], t;
      }, a.mul = a.multiply, a.divide = function (t, n, r) {
        return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t[3] = n[3] / r[3], t;
      }, a.div = a.divide, a.min = function (t, n, r) {
        return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t[3] = Math.min(n[3], r[3]), t;
      }, a.max = function (t, n, r) {
        return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t[3] = Math.max(n[3], r[3]), t;
      }, a.scale = function (t, n, r) {
        return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t;
      }, a.scaleAndAdd = function (t, n, r, e) {
        return t[0] = n[0] + r[0] * e, t[1] = n[1] + r[1] * e, t[2] = n[2] + r[2] * e, t[3] = n[3] + r[3] * e, t;
      }, a.distance = function (t, n) {
        var r = n[0] - t[0],
            e = n[1] - t[1],
            a = n[2] - t[2],
            o = n[3] - t[3];return Math.sqrt(r * r + e * e + a * a + o * o);
      }, a.dist = a.distance, a.squaredDistance = function (t, n) {
        var r = n[0] - t[0],
            e = n[1] - t[1],
            a = n[2] - t[2],
            o = n[3] - t[3];return r * r + e * e + a * a + o * o;
      }, a.sqrDist = a.squaredDistance, a.length = function (t) {
        var n = t[0],
            r = t[1],
            e = t[2],
            a = t[3];return Math.sqrt(n * n + r * r + e * e + a * a);
      }, a.len = a.length, a.squaredLength = function (t) {
        var n = t[0],
            r = t[1],
            e = t[2],
            a = t[3];
        return n * n + r * r + e * e + a * a;
      }, a.sqrLen = a.squaredLength, a.negate = function (t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t;
      }, a.inverse = function (t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t;
      }, a.normalize = function (t, n) {
        var r = n[0],
            e = n[1],
            a = n[2],
            o = n[3],
            u = r * r + e * e + a * a + o * o;return u > 0 && (u = 1 / Math.sqrt(u), t[0] = r * u, t[1] = e * u, t[2] = a * u, t[3] = o * u), t;
      }, a.dot = function (t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
      }, a.lerp = function (t, n, r, e) {
        var a = n[0],
            o = n[1],
            u = n[2],
            i = n[3];return t[0] = a + e * (r[0] - a), t[1] = o + e * (r[1] - o), t[2] = u + e * (r[2] - u), t[3] = i + e * (r[3] - i), t;
      }, a.random = function (t, n) {
        return n = n || 1, t[0] = e.RANDOM(), t[1] = e.RANDOM(), t[2] = e.RANDOM(), t[3] = e.RANDOM(), a.normalize(t, t), a.scale(t, t, n), t;
      }, a.transformMat4 = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = n[3];return t[0] = r[0] * e + r[4] * a + r[8] * o + r[12] * u, t[1] = r[1] * e + r[5] * a + r[9] * o + r[13] * u, t[2] = r[2] * e + r[6] * a + r[10] * o + r[14] * u, t[3] = r[3] * e + r[7] * a + r[11] * o + r[15] * u, t;
      }, a.transformQuat = function (t, n, r) {
        var e = n[0],
            a = n[1],
            o = n[2],
            u = r[0],
            i = r[1],
            c = r[2],
            f = r[3],
            s = f * e + i * o - c * a,
            l = f * a + c * e - u * o,
            m = f * o + u * a - i * e,
            h = -u * e - i * a - c * o;return t[0] = s * f + h * -u + l * -c - m * -i, t[1] = l * f + h * -i + m * -u - s * -c, t[2] = m * f + h * -c + s * -i - l * -u, t[3] = n[3], t;
      }, a.forEach = function () {
        var t = a.create();return function (n, r, e, a, o, u) {
          var i, c;for (r || (r = 4), e || (e = 0), c = a ? Math.min(a * r + e, n.length) : n.length, i = e; c > i; i += r) {
            t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], t[3] = n[i + 3], o(t, t, u), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2], n[i + 3] = t[3];
          }return n;
        };
      }(), a.str = function (t) {
        return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }, n.exports = a;
    }, { "./common.js": 2 }], 11: [function (t, n, r) {
      "use strict";
      function e(t) {
        return t && t.__esModule ? t : { "default": t };
      }Object.defineProperty(r, "__esModule", { value: !0 });var a = t("./test"),
          o = e(a),
          u = t("gl-matrix"),
          i = e(u),
          c = new o["default"](),
          f = { glm: i["default"], test: c, title: "title", name: "bongiovi" };r["default"] = f;
    }, { "./test": 12, "gl-matrix": 1 }], 12: [function (t, n, r) {
      "use strict";
      function e(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(r, "__esModule", { value: !0 });var a = function o() {
        e(this, o), console.log("This is test");
      };r["default"] = a;
    }, {}] }, {}, [11])(11);
});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
"use strict";

// app.js
window.bongiovi = require("../../../../build/bongiovi.js");

console.log('bongiovi : ', bongiovi);
// window.bongiovi = require("./libs/bongiovi.js");
// var dat = require("dat-gui");

// (function() {
// 	var SceneApp = require("./SceneApp");

// 	var App = function() {
// 		let a = 10.0;
// 		const b = 20.0;
// 		console.log(a, b);
// 		if(document.body) this._init();
// 		else {
// 			window.addEventListener("load", this._init.bind(this));
// 		}
// 	}

// 	var p = App.prototype;

// 	p._init = function() {
// 		this.canvas = document.createElement("canvas");
// 		this.canvas.width = window.innerWidth;
// 		this.canvas.height = window.innerHeight;
// 		this.canvas.className = "Main-Canvas";
// 		document.body.appendChild(this.canvas);
// 		bongiovi.GL.init(this.canvas);

// 		this._scene = new SceneApp();
// 		bongiovi.Scheduler.addEF(this, this._loop);

// 		// this.gui = new dat.GUI({width:300});
// 	};

// 	p._loop = function() {
// 		this._scene.loop();
// 	};

// 	new App();
// })();

},{"../../../../build/bongiovi.js":1}]},{},[2]);
