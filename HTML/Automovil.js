/*DECLARACION DE GRUPOS*/
var grupoCarro = new THREE.Object3D();
var puertaDelanteraFrente = new THREE.Object3D();
var puertaDelanteraFondo = new THREE.Object3D();
var puertaTraseraFondo = new THREE.Object3D();
var puertaTraseraFrente = new THREE.Object3D();
var cofre = new THREE.Object3D();




/*MATERIALES*/
var vidrio= new THREE.MeshLambertMaterial ({ map: THREE.ImageUtils.loadTexture("img/vidrio.jpg")});
var aluminio = new THREE.MeshLambertMaterial ({ map: THREE.ImageUtils.loadTexture("img/aluminio.jpg")});
var foco = new THREE.MeshLambertMaterial ({ map: THREE.ImageUtils.loadTexture("img/faro.jpg")});
var plastico= new THREE.MeshLambertMaterial ({ map: THREE.ImageUtils.loadTexture("img/plasticoTextura.jpg")});
var caucho = new THREE.MeshLambertMaterial ({ map: THREE.ImageUtils.loadTexture("img/llanta.jpg")});
var rojo = new THREE.MeshLambertMaterial({color: 0xFF0000, side: THREE.DoubleSide});
var negro = new THREE.MeshLambertMaterial({color: 0x575757, side: THREE.DoubleSide});



/*VARIABLES DE ANCHO*/
z = 0.5;
z1 = 10;
z2 = 9;





/*CREANDO LA ESTRUCTURA DE LA BASE DE LA CAJUELA*/
var estructuraBaseCajuela = new THREE.Geometry();


//PUNTOS

//Arreglo de puntos
var x = [ -19 , -19 , -18 , -11 ,  -20 , -20 , -19, -11];
var y = [-6.5 ,  -1 ,   0 ,   0 , -6.5 ,   0 ,  1 ,   1];
var numPuntos = 8;

//Puntos Frentes (0 - 7)
for (var i = 0; i < numPuntos; i++) {
	estructuraBaseCajuela.vertices.push (new THREE.Vector3 (x[i], y[i], 0));
};

//Puntos Fondos (8 - 15)
for (var i = 0; i < numPuntos; i++) {
	estructuraBaseCajuela.vertices.push (new THREE.Vector3 (x[i], y[i], -z));
};


//CARAS
for (var i = 0; i < 3; i++) {
	//Caras delanteras
	estructuraBaseCajuela.faces.push (new THREE.Face3 (i, i + 1, i + 5));
	estructuraBaseCajuela.faces.push (new THREE.Face3 (i, i + 5, i + 4));


	//Caras traseras
	estructuraBaseCajuela.faces.push (new THREE.Face3 (i + 8, i + 13, i + 9));
	estructuraBaseCajuela.faces.push (new THREE.Face3 (i + 8, i + 12, i + 13));

	//Uniones externas
	estructuraBaseCajuela.faces.push (new THREE.Face3 (i + 4, i + 5, i + 13));
	estructuraBaseCajuela.faces.push (new THREE.Face3 (i + 4, i + 13, i + 12));

	//Uniones internas
	estructuraBaseCajuela.faces.push (new THREE.Face3 (i , i + 9, i + 1));
	estructuraBaseCajuela.faces.push (new THREE.Face3 (i , i + 8, i + 9));
};

//Uniones finales
//Superior
estructuraBaseCajuela.faces.push (new THREE.Face3 (7, 3, 11));
estructuraBaseCajuela.faces.push (new THREE.Face3 (7, 11, 15));
//Inferior
estructuraBaseCajuela.faces.push (new THREE.Face3 (4, 0, 8));
estructuraBaseCajuela.faces.push (new THREE.Face3 (4, 8, 12));


//COMPUTE
estructuraBaseCajuela.computeFaceNormals();









/*CREANDO LA CAJUELA*/
var estructuraCajuela = new THREE.Geometry();


//PUNTOS

//Arreglo de puntos
var x = [ -7.5 ,  -7.5 , -6.5 , 0.5 ,  -8.5 , -8.5 , -7.5 , 0.5];
var y = [ -7.5 ,    -2 ,   -1 ,  -1 ,  -7.5 ,   -1 ,    0 , 0];
var numPuntos = 8;

//Puntos Frentes (0 - 7)
for (var i = 0; i < numPuntos; i++) {
	estructuraCajuela.vertices.push (new THREE.Vector3 (x[i], y[i], -z));
};

