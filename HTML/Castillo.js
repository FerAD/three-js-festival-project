/*GRUPOS*/
var castillo = new THREE.Object3D();
var torre1Piso = new THREE.Object3D();
var grupoBarda = new THREE.Object3D();
var grupoCastillo = new THREE.Object3D();


/*MATERIALES*/
var teja = new THREE.MeshLambertMaterial ({ map: THREE.ImageUtils.loadTexture("img/teja.jpg")});
var tabique = new THREE.MeshLambertMaterial ({ map: THREE.ImageUtils.loadTexture("img/tabique.jpg")});
var dorado = new THREE.MeshLambertMaterial({color: 0xE49E56, side: THREE.DoubleSide});
var texturaBarda = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture("img/barda1.jpeg"), side: THREE.DoubleSide});
var texturaPuerta = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture("img/puerta.jpg"), side: THREE.DoubleSide});
var material = new THREE.MeshLambertMaterial({color: 0xEEEEEE, side: THREE.DoubleSide});
var vidrio= new THREE.MeshLambertMaterial ({ map: THREE.ImageUtils.loadTexture("img/vidrio.jpg")});






/*GEOMETRIAS*/
//Primer piso
var geomCilindro1Piso = new THREE.CylinderGeometry(72,72,48,20,20);
var geomTecho1Piso = new THREE.CylinderGeometry(56,72,16,20,20);

var geomCilindroTorre1 = new THREE.CylinderGeometry(16,16,80,20,20);
var geomConoTorre1 = new THREE.CylinderGeometry(3,12,30,28,20);

//Segundo piso
var geomTerraza = new THREE.CylinderGeometry(56,56,8,20,20);
var geomCilindro2Piso = new THREE.CylinderGeometry(40,40,24,20,20);
var geomTecho2Piso = new THREE.CylinderGeometry(24,40,16,20,20);

var geomCilindroTorre2 = new THREE.CylinderGeometry(20,20,90,20,20);


//Torre tercer piso
var geomCilindroTorre3 = new THREE.CylinderGeometry(24,24,24,20,20);
var geomConoTorre3 = new THREE.CylinderGeometry(3,16,30,20,20);

var geomBandera = new THREE.CylinderGeometry(1,1,10,20,20);
var geomAstaBandera = new THREE.CylinderGeometry(1,1,10,20,20);

//Barda castillo
var geometriaBarda = new THREE.TorusGeometry(140, 25, 3, 15, 5);
var geometriaTorre = new THREE.CylinderGeometry(20,30,80,15,20,false);
var geometriaTorreTecho = new THREE.CylinderGeometry(22,22,2,15,20,false);

//Base castillo
var geometriaBaseCastillo = new THREE.CylinderGeometry(110,110,1,8,20,false);

//geometria puerta 
var geometriaPuerta = new THREE.Geometry();
//geometria ventana
var geometriaVentana = new THREE.Geometry();
//geometria relieve
var relieveGeom = new THREE.Geometry();

var v1 = new THREE.Vector3(0,0,0);
var v2 = new THREE.Vector3(20,0,0);
var v3 = new THREE.Vector3(0,30,0);
var v4 = new THREE.Vector3(20,30,0);

var v18 = new THREE.Vector3(0,0,-3);
var v19 = new THREE.Vector3(20,0,-3);
var v20 = new THREE.Vector3(0,30,-3);
var v21 = new THREE.Vector3(20,30,-3);

var v5 = new THREE.Vector3(10,30,0);
var v6 = new THREE.Vector3(1,31,0);
var v7 = new THREE.Vector3(2,32,0);
var v8 = new THREE.Vector3(4,33,0);
var v9 = new THREE.Vector3(5,34,0);
var v10 = new THREE.Vector3(7,35,0);
var v11 = new THREE.Vector3(8,36,0);
var v12 = new THREE.Vector3(10,36,0);
var v13 = new THREE.Vector3(11,35,0);
var v14 = new THREE.Vector3(13,35,0);
var v15 = new THREE.Vector3(14,34,0);
var v14 = new THREE.Vector3(16,34,0);
var v15 = new THREE.Vector3(17,33,0);
var v16 = new THREE.Vector3(19,32,0);
var v17 = new THREE.Vector3(20,31,0);

