bongiovi=window.bongiovi||{};(function(){var a=function(){this.matrix=mat4.create();mat4.identity(this.matrix)},c=a.prototype;c.lookAt=function(a,b,h){mat4.identity(this.matrix);mat4.lookAt(this.matrix,a,b,h)};c.getMatrix=function(){return this.matrix};bongiovi.Camera=a})();bongiovi=window.bongiovi||{};(function(){var a=bongiovi.Camera,c=function(){a.call(this);this.projection=mat4.create();mat4.identity(this.projection);this.mtxFinal=mat4.create()},d=c.prototype=new a;d.setPerspective=function(a,d,c,f){mat4.perspective(this.projection,a,d,c,f)};d.getMatrix=function(){mat4.multiply(this.mtxFinal,this.projection,this.matrix);return this.mtxFinal};bongiovi.CameraPerspective=c})();(function(a){a=function(){this._passes=[]};var c=a.prototype=new bongiovi.Pass;c.addPass=function(a){this._passes.push(a)};c.render=function(a){this.texture=a;for(a=0;a<this._passes.length;a++)this.texture=this._passes[a].render(this.texture);return this.texture};c.getTexture=function(){return this.texture};bongiovi.EffectComposer=a})();(function(){var a,c=bongiovi.GLTexture,d=function(b,d,c){a=bongiovi.GLTool.gl;c=c||{};this.width=b;this.height=d;this.magFilter=c.magFilter||a.LINEAR;this.minFilter=c.minFilter||a.LINEAR_MIPMAP_NEAREST;this.wrapS=c.wrapS||a.MIRRORED_REPEAT;this.wrapT=c.wrapT||a.MIRRORED_REPEAT;if(0==b||b&b-1||0==d||d&d-1)this.wrapS=this.wrapT=a.CLAMP_TO_EDGE,this.minFilter==a.LINEAR_MIPMAP_NEAREST&&(this.minFilter=a.LINEAR);this._init()},b=d.prototype;b._init=function(){this.depthTextureExt=a.getExtension("WEBKIT_WEBGL_depth_texture");
this.texture=a.createTexture();this.depthTexture=a.createTexture();this.glTexture=new c(this.texture,!0);this.glDepthTexture=new c(this.depthTexture,!0);this.frameBuffer=a.createFramebuffer();a.bindFramebuffer(a.FRAMEBUFFER,this.frameBuffer);this.frameBuffer.width=this.width;this.frameBuffer.height=this.height;a.bindTexture(a.TEXTURE_2D,this.texture);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,this.magFilter);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,this.minFilter);a.texParameteri(a.TEXTURE_2D,
a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);this.magFilter==a.NEAREST&&this.minFilter==a.NEAREST?a.texImage2D(a.TEXTURE_2D,0,a.RGBA,this.frameBuffer.width,this.frameBuffer.height,0,a.RGBA,a.FLOAT,null):a.texImage2D(a.TEXTURE_2D,0,a.RGBA,this.frameBuffer.width,this.frameBuffer.height,0,a.RGBA,a.UNSIGNED_BYTE,null);this.minFilter==a.LINEAR_MIPMAP_NEAREST&&a.generateMipmap(a.TEXTURE_2D);a.bindTexture(a.TEXTURE_2D,this.depthTexture);a.texParameteri(a.TEXTURE_2D,
a.TEXTURE_MAG_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);null!=this.depthTextureExt&&a.texImage2D(a.TEXTURE_2D,0,a.DEPTH_COMPONENT,this.width,this.height,0,a.DEPTH_COMPONENT,a.UNSIGNED_SHORT,null);a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this.texture,0);if(null==this.depthTextureExt){console.log("no depth texture");
var b=a.createRenderbuffer();a.bindRenderbuffer(a.RENDERBUFFER,b);a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,this.frameBuffer.width,this.frameBuffer.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,b)}else a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,this.depthTexture,0);a.bindTexture(a.TEXTURE_2D,null);a.bindRenderbuffer(a.RENDERBUFFER,null);a.bindFramebuffer(a.FRAMEBUFFER,null)};b.bind=function(){a.bindFramebuffer(a.FRAMEBUFFER,
this.frameBuffer)};b.unbind=function(){a.bindFramebuffer(a.FRAMEBUFFER,null)};b.getTexture=function(){return this.glTexture};b.getDepthTexture=function(){return this.glDepthTexture};bongiovi.FrameBuffer=d})();(function(){var a=function(a,b){this.gl=bongiovi.GL.gl;this.idVertex=a;this.idFragment=b;this.parameters=[];this.uniformTextures=[];this.fragmentShader=this.vertexShader=void 0;this._isReady=!1;this._loadedCount=0;this.init()},c=a.prototype;c.init=function(){this.getShader(this.idVertex,!0);this.getShader(this.idFragment,!1)};c.getShader=function(a,b){var h=new XMLHttpRequest;h.hasCompleted=!1;var c=this;h.onreadystatechange=function(a){4==a.target.readyState&&(b?c.createVertexShaderProgram(a.target.responseText):
c.createFragmentShaderProgram(a.target.responseText))};h.open("GET",a,!0);h.send(null)};c.createVertexShaderProgram=function(a){var b=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(b,a);this.gl.compileShader(b);if(!this.gl.getShaderParameter(b,this.gl.COMPILE_STATUS))return console.warn(this.gl.getShaderInfoLog(b)),null;this.vertexShader=b;void 0!=this.vertexShader&&void 0!=this.fragmentShader&&this.attachShaderProgram();this._loadedCount++};c.createFragmentShaderProgram=function(a){var b=
this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(b,a);this.gl.compileShader(b);if(!this.gl.getShaderParameter(b,this.gl.COMPILE_STATUS))return console.warn(this.gl.getShaderInfoLog(b)),null;this.fragmentShader=b;void 0!=this.vertexShader&&void 0!=this.fragmentShader&&this.attachShaderProgram();this._loadedCount++};c.attachShaderProgram=function(){this._isReady=!0;this.shaderProgram=this.gl.createProgram();this.gl.attachShader(this.shaderProgram,this.vertexShader);this.gl.attachShader(this.shaderProgram,
this.fragmentShader);this.gl.linkProgram(this.shaderProgram)};c.bind=function(){this._isReady&&(this.gl.useProgram(this.shaderProgram),void 0==this.shaderProgram.pMatrixUniform&&(this.shaderProgram.pMatrixUniform=this.gl.getUniformLocation(this.shaderProgram,"uPMatrix")),void 0==this.shaderProgram.mvMatrixUniform&&(this.shaderProgram.mvMatrixUniform=this.gl.getUniformLocation(this.shaderProgram,"uMVMatrix")),bongiovi.GLTool.setShader(this),bongiovi.GLTool.setShaderProgram(this.shaderProgram),this.uniformTextures=
[])};c.isReady=function(){return this._isReady};c.uniform=function(a,b,h){if(this._isReady){"texture"==b&&(b="uniform1i");for(var c=!1,f,l=0;l<this.parameters.length;l++)if(f=this.parameters[l],f.name==a){f.value=h;c=!0;break}c?this.shaderProgram[a]=f.uniformLoc:(this.shaderProgram[a]=this.gl.getUniformLocation(this.shaderProgram,a),this.parameters.push({name:a,type:b,value:h,uniformLoc:this.shaderProgram[a]}));if(-1==b.indexOf("Matrix"))this.gl[b](this.shaderProgram[a],h);else this.gl[b](this.shaderProgram[a],
!1,h);"uniform1i"==b&&(this.uniformTextures[h]=this.shaderProgram[a])}};c.unbind=function(){};bongiovi.GLShader=a})();(function(){var a,c,d=function(b,d,f){f=f||{};a=bongiovi.GL.gl;c=bongiovi.GL;if(d)this.texture=b;else{this.texture=a.createTexture();this._isVideo="VIDEO"==b.tagName;this.magFilter=f.magFilter||a.LINEAR;this.minFilter=f.minFilter||a.LINEAR_MIPMAP_NEAREST;this.wrapS=f.wrapS||a.MIRRORED_REPEAT;this.wrapT=f.wrapT||a.MIRRORED_REPEAT;d=b.width||b.videoWidth;f=b.height||b.videoHeight;if(d){if(0==d||d&d-1||0==f||f&f-1)this.wrapS=this.wrapT=a.CLAMP_TO_EDGE,this.minFilter==a.LINEAR_MIPMAP_NEAREST&&(this.minFilter=
a.LINEAR),console.log(this.minFilter,a.LINEAR_MIPMAP_NEAREST,a.LINEAR)}else this.wrapS=this.wrapT=a.CLAMP_TO_EDGE,this.minFilter==a.LINEAR_MIPMAP_NEAREST&&(this.minFilter=a.LINEAR);a.bindTexture(a.TEXTURE_2D,this.texture);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!0);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,b);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,this.magFilter);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,this.minFilter);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,
this.wrapS);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,this.wrapT);this.minFilter==a.LINEAR_MIPMAP_NEAREST&&a.generateMipmap(a.TEXTURE_2D);a.bindTexture(a.TEXTURE_2D,null)}},b=d.prototype;b.updateTexture=function(b){a.bindTexture(a.TEXTURE_2D,this.texture);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!0);a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,b);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,this.magFilter);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,this.minFilter);this.minFilter==
a.LINEAR_MIPMAP_NEAREST&&a.generateMipmap(a.TEXTURE_2D);a.bindTexture(a.TEXTURE_2D,null)};b.bind=function(b,d){void 0==b&&(b=0);a.activeTexture(a.TEXTURE0+b);a.bindTexture(a.TEXTURE_2D,this.texture);a.uniform1i(c.shader.uniformTextures[b],b);this._bindIndex=b};b.unbind=function(){a.bindTexture(a.TEXTURE_2D,null)};bongiovi.GLTexture=d})();bongiovi=window.bongiovi||{};
(function(){var a=null,c=function(){this.aspectRatio=window.innerWidth/window.innerHeight;this.fieldOfView=45;this.zNear=5;this.zFar=3E3;this.gl=this.canvas=null;this.H=this.W=0;this.shaderProgram=this.shader=null},d=c.prototype;d.init=function(a){this.canvas=a;this.gl=this.canvas.getContext("experimental-webgl",{antialias:!0});this.resize();this.gl.getParameter(this.gl.SAMPLES);this.gl.getContextAttributes();this.gl.viewport(0,0,this.gl.viewportWidth,this.gl.viewportHeight);this.gl.enable(this.gl.DEPTH_TEST);
this.gl.enable(this.gl.CULL_FACE);this.gl.enable(this.gl.BLEND);this.gl.clearColor(0,0,0,1);this.gl.clearDepth(1);this.matrix=mat4.create();mat4.identity(this.matrix);this.depthTextureExt=this.gl.getExtension("WEBKIT_WEBGL_depth_texture");this.floatTextureExt=this.gl.getExtension("OES_texture_float");this.enableAlphaBlending();var d=this;window.addEventListener("resize",function(){d.resize()})};d.getGL=function(){return this.gl};d.setShader=function(a){this.shader=a};d.setShaderProgram=function(a){this.shaderProgram=
a};d.setViewport=function(a,d,c,f){this.gl.viewport(a,d,c,f)};d.setMatrices=function(a){this.camera=a};d.rotate=function(a){mat4.copy(this.matrix,a)};d.render=function(){null!=this.shaderProgram&&(this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA))};d.enableAlphaBlending=function(){this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)};d.enableAdditiveBlending=function(){this.gl.blendFunc(this.gl.ONE,this.gl.ONE)};
d.clear=function(a,d,c,f){this.gl.clearColor(a,d,c,f);this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT)};d.draw=function(a){function d(a,b,c){void 0==b.cacheAttribLoc&&(b.cacheAttribLoc={});void 0==b.cacheAttribLoc[c]&&(b.cacheAttribLoc[c]=a.getAttribLocation(b,c));return b.cacheAttribLoc[c]}this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform,!1,this.camera.getMatrix());this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform,!1,this.matrix);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,
a.vBufferPos);var c=d(this.gl,this.shaderProgram,"aVertexPosition");this.gl.vertexAttribPointer(c,a.vBufferPos.itemSize,this.gl.FLOAT,!1,0,0);this.gl.enableVertexAttribArray(c);this.gl.bindBuffer(this.gl.ARRAY_BUFFER,a.vBufferUV);c=d(this.gl,this.shaderProgram,"aTextureCoord");this.gl.vertexAttribPointer(c,a.vBufferUV.itemSize,this.gl.FLOAT,!1,0,0);this.gl.enableVertexAttribArray(c);this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,a.iBuffer);for(c=0;c<a.extraAttributes.length;c++){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,
a.extraAttributes[c].buffer);var f=d(this.gl,this.shaderProgram,a.extraAttributes[c].name);this.gl.vertexAttribPointer(f,a.extraAttributes[c].itemSize,this.gl.FLOAT,!1,0,0);this.gl.enableVertexAttribArray(f)}a.drawType==this.gl.POINTS?this.gl.drawArrays(a.drawType,0,a.vertexSize):this.gl.drawElements(a.drawType,a.iBuffer.numItems,this.gl.UNSIGNED_SHORT,0)};d.resize=function(){this.W=window.innerWidth;this.H=window.innerHeight;this.canvas.width=this.W;this.canvas.height=this.H;this.gl.viewportWidth=
this.W;this.gl.viewportHeight=this.H;this.gl.viewport(0,0,this.W,this.H);this.aspectRatio=window.innerWidth/window.innerHeight;this.render()};c.getInstance=function(){null==a&&(a=new c);return a};bongiovi.GL=c.getInstance();bongiovi.GLTool=c.getInstance()})();(function(){var a=function(a,b,c){this.gl=bongiovi.GLTool.gl;this.vertexSize=a;this.indexSize=b;this.drawType=c;this.extraAttributes=[];this._floatArrayVertex=this.vBufferPos=void 0;this._init()},c=a.prototype;c._init=function(){};c.bufferVertex=function(a){for(var b=[],c=0;c<a.length;c++)for(var g=0;g<a[c].length;g++)b.push(a[c][g]);void 0==this.vBufferPos&&(this.vBufferPos=this.gl.createBuffer());this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vBufferPos);if(void 0==this._floatArrayVertex)this._floatArrayVertex=
new Float32Array(b);else if(a.length!=this._floatArrayVertex.length)this._floatArrayVertex=new Float32Array(b);else for(c=0;c<a.length;c++)this._floatArrayVertex[c]=a[c];this.gl.bufferData(this.gl.ARRAY_BUFFER,this._floatArrayVertex,this.gl.STATIC_DRAW);this.vBufferPos.itemSize=3};c.bufferTexCoords=function(a){for(var b=[],c=0;c<a.length;c++)for(var g=0;g<a[c].length;g++)b.push(a[c][g]);this.vBufferUV=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vBufferUV);this.gl.bufferData(this.gl.ARRAY_BUFFER,
new Float32Array(b),this.gl.STATIC_DRAW);this.vBufferUV.itemSize=2};c.bufferData=function(a,b,c){for(var g=-1,f=0;f<this.extraAttributes.length;f++)if(this.extraAttributes[f].name==b){this.extraAttributes[f].data=a;g=f;break}for(var l=[],f=0;f<a.length;f++)for(var m=0;m<a[f].length;m++)l.push(a[f][m]);if(-1==g)f=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,f),g=new Float32Array(l),this.gl.bufferData(this.gl.ARRAY_BUFFER,g,this.gl.STATIC_DRAW),this.extraAttributes.push({name:b,data:a,
itemSize:c,buffer:f,floatArray:g});else{f=this.extraAttributes[g].buffer;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,f);g=this.extraAttributes[g].floatArray;for(f=0;f<l.length;f++)g[f]=l[f];this.gl.bufferData(this.gl.ARRAY_BUFFER,g,this.gl.STATIC_DRAW)}};c.bufferIndices=function(a){this.iBuffer=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.iBuffer);this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(a),this.gl.STATIC_DRAW);this.iBuffer.itemSize=1;this.iBuffer.numItems=
a.length};bongiovi.Mesh=a})();(function(){bonigovi.MeshUtils={};bonigovi.MeshUtils.createPlane=function(a,c){var d=[],b=[],h=[0,1,2,0,2,3];a=1;d.push([-a,-a,0]);d.push([a,-a,0]);d.push([a,a,0]);d.push([-a,a,0]);b.push([0,0]);b.push([1,0]);b.push([1,1]);b.push([0,1]);var g=new bongiovi.Mesh(d.length,h.length,bongiovi.GLTool.gl.TRIANGLES);g.bufferVertex(d);g.bufferTexCoords(b);g.bufferIndices(h);return g};bonigovi.MeshUtils.createSphere=function(a,c){};bonigovi.MeshUtils.createCube=function(a,c){}})();define(["require"],function(a){a=function(a){this.strObj=a;this.positions=[];this.coords=[];this.indices=[];this.verticesCount=0;this.vertices=[];this.normals=[];this.vertexNormals=[];this.uvs=[];this.faces=[];this._parse()};a.prototype._parse=function(){for(var a=/v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,d=/vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,b=/vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,h=/f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/,
g=/f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/,f=/f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/,l=/f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/,m=this.strObj.split("\n"),n=0;n<m.length;n++){var k=m[n],k=k.trim(),e;0!==k.length&&"#"!==k.charAt(0)&&(null!==(e=a.exec(k))?this.vertices.push([parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])]):
null!==(e=d.exec(k))?this.vertexNormals.push([parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])]):null!==(e=b.exec(k))?this.uvs.push([parseFloat(e[1]),parseFloat(e[2])]):null!==(e=h.exec(k))?(faces.push([parseInt(e[1])-1,parseInt(e[2])-1,parseInt(e[3])-1]),positions.push([this.vertices[parseInt(e[1])-1],this.vertices[parseInt(e[2])-1],this.vertices[parseInt(e[3])-1]]),this.indices.push(this.verticesCount++),this.indices.push(this.verticesCount++),this.indices.push(this.verticesCount++)):null!==(e=
g.exec(k))?(void 0==e[11]?(this.positions.push(this.vertices[parseInt(e[2])-1]),this.positions.push(this.vertices[parseInt(e[5])-1]),this.positions.push(this.vertices[parseInt(e[8])-1]),this.coords.push(this.uvs[parseInt(e[3])-1]),this.coords.push(this.uvs[parseInt(e[6])-1]),this.coords.push(this.uvs[parseInt(e[9])-1])):(this.positions.push(this.vertices[parseInt(e[11])-1]),this.positions.push(this.vertices[parseInt(e[5])-1]),this.positions.push(this.vertices[parseInt(e[2])-1]),this.coords.push(this.uvs[parseInt(e[12])-
1]),this.coords.push(this.uvs[parseInt(e[6])-1]),this.coords.push(this.uvs[parseInt(e[3])-1]),this.indices.push(this.verticesCount++),this.indices.push(this.verticesCount++),this.indices.push(this.verticesCount++),this.positions.push(this.vertices[parseInt(e[11])-1]),this.positions.push(this.vertices[parseInt(e[8])-1]),this.positions.push(this.vertices[parseInt(e[5])-1]),this.coords.push(this.uvs[parseInt(e[12])-1]),this.coords.push(this.uvs[parseInt(e[9])-1]),this.coords.push(this.uvs[parseInt(e[6])-
1])),this.indices.push(this.verticesCount++),this.indices.push(this.verticesCount++),this.indices.push(this.verticesCount++)):null!==(e=f.exec(k))?(void 0==e[14]?(this.positions.push(this.vertices[parseInt(e[2])-1]),this.positions.push(this.vertices[parseInt(e[6])-1]),this.positions.push(this.vertices[parseInt(e[10])-1]),this.coords.push(this.uvs[parseInt(e[3])-1]),this.coords.push(this.uvs[parseInt(e[7])-1]),this.coords.push(this.uvs[parseInt(e[11])-1]),this.normals.push(this.vertexNormals[parseInt(e[4])-
1]),this.normals.push(this.vertexNormals[parseInt(e[8])-1]),this.normals.push(this.vertexNormals[parseInt(e[12])-1])):(this.positions.push(this.vertices[parseInt(e[2])-1]),this.positions.push(this.vertices[parseInt(e[6])-1]),this.positions.push(this.vertices[parseInt(e[14])-1]),this.coords.push(this.uvs[parseInt(e[3])-1]),this.coords.push(this.uvs[parseInt(e[7])-1]),this.coords.push(this.uvs[parseInt(e[15])-1]),this.normals.push(this.vertexNormals[parseInt(e[4])-1]),this.normals.push(this.vertexNormals[parseInt(e[8])-
1]),this.normals.push(this.vertexNormals[parseInt(e[16])-1]),this.indices.push(this.verticesCount++),this.indices.push(this.verticesCount++),this.indices.push(this.verticesCount++),this.positions.push(this.vertices[parseInt(e[6])-1]),this.positions.push(this.vertices[parseInt(e[10])-1]),this.positions.push(this.vertices[parseInt(e[14])-1]),this.coords.push(this.uvs[parseInt(e[7])-1]),this.coords.push(this.uvs[parseInt(e[11])-1]),this.coords.push(this.uvs[parseInt(e[15])-1]),this.normals.push(this.vertexNormals[parseInt(e[8])-
1]),this.normals.push(this.vertexNormals[parseInt(e[12])-1]),this.normals.push(this.vertexNormals[parseInt(e[16])-1])),this.indices.push(this.verticesCount++),this.indices.push(this.verticesCount++),this.indices.push(this.verticesCount++)):null!==l.exec(k)&&console.log("Face 4"))}};return a});(function(){var a,c=function(b,d,c){a=bongiovi.GL;void 0!=b&&(this.view="string"==typeof b?new bongiovi.ViewCopy("assets/shaders/copy.vert",b):b,this.width=void 0==d?512:d,this.height=void 0==c?512:c,this._init())},d=c.prototype;d._init=function(){this.fbo=new bongiovi.FrameBuffer(this.width,this.height);this.fbo.bind();a.setViewport(0,0,this.fbo.width,this.fbo.height);a.clear(0,0,0,0);this.fbo.unbind()};d.render=function(b){a.setViewport(0,0,this.fbo.width,this.fbo.height);this.fbo.bind();a.clear(0,
0,0,0);this.view.render(b);this.fbo.unbind();return this.fbo.getTexture()};d.getTexture=function(){return this.fbo.getTexture()};bongiovi.Pass=c})();(function(){var a=function(){this.gl=bongiovi.GLTool.gl;this._init()},c=a.prototype;c._init=function(){this.camera=new bongiovi.CameraPerspective;this.camera.setPerspective(45,window.innerWidth/window.innerHeight,5,3E3);var a=vec3.clone([0,0,500]),b=vec3.create(),c=vec3.clone([0,-1,0]);this.camera.lookAt(a,b,c);this.sceneRotation=new bongiovi.SceneRotation;this.rotationFront=mat4.create();mat4.identity(this.rotationFront);this.cameraOtho=new bongiovi.Camera;this._initTextures();this._initViews()};
c._initTextures=function(){};c._initViews=function(){};c.loop=function(){this.update();this.render()};c.update=function(){this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);this.sceneRotation.update();bongiovi.GLTool.setMatrices(this.camera);bongiovi.GLTool.rotate(this.sceneRotation.matrix)};c.render=function(){};bongiovi.Scene=a})();bongiovi=window.bongiovi||{};
(function(){var a=function(a){void 0==a&&(a=document);this._isRotateZ=this._preZ=this._mouseZ=this._z=0;this.matrix=mat4.create();this.m=mat4.create();this._vZaxis=vec3.clone([0,0,0]);this._zAxis=vec3.clone([0,0,-1]);this.preMouse={x:0,y:0};this.mouse={x:0,y:0};this._isMouseDown=!1;this._rotation=quat.clone([0,0,1,0]);this.tempRotation=quat.clone([0,0,0,0]);this._currDiffY=this._currDiffX=this.diffY=this.diffX=this._rotateZMargin=0;this._offset=0.0040;this._easing=0.1;this._slerp=-1;this._isLocked=
!1;var b=this;a.addEventListener("mousedown",function(a){b._onMouseDown(a)});a.addEventListener("touchstart",function(a){b._onMouseDown(a)});a.addEventListener("mouseup",function(a){b._onMouseUp(a)});a.addEventListener("touchend",function(a){b._onMouseUp(a)});a.addEventListener("mousemove",function(a){b._onMouseMove(a)});a.addEventListener("touchmove",function(a){b._onMouseMove(a)});a.addEventListener("mousewheel",function(a){b._onMouseWheel(a)});a.addEventListener("DOMMouseScroll",function(a){b._onMouseWheel(a)})},
c=a.prototype;c.lock=function(a){this._isLocked=a};c.getMousePos=function(a){var b;void 0!=a.changedTouches?(b=a.changedTouches[0].pageX,a=a.changedTouches[0].pageY):(b=a.clientX,a=a.clientY);return{x:b,y:a}};c._onMouseDown=function(a){if(!this._isLocked&&!this._isMouseDown){a=this.getMousePos(a);var b=quat.clone(this._rotation);this._updateRotation(b);this._rotation=b;this._isMouseDown=!0;this._isRotateZ=0;this.preMouse={x:a.x,y:a.y};if(a.y<this._rotateZMargin||a.y>window.innerHeight-this._rotateZMargin)this._isRotateZ=
1;else if(a.x<this._rotateZMargin||a.x>window.innerWidth-this._rotateZMargin)this._isRotateZ=2;this._z=this._preZ;this._currDiffY=this.diffY=this._currDiffX=this.diffX=0}};c._onMouseMove=function(a){this._isLocked||(this.mouse=this.getMousePos(a))};c._onMouseUp=function(a){!this._isLocked&&this._isMouseDown&&(this._isMouseDown=!1)};c._onMouseWheel=function(a){if(!this._isLocked){a.preventDefault();var b=a.wheelDelta;a=a.detail;this._preZ-=5*(a?b?0<b/a/40*a?1:-1:-a/3:b/120)}};c.setCameraPos=function(a){console.log("Set camera pos : ",
a);if(!(0<this._slerp)){var b=a.clone(this._rotation);this._updateRotation(b);this._rotation=a.clone(b);this._currDiffY=this.diffY=this._currDiffX=this.diffX=0;this._isMouseDown=!1;this._isRotateZ=0;this._targetQuat=a.clone(a);this._slerp=1}};c.resetQuat=function(){this._rotation=quat.clone([0,0,1,0]);this.tempRotation=quat.clone([0,0,0,0]);this._targetQuat=void 0;this._slerp=-1};c.update=function(){mat4.identity(this.m);void 0==this._targetQuat?(quat.set(this.tempRotation,this._rotation[0],this._rotation[1],
this._rotation[2],this._rotation[3]),this._updateRotation(this.tempRotation)):(this._slerp+=0.1*(0-this._slerp),0.0010>this._slerp?(quat.set(this._rotation,this._targetQuat[0],this._targetQuat[1],this._targetQuat[2],this._targetQuat[3]),this._targetQuat=void 0,this._slerp=-1):(quat.set(this.tempRotation,0,0,0,0),quat.slerp(this.tempRotation,this._targetQuat,this._rotation,this._slerp)));vec3.set(this._vZaxis,0,0,this._z);vec3.transformQuat(this._vZaxis,this._vZaxis,this.tempRotation);mat4.translate(this.m,
this.m,this._vZaxis);Math.random();mat4.fromQuat(this.matrix,this.tempRotation);mat4.multiply(this.matrix,this.matrix,this.m)};c._updateRotation=function(a){this._isMouseDown&&!this._isLocked&&(this.diffX=this.mouse.x-this.preMouse.x,this.diffY=-(this.mouse.y-this.preMouse.y),this._isInvert&&(this.diffX=-this.diffX),this._isInvert&&(this.diffY=-this.diffY));this._currDiffX+=(this.diffX-this._currDiffX)*this._easing;this._currDiffY+=(this.diffY-this._currDiffY)*this._easing;if(0<this._isRotateZ){if(1==
this._isRotateZ)var b=-this._currDiffX*this._offset,b=b*(this.preMouse.y<this._rotateZMargin?-1:1),c=quat.clone([0,0,Math.sin(b),Math.cos(b)]);else b=-this._currDiffY*this._offset,b*=this.preMouse.x<this._rotateZMargin?1:-1,c=quat.clone([0,0,Math.sin(b),Math.cos(b)]);quat.multiply(quat,a,c)}else b=vec3.clone([this._currDiffX,this._currDiffY,0]),c=vec3.create(),vec3.cross(c,b,this._zAxis),vec3.normalize(c,c),b=vec3.length(b)*this._offset,c=quat.clone([Math.sin(b)*c[0],Math.sin(b)*c[1],Math.sin(b)*
c[2],Math.cos(b)]),quat.multiply(a,c,a);this._z+=(this._preZ-this._z)*this._easing};bongiovi.SceneRotation=a})();bongiovi=window.bongiovi||{};void 0==window.requestAnimFrame&&(window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}());
(function(){var a=function(){this.FRAMERATE=60;this._delayTasks=[];this._nextTasks=[];this._deferTasks=[];this._highTasks=[];this._usurpTask=[];this._enterframeTasks=[];this._idTable=0;requestAnimFrame(this._loop.bind(this))},c=a.prototype;c._loop=function(){requestAnimFrame(this._loop.bind(this));this._process()};c._process=function(){for(var a=0;a<this._enterframeTasks.length;a++){var b=this._enterframeTasks[a];null!=b&&void 0!=b&&b.func.apply(b.scope,b.params)}for(;0<this._highTasks.length;)b=
this._highTasks.pop(),b.func.apply(b.scope,b.params);for(var c=(new Date).getTime(),a=0;a<this._delayTasks.length;a++)b=this._delayTasks[a],c-b.time>b.delay&&(b.func.apply(b.scope,b.params),this._delayTasks.splice(a,1));c=(new Date).getTime();for(a=1E3/this.FRAMERATE;0<this._deferTasks.length;){var b=this._deferTasks.shift(),g=(new Date).getTime();if(g-c<a)b.func.apply(b.scope,b.params);else{this._deferTasks.unshift(b);break}}c=(new Date).getTime();for(a=1E3/this.FRAMERATE;0<this._usurpTask.length;)if(b=
this._usurpTask.shift(),g=(new Date).getTime(),g-c<a)b.func.apply(b.scope,b.params);else break;this._highTasks=this._highTasks.concat(this._nextTasks);this._nextTasks=[];this._usurpTask=[]};c.addEF=function(a,b,c){c=c||[];var g=this._idTable;this._enterframeTasks[g]={scope:a,func:b,params:c};this._idTable++;return g};c.removeEF=function(a){void 0!=this._enterframeTasks[a]&&(this._enterframeTasks[a]=null);return-1};c.delay=function(a,b,c,g){var f=(new Date).getTime();this._delayTasks.push({scope:a,
func:b,params:c,delay:g,time:f})};c.defer=function(a,b,c){this._deferTasks.push({scope:a,func:b,params:c})};c.next=function(a,b,c){this._nextTasks.push({scope:a,func:b,params:c})};c.usurp=function(a,b,c){this._usurpTask.push({scope:a,func:b,params:c})};bongiovi.Scheduler=new a})();bongiovi=window.bongiovi||{};
(function(){SimpleImageLoader=function(){this._imgs={};this._toLoadCount=this._loadedCount=0;this._callbackProgress=this._callback=this._scope=void 0};var a=SimpleImageLoader.prototype;a.load=function(a,d,b,h){this._imgs={};this._loadedCount=0;this._toLoadCount=a.length;this._scope=d;this._callback=b;this._callbackProgress=h;var g=this;for(d=0;d<a.length;d++){b=new Image;b.onload=function(){g._onImageLoaded()};h=a[d];var f=h.split("/"),f=f[f.length-1].split(".")[0];this._imgs[f]=b;b.src=h}};a._onImageLoaded=
function(){this._loadedCount++;if(this._loadedCount==this._toLoadCount)this._callback.call(this._scope,this._imgs);else{var a=this._loadedCount/this._toLoadCount;this._callbackProgress&&this._callbackProgress.call(this._scope,a)}}})();bongiovi.SimpleImageLoader=new SimpleImageLoader;(function(){var a=function(a,b){void 0!=a&&(this.shader=new bongiovi.GLShader(a,b),this._init())},c=a.prototype;c._init=function(){console.log("Should be overwritten by SuperClass")};c.render=function(){console.log("Should be overwritten by SuperClass")};bongiovi.View=a})();(function(){var a=bongiovi.View,c=function(b,c){void 0==b&&(b="assets/shaders/copy.vert",c="assets/shaders/copy.frag");a.call(this,b,c)},d=c.prototype=new a;d._init=function(){var a=[],c=[];a.push([-1,-1,0]);a.push([1,-1,0]);a.push([1,1,0]);a.push([-1,1,0]);c.push([0,0]);c.push([1,0]);c.push([1,1]);c.push([0,1]);this.mesh=new bongiovi.Mesh(4,6,bongiovi.GLTool.gl.TRIANGLES);this.mesh.bufferVertex(a);this.mesh.bufferTexCoords(c);this.mesh.bufferIndices([0,1,2,0,2,3])};d.render=function(a){this.shader.isReady()&&
(this.shader.bind(),this.shader.uniform("texture","uniform1i",0),a.bind(0),bongiovi.GLTool.draw(this.mesh))};bongiovi.ViewCopy=c})();
