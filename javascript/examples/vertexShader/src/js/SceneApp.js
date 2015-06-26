// SceneApp.js

// var bongiovi = require("./libs/bongiovi");
var GL = bongiovi.GL;
var ViewDots = require("./ViewDots");

function SceneApp() {
	bongiovi.Scene.call(this);
	window.addEventListener("resize", this.resize.bind(this));
}


var p = SceneApp.prototype = new bongiovi.Scene();


p._initViews = function() {
	this._vAxis = new bongiovi.ViewAxis(1);
	this._vDotPlane = new bongiovi.ViewDotPlane();
	this._vDots = new ViewDots();
};


p._initTextures = function() {
	this.video = document.body.querySelector('video');
	this.texture = new bongiovi.GLTexture(this.video);
};


p.render = function() {
	this.texture.updateTexture(this.video);
	var grey = .02;
	GL.clear(grey, grey, grey, 1.0);

	this._vAxis.render();
	this._vDotPlane.render();
	this._vDots.render(this.texture);
};

p.resize = function() {
	GL.setSize(window.innerWidth, window.innerHeight);
	this.camera.resize(GL.aspectRatio);
};

module.exports = SceneApp;