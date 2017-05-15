describe("ui-if",function(){function e(e){n.append(t('<div ui-if="'+e+'"><div>Hi</div></div>')(i)),i.$apply()}var i,t,n;beforeEach(module("ui.directives")),beforeEach(inject(function(e,l){i=e.$new(),t=l,n=$("<div>")})),it("should immediately remove element if condition is false",function(){e("false"),expect(n.children().length).toBe(0)}),it("should leave the element if condition is true",function(){e("true"),expect(n.children().length).toBe(1)}),it("should create then remove the element if condition changes",function(){i.hello=!0,e("hello"),expect(n.children().length).toBe(1),i.$apply("hello = false"),expect(n.children().length).toBe(0)}),it("should create a new scope",function(){i.$apply("value = true"),n.append(t('<div ui-if="value"><span ng-init="value=false"></span></div>')(i)),i.$apply(),expect(n.children("div").length).toBe(1)}),it("should play nice with other elements beside it",function(){i.values=[1,2,3,4],n.append(t('<div ng-repeat="i in values"></div><div ui-if="values.length==4"></div><div ng-repeat="i in values"></div>')(i)),i.$apply(),expect(n.children().length).toBe(9),i.$apply("values.splice(0,1)"),expect(n.children().length).toBe(6),i.$apply("values.push(1)"),expect(n.children().length).toBe(9)})});