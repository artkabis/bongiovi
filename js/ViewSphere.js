// ViewSphere.js

(function() {
	ViewSphere = function() {
		bongiovi.View.call(this);
	}

	var p = ViewSphere.prototype = new bongiovi.View();

	p._init = function() {
		this.mesh = bongiovi.MeshUtils.createSphere(100, 50);
	};

	p.render = function(texture) {
		if(!this.mesh) return;
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
		texture.bind(0);
		bongiovi.GL.draw(this.mesh);
	};
})();