geometriaPuerta.vertices.push(v1);
geometriaPuerta.vertices.push(v2);
geometriaPuerta.vertices.push(v3);
geometriaPuerta.vertices.push(v4);
geometriaPuerta.vertices.push(v5);
geometriaPuerta.vertices.push(v6);
geometriaPuerta.vertices.push(v7);
geometriaPuerta.vertices.push(v8);
geometriaPuerta.vertices.push(v9);
geometriaPuerta.vertices.push(v10);
geometriaPuerta.vertices.push(v11);
geometriaPuerta.vertices.push(v12);
geometriaPuerta.vertices.push(v13);
geometriaPuerta.vertices.push(v14);
geometriaPuerta.vertices.push(v15);
geometriaPuerta.vertices.push(v16);
geometriaPuerta.vertices.push(v17);
geometriaPuerta.vertices.push(v18);
geometriaPuerta.vertices.push(v19);
geometriaPuerta.vertices.push(v20);
geometriaPuerta.vertices.push(v21);

geometriaPuerta.faces.push(new THREE.Face3(0,1,2));
geometriaPuerta.faces.push(new THREE.Face3(1,2,3));
geometriaPuerta.faces.push(new THREE.Face3(4,5,6));
geometriaPuerta.faces.push(new THREE.Face3(4,7,8));
geometriaPuerta.faces.push(new THREE.Face3(0,17,19));
geometriaPuerta.faces.push(new THREE.Face3(19,2,0));
geometriaPuerta.faces.push(new THREE.Face3(2,3,19));
geometriaPuerta.faces.push(new THREE.Face3(3,20,19));
geometriaPuerta.faces.push(new THREE.Face3(3,1,20));
geometriaPuerta.faces.push(new THREE.Face3(1,18,20));

geometriaPuerta.faces.push(new THREE.Face3(4,9,10));
geometriaPuerta.faces.push(new THREE.Face3(4,11,12));
geometriaPuerta.faces.push(new THREE.Face3(4,13,14));
geometriaPuerta.faces.push(new THREE.Face3(4,15,16));

//COMPUTE
geometriaPuerta.computeFaceNormals();

var puerta = new THREE.Mesh(geometriaPuerta, material);
puerta.position.set(0, -23, 73);//72
puerta.rotation.y = Math.PI/18;


//GEOMETRIA VENTANA

var vv1 = new THREE.Vector3(0,0,0);	//0
var vv2 = new THREE.Vector3(10,0,0);//1
var vv3 = new THREE.Vector3(0,10,0);//2
var vv4 = new THREE.Vector3(10,10,0);//3
var vv5 = new THREE.Vector3(0,0,-3);//4
var vv6 = new THREE.Vector3(10,0,-3);//5
var vv7 = new THREE.Vector3(0,10,-3);//6
var vv8 = new THREE.Vector3(10,10,-3);//7

geometriaVentana.vertices.push(vv1);
geometriaVentana.vertices.push(vv2);
geometriaVentana.vertices.push(vv3);
geometriaVentana.vertices.push(vv4);
geometriaVentana.vertices.push(vv5);
geometriaVentana.vertices.push(vv6);
geometriaVentana.vertices.push(vv7);
geometriaVentana.vertices.push(vv8);

geometriaVentana.faces.push(new THREE.Face3(0,1,2));
geometriaVentana.faces.push(new THREE.Face3(1,2,3));

geometriaVentana.faces.push(new THREE.Face3(0,1,4));
geometriaVentana.faces.push(new THREE.Face3(1,5,4));
geometriaVentana.faces.push(new THREE.Face3(1,7,3));
geometriaVentana.faces.push(new THREE.Face3(1,5,7));
geometriaVentana.faces.push(new THREE.Face3(0,4,6));
geometriaVentana.faces.push(new THREE.Face3(0,6,2));
geometriaVentana.faces.push(new THREE.Face3(2,3,6));
geometriaVentana.faces.push(new THREE.Face3(3,7,6));

//COMPUTE
geometriaVentana.computeFaceNormals();

var ventana = new THREE.Mesh(geometriaVentana, material);
ventana.position.set(-70, 30, 42);//41
ventana.rotation.y = Math.PI/18;

var ventana2 = new THREE.Mesh(geometriaVentana, material);
ventana2.position.set(70, 30, 42);
ventana2.rotation.y = Math.PI/9;

var ventana3 = new THREE.Mesh(geometriaVentana, material);
ventana3.position.set(-11, 50, 33);
ventana3.rotation.y=Math.PI/-18;

var ventana4 = new THREE.Mesh(geometriaVentana, material);
ventana4.position.set(11, 50, 33);
ventana4.rotation.y=Math.PI/9;

