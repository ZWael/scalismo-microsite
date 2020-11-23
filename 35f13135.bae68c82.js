(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{157:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,h=p["".concat(r,".").concat(u)]||p[u]||m[u]||o;return a?i.a.createElement(h,s(s({ref:t},c),{},{components:a})):i.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),o=(a(0),a(157)),r={id:"tutorial6",title:"Building a shape model from data"},s={unversionedId:"tutorials/tutorial6",id:"tutorials/tutorial6",isDocsHomePage:!1,title:"Building a shape model from data",description:"The goal in this tutorial is to learn how to build a Statistical Shape Model",source:"@site/docs/tutorials/tutorial6.md",slug:"/tutorials/tutorial6",permalink:"/docs/next/tutorials/tutorial6",editUrl:"https://github.com/unibas-gravis/scalismo-microsite/edit/master/website/docs/tutorials/tutorial6.md",version:"current",sidebar:"docs",previous:{title:"Gaussian processes, sampling and marginalization",permalink:"/docs/next/tutorials/tutorial5"},next:{title:"Shape modelling with Gaussian processes and kernels",permalink:"/docs/next/tutorials/tutorial7"}},l=[{value:"Loading and preprocessing a dataset:",id:"loading-and-preprocessing-a-dataset",children:[]},{value:"Building a discrete Gaussian process from data",id:"building-a-discrete-gaussian-process-from-data",children:[]},{value:"An easier way to build a model.",id:"an-easier-way-to-build-a-model",children:[]}],c={rightToc:l};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The goal in this tutorial is to learn how to build a Statistical Shape Model\nfrom meshes in correspondence. Furthermore, we discuss the importance of rigid alignment while doing so."),Object(o.b)("h5",{id:"related-resources"},"Related resources"),Object(o.b)("p",null,"The following resources from our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.futurelearn.com/courses/statistical-shape-modelling"}),"online course")," may provide\nsome helpful context for this tutorial:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Learning a model from example data ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.futurelearn.com/courses/statistical-shape-modelling/3/steps/250329"}),"(Video)"))),Object(o.b)("h5",{id:"preparation"},"Preparation"),Object(o.b)("p",null,"As in the previous tutorials, we start by importing some commonly used objects and initializing the system."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"import scalismo.ui.api._\n\nimport scalismo.geometry._\nimport scalismo.common._\nimport scalismo.common.interpolation.TriangleMeshInterpolator3D\nimport scalismo.mesh._\nimport scalismo.io.{StatisticalModelIO, MeshIO}\nimport scalismo.statisticalmodel._\nimport scalismo.registration._\nimport scalismo.statisticalmodel.dataset._\nimport scalismo.numerics.PivotedCholesky.RelativeTolerance\n\n\nscalismo.initialize()\nimplicit val rng = scalismo.utils.Random(42)\n\nval ui = ScalismoUI()\n")),Object(o.b)("h3",{id:"loading-and-preprocessing-a-dataset"},"Loading and preprocessing a dataset:"),Object(o.b)("p",null,"Let us load (and visualize) a set of face meshes based on which we would like to model shape variation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val dsGroup = ui.createGroup("datasets")\n\nval meshFiles = new java.io.File("datasets/nonAlignedFaces/").listFiles\nval (meshes, meshViews) = meshFiles.map(meshFile => {\n  val mesh = MeshIO.readMesh(meshFile).get\n  val meshView = ui.show(dsGroup, mesh, "mesh")\n  (mesh, meshView) // return a tuple of the mesh and the associated view\n}) .unzip // take the tuples apart, to get a sequence of meshes and one of meshViews\n')),Object(o.b)("p",null,"You immediately see that the meshes are not aligned. What you cannot see, but is\nvery important for this tutorial, is\nthat the meshes are ",Object(o.b)("strong",{parentName:"p"},"in correspondence"),".\nThis means that for every point on one of the face meshes\n(corner of eye, tip of nose, ...), we can identify the corresponding point on\nother meshes.  Corresponding points are identified by the same point id."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Exercise: verify that the meshes are indeed in correspondence by displaying a few corresponding points.")),Object(o.b)("h4",{id:"rigidly-aligning-the-data"},"Rigidly aligning the data:"),Object(o.b)("p",null,"In order to study shape variations, we need to eliminate variations due to\nrelative spatial displacement of the shapes (rotation and translation).\nThis can be achieved by selecting one of the meshes as a reference,\nto which the rest of the datasets are aligned.\nIn this example here, we simply take the first mesh in the list as a reference and align all the others."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val reference = meshes.head\nval toAlign : IndexedSeq[TriangleMesh[_3D]] = meshes.tail\n")),Object(o.b)("p",null,"Given that our dataset is in correspondence, we can specify a set of point\nidentifiers, to locate corresponding points on the meshes."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val pointIds = IndexedSeq(2214, 6341, 10008, 14129, 8156, 47775)\nval refLandmarks = pointIds.map{id => Landmark(s"L_$id", reference.pointSet.point(PointId(id))) }\n')),Object(o.b)("p",null,"After locating the landmark positions on the reference, we iterate on each remaining data item, identify the corresponding landmark points and then rigidly align the mesh to the reference."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val alignedMeshes = toAlign.map { mesh =>\n  val landmarks = pointIds.map{id => Landmark("L_"+id, mesh.pointSet.point(PointId(id)))}\n  val rigidTrans = LandmarkRegistration.rigid3DLandmarkRegistration(landmarks, refLandmarks, center = Point(0,0,0))\n  mesh.transform(rigidTrans)\n}\n')),Object(o.b)("p",null,"Now, the IndexedSeq of triangle meshes ",Object(o.b)("em",{parentName:"p"},"alignedMeshes")," contains the faces that are aligned to the reference mesh."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Exercise: verify visually that at least the first element of the aligned dataset is indeed aligned to the reference.")),Object(o.b)("h3",{id:"building-a-discrete-gaussian-process-from-data"},"Building a discrete Gaussian process from data"),Object(o.b)("p",null,"Now that we have a set of meshes, which are in correspondence and aligned\nto our reference, we can turn the dataset into a set of deformation fields,\nfrom which we then build the model:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val defFields = alignedMeshes.map{ m =>\n    val deformationVectors = reference.pointSet.pointIds.map{ id : PointId =>\n        m.pointSet.point(id) - reference.pointSet.point(id)\n    }.toIndexedSeq\n    DiscreteField3D(reference, deformationVectors)\n}\n")),Object(o.b)("p",null,"Learning the shape variations from this deformation fields is\ndone by calling the method ",Object(o.b)("inlineCode",{parentName:"p"},"createUsingPCA")," of the\n",Object(o.b)("inlineCode",{parentName:"p"},"DiscreteLowRankGaussianProcess")," class.\nNote that the deformation fields need to be interpolated, such that we are sure that they are defined on\nall the points of the reference mesh. Once we have the deformation fields, we can build and\nvisualize the Point Distribution Model:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val continuousFields = defFields.map(f => f.interpolate(TriangleMeshInterpolator3D()) )\nval gp = DiscreteLowRankGaussianProcess.createUsingPCA(reference,\n            continuousFields, RelativeTolerance(1e-8)\n          )\nval model = PointDistributionModel(gp)\nval modelGroup = ui.createGroup("model")\nval ssmView = ui.show(modelGroup, model, "model")\n')),Object(o.b)("p",null,"Notice that when we visualize this mesh model in Scalismo-ui,\nit generates a GaussianProcessTransformation and the reference mesh in the\nScene Tree of Scalismo-ui."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Exercise: display the mean deformation field of the returned Gaussian Process.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Exercise: sample and display a few deformation fields from this GP.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Exercise: using the GP's "),"cov",Object(o.b)("em",{parentName:"p"}," method, evaluate the sample covariance between two close points on the right cheek first, and a point on the nose and one on the cheek second. What does the data tell you?")),Object(o.b)("h3",{id:"an-easier-way-to-build-a-model"},"An easier way to build a model."),Object(o.b)("p",null,"Performing all the operations above every time we want to build a PCA model\nfrom a set of files containing meshes in correspondence can be tedious.\nTherefore, Scalismo provides a more easy to use implementation via the\n",Object(o.b)("em",{parentName:"p"},"DataCollection")," data structure."),Object(o.b)("p",null,"The ",Object(o.b)("em",{parentName:"p"},"DataCollection")," class in Scalismo allows grouping together a dataset of meshes in correspondence,\nin order to make collective operations on such sets easier."),Object(o.b)("p",null,"We can create a ",Object(o.b)("em",{parentName:"p"},"DataCollection")," by providing a reference mesh, and\na sequence of meshes, which are in correspondence with this reference."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),"val dc = DataCollection.fromTriangleMesh3DSequence(reference, alignedMeshes)\n")),Object(o.b)("p",null,"Now that we have our data collection, we can build a shape model as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'val modelFromDataCollection = PointDistributionModel.createUsingPCA(dc)\n\nval modelGroup2 = ui.createGroup("modelGroup2")\nui.show(modelGroup2, modelFromDataCollection, "ModelDC")\n')),Object(o.b)("p",null,"Here again, a PCA is performed based the deformation fields retrieved from the data in correspondence."),Object(o.b)("p",null,"Notice that, in this case, we built a model from ",Object(o.b)("strong",{parentName:"p"},"misaligned")," meshes\nin correspondence."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Exercise: sample a few faces from the second model. How does the quality of the obtained shapes compare to the model built from aligned data?")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Exercise: using the GUI, change the coefficient of the first principal component of the nonAligned shape model. What is the main shape variation encoded in the model?")))}d.isMDXComponent=!0}}]);