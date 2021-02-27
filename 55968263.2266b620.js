(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{160:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),m=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(a),d=n,b=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return a?i.a.createElement(b,s(s({ref:t},c),{},{components:a})):i.a.createElement(b,s({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),r=(a(0),a(160)),o={id:"tutorial4",title:"Gaussian processes and Point Distribution Models"},s={unversionedId:"tutorials/tutorial4",id:"tutorials/tutorial4",isDocsHomePage:!1,title:"Gaussian processes and Point Distribution Models",description:"Gaussian processes and Point Distribution Models",source:"@site/docs/tutorials/tutorial4.md",slug:"/tutorials/tutorial4",permalink:"/docs/next/tutorials/tutorial4",editUrl:"https://github.com/unibas-gravis/scalismo-microsite/edit/master/website/docs/tutorials/tutorial4.md",version:"current",sidebar:"docs",previous:{title:"From meshes to deformation fields",permalink:"/docs/next/tutorials/tutorial3"},next:{title:"Gaussian processes, sampling and marginalization",permalink:"/docs/next/tutorials/tutorial5"}},l=[{value:"Gaussian Processes and Point Distribution Models",id:"gaussian-processes-and-point-distribution-models-1",children:[]}],c={rightToc:l};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"gaussian-processes-and-point-distribution-models"},"Gaussian processes and Point Distribution Models"),Object(r.b)("p",null,"With this tutorial we aim at illuminating the relationship between Point Distribution Models (PDM) and Gaussian Processes."),Object(r.b)("h5",{id:"related-resources"},"Related resources"),Object(r.b)("p",null,"The following resources from our ",Object(r.b)("a",{parentName:"p",href:"https://www.futurelearn.com/courses/statistical-shape-modelling"},"online course")," may provide\nsome helpful context for this tutorial:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Learning a model from example data ",Object(r.b)("a",{parentName:"li",href:"https://www.futurelearn.com/courses/statistical-shape-modelling/3/steps/250329"},"(Video)"))),Object(r.b)("h5",{id:"preparation"},"Preparation"),Object(r.b)("p",null,"As in the previous tutorials, we start by importing some commonly used objects and initializing the system."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"import scalismo.geometry._\nimport scalismo.common._\nimport scalismo.mesh._\nimport scalismo.io.{StatismoIO, StatisticalModelIO}\nimport scalismo.statisticalmodel._\nimport scalismo.ui.api._\n\nscalismo.initialize()\nimplicit val rng = scalismo.utils.Random(42)\n\nval ui = ScalismoUI()\n")),Object(r.b)("h2",{id:"gaussian-processes-and-point-distribution-models-1"},"Gaussian Processes and Point Distribution Models"),Object(r.b)("p",null,"We start by loading and visualizing a shape model (or PDM) of faces :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},'val faceModel : PointDistributionModel[_3D, TriangleMesh] = StatisticalModelIO.readStatisticalTriangleMeshModel3D(new java.io.File("datasets/bfm.h5")).get\nval modelGroup = ui.createGroup("model")\n')),Object(r.b)("p",null,"This model represents a ",Object(r.b)("strong",{parentName:"p"},"probability distribution of face meshes"),"."),Object(r.b)("p",null,"While we cannot visualize this distribution directly, we can obtain\nand visualize the mean shape:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},'val sampleGroup = ui.createGroup("samples")\n\nval meanFace : TriangleMesh[_3D] = faceModel.mean\nui.show(sampleGroup, meanFace, "meanFace")\n')),Object(r.b)("p",null,"or we can obtain concrete face meshes by sampling from it:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},'val sampledFace : TriangleMesh[_3D] = faceModel.sample\nui.show(sampleGroup, sampledFace, "randomFace")\n')),Object(r.b)("h4",{id:"the-gp-behind-the-pdm"},"The GP behind the PDM:"),Object(r.b)("p",null,"In Scalismo, a PDM is represented as a triangle mesh (called the reference mesh)\non which a Gaussian Process over deformation fields is defined:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"val reference : TriangleMesh[_3D] = faceModel.reference\nval faceGP : DiscreteLowRankGaussianProcess[_3D, TriangleMesh, EuclideanVector[_3D]] = faceModel.gp\n")),Object(r.b)("p",null,"The type signature of the GP looks slightly scary.\nIf we recall that a Gaussian process is a distribution over functions,\nwe can, however, rather easily make sense of the individual bits.\nThe type signature tells us that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It is a DiscreteGaussianProcess. This means, the function, which the process models are defined on a discrete, finite set of points."),Object(r.b)("li",{parentName:"ul"},"It is defined in 3D Space (indicated by the type parameter ",Object(r.b)("inlineCode",{parentName:"li"},"_3D"),")"),Object(r.b)("li",{parentName:"ul"},"Its domain of the modeled functions is a ",Object(r.b)("inlineCode",{parentName:"li"},"TriangleMesh")),Object(r.b)("li",{parentName:"ul"},"The values of the modeled functions are vectors (more precisely, they are of type ",Object(r.b)("inlineCode",{parentName:"li"},"EuclideanVector"),")."),Object(r.b)("li",{parentName:"ul"},"It is represented using a low-rank approximation. This is a technicality, which we will come back to later.")),Object(r.b)("p",null,"Consequently, when we draw samples or obtain the mean from the Gaussian process, we expect to obtain functions with a matching\nsignature. This is indeed the case"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},"val meanDeformation : DiscreteField[_3D, TriangleMesh, EuclideanVector[_3D]] = faceGP.mean\nval sampleDeformation : DiscreteField[_3D, TriangleMesh, EuclideanVector[_3D]] = faceGP.sample\n")),Object(r.b)("p",null,"Let's visualize the mean deformation:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scala"},'ui.show(sampleGroup, meanDeformation, "meanField")\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Exercise : make everything invisible in the 3D scene, except for "meanField" and "meanFace". Now zoom in (right click and drag) on the vector field. Where are the tips of the vectors ending?*')),Object(r.b)("p",null,"As you hopefully see, all the tips of the mean deformation vectors end on points of the mean face."),Object(r.b)("p",null,"To find out where they start from, let's display the face model's reference mesh :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tut:silent"},'ui.show(modelGroup, referenceFace, "referenceFace")\n')),Object(r.b)("h5",{id:"exercise--zoom-in-on-the-scene-and-observe-the-deformation-field-where-are-the-vectors-starting"},"Exercise : Zoom in on the scene and observe the deformation field. Where are the vectors starting"),Object(r.b)("p",null,"As you can see, the mean deformation field of the Gaussian Process contained in our face model\nis a deformation from the reference mesh of the model into the mean face mesh."),Object(r.b)("p",null,"Hence when calling ",Object(r.b)("em",{parentName:"p"},"faceModel.mean"),", what is really happening is"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"the mean deformation field is obtained (by calling ",Object(r.b)("em",{parentName:"li"},"faceModel.gp.mean"),")"),Object(r.b)("li",{parentName:"ol"},"the mean deformation field is then used to deform the reference mesh (",Object(r.b)("em",{parentName:"li"},"faceModel.referenceMesh"),")\ninto the triangle Mesh representing the mean face")),Object(r.b)("p",null,"The same is happening when randomly sampling from the face model :"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"a random deformation field is sampled (",Object(r.b)("em",{parentName:"li"},"faceModel.gp.sample"),")"),Object(r.b)("li",{parentName:"ol"},"the deformation field is applied to the reference mesh to obtain a random face mesh")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Exercise : Perform the 2 steps above in order to sample a random face (that is sample a random deformation first, then use it to warp the reference mesh).")))}m.isMDXComponent=!0}}]);