var ventana5 = new THREE.Mesh(geometriaVentana, material);
ventana5.position.set(0, 90, 19);
ventana5.rotation.y=Math.PI/18;

//geometria de las torres cubos
 

//radio de las circunferencias del relieveGeom
var radioCircunferenciaInterna = 10;
var radioCircunferenciaMedia = 11;
var radioCircunferenciaExterna = 10;
//numero de circulos por relieveGeom
var numCirculos = 3.0;
//numero de vertices por circulo del relieveGeom
var numVertices = 62.0;
var angulo = 360;

 //obtenemos los vertices para cada circunferencia del relieveGeom cara frontal
            for(i = 0; i<numCirculos; i++){
                switch(i){  
                    case 0:     //circunferencia interna
                        radioTemp = radioCircunferenciaInterna+(radioCircunferenciaInterna*i);    
                        for(j = 0; j < numVertices; j++){   //para cada vertice saco x,y,z
                            x =  radioTemp*Math.cos((j*(angulo/numVertices))*(Math.PI/180.0));
                            y = radioTemp*Math.sin((j*(angulo/numVertices))*Math.PI/180.0);
                            z = 2;
                            //creamos el vector
                            var vector = new THREE.Vector3(x,y,z);
                            //agregamos los vecotres a la geometria
                            relieveGeom.vertices.push(vector);
                            
                        }
                        break;
                    case 1:     //circunferencia media
                        radioTemp = radioCircunferenciaMedia+(radioCircunferenciaMedia*i);
                        for(j = 0; j < numVertices; j++){   //para cada vertice saco x,y,z
                            x =  radioTemp*Math.cos((j*(angulo/numVertices))*(Math.PI/180.0));
                            y = radioTemp*Math.sin((j*(angulo/numVertices))*Math.PI/180.0);
                            z = 2;
                            //creamos el vector
                            var vector = new THREE.Vector3(x,y,z);
                            //agregamos los vecotres a la geometria
                            relieveGeom.vertices.push(vector);
                            
                        }
                        break;
                    case 2:     //circunferencia externa
                        radioTemp = radioCircunferenciaExterna+(radioCircunferenciaExterna*i);
                        for(j = 0; j < numVertices; j++){   //para cada vertice saco x,y,z
                            x =  radioTemp*Math.cos((j*(angulo/numVertices))*(Math.PI/180.0));
                            y = radioTemp*Math.sin((j*(angulo/numVertices))*(Math.PI/180.0));
                            z = 2;
                            //creamos el vector
                            var vector = new THREE.Vector3(x,y,z);
                            //agregamos los vecotres a la geometria
                            relieveGeom.vertices.push(vector);
                            
                        }
                        break;
                }
                
            }

            //obtengo los vertices para cada circunferencia del relieveGeom cara tracera
            for(i = 0; i<numCirculos; i++){
                switch(i){
                    case 0:     //circunferencia interna
                        radioTemp = radioCircunferenciaInterna+(radioCircunferenciaInterna*i);
                        for(j = 0; j < numVertices; j++){   //para cada vertice saco su x,y,z
                            x =  radioTemp*Math.cos((j*(angulo/numVertices))*(Math.PI/180.0));
                            y = radioTemp*Math.sin((j*(angulo/numVertices))*Math.PI/180.0);
                            z = 0;
                            //creamos el vector
                            var vector = new THREE.Vector3(x,y,z);
                            //agregamos los vecotres a la geometria
                            relieveGeom.vertices.push(vector);
                            
                        }
                        break;
                    case 1:     //circunferencia media
                        radioTemp = radioCircunferenciaMedia+(radioCircunferenciaMedia*i);
                        for(j = 0; j < numVertices; j++){   //para cada vertice saco su x,y,z
                            x =  radioTemp*Math.cos((j*(angulo/numVertices))*(Math.PI/180.0));
                            y = radioTemp*Math.sin((j*(angulo/numVertices))*Math.PI/180.0);
                            z = 0;
                            //creamos el vector
                            var vector = new THREE.Vector3(x,y,z);
                            //agregamos los vecotres a la geometria
                            relieveGeom.vertices.push(vector);
                            
                        }
                        break;
                    case 2:     //circunferencia externa
                        radioTemp = radioCircunferenciaExterna+(radioCircunferenciaExterna*i);
                        for(j = 0; j < numVertices; j++){   //para cada vertice saco su x,y,z
                            x =  radioTemp*Math.cos((j*(angulo/numVertices))*(Math.PI/180.0));
                            y = radioTemp*Math.sin((j*(angulo/numVertices))*Math.PI/180.0);
                            z = 0;
                            //creamos el vector
                            var vector = new THREE.Vector3(x,y,z);
                            //agregamos los vecotres a la geometria
                            relieveGeom.vertices.push(vector);
                            
                        }
                        break;
                }
                
            }
            //caras del frente
            for(i=0; i < numCirculos-1; i++)
            {
                for(j=0; j < numVertices; j++) // obtenemos todos los vertices
                {
                    if(i==numCirculos-2)    //caras de los dientes
                        j++;
                    if(j==numVertices-1)    //si es la ultima cara pinta tomando el primer vertice y el ultimo para hacer las dos caras
                    {
                        relieveGeom.faces.push( new THREE.Face3( j+(numVertices*i), j+(numVertices*i)+numVertices, j+(numVertices*i)+1 ));     
                        relieveGeom.faces.push( new THREE.Face3( j+(numVertices*i), j+(numVertices*i)+1, numVertices*i )); 
                        
                    }
                    else   
                    {
                        relieveGeom.faces.push( new THREE.Face3( j+(numVertices*i), j+(numVertices*i)+numVertices, j+(numVertices*i)+numVertices+1 ));     
                        relieveGeom.faces.push( new THREE.Face3( j+(numVertices*i), j+(numVertices*i)+numVertices+1, j+(numVertices*i)+1 )); 
                        
                    }       
                
                }
            }
            //caras atras
            for(i=0; i < numCirculos-1; i++)
            {
                for(j=0; j < numVertices; j++) 
                {
                    if(i==numCirculos-2) //cara de los dientes
                        j++;
                
                    if(j==numVertices-1)    //si es la ultima cara toma los vertices primeros y ultimos para hacer la cara
                    {
                        relieveGeom.faces.push( new THREE.Face3( j+(numVertices*i)+1 +(numCirculos*numVertices) , j+(numVertices*i)+numVertices +(numCirculos*numVertices), j+(numVertices*i)+(numCirculos*numVertices) ));     
                        relieveGeom.faces.push( new THREE.Face3( j+(numVertices*i)+1 +(numCirculos*numVertices), j+(numVertices*i)+(numCirculos*numVertices) , (numVertices*i) +(numCirculos*numVertices))); 
                        
                    }
                    else
                    {
                        relieveGeom.faces.push( new THREE.Face3( j+(numVertices*i)+numVertices+1 +(numCirculos*numVertices), j+(numVertices*i)+numVertices+(numCirculos*numVertices), j+(numVertices*i)+(numCirculos*numVertices)   ));     
                        
                        relieveGeom.faces.push( new THREE.Face3(  j+(numVertices*i)+numVertices+1 +(numCirculos*numVertices), j+(numVertices*i) +(numCirculos*numVertices), j+(numVertices*i)+1 +(numCirculos*numVertices) )); 
                    }       
                
                }
            }

            //crea las caras frontales del interior del relieveGeom
            for(j=0; j < numVertices; j++) 
            {   
                if(j==numVertices-1)    //si es el ultimo vertice
                    {
                        relieveGeom.faces.push( new THREE.Face3( (numCirculos*numVertices) , j+(numCirculos*numVertices), j ));     
                        relieveGeom.faces.push( new THREE.Face3( (numCirculos*numVertices) , j , 0)); 
                        
                    }
                    else
                    {
                        relieveGeom.faces.push( new THREE.Face3( j+1 +(numCirculos*numVertices), j+(numCirculos*numVertices), j ));     
                        
                        relieveGeom.faces.push( new THREE.Face3(  j+1 +(numCirculos*numVertices), j , j +1  )); 
                    }   
            }
            
            //crea las caras frontales de afuera 
            for(j=0; j < numVertices; j++) 
            {   
                if( (j%2)!=0 )  //es el diente
                {   if(j==numVertices-1)    //si es el ultimo vertice
                    {       
                        //cara superior
                        relieveGeom.faces.push( new THREE.Face3( j+numVertices*(numCirculos-1)+(numCirculos*numVertices) , 
                        numVertices*(numCirculos-1)+(numCirculos*numVertices), numVertices*(numCirculos-1)  ));
                
                        relieveGeom.faces.push( new THREE.Face3( j+numVertices*(numCirculos-1)+(numCirculos*numVertices) , 
                        numVertices*(numCirculos-1), numVertices*numCirculos-1  ));
                        
                        //lateral de los dientes
                        relieveGeom.faces.push( new THREE.Face3(j+numVertices+(numCirculos*numVertices) , 
                        j+numVertices*(numCirculos-1)+(numCirculos*numVertices), j+numVertices*(numCirculos-1) ));
                    
                        relieveGeom.faces.push( new THREE.Face3( j+numVertices+(numCirculos*numVertices), 
                        j+numVertices*(numCirculos-1), j+numVertices ));
                    
                    }
                    else
                    {
                        //superior
                        relieveGeom.faces.push( new THREE.Face3( j+numVertices*(numCirculos-1)+(numCirculos*numVertices) , 
                        j+numVertices*(numCirculos-1)+(numCirculos*numVertices)+1, j+numVertices*(numCirculos-1)+1  ));
                
                        relieveGeom.faces.push( new THREE.Face3( j+numVertices*(numCirculos-1)+(numCirculos*numVertices) , 
                        j+numVertices*(numCirculos-1)+1, j+numVertices*(numCirculos-1)  ));
                        
                        
                        //lateral de los dientes
                        relieveGeom.faces.push( new THREE.Face3(j+numVertices+(numCirculos*numVertices) , 
                        j+numVertices*(numCirculos-1)+(numCirculos*numVertices), j+numVertices*(numCirculos-1) ));
                    
                        relieveGeom.faces.push( new THREE.Face3( j+numVertices+(numCirculos*numVertices), 
                        j+numVertices*(numCirculos-1), j+numVertices ));
                    }
                }
                else    //es la parte donde no esta el diente
                {
                    //frontales
                    relieveGeom.faces.push( new THREE.Face3(j+numVertices+(numCirculos*numVertices) , 
                        j+numVertices+(numCirculos*numVertices)+1, j+numVertices +1  ));
                    
                    relieveGeom.faces.push( new THREE.Face3( j+numVertices+(numCirculos*numVertices), 
                        j+numVertices +1 , j+numVertices  ));
                        
                    //laterales 
                    relieveGeom.faces.push( new THREE.Face3(j+numVertices*(numCirculos-1)+(numCirculos*numVertices) , 
                    j+numVertices+(numCirculos*numVertices), j+numVertices ));
                    
                    relieveGeom.faces.push( new THREE.Face3( j+numVertices*(numCirculos-1)+(numCirculos*numVertices), 
                    j+numVertices , j+numVertices*(numCirculos-1) ));
                }
    
            }
            
            
            relieveGeom.computeFaceNormals();
            
            

            



