(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),o=(a(0),a(157)),s={id:"scalismo-ui-introduction",title:"Introduction to Scalismo-ui"},r={unversionedId:"tutorials/scalismo-ui-introduction",id:"tutorials/scalismo-ui-introduction",isDocsHomePage:!1,title:"Introduction to Scalismo-ui",description:"The goal of this tutorial is to give a practical introduction to visualizing with",source:"@site/docs/tutorials/scalismo-ui-introduction.md",slug:"/tutorials/scalismo-ui-introduction",permalink:"/docs/next/tutorials/scalismo-ui-introduction",editUrl:"https://github.com/unibas-gravis/scalismo-microsite/edit/master/website/docs/tutorials/scalismo-ui-introduction.md",version:"current",sidebar:"docs",previous:{title:"Model fitting using MCMC - Fitting a shape model",permalink:"/docs/next/tutorials/tutorial15"}},l=[{value:"Starting Scalismo-ui and creating groups",id:"starting-scalismo-ui-and-creating-groups",children:[]},{value:"Visualizing objects",id:"visualizing-objects",children:[]},{value:"Finding object views",id:"finding-object-views",children:[]},{value:"Adding transformations",id:"adding-transformations",children:[]},{value:"Visualizing Statistical Shape Models",id:"visualizing-statistical-shape-models",children:[]},{value:"Visualizing other scalismo objects",id:"visualizing-other-scalismo-objects",children:[]}],c={rightToc:l};function u(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The goal of this tutorial is to give a practical introduction to visualizing with\n",Object(o.b)("em",{parentName:"p"},"Scalismo-ui"),"."),Object(o.b)("p",null,"To get it out of the way, we import the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"// api functions for scalismo-ui\nimport scalismo.ui.api._\n\n// some objects and readers from scalismo\nimport scalismo.io._\nimport scalismo.geometry._\nimport scalismo.transformations._\n\n// some other things needed in the examples\nimport java.io.File\nimport java.awt.Color\nimport breeze.linalg.DenseVector\nimport breeze.stats.distributions.Gaussian\n\n")),Object(o.b)("h2",{id:"starting-scalismo-ui-and-creating-groups"},"Starting Scalismo-ui and creating groups"),Object(o.b)("p",null,"The first step is to create a ",Object(o.b)("inlineCode",{parentName:"p"},"ui")," object, with which we interact. This can be done by calling"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val ui = ScalismoUI()\n")),Object(o.b)("p",null,"You will see that this starts the graphical user interface. Scalismo-ui features different perspectives on the data. In this guide we use the orthogonal view, which you can select from the menu ",Object(o.b)("inlineCode",{parentName:"p"},"View->Perspective->Orthognonal Slices"),". You should now see the following window:\n",Object(o.b)("img",{alt:"Clicking landmarks",src:a(206).default})),Object(o.b)("p",null,"Before we can start visualizing objects, we need to create a group. A group is a collection of objects that belong together. A typical scenario is that we have an 3D image of a structure, but also a segmentation given in form of a surface mesh and maybe even some manually annotated landmark points. A group is created by calling"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val group = ui.createGroup("object-1")\n')),Object(o.b)("h2",{id:"visualizing-objects"},"Visualizing objects"),Object(o.b)("p",null,"We start by loading a mesh using Scalismo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val mesh = MeshIO.readMesh(new java.io.File("./datasets/Paola.ply")).get\n')),Object(o.b)("p",null,"To visualize any scalismo object, we use the show method. As a first argument\nwe specify the group to which the objects belongs and the last argument is an identifier:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val meshView = ui.show(group, mesh, "mesh")\n')),Object(o.b)("p",null,"This call shows the mesh and returns a ",Object(o.b)("inlineCode",{parentName:"p"},"view")," object, which we can use to\ninteract with the visualization. For example we can change the color or the opacity"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"meshView.color = Color.RED\nmeshView.opacity = 1.0\n")),Object(o.b)("p",null,"We can also change the visibility of an object, and for example show it only in the\n3D viewport, but not the slice views. This is done by calling"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"ui.setVisibility(meshView, Viewport._3dOnly)\n")),Object(o.b)("p",null,"To show it again in all viewports we call"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"ui.setVisibility(meshView, Viewport.all)\n")),Object(o.b)("h2",{id:"finding-object-views"},"Finding object views"),Object(o.b)("p",null,"We have seen that to interact with an object we need a view of that object. When we use the ",Object(o.b)("inlineCode",{parentName:"p"},"show")," method to visualize the object, we directly obtain the corresponding view. However, sometimes an object is created by the user, using the graphical user interface. A typical use case is that the user clicks landmarks on an object. In Scalismo-ui, landmarks can be defined by selecting the landmarking button in the top-left corner of the toolbar and  left-clicking on the object.\n",Object(o.b)("img",{alt:"Clicking landmarks",src:a(207).default})),Object(o.b)("p",null,"To work with the clicked landmarks, we need to obtain the corresponding views. This can be done using the filter method of the ui. This method is very similarly to a filter method of the Scala collections. It goes through all the objects in a group and returns a list of the object with the correct type that satisfy a given predicate. The view for the clicked landmarks can be obtained as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val landmarkViews = ui.filter[LandmarkView](group, (v : LandmarkView) => true)\n")),Object(o.b)("p",null,"Exactly in the same way as we manipulated the display properties of the mesh, we can now change the properties of the landmarks using these views. We can also access the underlying\nscalismo object and, for example, print out their point coordinates."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"for (landmarkView <- landmarkViews) {\n  landmarkView.color = Color.RED\n  println(landmarkView.landmark.point)\n}\n")),Object(o.b)("h2",{id:"adding-transformations"},"Adding transformations"),Object(o.b)("p",null,"Scalismo-ui does not only allow us to visualize static objects, but can also be used\nto visualize transformations and deformations of the objects in a group. This can be achieved\nby adding a transformation to the group; i.e. a function that maps every 3D point in the scene to another 3D point. The following example flips the objects in the group along the y axis."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val transformationView = ui.addTransformation(group, Transformation((p : Point[_3D]) => Point3D(p.x, -p.y, p.z)), "flip")\n')),Object(o.b)("p",null,"Note that this does not only turn the mesh upside down, but also the landmarks. This is a general rule: a transformation is always applied to all objects in the group.\nTo get back the original mesh, we simply remove the transformation by calling:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"transformationView.remove()\n")),Object(o.b)("p",null,"Once we are done with the visualization, we can remove the entire group using"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"group.remove()\n")),Object(o.b)("h2",{id:"visualizing-statistical-shape-models"},"Visualizing Statistical Shape Models"),Object(o.b)("p",null,"One of the important use cases that guided the development of scalismo-ui is the\nvisualization of statistical shape models. A statistical shape model is\njust a mesh that is transformed by a parametric family of transformation.\nLet's load a statistical shape model and visualize it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val ssm = StatisticalModelIO.readStatisticalTriangleMeshModel3D(new File("datasets/bfm.h5")).get\nval ssmGroup = ui.createGroup("shape-model")\nval ssmView = ui.show(ssmGroup, ssm, "ssm")\n')),Object(o.b)("p",null,"In scalismo-ui, a statistical shape model is represented as a mesh together with two\ntransformations:  one (rigid) transformation that controls the pose of the mesh and\none that controls the actual shape. We can access the individual parts of an ssm using\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"ssmView")," object."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"})," ssmView.referenceView\n ssmView.shapeModelTransformationView.shapeTransformationView\n ssmView.shapeModelTransformationView.poseTransformationView\n\n")),Object(o.b)("p",null,"The pose transformation and shape transformation are parametric transformations, and to change\nthe transformation, we can change their parameters. To visualize, for example,  a random shape of the statistical shape model, we can  create a random coefficient vector and set the shape transformation parameters accordingly."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val randCoeffs = DenseVector.rand[Double](ssm.rank, Gaussian(0, 1))\nssmView.shapeModelTransformationView.shapeTransformationView.coefficients = randCoeffs\n")),Object(o.b)("p",null,"This will immediately update the shape transformation to the transformation that\nis defined by these coefficients and the visualized mesh is deformed accordingly."),Object(o.b)("h2",{id:"visualizing-other-scalismo-objects"},"Visualizing other scalismo objects"),Object(o.b)("p",null,"The concepts that we described above are generic and in exactly the same way\nany other scalismo object can be visualized: We use ",Object(o.b)("inlineCode",{parentName:"p"},"ui.show")," to visualize an object and interact with it using the corresponding view object,\nwhich we obtain either directly from the show function, or by using the ",Object(o.b)("inlineCode",{parentName:"p"},"ui.filter")," or\n",Object(o.b)("inlineCode",{parentName:"p"},"ui.find")," method."),Object(o.b)("p",null,"Here is, howe we would visualize a 3D image:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val group2 = ui.createGroup("object-2")\nval image = ImageIO.read3DScalarImage[Short](new File("./datasets/PaolaMRI.vtk")).get\nval imageView = ui.show(group2, image, "mri-image")\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"The following list shows all the scalismo objects, which can currently be visualized\nin scalismo-ui.\n\n* 3D image (```DiscreteScalarImage[_3D,_]```)\n* 3D vector field (```DiscreteField[_3D, Vector[_3D]]```)\n* Point cloud (```IndexedSeq[Point[_3D]]```)\n* Landmark (```Landmark[_3D]```)\n* Scalar field (```DiscreteScalarField[_3D, _]```)\n* Triangle mesh (```TriangleMesh[_3D]```)\n* Scalar mesh field(```ScalarMeshField[_]```)\n* Line mesh (```LineMesh[_3D]```)\n")))}u.isMDXComponent=!0},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=n,d=m["".concat(s,".").concat(p)]||m[p]||b[p]||o;return a?i.a.createElement(d,r(r({ref:t},c),{},{components:a})):i.a.createElement(d,r({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},206:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/scalismo-ui-empty-a741a0ad2526580c46f39b38ca9ab7a5.png"},207:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/landmarking-32c4ec25afa48d321e7b4ba8f2aefcef.png"}}]);