//Puntos Fondos (8 - 15)
for (var i = 0; i < numPuntos; i++) {
	estructuraCajuela.vertices.push (new THREE.Vector3 (x[i], y[i], -z2 - z));
};


//CARAS
for (var i = 0; i < 3; i++) {
	//Caras delanteras
	estructuraCajuela.faces.push (new THREE.Face3 (i, i + 1, i + 5));
	estructuraCajuela.faces.push (new THREE.Face3 (i, i + 5, i + 4));


	//Caras traseras
	estructuraCajuela.faces.push (new THREE.Face3 (i + 8, i + 13, i + 9));
	estructuraCajuela.faces.push (new THREE.Face3 (i + 8, i + 12, i + 13));

	//Uniones externas
	estructuraCajuela.faces.push (new THREE.Face3 (i + 4, i + 5, i + 13));
	estructuraCajuela.faces.push (new THREE.Face3 (i + 4, i + 13, i + 12));

	//Uniones internas
	estructuraCajuela.faces.push (new THREE.Face3 (i , i + 9, i + 1));
	estructuraCajuela.faces.push (new THREE.Face3 (i , i + 8, i + 9));
};

//Uniones finales
//Superior
estructuraCajuela.faces.push (new THREE.Face3 (7, 3, 11));
estructuraCajuela.faces.push (new THREE.Face3 (7, 11, 15));
//Inferior
estructuraCajuela.faces.push (new THREE.Face3 (4, 0, 8));
estructuraCajuela.faces.push (new THREE.Face3 (4, 8, 12));


//COMPUTE
estructuraCajuela.computeFaceNormals();









/*CREANDO EL RELLENO DE LA CAJUELA*/
var estructuraRellenoCajuela = new THREE.Geometry();


//PUNTOS

//Arreglo de puntos
var x = [ -19 , -19 , -18 , -11 ,  -11 ,  -12 ,  -12];
var y = [-6.5 ,  -1 ,   0 ,   0 , -4.5 , -4.5 , -6.5];
var numPuntos = 7;

//Puntos Frentes (0 - 6)
for (var i = 0; i < numPuntos; i++) {
	estructuraRellenoCajuela.vertices.push (new THREE.Vector3 (x[i], y[i], 0));
};

//Puntos Fondos (7 - 13)
for (var i = 0; i < numPuntos; i++) {
	estructuraRellenoCajuela.vertices.push (new THREE.Vector3 (x[i], y[i], -z));
};


//CARAS
for (var i = 4; i >= 1; i--) {
	//Caras delanteras
	estructuraRellenoCajuela.faces.push (new THREE.Face3 (5, i, i - 1));

	//Caras traseras
	estructuraRellenoCajuela.faces.push (new THREE.Face3 (12, i + 7, i + 6));
};
estructuraRellenoCajuela.faces.push (new THREE.Face3 (5, 0, 6));
estructuraRellenoCajuela.faces.push (new THREE.Face3 (12, 13, 7));
for (var i = 0; i < 6; i++) {
	//Uniones 
	estructuraRellenoCajuela.faces.push (new THREE.Face3 (i, i + 1, i + 8));
	estructuraRellenoCajuela.faces.push (new THREE.Face3 (i, i + 8, i + 7));
};


//COMPUTE
estructuraRellenoCajuela.computeFaceNormals();










/*CREANDO LA ESTRUCTURA BASE DEL TECHO*/
var estructuraBaseTecho = new THREE.Geometry();


//PUNTOS

//Arreglo de puntos
var x = [ -11 ,  -8 ,   -7 ,   1 ,  2 , 6 , -12 ,  -9 , -7.5 , 1.5 ,   3 , 7];
var y = [   0 ,   6 ,  6.5 , 6.5 ,  6 , 0 ,   0 , 6.5 ,  7.5 , 7.5 , 6.5 , 0];
var numPuntos = 12;

//Puntos Frentes (0 - 11)
for (var i = 0; i < numPuntos; i++) {
	estructuraBaseTecho.vertices.push (new THREE.Vector3 (x[i], y[i], 0));
};

//Puntos Fondos (12 - 23)
for (var i = 0; i < numPuntos; i++) {
	estructuraBaseTecho.vertices.push (new THREE.Vector3 (x[i], y[i], -z));
};