/*OBJETOS DE LA ESCENA*/
//var tam = new THREE.Mesh(geomCilindroTam, tabique);
//Barda
var barda = new THREE.Mesh(geometriaBarda,texturaBarda);
var torre1 = new THREE.Mesh(geometriaTorre,texturaBarda);
var torre2 = new THREE.Mesh(geometriaTorre,texturaBarda);
var techotorre1 = new THREE.Mesh(geometriaTorreTecho,texturaBarda);
var techotorre2 = new THREE.Mesh(geometriaTorreTecho,texturaBarda);
var relieve = new THREE.Mesh(relieveGeom,material);
var relieve2 = new THREE.Mesh(relieveGeom,material);
var relieve3 = new THREE.Mesh(relieveGeom,material);

//base castillo
var baseCastillo = new THREE.Mesh(geometriaBaseCastillo,material);


//Primer piso
var cilindro1Piso = new THREE.Mesh(geomCilindro1Piso, tabique);
var techo1Piso = new THREE.Mesh(geomTecho1Piso, teja);

var astaBandera = new THREE.Mesh(geomAstaBandera, dorado);

//Torres
var baseTorre1 = new THREE.Mesh(geomCilindroTorre1, tabique);
var conoTorre1 = new THREE.Mesh(geomConoTorre1, teja);


