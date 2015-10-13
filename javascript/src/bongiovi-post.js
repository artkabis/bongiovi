// bongiovi-post.js


"use strict";

var GLTools = require("./bongiovi/GLTools");

var bongiovi = {
	GL:GLTools,
	GLTools:GLTools,
	Scheduler:require("./bongiovi/Scheduler"),
	SimpleImageLoader:require("./bongiovi/SimpleImageLoader"),
	EaseNumber:require("./bongiovi/EaseNumber"),
	QuatRotation:require("./bongiovi/QuatRotation"),
	Scene:require("./bongiovi/Scene"),
	Camera:require("./bongiovi/Camera"),
	SimpleCamera:require("./bongiovi/SimpleCamera"),
	CameraPerspective:require("./bongiovi/CameraPerspective"),
	Mesh:require("./bongiovi/Mesh"),
	Face:require("./bongiovi/Face"),
	GLShader:require("./bongiovi/GLShader"),
	GLTexture:require("./bongiovi/GLTexture"),
	ShaderLibs:require("./bongiovi/ShaderLibs"),
	View:require("./bongiovi/View"),
	ViewCopy:require("./bongiovi/ViewCopy"),
	ViewAxis:require("./bongiovi/ViewAxis"),
	ViewDotPlane:require("./bongiovi/ViewDotPlanes"),
	MeshUtils:require("./bongiovi/MeshUtils"),
	FrameBuffer:require("./bongiovi/FrameBuffer"),
	EventDispatcher:require("./bongiovi/EventDispatcher"),
	glm:require("gl-matrix"),

	post: {
		Pass:require("./bongiovi/post/Pass"),
		EffectComposer:require("./bongiovi/post/EffectComposer"),
		PassGreyscale:require("./bongiovi/post/PassGreyscale")
	}
};

module.exports = bongiovi;