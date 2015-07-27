define(["dust-full"], function(dust) {(function(){dust.register("c-breadcrumbs",body_0);function body_0(chk,ctx){return chk.write("<ol class=\"c-breadcrumbs ").reference(ctx._get(false, ["class"]),ctx,"h").write("\" role=\"navigation\" data-adaptivejs-component=\"stencil-breadcrumbs\">").exists(ctx._get(false, ["element"]),ctx,{"else":body_1,"block":body_6},null).write("</ol>");}function body_1(chk,ctx){return chk.section(ctx._get(false, ["items"]),ctx,{"block":body_2},null);}function body_2(chk,ctx){return chk.write("<li class=\"c-breadcrumbs__item ").exists(ctx._get(false, ["isActive"]),ctx,{"block":body_3},null).write("\">").exists(ctx._get(false, ["href"]),ctx,{"block":body_4},null).reference(ctx._get(false, ["label"]),ctx,"h").exists(ctx._get(false, ["href"]),ctx,{"block":body_5},null).write("</li>");}function body_3(chk,ctx){return chk.write("c--active");}function body_4(chk,ctx){return chk.write("<a href=\"").reference(ctx._get(false, ["href"]),ctx,"h").write("\" class=\"c-breadcrumbs__link\">");}function body_5(chk,ctx){return chk.write("</a>");}function body_6(chk,ctx){return chk.reference(ctx._get(false, ["element"]),ctx,"h",["s"]);}return body_0;})();
(function(){dust.register("c-spec",body_0);function body_0(chk,ctx){return chk.write("<div class=\"c-spec\"><h1 class=\"c-spec__title\">Stencil: <a href=\"").reference(ctx._get(false, ["repository"]),ctx,"h").write("\">").reference(ctx._get(false, ["for"]),ctx,"h").write("</a> Tests</h1>").reference(ctx._get(false, ["body"]),ctx,"h").write("</div>");}return body_0;})();
(function(){dust.register("c-spec__case",body_0);function body_0(chk,ctx){return chk.write("<p class=\"c-spec__expect\">").reference(ctx._get(false, ["expect"]),ctx,"h").write("</p><div class=\"c-spec__run\">").reference(ctx._get(false, ["body"]),ctx,"h").write("</div>");}return body_0;})();
(function(){dust.register("c-spec__test",body_0);function body_0(chk,ctx){return chk.write("<article class=\"c-spec__test\"><h2 class=\"c-spec__describe\">").reference(ctx._get(false, ["describe"]),ctx,"h").write("</h2>").reference(ctx._get(false, ["body"]),ctx,"h").write("</article>");}return body_0;})();
(function(){dust.register("tests",body_0);function body_0(chk,ctx){return chk.write("<style>/* Test-specific fixture styles go here. */</style>").helper("c-spec",ctx,{"block":body_1},{"for":"Breadcrumb Component","repository":ctx._get(false, ["repo"])});}function body_1(chk,ctx){return chk.helper("c-spec__test",ctx,{"block":body_2},{"describe":".c-breadcrumbs"});}function body_2(chk,ctx){return chk.helper("c-spec__case",ctx,{"block":body_3},{"expect":"Normal"}).helper("c-spec__case",ctx,{"block":body_4},{"expect":"Alernate styling of active item"}).helper("c-spec__case",ctx,{"block":body_5},{"expect":"Varation with collapsed inner categories"});}function body_3(chk,ctx){return chk.helper("c-breadcrumbs",ctx,{},{"items":ctx._get(false, ["items"])});}function body_4(chk,ctx){return chk.helper("c-breadcrumbs",ctx,{},{"items":ctx._get(false, ["items"]),"class":ctx._get(false, ["class"])});}function body_5(chk,ctx){return chk.helper("c-breadcrumbs",ctx,{},{"element":ctx._get(false, ["breadcrumbsListMarkup"])});}return body_0;})();return ["c-breadcrumbs","c-spec","c-spec__case","c-spec__test"];})