//Segundo piso
var terraza = new THREE.Mesh(geomTerraza, tabique);
var cilindro2Piso = new THREE.Mesh(geomCilindro2Piso, tabique);
var techo2Piso = new THREE.Mesh(geomTecho2Piso, teja);

var baseTorre2 = new THREE.Mesh(geomCilindroTorre1, tabique);
var conoTorre2 = new THREE.Mesh(geomConoTorre1, teja);
var astaBandera2 = new THREE.Mesh(geomAstaBandera, dorado);

var baseTorre2Derecha = new THREE.Mesh(geomCilindroTorre2, tabique);


//Torre tercer piso
var baseTorre3 = new THREE.Mesh(geomCilindroTorre3, tabique);
var conoTorre3 = new THREE.Mesh(geomConoTorre3, teja);
var astaBandera3 = new THREE.Mesh(geomAstaBandera, dorado);



//Primer piso
techo1Piso.position.set(0,32,0);
baseTorre1.position.set(0,16,0);
conoTorre1.position.set(0,67,0);
astaBandera.position.set(0,87,0);

torre1Piso.add(baseTorre1);
torre1Piso.add(conoTorre1);
torre1Piso.add(astaBandera);
var torres = [];
for (var i = 0; i < 4; i++) {
	torres[i] = torre1Piso.clone();
};



