import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45 , window.innerWidth / window.innerHeight , 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    var planetGeometry = new THREE.SphereGeometry(4,20,20);

    //Load the planet textures
    var texture = THREE.ImageUtils.loadTexture("https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/planet-512.jpg");
    var normalmap = THREE.ImageUtils.loadTexture("https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/normal-map-512.jpg");
    var specmap = THREE.ImageUtils.loadTexture("https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/water-map-512.jpg");

    var planetMaterial = new THREE.MeshPhongMaterial();
    planetMaterial.map = texture;

    planetMaterial.specularMap = specmap;
    planetMaterial.specular = new THREE.Color( 0xff0000 );
    planetMaterial.shininess = 1;

    planetMaterial.normalMap = normalmap;
    planetMaterial.normalScale.set(-0.3,-0.3);

    var planet = new THREE.Mesh(planetGeometry, planetMaterial);

    //Space background is a large sphere
    var spacetex = THREE.ImageUtils.loadTexture("https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/space.jpg");
    var spacesphereGeo = new THREE.SphereGeometry(20,20,20);
    var spacesphereMat = new THREE.MeshPhongMaterial();
    spacesphereMat.map = spacetex;

    var spacesphere = new THREE.Mesh(spacesphereGeo,spacesphereMat);

    //spacesphere needs to be double sided as the camera is within the spacesphere
    spacesphere.material.side = THREE.DoubleSide;

    spacesphere.material.map.wrapS = THREE.RepeatWrapping;
    spacesphere.material.map.wrapT = THREE.RepeatWrapping;
    spacesphere.material.map.repeat.set( 5, 3);

    scene.add(spacesphere);

    //position camera
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = -15;
    camera.lookAt(scene.position);

    //create two spotlights to illuminate the scene
    var spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( -40, 60, -10 );
    spotLight.intensity = 2;
    scene.add( spotLight );

    var spotLight2 = new THREE.SpotLight( 0x5192e9 );
    spotLight2.position.set( 40, -60, 30 );
    spotLight2.intensity = 1.5;
    scene.add( spotLight2 );

    $("#WebGL-output").append(renderer.domElement);

    //call render loop once
    render();

    //render loop
    function render() {
      requestAnimationFrame(render);
      //rotate planet and spacesphere
      planet.rotation.y += 0.002;
      spacesphere.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
  },
});