//CARAS
for (var i = 0; i < 5; i++) {
	//Caras delanteras
	estructuraBaseTecho.faces.push (new THREE.Face3 (i, i + 1, i + 7));
	estructuraBaseTecho.faces.push (new THREE.Face3 (i, i + 7, i + 6));


	//Caras traseras
	estructuraBaseTecho.faces.push (new THREE.Face3 (i + 12, i + 18, i + 19));
	estructuraBaseTecho.faces.push (new THREE.Face3 (i + 12, i + 19, i + 13));

	//Uniones externas
	estructuraBaseTecho.faces.push (new THREE.Face3 (i + 6, i + 7, i + 19));
	estructuraBaseTecho.faces.push (new THREE.Face3 (i + 6, i + 19, i + 18));

	//Uniones internas
	estructuraBaseTecho.faces.push (new THREE.Face3 (i , i + 12, i + 13));
	estructuraBaseTecho.faces.push (new THREE.Face3 (i , i + 13, i + 1));
};

//Uniones finales
//Derecha
estructuraBaseTecho.faces.push (new THREE.Face3 (6, 0, 12));
estructuraBaseTecho.faces.push (new THREE.Face3 (6, 12, 18));
//Izquierda
estructuraBaseTecho.faces.push (new THREE.Face3 (5, 11, 23));
estructuraBaseTecho.faces.push (new THREE.Face3 (5, 23, 17));


//COMPUTE
estructuraBaseTecho.computeFaceNormals();











/*CREANDO EL TECHO*/
var estructuraTecho = new THREE.Geometry();


//PUNTOS

//Arreglo de puntos
var x = [-8 ,  -7 ,   1 ,  2 ,   -9 , -7.5 , 1.5 ,   3 ];
var y = [ 6 , 6.5 , 6.5 ,  6 ,  6.5 ,  7.5 , 7.5 , 6.5 ];
var numPuntos = 8;

//Puntos Frentes (0 - 7)
for (var i = 0; i < numPuntos; i++) {
	estructuraTecho.vertices.push (new THREE.Vector3 (x[i], y[i], 0));
};

//Puntos Fondos (8 - 15)
for (var i = 0; i < numPuntos; i++) {
	estructuraTecho.vertices.push (new THREE.Vector3 (x[i], y[i], -z2 - z));
};


//CARAS
for (var i = 0; i < 3; i++) {
	//Caras delanteras
	estructuraTecho.faces.push (new THREE.Face3 (i, i + 1, i + 5));
	estructuraTecho.faces.push (new THREE.Face3 (i, i + 5, i + 4));


	//Caras traseras
	estructuraTecho.faces.push (new THREE.Face3 (i + 8, i + 12, i + 13));
	estructuraTecho.faces.push (new THREE.Face3 (i + 8, i + 13, i + 9));

	//Uniones externas
	estructuraTecho.faces.push (new THREE.Face3 (i + 4, i + 5, i + 13));
	estructuraTecho.faces.push (new THREE.Face3 (i + 4, i + 13, i + 12));

	//Uniones internas
	estructuraTecho.faces.push (new THREE.Face3 (i , i + 8, i + 9));
	estructuraTecho.faces.push (new THREE.Face3 (i , i + 9, i + 1));
};

//Uniones finales
//Derecha
estructuraTecho.faces.push (new THREE.Face3 (4, 0, 8));
estructuraTecho.faces.push (new THREE.Face3 (4, 8, 12));
//Izquierda
estructuraTecho.faces.push (new THREE.Face3 (3, 7, 15));
estructuraTecho.faces.push (new THREE.Face3 (3, 15, 11));


//COMPUTE
estructuraTecho.computeFaceNormals();








/*CREANDO LA ESTRUCTURA DE LA BASE DEL COFRE*/
var estructuraBaseCofre = new THREE.Geometry();


//PUNTOS

//Arreglo de puntos
var x = [ 6 , 18 , 19 ,   19 ,   6 , 19 , 20,   20];
var y = [ 0 ,  0 , -1 , -6.5 ,   1 ,  1 ,  0, -6.5];
var numPuntos = 8;

//Puntos Frentes (0 - 7)
for (var i = 0; i < numPuntos; i++) {
	estructuraBaseCofre.vertices.push (new THREE.Vector3 (x[i], y[i], 0));
};

//Puntos Fondos (8 - 15)
for (var i = 0; i < numPuntos; i++) {
	estructuraBaseCofre.vertices.push (new THREE.Vector3 (x[i], y[i], -z));
};