//Segundo Piso
terraza.position.set(0, 44, 0);
cilindro2Piso.position.set(0, 60, -6.4);
techo2Piso.position.set(0,80, -6.4);

baseTorre2.position.set(-36, 50, -24);
conoTorre2.position.set(-36, 102, -24);
astaBandera.position.set(-36, 122, -24);

baseTorre2Derecha.position.set(35, 67, -24);

//Torre tercer piso
baseTorre3.position.set(0, 100, -6.4);
conoTorre3.position.set(0, 127, -6.4);
astaBandera3.position.set(0, 147, -6.4);







/*POSICIONES*/
var radio = 72;

var angulo = 20 * Math.PI / 180;//30°
torres[0].position.set(Math.cos(angulo) * radio, 0, Math.sin(angulo) * radio);

var angulo = 160 * Math.PI / 180;//30°
torres[1].position.set(Math.cos(angulo) * radio, 0, Math.sin(angulo) * radio);

var angulo = 210 * Math.PI / 180;//30°
torres[2].position.set(Math.cos(angulo) * radio, 0, Math.sin(angulo) * radio);

var angulo = 330 * Math.PI / 180;//30°
torres[3].position.set(Math.cos(angulo) * radio, 0, Math.sin(angulo) * radio);

barda.rotation.x = Math.PI/2;
barda.rotation.z = Math.PI/2;
barda.position.y = -24;

torre1.position.y = -14;
torre1.position.z = 140;

relieve.rotation.x = Math.PI/2;
relieve.position.y = 27;
relieve.position.z = 122;
relieve.position.x = -70;

torre2.position.y = -14;
torre2.position.z = 35;
torre2.position.x =133;

relieve2.rotation.x = Math.PI/2;
relieve2.position.y = 27;
relieve2.position.z = 96;
relieve2.position.x = 98;

relieve3.rotation.x = Math.PI/2;
relieve3.position.y = 110;
relieve3.position.z = -24;
relieve3.position.x = 35;

techotorre1.position.z = 140;
techotorre1.position.y = 28;

techotorre2.position.y = 28;
techotorre2.position.z = 35;
techotorre2.position.x = 133;

baseCastillo.position.y = -23;

/*var radio = 72;
for (var i = 0; i < 4; i++) {

	torres[i].position.set(Math.cos(angulo) * 92, 0, Math.sin(angulo) * 92);

	angulo += 90 * Math.PI / 180;//90°
};*/


/*Añadiendo objetos a grupos*/
//Barda
grupoBarda.add(barda);
grupoBarda.add(torre1);
grupoBarda.add(torre2);
grupoBarda.add(techotorre1);
grupoBarda.add(techotorre2);
grupoBarda.rotation.y = Math.PI/-6;
//relieve de las torres
castillo.add(relieve);
castillo.add(relieve2);
castillo.add(relieve3);

/*ANADIENDO OBJETOS A GRUPO CASTILLO*/

//Castillo
castillo.add(baseCastillo);
castillo.add(grupoBarda);
//gerometrias creadas
castillo.add(puerta);
castillo.add(ventana);
castillo.add(ventana2);
castillo.add(ventana3);
castillo.add(ventana4);
castillo.add(ventana5);



//Primer piso
castillo.add(cilindro1Piso);
castillo.add(techo1Piso);

//Segundo piso
castillo.add(terraza);
castillo.add(cilindro2Piso);
castillo.add(techo2Piso);
castillo.add(baseTorre2);
castillo.add(conoTorre2);
castillo.add(astaBandera2);
castillo.add(baseTorre2Derecha);

//Torre tercer piso
castillo.add(baseTorre3);
castillo.add(conoTorre3);
castillo.add(astaBandera3);



//Torres
for (var i = 0; i < 4; i++) 
	castillo.add(torres[i]);