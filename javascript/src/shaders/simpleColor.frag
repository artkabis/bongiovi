#define SHADER_NAME SIMPLE_COLOR_FRAGMENT

precision highp float;
uniform vec3 color;
uniform float opacity;

void main(void) {
    gl_FragColor = vec4(color, opacity);
}