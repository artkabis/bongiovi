"use strict";

var GL = require("./GLTools");
var ShaderLibs = require("./ShaderLibs");

var GLShader = function(aVertexShaderId, aFragmentShaderId) {
	this.gl              = GL.gl;
	this.idVertex        = aVertexShaderId;
	this.idFragment      = aFragmentShaderId;
	this.parameters      = [];
	
	this.uniformTextures = [];
	
	this.vertexShader    = undefined;
	this.fragmentShader  = undefined;
	this._isReady        = false;
	this._loadedCount    = 0;

	if(aVertexShaderId === undefined || aVertexShaderId === null ) {
		this.createVertexShaderProgram(ShaderLibs.getShader("copyVert"));
	}

	if(aFragmentShaderId === undefined || aVertexShaderId === null ) {
		this.createFragmentShaderProgram(ShaderLibs.getShader("copyFrag"));
	}

	this.init();
};


var p = GLShader.prototype;

p.init = function() {
	if(this.idVertex && this.idVertex.indexOf("main(void)") > -1) {
		this.createVertexShaderProgram(this.idVertex);
	} else {
		this.getShader(this.idVertex, true);	
	}
	
	if(this.idFragment && this.idFragment.indexOf("main(void)") > -1) {
		this.createFragmentShaderProgram(this.idFragment);
	} else {
		this.getShader(this.idFragment, false);	
	}
};

p.getShader = function(aId, aIsVertexShader) {
	if(!aId) {return;}
	var req = new XMLHttpRequest();
	req.hasCompleted = false;
	var that = this;
	req.onreadystatechange = function(e) {
		if(e.target.readyState === 4) {
			if(aIsVertexShader) {
				that.createVertexShaderProgram(e.target.responseText);
			} else {
				that.createFragmentShaderProgram(e.target.responseText);
			}
		}
	};
	req.open("GET", aId, true);
	req.send(null);
};

p.createVertexShaderProgram = function(aStr) {
	if(!this.gl) {	return;	}
	var shader = this.gl.createShader(this.gl.VERTEX_SHADER);

	this.gl.shaderSource(shader, aStr);
	this.gl.compileShader(shader);

	if(!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
		console.warn("Error in Vertex Shader : ", this.idVertex, ":", this.gl.getShaderInfoLog(shader));
		console.log(aStr);
		return null;
	}

	this.vertexShader = shader;
	
	if(this.vertexShader !== undefined && this.fragmentShader !== undefined) {
		this.attachShaderProgram();
	}

	this._loadedCount++;
};


p.createFragmentShaderProgram = function(aStr) {
	if(!this.gl) {	return;	}
	var shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);

	this.gl.shaderSource(shader, aStr);
	this.gl.compileShader(shader);

	if(!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
		console.warn("Error in Fragment Shader: ", this.idFragment, ":" , this.gl.getShaderInfoLog(shader));
		console.log(aStr);
		return null;
	}

	this.fragmentShader = shader;

	if(this.vertexShader !== undefined && this.fragmentShader !== undefined) {
		this.attachShaderProgram();
	}

	this._loadedCount++;
};

p.attachShaderProgram = function() {
	this._isReady = true;
	this.shaderProgram = this.gl.createProgram();
	this.gl.attachShader(this.shaderProgram, this.vertexShader);
	this.gl.attachShader(this.shaderProgram, this.fragmentShader);
	this.gl.linkProgram(this.shaderProgram);
};

p.bind = function() {
	if(!this._isReady) {return;}
	this.gl.useProgram(this.shaderProgram);

	if(this.shaderProgram.pMatrixUniform === undefined) {	this.shaderProgram.pMatrixUniform = this.gl.getUniformLocation(this.shaderProgram, "uPMatrix");}
	if(this.shaderProgram.mvMatrixUniform === undefined) {	this.shaderProgram.mvMatrixUniform = this.gl.getUniformLocation(this.shaderProgram, "uMVMatrix");}

	GL.setShader(this);
	GL.setShaderProgram(this.shaderProgram);

	this.uniformTextures = [];
};

p.isReady = function() {	return this._isReady;	};


p.clearUniforms = function() {
	this.parameters = [];
};

p.uniform = function(aName, aType, aValue) {
	if(!this._isReady) {return;}

	if(aType === "texture") {aType = "uniform1i";}

	var hasUniform = false;
	var oUniform;
	for(var i=0; i<this.parameters.length; i++) {
		oUniform = this.parameters[i];
		if(oUniform.name === aName) {
			oUniform.value = aValue;
			hasUniform = true;
			break;
		}
	}

	if(!hasUniform) {
		this.shaderProgram[aName] = this.gl.getUniformLocation(this.shaderProgram, aName);
		this.parameters.push({name : aName, type: aType, value: aValue, uniformLoc: this.shaderProgram[aName]});
	} else {
		this.shaderProgram[aName] = oUniform.uniformLoc;
	}

	if(aType.indexOf("Matrix") === -1) {
		this.gl[aType](this.shaderProgram[aName], aValue);
	} else {
		this.gl[aType](this.shaderProgram[aName], false, aValue);
	}

	if(aType === "uniform1i") {
		// Texture
		this.uniformTextures[aValue] = this.shaderProgram[aName];
	}
};

p.unbind = function() {

};

module.exports = GLShader;