//CARAS
for (var i = 0; i < 3; i++) {
	//Caras delanteras
	estructuraBaseCofre.faces.push (new THREE.Face3 (i, i + 1, i + 5));
	estructuraBaseCofre.faces.push (new THREE.Face3 (i, i + 5, i + 4));


	//Caras traseras
	estructuraBaseCofre.faces.push (new THREE.Face3 (i + 8, i + 13, i + 9));
	estructuraBaseCofre.faces.push (new THREE.Face3 (i + 8, i + 12, i + 13));

	//Uniones externas
	estructuraBaseCofre.faces.push (new THREE.Face3 (i + 4, i + 5, i + 13));
	estructuraBaseCofre.faces.push (new THREE.Face3 (i + 4, i + 13, i + 12));

	//Uniones internas
	estructuraBaseCofre.faces.push (new THREE.Face3 (i , i + 9, i + 1));
	estructuraBaseCofre.faces.push (new THREE.Face3 (i , i + 8, i + 9));
};

//Uniones finales
//Superior
estructuraBaseCofre.faces.push (new THREE.Face3 (7, 3, 11));
estructuraBaseCofre.faces.push (new THREE.Face3 (7, 11, 15));
//Inferior
estructuraBaseCofre.faces.push (new THREE.Face3 (4, 0, 8));
estructuraBaseCofre.faces.push (new THREE.Face3 (4, 8, 12));


//COMPUTE
estructuraBaseCofre.computeFaceNormals();








/*CREANDO EL COFRE*/
var estructuraCofre = new THREE.Geometry();


//PUNTOS

//Arreglo de puntos
var x = [ 0 , 11 , 12 ,   12 , -0.5 , 12 , 13 ,   13];
var y = [-1 , -1 , -2 , -7.5 ,    0 ,  0 , -1 , -7.5];
var numPuntos = 8;

//Puntos Frentes (0 - 7)
for (var i = 0; i < numPuntos; i++) {
	estructuraCofre.vertices.push (new THREE.Vector3 (x[i], y[i], -z));
};

//Puntos Fondos (8 - 15)
for (var i = 0; i < numPuntos; i++) {
	estructuraCofre.vertices.push (new THREE.Vector3 (x[i], y[i], -z1));
};


//CARAS
for (var i = 0; i < 3; i++) {
	//Caras delanteras
	estructuraCofre.faces.push (new THREE.Face3 (i, i + 1, i + 5));
	estructuraCofre.faces.push (new THREE.Face3 (i, i + 5, i + 4));


	//Caras traseras
	estructuraCofre.faces.push (new THREE.Face3 (i + 8, i + 13, i + 9));
	estructuraCofre.faces.push (new THREE.Face3 (i + 8, i + 12, i + 13));

	//Uniones externas
	estructuraCofre.faces.push (new THREE.Face3 (i + 4, i + 5, i + 13));
	estructuraCofre.faces.push (new THREE.Face3 (i + 4, i + 13, i + 12));

	//Uniones internas
	estructuraCofre.faces.push (new THREE.Face3 (i , i + 9, i + 1));
	estructuraCofre.faces.push (new THREE.Face3 (i , i + 8, i + 9));
};

//Uniones finales
//Superior
estructuraCofre.faces.push (new THREE.Face3 (7, 3, 11));
estructuraCofre.faces.push (new THREE.Face3 (7, 11, 15));
//Inferior
estructuraCofre.faces.push (new THREE.Face3 (4, 0, 8));
estructuraCofre.faces.push (new THREE.Face3 (4, 8, 12));


//COMPUTE
estructuraCofre.computeFaceNormals();





/*CREANDO EL RELLENO DEL COFRE*/
var estructuraRellenoCofre = new THREE.Geometry();


//PUNTOS

//Arreglo de puntos
var x = [ 6 , 18 , 19 ,   19 ,   13 ,   13 ,    6];
var y = [ 0 ,  0 , -1 , -6.5 , -6.5 , -4.5 , -4.5];
var numPuntos = 7;

//Puntos Frentes (0 - 6)
for (var i = 0; i < numPuntos; i++) {
	estructuraRellenoCofre.vertices.push (new THREE.Vector3 (x[i], y[i], 0));
};

//Puntos Fondos (7 - 13)
for (var i = 0; i < numPuntos; i++) {
	estructuraRellenoCofre.vertices.push (new THREE.Vector3 (x[i], y[i], -z));
};


//CARAS
for (var i = 0; i < 4; i++) {
	//Caras delanteras
	estructuraRellenoCofre.faces.push (new THREE.Face3 (5, i + 1, i));

	//Caras traseras
	estructuraRellenoCofre.faces.push (new THREE.Face3 (12, i + 8, i + 7));
};
estructuraRellenoCofre.faces.push (new THREE.Face3 (5, 0, 6));
estructuraRellenoCofre.faces.push (new THREE.Face3 (12, 7, 13));
for (var i = 0; i < 6; i++) {
	//Uniones 
	estructuraRellenoCofre.faces.push (new THREE.Face3 (i, i + 1, i + 8));
	estructuraRellenoCofre.faces.push (new THREE.Face3 (i, i + 8, i + 7));
};
estructuraRellenoCofre.faces.push (new THREE.Face3 (13, 0, 7));
estructuraRellenoCofre.faces.push (new THREE.Face3 (13, 6, 0));


