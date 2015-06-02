// ViewAxis.js


(function() {
	var GL = bongiovi.GL;

	var vertShader = "precision highp float;attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec3 aColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying vec3 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vTextureCoord = aTextureCoord;    vColor = aColor;}"
	var fragShader = "precision mediump float;varying vec3 vColor;void main(void) {    gl_FragColor = vec4(vColor, 1.0);}";

	var ViewAxis = function() {
		bongiovi.View.call(this, vertShader, fragShader);
	}

	var p = ViewAxis.prototype = new bongiovi.View();

	p._init = function() {
		// this.mesh = bongiovi.MeshUtils.createPlane(2, 2, 1);

		var positions = [];
		var colors = [];
		var coords = [];
		var indices = [0, 1, 2, 3, 4, 5];
		var r = 9999;

		positions.push([-r,  0,  0])
		positions.push([ r,  0,  0])
		positions.push([ 0, -r,  0])
		positions.push([ 0,  r,  0])
		positions.push([ 0,  0, -r])
		positions.push([ 0,  0,  r])


		colors.push([1, 0, 0]);
		colors.push([1, 0, 0]);
		colors.push([0, 1, 0]);
		colors.push([0, 1, 0]);
		colors.push([0, 0, 1]);
		colors.push([0, 0, 1]);


		coords.push([0, 0]);
		coords.push([0, 0]);
		coords.push([0, 0]);
		coords.push([0, 0]);
		coords.push([0, 0]);
		coords.push([0, 0]);


		this.mesh = new bongiovi.Mesh(positions.length, indices.length, bongiovi.GLTool.gl.LINES);
		this.mesh.bufferVertex(positions);
		this.mesh.bufferTexCoords(coords);
		this.mesh.bufferIndices(indices);
		this.mesh.bufferData(colors, "aColor", 3, false);
	};

	p.render = function() {
		if(!this.shader.isReady()) return;

		this.shader.bind();
		this.shader.uniform("color", "uniform3fv", [1, 1, 1]);
		this.shader.uniform("opacity", "uniform1f", 1);
		GL.draw(this.mesh);
	};

	bongiovi.ViewAxis = ViewAxis;
})();