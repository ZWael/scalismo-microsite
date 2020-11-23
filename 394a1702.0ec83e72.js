(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{157:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return h}));var n=t(0),i=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var a=i.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},m=function(e){var a=p(e.components);return i.a.createElement(s.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},d=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=p(t),d=n,h=m["".concat(o,".").concat(d)]||m[d]||b[d]||l;return t?i.a.createElement(h,c(c({ref:a},s),{},{components:t})):i.a.createElement(h,c({ref:a},s))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var r in a)hasOwnProperty.call(a,r)&&(c[r]=a[r]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return r})),t.d(a,"default",(function(){return p}));var n=t(3),i=t(7),l=(t(0),t(157)),o={id:"tutorial1",title:"Hello Scalismo!"},c={unversionedId:"tutorials/tutorial1",id:"tutorials/tutorial1",isDocsHomePage:!1,title:"Hello Scalismo!",description:"The goal in this tutorial is to present the most important data structures, as well as the visualization capabilities of Scalismo.",source:"@site/docs/tutorials/tutorial1.md",slug:"/tutorials/tutorial1",permalink:"/docs/next/tutorials/tutorial1",editUrl:"https://github.com/unibas-gravis/scalismo-microsite/edit/master/website/docs/tutorials/tutorial1.md",version:"current",sidebar:"docs",next:{title:"tutorial2",permalink:"/docs/next/tutorials/tutorial2"}},r=[{value:"Initializing the system",id:"initializing-the-system",children:[]},{value:"Meshes (surface data)",id:"meshes-surface-data",children:[]},{value:"Points and Vectors",id:"points-and-vectors",children:[]},{value:"Scalar Images",id:"scalar-images",children:[{value:"Scalar Image domain",id:"scalar-image-domain",children:[]},{value:"Scalar image values",id:"scalar-image-values",children:[]},{value:"Creating scalar images",id:"creating-scalar-images",children:[]}]},{value:"Statistical Mesh Models",id:"statistical-mesh-models",children:[{value:"Sampling in the UI",id:"sampling-in-the-ui",children:[]},{value:"Sampling programmatically",id:"sampling-programmatically",children:[]}]}],s={rightToc:r};function p(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The goal in this tutorial is to present the most important data structures, as well as the visualization capabilities of Scalismo."),Object(l.b)("h5",{id:"related-resources"},"Related resources"),Object(l.b)("p",null,"The following resources from our ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.futurelearn.com/courses/statistical-shape-modelling"}),"online course")," may provide\nsome helpful context for this tutorial:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"What is Scalismo ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.futurelearn.com/courses/statistical-shape-modelling/3/steps/250314"}),"(Video)"))),Object(l.b)("h2",{id:"initializing-the-system"},"Initializing the system"),Object(l.b)("p",null,"Before we start, we need to initialize Scalismo by calling:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"scalismo.initialize()\nimplicit val rng = scalismo.utils.Random(42)\n")),Object(l.b)("p",null,"The call to ",Object(l.b)("inlineCode",{parentName:"p"},"scalismo.initialize")," loads all the dependencies to native C++ libraries (such as e.g. ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.vtk.org"}),"vtk")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.hdf-group.org"}),"hdf5"),").\nThe second call tells scalismo, which source\nof randomness to use and at the same time seeds the random number generator appropriately."),Object(l.b)("p",null,"Later on we would like to visualize the objects we create. This is done using ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/unibas-gravis/scalismo-ui"}),"Scalismo-ui")," - the visualization library accompanying scalismo.\nWe can load an instance of the GUI, which we name here simply ",Object(l.b)("inlineCode",{parentName:"p"},"ui")," as follows:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"import scalismo.ui.api.ScalismoUI\n\nval ui = ScalismoUI()\n")),Object(l.b)("h2",{id:"meshes-surface-data"},"Meshes (surface data)"),Object(l.b)("p",null,"The first fundamental data structure we discuss is the triangle mesh,\nwhich is defined in the package ",Object(l.b)("inlineCode",{parentName:"p"},"scalismo.mesh"),".\nIn the following we will need access to the following object, which we\nnow import:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"import scalismo.mesh.TriangleMesh\nimport scalismo.io.{MeshIO, StatisticalModelIO}\nimport scalismo.common.PointId\nimport scalismo.mesh.TriangleId\nimport scalismo.geometry.{_3D, Point3D}\nimport scalismo.image.{DiscreteImage, DiscreteImage3D}\nimport scalismo.statisticalmodel.PointDistributionModel // indicates that we work in 3D space\n")),Object(l.b)("p",null,"Meshes can be read from a file using the method ",Object(l.b)("inlineCode",{parentName:"p"},"readMesh")," from the ",Object(l.b)("inlineCode",{parentName:"p"},"MeshIO"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val mesh: TriangleMesh[_3D] = MeshIO.readMesh(new java.io.File("datasets/Paola.ply")).get\n')),Object(l.b)("p",null,"To visualize any object in Scalismo, we can use the ",Object(l.b)("inlineCode",{parentName:"p"},"show")," method of the ",Object(l.b)("inlineCode",{parentName:"p"},"ui")," object.\nWe often want to organize different visualizations of an object in a group.\nWe start directly with this practice and\nfirst create a new group, to which we then add the visualization of the mesh:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val paolaGroup = ui.createGroup("paola")\nval meshView = ui.show(paolaGroup, mesh, "Paola")\n')),Object(l.b)("p",null,'Now that the mesh is displayed in the "Scalismo Viewer\'s 3D view", you can interact with it as follows:'),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"to rotate: maintain the left mouse button clicked and drag"),Object(l.b)("li",{parentName:"ul"},"to shift/translate: maintain the middle mouse button clicked and drag"),Object(l.b)("li",{parentName:"ul"},"to scale: maintain the right mouse button clicked and drag up or down")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note: if you are a Mac user, please find out how to emulate these events using your mouse or trackpad"),"\n",Object(l.b)("em",{parentName:"p"},"Note also that you can use the "),"RC",Object(l.b)("em",{parentName:"p"},", "),"X",Object(l.b)("em",{parentName:"p"},", "),"Y",Object(l.b)("em",{parentName:"p"}," and "),"Z",Object(l.b)("em",{parentName:"p"}," buttons in the 3D view to recenter the camera on the displayed object.")),Object(l.b)("h4",{id:"anatomy-of-a-triangle-mesh"},"Anatomy of a Triangle mesh"),Object(l.b)("p",null,"A 3D triangle mesh in scalismo consists of a ",Object(l.b)("inlineCode",{parentName:"p"},"pointSet"),", which maintains a collection of 3D points and a\nlist of triangle cells. We can access individual points using their point id.\nHere we show how we can access the first point in the mesh:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'println("first point " + mesh.pointSet.point(PointId(0)))\n// first point Point3D(162.2697296142578,-11.115056991577148,301.18719482421875)\n')),Object(l.b)("p",null,"Similarly, we can access the first triangles as follows:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'println("first cell " + mesh.triangulation.triangle(TriangleId(0)))\n// first cell TriangleCell(PointId(0),PointId(1),PointId(2))\n')),Object(l.b)("p",null,"The first cell is a triangle between the first, second and third points of the mesh.\nNotice here that the cell indicates the identifiers of the points (their index in the point sequence)\ninstead of the geometric position of the points."),Object(l.b)("p",null,"Instead of visualizing the mesh, we can also display the points forming the mesh."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val pointCloudView = ui.show(paolaGroup, mesh.pointSet, "pointCloud")\n')),Object(l.b)("p",null,'This should add a new point cloud element to the scene with the name "pointCloud".'),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note: depending on your computer, visualizing the full point cloud may slow down the visualization performance.")),Object(l.b)("p",null,"Note that to clean up the 3D scene, you can delete the objects either from the user interface (by right-clicking on the object's name), or programmatically by calling ",Object(l.b)("inlineCode",{parentName:"p"},"remove")," on the corresponding view object :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"pointCloudView.remove()\n")),Object(l.b)("h2",{id:"points-and-vectors"},"Points and Vectors"),Object(l.b)("p",null,"We are very often interested in modelling transformations of point sets. Therefore we need to learn how to manipulate point positions.\nThe two fundamental classes in this context are ",Object(l.b)("inlineCode",{parentName:"p"},"Point")," and ",Object(l.b)("inlineCode",{parentName:"p"},"EuclideanVector"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"import scalismo.geometry.{Point}\nimport scalismo.geometry.{EuclideanVector}\n")),Object(l.b)("p",null,"We define points by specifying their coordinates:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val p1: Point[_3D] = Point3D(4.0, 5.0, 6.0)\nval p2: Point[_3D] = Point3D(1.0, 2.0, 3.0)\n")),Object(l.b)("p",null,"The difference between two points is a ",Object(l.b)("inlineCode",{parentName:"p"},"EuclideanVector")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val v1: EuclideanVector[_3D] = Point3D(4.0, 5.0, 6.0) - Point3D(1.0, 2.0, 3.0)\n")),Object(l.b)("p",null,"The sum of a point with a vector yields a new point:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val p3: Point[_3D] = p1 + v1\n")),Object(l.b)("p",null,"Points can be converted to vectors:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val v2: EuclideanVector[_3D] = p1.toVector\n")),Object(l.b)("p",null,"and vice versa:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val v3: Point[_3D] = v1.toPoint\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Remark: Observe that the type of the expression is a parametric type ",Object(l.b)("inlineCode",{parentName:"em"},"Point[_3D]"),", where the type parameter ",Object(l.b)("inlineCode",{parentName:"em"},"_3D")," encodes the dimensionality. This pattern holds true for most types in Scalismo. It allows us to write generic code, which is independent of the dimensionality of the space.")),Object(l.b)("p",null,"We put these concepts in practice, and illustrate how we can compute the center of mass, given a sequence of points:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val pointList = Seq(\n    Point3D(4.0, 5.0, 6.0),\n    Point3D(1.0, 2.0, 3.0),\n    Point3D(14.0, 15.0, 16.0),\n    Point3D(7.0, 8.0, 9.0),\n    Point3D(10.0, 11.0, 12.0)\n  )\n")),Object(l.b)("p",null,"In a first step, we treat all the points as displacement vectors (the displacement of the points from the origin)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val vectors = pointList.map { p: Point[_3D] => p.toVector } // use map to turn points into vectors\n")),Object(l.b)("p",null,"The average displacement can be easily computed by averaging all the vectors."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val vectorSum = vectors.reduce { (v1, v2) => v1 + v2 } // sum up all vectors in the collection\nval centerV: EuclideanVector[_3D] = vectorSum * (1.0 / pointList.length) // divide the sum by the number of points\n")),Object(l.b)("p",null,"And finally we treat the average displacement again as a point in space."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val center = centerV.toPoint\n")),Object(l.b)("h2",{id:"scalar-images"},"Scalar Images"),Object(l.b)("p",null,"The next important data structure is the (scalar-) image.\nA ",Object(l.b)("em",{parentName:"p"},"discrete")," scalar image (e.g. gray level image) in Scalismo is simply a function from a discrete domain of points to a scalar value."),Object(l.b)("p",null,"We will need the following imports:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"import scalismo.io.ImageIO; // to read images\nimport scalismo.geometry.{IntVector, IntVector3D} // represent image indices\n")),Object(l.b)("p",null,"Let's read and display a 3D image (MRI of a human):"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val image: DiscreteImage[_3D, Short] = ImageIO.read3DScalarImage[Short](new java.io.File("datasets/PaolaMRI.vtk")).get\nval imageView = ui.show(paolaGroup, image, "mri")\n')),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note: depending on your view on the scene, it could appear as if the image is not displayed. In this case, make sure to rotate the scene and change the position of the slices as indicated below.")),Object(l.b)("p",null,'To visualize the different image slices in the viewer, select "Scene" (the upper node in the scene tree graph) and use the X,Y,Z sliders.'),Object(l.b)("p",null,"You can also change the way of visualizing the 3D scene under the"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"View -> Perspective")," menu."),Object(l.b)("h3",{id:"scalar-image-domain"},"Scalar Image domain"),Object(l.b)("p",null,"Let's inspect the domain of the image :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val origin: Point[_3D] = image.domain.origin\n// origin: Point[_3D] = Point3D(\n//   92.54853820800781,\n//   -121.92584228515625,\n//   135.2670135498047\n// )\nval spacing: EuclideanVector[_3D] = image.domain.spacing\n// spacing: EuclideanVector[_3D] = EuclideanVector3D(1.5, 1.5, 1.5)\nval size: IntVector[_3D] = image.domain.size\n// size: IntVector[_3D] = IntVector3D(171, 171, 139)\n")),Object(l.b)("p",null,"The discrete image domain is a 3-dimensional regular grid of points originating at point (92.5485, -121.926, 135.267),\nwith regular spacing of 1.5 mm in each dimension and containing 171, 171, 139 grid slots in the x, y and z directions respectively."),Object(l.b)("p",null,"To better see this, let's display the first 172 points of the image domain"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val imagePoints: Iterator[Point[_3D]] = image.domain.pointSet.points.take(172)\nval gridPointsView = ui.show(paolaGroup, imagePoints.toIndexedSeq, "imagePoints")\n')),Object(l.b)("h3",{id:"scalar-image-values"},"Scalar image values"),Object(l.b)("p",null,"The other important part of a discrete image are the values associated with the domain points"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val values : Iterator[Short] = image.values\n")),Object(l.b)("p",null,"This is an iterator of scalar values of type ",Object(l.b)("inlineCode",{parentName:"p"},"Short")," as encoded in the read image."),Object(l.b)("p",null,"Let's check the first value, which is the value associated with the origin :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"image.values.next\n// res4: Short = 0\n")),Object(l.b)("p",null,"The point ",Object(l.b)("em",{parentName:"p"},"origin")," corresponds to the grid point with index (0,0,0). Hence, the same value can be obtained by accessing the image at this index :"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"image(IntVector(0,0,0))\n// res5: Short = 0\n")),Object(l.b)("p",null,"Naturally, the number of scalar values should be equal to the number of points"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"image.values.size == image.domain.pointSet.numberOfPoints\n")),Object(l.b)("p",null,"Notice that you can check the intensity value at a particular point position in the image, by maintaining the Ctrl key pressed and hovering over the image. The intensity value will then be displayed in the lower left corner of the Scalismo viewer window."),Object(l.b)("h3",{id:"creating-scalar-images"},"Creating scalar images"),Object(l.b)("p",null,"Given that discrete scalar images are a mapping between points and values,\nwe can easily create such images programmatically."),Object(l.b)("p",null,"Here we create a new image defined on the same domain of points with artificially created values: We threshold an MRI image, where\nall the values above 300 are replaced with 0."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val threshValues = image.values.map { v: Short => if (v <= 300) v else 0.toShort }\nval thresholdedImage: DiscreteImage[_3D, Short] = DiscreteImage3D[Short](image.domain, threshValues.toIndexedSeq)\nui show(paolaGroup, thresholdedImage, "thresh")\n')),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note: We need to write 0.toShort or 0 : Short in order to ensure that the ",Object(l.b)("inlineCode",{parentName:"em"},"threshValues")," have type ",Object(l.b)("inlineCode",{parentName:"em"},"Short")," and not ",Object(l.b)("inlineCode",{parentName:"em"},"Int"),".")),Object(l.b)("p",null,"There is, however, also a more elegant way to write above code, namely using the ",Object(l.b)("inlineCode",{parentName:"p"},"map")," method. The ",Object(l.b)("inlineCode",{parentName:"p"},"map")," method applies\nan operation to all values. Using this method, we can write instead"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val thresholdedImage2 = image.map(v => if (v <= 300) v else 0.toShort)\n")),Object(l.b)("h2",{id:"statistical-mesh-models"},"Statistical Mesh Models"),Object(l.b)("p",null,"Finally, we look at Statistical Shape Models."),Object(l.b)("p",null,"Statistical models can be read by calling ",Object(l.b)("inlineCode",{parentName:"p"},"readStatisticalMeshModel")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'import scalismo.io.StatisticalModelIO // to read statistical shape models\nval faceModel: PointDistributionModel[_3D, TriangleMesh] = StatisticalModelIO.readStatisticalTriangleMeshModel3D(new java.io.File("datasets/bfm.h5")).get\nval faceModelView = ui.show(faceModel, "faceModel")\n')),Object(l.b)("h3",{id:"sampling-in-the-ui"},"Sampling in the UI"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},'Exercise: Sample random instances of faces by using the graphical tools in the scene pane : click on the "model" tree node and then the "Random" button')),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},'Exercise: click a landmark on a position of the face model, e.g. chin or eye corner.. (use the toggle button "LM" in the toolbar to activate landmark clicking). Rename this landmark and call it '),"noseLM",Object(l.b)("em",{parentName:"p"},". Now continue sampling from the model. What happens to the selected point?")),Object(l.b)("p",null,'As you can see, a new instance of the face model is displayed each time along with the corresponding landmark point. Notice how the position of the landmark point changes in space while it keeps the same "meaning" on the face (eye corner, tip of nose ..)'),Object(l.b)("h3",{id:"sampling-programmatically"},"Sampling programmatically"),Object(l.b)("p",null,"Sampling in the ui is useful for getting a visual impression of the variability of a model. But more often we want to\nsample from a model programmatically. We can obtain a sample from the model, by calling the ",Object(l.b)("inlineCode",{parentName:"p"},"sample method"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val randomFace: TriangleMesh[_3D] = faceModel.sample\n")),Object(l.b)("h4",{id:"exercise-visualize-a-few-randomly-generated-meshes-in-the-ui"},"Exercise: Visualize a few randomly generated meshes in the ui."),Object(l.b)("h5",{id:"retrieving-objects-from-scalismo-ui"},"Retrieving objects from Scalismo-ui"),Object(l.b)("p",null,"This is a good point to show how objects that we added manually in Scalismo-ui can be retrieved programmatically. A typical example is,\nthat we manually clicked a landmark, such as our ",Object(l.b)("inlineCode",{parentName:"p"},"noseLM"),", on one of the visualized objects and would like to work with them in our\nprograms.\nTo achieve this we can use the ",Object(l.b)("inlineCode",{parentName:"p"},"filter")," method of the ui object. It works as follows:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'import scalismo.ui.api.LandmarkView\nimport scalismo.geometry.Landmark\n\nval matchingLandmarkViews : Seq[LandmarkView] = ui.filter[LandmarkView](paolaGroup, (l : LandmarkView) => l.name == "noseLM")\nval matchingLandmarks : Seq[Landmark[_3D]] = matchingLandmarkViews.map(lmView => lmView.landmark)\n')),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"filter")," method is very general. The type parameter (the parameter inside []) indicates the type of ",Object(l.b)("inlineCode",{parentName:"p"},"view")," object we want to\nsearch for. Here we look only for landmarks, and consequently specify the type ",Object(l.b)("inlineCode",{parentName:"p"},"LandmarkView"),". As a first we  pass the group,\nin which we want to search for an object. The second argument is a predicate, which is executed for all objects in the group, of the right type.\nHere we specify, that ",Object(l.b)("inlineCode",{parentName:"p"},"filter"),' should match all objects whose name equals "noseLM". Calling the ',Object(l.b)("inlineCode",{parentName:"p"},"filter")," method results in a sequence\nof view objects, which match the predicate. To get the matching scalismo object, we call the method ",Object(l.b)("inlineCode",{parentName:"p"},"landmark")," on the view object.\nWe can do this for all landmark view objects in the sequence using the familiar ",Object(l.b)("inlineCode",{parentName:"p"},"map")," function."),Object(l.b)("p",null,"Finally, we can get the id and position of the matched landmark as follows:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val landmarkId : String = matchingLandmarks.head.id\nval landmarkPosition : Point[_3D] = matchingLandmarks.head.point\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Remark: In exactly the same way we can retrieve all other types of objects,\nwhich we can visualize in in Scalismo-ui, such as images, meshes, pointClouds, etc.")))}p.isMDXComponent=!0}}]);