//COMPUTE
estructuraRellenoCofre.computeFaceNormals();








/*CREANDO LA PUERTA TRASERA*/
var estructuraPuertaTrasera = new THREE.Geometry();


//PUNTOS

//Arreglo de puntos
var x = [ -9 , -6 , -5 ,   0 ,    0 , -3 , -3 , -9];
var y = [    0 ,    6 ,  6.5 , 6.5 , -6.5 , -6.5 , -4.5 , -4.5];
var numPuntos = 8;

//Puntos Frentes (0 - 8)
for (var i = 0; i < numPuntos; i++) {
	estructuraPuertaTrasera.vertices.push (new THREE.Vector3 (x[i], y[i], 0));
};
estructuraPuertaTrasera.vertices.push (new THREE.Vector3 (-1.5, -4.5, 0));//8

//Puntos Fondos (9 - 17)
for (var i = 0; i < numPuntos; i++) {
	estructuraPuertaTrasera.vertices.push (new THREE.Vector3 (x[i], y[i], -z));
};
estructuraPuertaTrasera.vertices.push (new THREE.Vector3 (-1.5, -4.5, -z));//17


//CARAS
for (var i = 0; i < 3; i++) {
	//Caras delanteras
	estructuraPuertaTrasera.faces.push (new THREE.Face3 (7, i + 1, i));

	//Caras traseras
	estructuraPuertaTrasera.faces.push (new THREE.Face3 (16, i + 10, i + 9));
};
//Restantes delanteros
estructuraPuertaTrasera.faces.push (new THREE.Face3 (7, 8, 3));
estructuraPuertaTrasera.faces.push (new THREE.Face3 (4, 8, 6));
estructuraPuertaTrasera.faces.push (new THREE.Face3 (4, 6, 5));
estructuraPuertaTrasera.faces.push (new THREE.Face3 (5, 4, 3));

//Restantes traseras
estructuraPuertaTrasera.faces.push (new THREE.Face3 (16, 17, 12));
estructuraPuertaTrasera.faces.push (new THREE.Face3 (13, 12, 15));
estructuraPuertaTrasera.faces.push (new THREE.Face3 (13, 15, 14));

for (var i = 0; i < 7; i++) {
	//Uniones 
	estructuraPuertaTrasera.faces.push (new THREE.Face3 (i, i + 1, i + 10));
	estructuraPuertaTrasera.faces.push (new THREE.Face3 (i, i + 10, i + 9));
};
estructuraPuertaTrasera.faces.push (new THREE.Face3 (7, 0, 9));
estructuraPuertaTrasera.faces.push (new THREE.Face3 (7, 9, 16));

//COMPUTE
estructuraPuertaTrasera.computeFaceNormals();









/*CREANDO LA PUERTA TRASERA*/
var estructuraPuertaDelantera = new THREE.Geometry();


//PUNTOS

//Arreglo de puntos
var x = [  -7 ,  -5 , -4 , 0 ,    0 , -7];
var y = [ 6.5 , 6.5,   6 , 0 , -6.5 , -6.5];
var numPuntos = 6;

//Puntos Frentes (0 - 5)
for (var i = 0; i < numPuntos; i++) {
	estructuraPuertaDelantera.vertices.push (new THREE.Vector3 (x[i], y[i], 0));
};

//Puntos Fondos (6 - 11)
for (var i = 0; i < numPuntos; i++) {
	estructuraPuertaDelantera.vertices.push (new THREE.Vector3 (x[i], y[i], -z));
};


//CARAS
for (var i = 0; i < 4; i++) {
	//Caras delanteras
	estructuraPuertaDelantera.faces.push (new THREE.Face3 (5, i + 1, i));

	//Caras traseras
	estructuraPuertaDelantera.faces.push (new THREE.Face3 (11, i + 7, i + 6));
};

for (var i = 0; i < 5; i++) {
	//Uniones 
	estructuraPuertaDelantera.faces.push (new THREE.Face3 (i, i + 1, i + 7));
	estructuraPuertaDelantera.faces.push (new THREE.Face3 (i, i + 7, i + 6));
};
estructuraPuertaDelantera.faces.push (new THREE.Face3 (5, 0, 6));
estructuraPuertaDelantera.faces.push (new THREE.Face3 (5, 6, 11));

