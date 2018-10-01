// Материал поля
var Envmat = new THREE.ShaderMaterial({
    uniforms: { 
        mask: { type: "t", value: T_loader.load("res/env.png") },
        stone: { type: "t", value: T_loader.load("res/stone.jpg", function(e){ e.wrapS = e.wrapT = THREE.RepeatWrapping } )},
        grass: { type: "t", value: T_loader.load("res/grass.jpg", function(e){ e.wrapS = e.wrapT = THREE.RepeatWrapping } )},
        trail: { type: "t", value: T_loader.load("res/trail.jpg", function(e){ e.wrapS = e.wrapT = THREE.RepeatWrapping } )},
        ground: { type: "t", value: T_loader.load("res/ground.jpg", function(e){ e.wrapS = e.wrapT = THREE.RepeatWrapping } )},
        
    },
    vertexShader:`
        varying vec2 vUv;
        void main(){
            vUv = uv;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader:`

        varying vec2 vUv;

        uniform sampler2D mask;
        uniform sampler2D stone;
        uniform sampler2D grass;
        uniform sampler2D trail;
        uniform sampler2D ground;

        void main(){

            vec4 mask = texture2D(mask, vUv);
            vec4 stone = texture2D(stone, vUv * 10.0);
            vec4 grass = texture2D(grass, vUv * 8.0);
            vec4 trail = texture2D(trail, vUv * 10.0);
            vec4 ground = texture2D(ground, vUv * 14.0);

            vec3 mix_st = mix(vec3(1.,0.5,0.2),vec3(0.0,0.5,0.2), mask.r);

            vec4 mix_stone = mix(grass,stone, mask.r); // Первое смешивание
            vec4 mix_land = mix(trail, mix_stone, mask.g); // Второе смешивание
            vec4 mix_land_2 = mix(ground, mix_land, mask.b); // Третье смешивание

            gl_FragColor = mix_land_2 * vec4(mask.a,mask.a,mask.a, 1.0);
        }
    `
});

// Материал камней
var stonemat = new THREE.ShaderMaterial({
    uniforms: { 
        img: { type: "t", value: T_loader.load("res/stone_port.jpg", function(e){ e.wrapS = e.wrapT = THREE.RepeatWrapping }) }
        
    },
    vertexShader:`
        varying vec2 vUv;
        void main(){
            vUv = uv;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D img;
        void main(){
            vec4 img = texture2D(img, vUv);
            gl_FragColor = img;
        }
    `
});

var portal_2mat = new THREE.ShaderMaterial({
    uniforms: { 
        img: { type: "t", value: T_loader.load("res/portal_2.png") },
        time: { type: "f", value: 0.0 }        
    },
    vertexShader:`
        varying vec2 vUv;
        void main(){
            vUv = uv;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D img;
        uniform float time;
        void main(){
            vec4 img = texture2D(img, vec2(vUv.x, vUv.y + (sin(time)*0.4)));
            gl_FragColor = img;
        }
    `,
    transparent:true    
});

var materials = {
    Env: Envmat,
    stone:  stonemat,
    portal_1: new THREE.MeshBasicMaterial( { map:T_loader.load("res/portal.png"), transparent: true } ),
    portal_2: portal_2mat
}