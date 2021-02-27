(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{160:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return b}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),p=function(e){var a=r.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return r.a.createElement(m.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=n,b=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return t?r.a.createElement(b,s(s({ref:a},m),{},{components:t})):r.a.createElement(b,s({ref:a},m))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=t[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),o=(t(0),t(160)),i={id:"tutorial2",title:"Rigid Alignment"},s={unversionedId:"tutorials/tutorial2",id:"version-0.18/tutorials/tutorial2",isDocsHomePage:!1,title:"Rigid Alignment",description:"In this tutorial we show how rigid alignment of shapes can be performed in Scalismo.",source:"@site/versioned_docs/version-0.18/tutorials/tutorial2.md",slug:"/tutorials/tutorial2",permalink:"/docs/0.18/tutorials/tutorial2",editUrl:"https://github.com/unibas-gravis/scalismo-microsite/edit/master/website/versioned_docs/version-0.18/tutorials/tutorial2.md",version:"0.18",sidebar:"version-0.18/docs",previous:{title:"Hello Scalismo!",permalink:"/docs/0.18/tutorials/tutorial1"},next:{title:"From meshes to deformation fields",permalink:"/docs/0.18/tutorials/tutorial3"}},l=[{value:"Quick view on Transformations",id:"quick-view-on-transformations",children:[]},{value:"Composing transformations",id:"composing-transformations",children:[]},{value:"Rigid alignment",id:"rigid-alignment",children:[]}],m={rightToc:l};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this tutorial we show how rigid alignment of shapes can be performed in Scalismo."),Object(o.b)("h5",{id:"related-resources"},"Related resources"),Object(o.b)("p",null,"The following resources from our ",Object(o.b)("a",{parentName:"p",href:"https://www.futurelearn.com/courses/statistical-shape-modelling"},"online course")," may provide\nsome helpful context for this tutorial:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Learning a model from example data ",Object(o.b)("a",{parentName:"li",href:"https://www.futurelearn.com/courses/statistical-shape-modelling/3/steps/250329"},"(Video)")),Object(o.b)("li",{parentName:"ul"},"Superimposing shapes ",Object(o.b)("a",{parentName:"li",href:"https://www.futurelearn.com/courses/statistical-shape-modelling/3/steps/250330"},"(Article)"))),Object(o.b)("h5",{id:"preparation"},"Preparation"),Object(o.b)("p",null,"As in the previous tutorials, we start by importing some commonly used objects and initializing the system."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"import scalismo.geometry._\nimport scalismo.common._\nimport scalismo.ui.api._\nimport scalismo.mesh.TriangleMesh\nimport scalismo.io.MeshIO\n\nscalismo.initialize()\nimplicit val rng = scalismo.utils.Random(42)\n")),Object(o.b)("h3",{id:"quick-view-on-transformations"},"Quick view on Transformations"),Object(o.b)("p",null,"Let's start by loading and showing Paola's mesh again:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},'val ui = ScalismoUI()\nval paolaGroup = ui.createGroup("paola")\nval mesh : TriangleMesh[_3D] = MeshIO.readMesh(new java.io.File("datasets/Paola.ply")).get\nval meshView = ui.show(paolaGroup, mesh, "Paola")\n')),Object(o.b)("p",null,"Scalismo allows us to perform geometric transformations on meshes."),Object(o.b)("p",null,"Transformations are ",Object(o.b)("em",{parentName:"p"},"functions")," that map a given point, into a new ",Object(o.b)("em",{parentName:"p"},"transformed")," point.\nWe find the transformations in the package ",Object(o.b)("inlineCode",{parentName:"p"},"scalismo.registration"),".\nLet's import the classes in this package"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"import scalismo.registration.{Transformation, RotationTransform, TranslationTransform, RigidTransformation}\n")),Object(o.b)("p",null,"The most general way to define a transformation is by specifying the transformation function\nexplicitly. The following example illustrates this by defining a transformation,\nwhich flips the point along the x axis."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"val flipTransform = Transformation((p : Point[_3D]) => Point(-p.x, p.y, p.z))\n")),Object(o.b)("p",null,"When given a point as an argument, the defined transform will then simply return a new point:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"val pt : Point[_3D] = flipTransform(Point(1.0, 1.0, 1.0))\n// pt: Point[_3D] = Point3D(-1.0, 1.0, 1.0)\n")),Object(o.b)("p",null,"An important class of transformations are the rigid transformation, i.e. a rotation followed by a translation. Due to their\nimportance, these transformations are readily defined in scalismo."),Object(o.b)("p",null,"A translation can be defined by specifying the translation vector, which is\nadded to every point:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"val translation = TranslationTransform[_3D](EuclideanVector(100,0,0))\n")),Object(o.b)("p",null,"For defining a rotation, we define the 3 ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Euler_angles"},"Euler angles")," , as well as the center of rotation."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"val rotationCenter = Point(0.0, 0.0, 0.0)\nval rotation : RotationTransform[_3D] = RotationTransform(0f,3.14f,0f, rotationCenter)\n")),Object(o.b)("p",null,"This transformation rotates every point with approximately 180 degrees around the Y axis (centered at the origin of the space)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"val pt2 : Point[_3D] = rotation(Point(1,1,1))\n// pt2: Point[_3D] = Point3D(-0.9984061838821647, 1.0, -1.0015912799070552)\n")),Object(o.b)("p",null,"In Scalismo, such transformations can be applied not only to single points, but most collections of points such as triangle meshes, can be\ntransformed by invoking the method ",Object(o.b)("inlineCode",{parentName:"p"},"transform")," on the respective object."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},'val translatedPaola : TriangleMesh[_3D] = mesh.transform(translation)\nval paolaMeshTranslatedView = ui.show(paolaGroup, translatedPaola, "translatedPaola")\n')),Object(o.b)("h3",{id:"composing-transformations"},"Composing transformations"),Object(o.b)("p",null,"Simple transformations can be composed to more complicated ones using the ",Object(o.b)("inlineCode",{parentName:"p"},"compose")," method. For example, we can define a rigid\ntranformation as a composition of translation and rotation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"val rigidTransform1 = translation.compose(rotation)\n")),Object(o.b)("p",null,"In Scalismo, rigid transformations are also already predefined. We could have written instead:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"val rigidTransform2 : RigidTransformation[_3D] = RigidTransformation[_3D](translation, rotation)\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Exercise: Apply the rotation transform to the original mesh of Paola and show the result")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note: since the rotation is around the origin, you might have to zoom out (hold right click and drag down) to see the result.")),Object(o.b)("h3",{id:"rigid-alignment"},"Rigid alignment"),Object(o.b)("p",null,"A task that we need to perform in any shape modelling pipeline, is the rigid alignment of objects; I.e. normalizing the pose of\nan object with respect to some reference."),Object(o.b)("p",null,"To illustrate this procedure, we transform the mesh of Paola rigidly using the\nrigid transformation defined above."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},'val paolaTransformedGroup = ui.createGroup("paolaTransformed")\nval paolaTransformed = mesh.transform(rigidTransform2)\nui.show(paolaTransformedGroup, paolaTransformed, "paolaTransformed")\n')),Object(o.b)("p",null,"The task is now to retrieve the transformation, which best aligns the transformed mesh\nwith the original mesh, from the meshes alone."),Object(o.b)("p",null,"Rigid alignment is easiest if we already know some corresponding points in both shapes. Assume for the moment, that we\nhave identified a few corresponding points and marked them using landmarks. We can then apply ",Object(o.b)("em",{parentName:"p"},"Procrustes Analysis"),".\nUsually, these landmarks would need to be clicked manually in a GUI framework. To simplify this tutorial, we exploit that the two meshes\nare the same and hence have the same point ids. We can thus define landmarks programmatically:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},'val ptIds = Seq(PointId(2213), PointId(14727), PointId(8320), PointId(48182))\nval paolaLandmarks = ptIds.map(pId => Landmark(s"lm-${pId.id}", mesh.pointSet.point(pId)))\nval paolaTransformedLandmarks = ptIds.map(pId => Landmark(s"lm-${pId.id}", paolaTransformed.pointSet.point(pId)))\n\nval paolaLandmarkViews = paolaLandmarks.map(lm => ui.show(paolaGroup, lm, s"${lm.id}"))\nval paolaTransformedLandmarkViews = paolaTransformedLandmarks.map(lm => ui.show(paolaTransformedGroup, lm, lm.id))\n')),Object(o.b)("p",null,"Given this lists of landmarks, we can use the method ",Object(o.b)("inlineCode",{parentName:"p"},"rigid3DLandmarkRegistration"),"\nto retrieve the best rigid transformation from the original set of landmarks:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},"import scalismo.registration.LandmarkRegistration\n\nval bestTransform : RigidTransformation[_3D] = LandmarkRegistration.rigid3DLandmarkRegistration(paolaLandmarks, paolaTransformedLandmarks, center = Point(0, 0, 0))\n")),Object(o.b)("p",null,"The resulting transformation is the best possible rigid transformation (with rotation center ",Object(o.b)("inlineCode",{parentName:"p"},"Point(0,0,0)"),") from ",Object(o.b)("inlineCode",{parentName:"p"},"paolaLandmarks")," to ",Object(o.b)("inlineCode",{parentName:"p"},"paolaTransformedLandmarks"),".\nBest here means, that it minimizes the mean squared error over the landmark points."),Object(o.b)("p",null,"Let's now apply it to the original set of landmarks, to see how well they are transformed :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},'val transformedLms = paolaLandmarks.map(lm => lm.transform(bestTransform))\nval landmarkViews = ui.show(paolaGroup, transformedLms, "transformedLMs")\n')),Object(o.b)("p",null,"And finally, we apply the transformation to the entire mesh:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-scala"},'val alignedPaola = mesh.transform(bestTransform)\nval alignedPaolaView = ui.show(paolaGroup, alignedPaola, "alignedPaola")\nalignedPaolaView.color = java.awt.Color.RED\n')))}p.isMDXComponent=!0}}]);