//COMPUTE
estructuraPuertaDelantera.computeFaceNormals();








/*CREANDO EL PISO*/
var estructuraPiso = new THREE.Geometry();


//PUNTOS

//Arreglo de puntos
var x = [ -19 ,  -12 ,  -12 ,   -5 ,   -5 ,    6 ,    6 ,   13 ,   13 ,   19,
		  -18 ,  -11 ,  -11 ,   -6 ,   -6 ,    7 ,    7 ,   12 ,   12 ,   18];
var y = [-6.5 , -6.5 , -4.5 , -4.5 , -6.5 , -6.5 , -4.5 , -4.5 , -6.5 , -6.5,
		 -7.5 , -7.5 , -5.5 , -5.5 , -7.5 , -7.5 , -5.5 , -5.5 , -7.5 , -7.5];
var numPuntos = 20;

//Puntos Frentes (0 - 19)
for (var i = 0; i < numPuntos; i++) {
	estructuraPiso.vertices.push (new THREE.Vector3 (x[i], y[i], 0));
};

//Puntos Fondos (20 - 39)
for (var i = 0; i < numPuntos; i++) {
	estructuraPiso.vertices.push (new THREE.Vector3 (x[i], y[i], -z1));
};


//CARAS
for (var i = 0; i < 9; i++) {
	//Caras delanteras
	estructuraPiso.faces.push (new THREE.Face3 (i + 10, i + 11, i + 1));
	estructuraPiso.faces.push (new THREE.Face3 (i + 10, i + 1, i));

	//Caras traseras
	estructuraPiso.faces.push (new THREE.Face3 (i + 30, i + 20, i + 21));
	estructuraPiso.faces.push (new THREE.Face3 (i + 30, i + 21, i + 31));

	//Uniones externas
	estructuraPiso.faces.push (new THREE.Face3 (i, i + 1, i + 21));
	estructuraPiso.faces.push (new THREE.Face3 (i, i + 21, i + 20));

	//Uniones internas
	estructuraPiso.faces.push (new THREE.Face3 (i + 30, i + 31, i + 11));
	estructuraPiso.faces.push (new THREE.Face3 (i + 30, i + 11, i + 10));
};

//Uniones finales
//Izquierda
estructuraPiso.faces.push (new THREE.Face3 (30, 10, 0));
estructuraPiso.faces.push (new THREE.Face3 (30,  0, 20));
//Derecha
estructuraPiso.faces.push (new THREE.Face3 (19, 39, 29));
estructuraPiso.faces.push (new THREE.Face3 (19, 29,  9));


//COMPUTE
estructuraPiso.computeFaceNormals();








/*OBJETOS DE LA ESCENA*/

//Geometrias
var estructuraSeparacion = new THREE.CubeGeometry(1, 13, z);
var estructuraRetrovisor = new THREE.CubeGeometry(6, 1, z2);
var estructuraParabrisas = new THREE.CubeGeometry(6.5, 1, z2);
var estructuraVentanaDelantera = new THREE.CubeGeometry(2.5, 5, 0.6);
var estructuraVentanaTrasera = new THREE.CubeGeometry(5, 5, 0.6);
var estructuraDefensa = new THREE.CubeGeometry(3, 1, z1);
var estructuraFaro = new THREE.SphereGeometry(0.75,50,50, 0 * Math.PI / 180, 180 * Math.PI / 180 );
var estructuraLlanta = new THREE.CylinderGeometry(2.5,2.5,1,20,20);
var estructuraUnion = new THREE.CubeGeometry(0.5, 5.5, 10);
var estructuraManija = new THREE.SphereGeometry(0.5,50,50, 0 * Math.PI / 180, 90 * Math.PI / 180, 0 , Math.PI * 2);

//Cajuela
var soporteFrenteCajuela = new THREE.Mesh( estructuraBaseCajuela, rojo);
var soporteFondoCajuela = new THREE.Mesh( estructuraBaseCajuela, rojo);
var rellenoCajuelaFrente = new THREE.Mesh( estructuraRellenoCajuela, rojo);
var rellenoCajuelaFondo = new THREE.Mesh( estructuraRellenoCajuela, rojo);
var unionCajuela = new THREE.Mesh( estructuraUnion, rojo);
var cajuela = new THREE.Mesh( estructuraCajuela, rojo);
var retrovisor = new THREE.Mesh( estructuraRetrovisor, vidrio);
var defensaTrasera = new THREE.Mesh( estructuraDefensa, aluminio);


