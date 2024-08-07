varying vec2 vUv;
varying vec3 vPosition;

vec3 colorA = vec3(116.0 / 255.0, 36.00 / 255.0, 255.0 / 255.0);
vec3 colorB = vec3(255.0 / 255.0, 41.0 / 255.0, 177.0 / 255.0);

void main() {
    vec3 color = mix(colorA, colorB, vPosition.y);

    gl_FragColor += vec4(color, 1.0);
}