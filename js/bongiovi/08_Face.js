// 08_Face.js
(function() {
	var Face = function(mA, mB, mC) {
		this._vertexA = mA;
		this._vertexB = mB;
		this._vertexC = mC;

		this._init();
	}

	var p = Face.prototype;


	p._init = function() {
		var BA = vec3.create();
		var CA = vec3.create();
		vec3.sub(BA, this._vertexB, this._vertexA);
		vec3.sub(CA, this._vertexC, this._vertexA);

		this._faceNormal = vec3.create();
		vec3.cross(this._faceNormal, BA, CA);
		vec3.normalize(this._faceNormal, this._faceNormal);
	};


	p.contains = function(mVertex) {
		var has = ( equal(mVertex, this._vertexA) || equal(mVertex, this._vertexB) || equal(mVertex, this._vertexC) );
		return ( equal(mVertex, this._vertexA) || equal(mVertex, this._vertexB) || equal(mVertex, this._vertexC) );
	};


	p.__defineGetter__("faceNormal", function() {
		return this._faceNormal;
	});

	var equal = function(mV0, mV1) {
		return ( (mV0[0] === mV1[0]) && (mV0[1] === mV1[1]) && (mV0[2] === mV1[2]) );
	}


	var getPrecision = function(mValue, mPrecision) {
		mPrecision = mPrecision || 100;

		return Math.floor(mValue * mPrecision) / mPrecision;
	}


	bongiovi.Face = Face;
})();