//Techo
var baseTechoFrente = new THREE.Mesh( estructuraBaseTecho, rojo);
var baseTechoFondo = new THREE.Mesh( estructuraBaseTecho, rojo);
var techo = new THREE.Mesh( estructuraTecho, rojo);

//Cofre
var baseCofreFrente = new THREE.Mesh( estructuraBaseCofre, rojo);
var baseCofreFondo = new THREE.Mesh( estructuraBaseCofre, rojo);
var rellenoCofreFrente = new THREE.Mesh( estructuraRellenoCofre, rojo);
var rellenoCofreFondo = new THREE.Mesh( estructuraRellenoCofre, rojo);
var unionCofre = new THREE.Mesh( estructuraUnion, rojo);
var cofreGeom = new THREE.Mesh( estructuraCofre, rojo);
var parabrisas = new THREE.Mesh( estructuraParabrisas, vidrio);
var defensaDelantera = new THREE.Mesh( estructuraDefensa, aluminio);
var faroFrente = new THREE.Mesh( estructuraFaro, foco);
var faroFondo = new THREE.Mesh( estructuraFaro, foco);

//Centro
var puertaTraseraFr = new THREE.Mesh( estructuraPuertaTrasera, rojo);
var puertaTraseraFo = new THREE.Mesh( estructuraPuertaTrasera, rojo);
var puertaDelanteraFr = new THREE.Mesh( estructuraPuertaDelantera, rojo);
var puertaDelanteraFo = new THREE.Mesh( estructuraPuertaDelantera, rojo);

var manijaDelanteraFrente = new THREE.Mesh( estructuraManija, negro);
var manijaDelanteraFondo = new THREE.Mesh( estructuraManija, negro);
var manijaTraseraFrente = new THREE.Mesh( estructuraManija, negro);
var manijaTraseraFondo = new THREE.Mesh( estructuraManija, negro);


var separacionPuertasFrente = new THREE.Mesh( estructuraSeparacion, plastico);
var separacionPuertasFondo = new THREE.Mesh( estructuraSeparacion, plastico);

var ventanaDFrente = new THREE.Mesh( estructuraVentanaDelantera, vidrio);
var ventanaTFrente = new THREE.Mesh( estructuraVentanaTrasera, vidrio);
var ventanaDFondo = new THREE.Mesh( estructuraVentanaDelantera, vidrio);
var ventanaTFondo = new THREE.Mesh( estructuraVentanaTrasera, vidrio);

//Piso
var piso = new THREE.Mesh( estructuraPiso, negro);

//Llantas
var llantaDelanteraFrente = new THREE.Mesh( estructuraLlanta, caucho);
var llantaDelanteraFondo = new THREE.Mesh( estructuraLlanta, caucho);
var llantaTraseraFrente = new THREE.Mesh( estructuraLlanta, caucho);
var llantaTraseraFondo = new THREE.Mesh( estructuraLlanta, caucho);








/*POSICIONES*/

//Llantas
llantaTraseraFondo.rotation.x = Math.PI / 2;
llantaTraseraFondo.position.set(-8.5,-8, -9.5);

llantaTraseraFrente.rotation.x = Math.PI / 2;
llantaTraseraFrente.position.set(-8.5,-8, -0.5);

llantaDelanteraFondo.position.set(9.5,-8, -9.5);
llantaDelanteraFondo.rotation.x = Math.PI / 2;

llantaDelanteraFrente.position.set(9.5,-8, -0.5);
llantaDelanteraFrente.rotation.x = Math.PI / 2;

//Cajuela
soporteFondoCajuela.position.set(0, 0, -z2 -z);
rellenoCajuelaFondo.position.set(0, 0, -z2 -z);
unionCajuela.position.set(-11.5, -1.75, -5);
cajuela.position.set(-11.5, 1, 0);
defensaTrasera.position.set(-19.5, -7, -5);

//Techo
baseTechoFondo.position.set(0, 0, -z2 -z);
retrovisor.position.set(-10, 3.75, -5);
retrovisor.rotation.z = 65 * Math.PI / 180;
parabrisas.position.set(4.5, 3.5, -5);
parabrisas.rotation.z = -60 * Math.PI / 180;

