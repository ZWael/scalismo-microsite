(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(157)),a={id:"tutorial11",title:"Model fitting with Iterative Closest Points"},s={unversionedId:"tutorials/tutorial11",id:"tutorials/tutorial11",isDocsHomePage:!1,title:"Model fitting with Iterative Closest Points",description:"The goal in this tutorial is to non-rigidly fit a shape model to a target surface using Iterative Closest Points (ICP)",source:"@site/docs/tutorials/tutorial11.md",slug:"/tutorials/tutorial11",permalink:"/docs/next/tutorials/tutorial11",editUrl:"https://github.com/unibas-gravis/scalismo-microsite/edit/master/website/docs/tutorials/tutorial11.md",version:"current",sidebar:"docs",previous:{title:"Iterative Closest Points for rigid alignment",permalink:"/docs/next/tutorials/tutorial10"},next:{title:"Parametric, non-rigid registration",permalink:"/docs/next/tutorials/tutorial12"}},l=[{value:"Problem setup",id:"problem-setup",children:[]},{value:"Iterative Closest Points (ICP) and GP regression",id:"iterative-closest-points-icp-and-gp-regression",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The goal in this tutorial is to non-rigidly fit a shape model to a target surface using Iterative Closest Points (ICP)\nin order to establish correspondences among two surfaces."),Object(i.b)("h5",{id:"related-resources"},"Related resources"),Object(i.b)("p",null,"The following resources from our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.futurelearn.com/courses/statistical-shape-modelling"}),"online course")," may provide\nsome helpful context for this tutorial:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Model-fitting and correspondence ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.futurelearn.com/courses/statistical-shape-modelling/3/steps/250371"}),"(Video)")),Object(i.b)("li",{parentName:"ul"},"Model-fitting and the registration problem ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.futurelearn.com/courses/statistical-shape-modelling/3/steps/250372"}),"(Article)"))),Object(i.b)("h5",{id:"preparation"},"Preparation"),Object(i.b)("p",null,"As in the previous tutorials, we start by importing some commonly used objects and initializing the system."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),"import scalismo.geometry._\nimport scalismo.common._\nimport scalismo.mesh._\nimport scalismo.statisticalmodel.MultivariateNormalDistribution\nimport scalismo.numerics.UniformMeshSampler3D\nimport scalismo.io.{MeshIO, StatisticalModelIO, LandmarkIO}\n\nimport scalismo.ui.api._\n\nimport breeze.linalg.{DenseMatrix, DenseVector}\n\nscalismo.initialize()\nimplicit val rng = scalismo.utils.Random(42)\n\nval ui = ScalismoUI()\n")),Object(i.b)("h3",{id:"problem-setup"},"Problem setup"),Object(i.b)("p",null,"Let's load and visualize a target mesh; I.e. a mesh, which we want to fit with our model, as well as\na statistical shape model."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),'val targetMesh = MeshIO.readMesh(new java.io.File("datasets/target.ply")).get\nval model = StatisticalModelIO.readStatisticalTriangleMeshModel3D(new java.io.File("datasets/bfm.h5")).get\n\nval targetGroup = ui.createGroup("targetGroup")\nval targetMeshView = ui.show(targetGroup, targetMesh, "targetMesh")\n\nval modelGroup = ui.createGroup("modelGroup")\nval modelView = ui.show(modelGroup, model, "model")\n')),Object(i.b)("p",null,"As you can see in the 3D scene, the instance of the model taht we are currently displaying (the mean),\ndoes not resemble the target face. The goal in shape model fitting is to find an\ninstance of our shape model, which resembles at best the given target face.\nAs we will see, a good fit directly leads to a way of establishing correspondences between the points of our model and the points\nof the target shape."),Object(i.b)("h3",{id:"iterative-closest-points-icp-and-gp-regression"},"Iterative Closest Points (ICP) and GP regression"),Object(i.b)("p",null,"In a previous tutorial, we introduced rigid ICP to find the best rigid transformation between two meshes.\nWe recall that the main steps of the algorithms are as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Find ",Object(i.b)("strong",{parentName:"li"},"candidate")," correspondences between the mesh to be aligned and the target one,\nby attributing the closest point on the target mesh as a candidate."),Object(i.b)("li",{parentName:"ol"},"Solve for the best rigid transform between the moving mesh and the target mesh using Procrustes analysis."),Object(i.b)("li",{parentName:"ol"},"Transform the moving mesh using the retrieved transform"),Object(i.b)("li",{parentName:"ol"},"Loop to step 1 if the result is not aligned with the target (or if we didn't reach the limit number of iterations)")),Object(i.b)("p",null,"The non-rigid ICP algorithm, which we can use for model fitting, will perform exactly the same steps.\nHowever, instead of finding a rigid transformation in step 2, it finds a non-rigid one, using\nGaussian process regression."),Object(i.b)("p",null,"We start by first selecting the points for which we want to find the correspondences. We choose uniformly distributed\npoints on the surface, which we can obtain as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),"val sampler = UniformMeshSampler3D(model.reference, numberOfPoints = 5000)\nval points : Seq[Point[_3D]] = sampler.sample.map(pointWithProbability => pointWithProbability._1) // we only want the points\n")),Object(i.b)("p",null,"Instead of working directly with the points, it is easier to work with the point ids of the sampled points:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),"val ptIds = points.map(point => model.reference.pointSet.findClosestPoint(point).id)\n")),Object(i.b)("p",null,"As in the previous tutorial, we write the method ",Object(i.b)("inlineCode",{parentName:"p"},"attributeCorrespondences"),", which finds for each\npoint of interest the closest point on the target."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),"def attributeCorrespondences(movingMesh: TriangleMesh[_3D], ptIds : Seq[PointId]) : Seq[(PointId, Point[_3D])] = {\n  ptIds.map{ id : PointId =>\n    val pt = movingMesh.pointSet.point(id)\n    val closestPointOnMesh2 = targetMesh.pointSet.findClosestPoint(pt).point\n    (id, closestPointOnMesh2)\n  }\n}\n")),Object(i.b)("p",null,"We can now use the correspondences we found to compute a Gaussian process regression."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),'\nval correspondences = attributeCorrespondences(model.mean, ptIds)\n\nval littleNoise = MultivariateNormalDistribution(DenseVector.zeros[Double](3), DenseMatrix.eye[Double](3))\n\ndef fitModel(correspondences: Seq[(PointId, Point[_3D])]) : TriangleMesh[_3D] = {\n  val regressionData = correspondences.map(correspondence =>\n    (correspondence._1, correspondence._2, littleNoise)\n  )\n  val posterior = model.posterior(regressionData.toIndexedSeq)\n  posterior.mean\n}\n\nval fit = fitModel(correspondences)\nval resultGroup = ui.createGroup("results")\nval fitResultView = ui.show(resultGroup, fit, "fit")\n')),Object(i.b)("p",null,"While this one fitting iteration does not bring the points where we would like them to have, we are already\na step closer. As in the Rigid ICP case, we now iterate the procedure."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),"def nonrigidICP(movingMesh: TriangleMesh[_3D], ptIds : Seq[PointId], numberOfIterations : Int) : TriangleMesh[_3D] = {\n  if (numberOfIterations == 0) movingMesh\n  else {\n    val correspondences = attributeCorrespondences(movingMesh, ptIds)\n    val transformed = fitModel(correspondences)\n\n    nonrigidICP(transformed, ptIds, numberOfIterations - 1)\n  }\n}\n")),Object(i.b)("p",null,"Repeating the fitting steps iteratively for 20 times results in a good fit of our model"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scala"}),'val finalFit = nonrigidICP( model.mean, ptIds, 20)\n\nui.show(resultGroup, finalFit, "final fit")\n')))}p.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);