//Cofre
baseCofreFondo.position.set(0, 0, -z2 -z);
cofre.position.set(7, 1, 0);
rellenoCofreFondo.position.set(0, 0, -z2 -z);
unionCofre.position.set(6.5, -1.75, -5);
defensaDelantera.position.set(19.5, -7, -5);
faroFrente.position.set(13, -2, -1.5);
faroFrente.rotation.y = Math.PI / 2;
faroFondo.position.set(13, -2, -9);
faroFondo.rotation.y = Math.PI / 2;

//Puertas
puertaTraseraFrente.position.set(0,0,0);
puertaTraseraFondo.position.set(-1.5,0,-z2 -z);
puertaDelanteraFrente.position.set(6, 0,0);
puertaDelanteraFondo.position.set(6, 0,-z2 -z);

manijaTraseraFrente.position.set(-1.75, -1, 0);
manijaTraseraFrente.rotation.z = -Math.PI / 2;

manijaTraseraFondo.position.set(-1.75, -1, -0.5);
manijaTraseraFondo.rotation.z = Math.PI / 2;

manijaDelanteraFrente.position.set(-5.75, -1, 0);
manijaDelanteraFrente.rotation.z = -Math.PI / 2;

manijaDelanteraFondo.position.set(-5.75, -1, -0.5);
manijaDelanteraFondo.rotation.z = Math.PI / 2;

separacionPuertasFrente.position.set(-1.5, 0, -0.25);
separacionPuertasFondo.position.set(-1.5, 0, -z2  - (z * 2) + 0.25);

ventanaTFondo.position.set(-3.5, 3, -0.25);
ventanaDFondo.position.set(-5.25, 3, -0.25);
ventanaTFrente.position.set(-3.5, 3, -0.25);
ventanaDFrente.position.set(-5.25, 3, -0.25);





/*DECLARACION Y CREACION DE GRUPOS*/
var grupoCarro = new THREE.Object3D();
var puertaDelanteraFrente = new THREE.Object3D();
var puertaDelanteraFondo = new THREE.Object3D();
var puertaTraseraFondo = new THREE.Object3D();
var puertaTraseraFrente = new THREE.Object3D();
var grupoLlantas = new THREE.Object3D();


//Puertas
puertaTraseraFrente.add(ventanaTFrente);
puertaTraseraFrente.add(puertaTraseraFr);
puertaTraseraFrente.add(manijaTraseraFrente);
puertaDelanteraFrente.add(ventanaDFrente);
puertaDelanteraFrente.add(puertaDelanteraFr);
puertaDelanteraFrente.add(manijaDelanteraFrente);
puertaTraseraFondo.add(ventanaTFondo);
puertaTraseraFondo.add(puertaTraseraFo);
puertaTraseraFondo.add(manijaTraseraFondo);
puertaDelanteraFondo.add(ventanaDFondo);
puertaDelanteraFondo.add(puertaDelanteraFo);
puertaDelanteraFondo.add(manijaDelanteraFondo);

//Llantas
grupoLlantas.add(llantaTraseraFondo);
grupoLlantas.add(llantaTraseraFrente);
grupoLlantas.add(llantaDelanteraFondo);
grupoLlantas.add(llantaDelanteraFrente);

//Cajuela
//grupoCarro.add(manijaTraseraFrente);
grupoCarro.add(soporteFrenteCajuela);
grupoCarro.add(soporteFondoCajuela);
grupoCarro.add(rellenoCajuelaFondo);
grupoCarro.add(rellenoCajuelaFrente);
grupoCarro.add(unionCajuela);
grupoCarro.add(cajuela);
grupoCarro.add(defensaTrasera);


//Techo
grupoCarro.add(baseTechoFrente);
grupoCarro.add(baseTechoFondo);
grupoCarro.add(techo);
grupoCarro.add(retrovisor);

//Cofre
cofre.add(cofreGeom);
cofre.add(faroFrente);
cofre.add(faroFondo);

grupoCarro.add(cofre);
grupoCarro.add(baseCofreFrente);
grupoCarro.add(baseCofreFondo);
grupoCarro.add(rellenoCofreFondo);
grupoCarro.add(rellenoCofreFrente);
grupoCarro.add(unionCofre);
grupoCarro.add(parabrisas);
grupoCarro.add(defensaDelantera);


//Centro
grupoCarro.add(puertaTraseraFondo);
grupoCarro.add(puertaTraseraFrente);
grupoCarro.add(puertaDelanteraFondo);
grupoCarro.add(puertaDelanteraFrente);

grupoCarro.add(separacionPuertasFrente);
grupoCarro.add(separacionPuertasFondo);

//Piso
grupoCarro.add(piso);
grupoCarro.add(grupoLlantas);