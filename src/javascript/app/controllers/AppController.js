var app = require('app/app');
var Marionette = require('backbone.marionette');

// Views
var BaseView = require('views/BaseView');
var IndexView = require('views/IndexView');
var SideNavView = require('views/SideNavView');
var Screen1IntroView = require('views/Screen1IntroView');
var Screen2IntroView = require('views/Screen2IntroView');
var Patient1View1 = require('views/patient1/mammograms/Patient1View1');
var Patient1View2 = require('views/patient1/mammograms/Patient1View2');
var Patient1View3 = require('views/patient1/mammograms/Patient1View3');
var Patient1View4 = require('views/patient1/mammograms/Patient1View4');
var Patient1View5 = require('views/patient1/mammograms/Patient1View5');
var Patient1View6 = require('views/patient1/biopsy/Patient1View6');
var Patient1View7 = require('views/patient1/biopsy/Patient1View7');
var Patient1View7_2 = require('views/patient1/biopsy/Patient1View7-2');
var Patient1View7_3 = require('views/patient1/biopsy/Patient1View7-3');
var Patient1View8 = require('views/patient1/biopsy/Patient1View8');
var Patient1View9 = require('views/patient1/biopsy/Patient1View9');
var Patient1View10 = require('views/patient1/biopsy/Patient1View10');
var Patient1View11 = require('views/patient1/biopsy/Patient1View11');
var Patient1View12 = require('views/patient1/biopsy/Patient1View12');
var Patient1View13 = require('views/patient1/biopsy/Patient1View13');
var Patient1View13_5 = require('views/patient1/biopsy/Patient1View13-5');
var Patient1View14 = require('views/patient1/gene-expression/Patient1View14');
var Patient1View15 = require('views/patient1/gene-expression/Patient1View15');
var Patient1View16 = require('views/patient1/gene-expression/Patient1View16');
var Patient1View16_5 = require('views/patient1/gene-expression/Patient1View16-5');
var Patient1View17 = require('views/patient1/gene-expression/Patient1View17');
var Patient1View18 = require('views/patient1/gene-expression/Patient1View18');
var Patient1View19 = require('views/patient1/gene-expression/Patient1View19');
var Patient1View19_5 = require('views/patient1/gene-expression/Patient1View19-5');
var Patient1View20 = require('views/patient1/gene-expression/Patient1View20');
var Patient1View21 = require('views/patient1/gene-expression/Patient1View21');
var Patient1View22 = require('views/patient1/gene-expression/Patient1View22');
var Patient1View23 = require('views/patient1/gene-expression/Patient1View23');
var Patient1View24 = require('views/patient1/gene-expression/Patient1View24');
var Patient1View25 = require('views/patient1/gene-expression/Patient1View25');
var Patient1View26 = require('views/patient1/gene-expression/Patient1View26');
var Patient1View27 = require('views/patient1/gene-expression/Patient1View27');
var Patient1View28 = require('views/patient1/gene-expression/Patient1View28');
var Patient1View29 = require('views/patient1/gene-expression/Patient1View29');
var Patient1View30 = require('views/patient1/gene-expression/Patient1View30');
var Patient1View31 = require('views/patient1/gene-expression/Patient1View31');
var Patient1View31_2 = require('views/patient1/gene-expression/Patient1View31-2');
var Patient1View32 = require('views/patient1/gene-expression/Patient1View32');
var Patient1View33 = require('views/patient1/gene-expression/Patient1View33');
var Patient1View33_5 = require('views/patient1/gene-expression/Patient1View33-5');
var Patient1View34 = require('views/patient1/gene-expression/Patient1View34');
var Patient1View35 = require('views/patient1/gene-expression/Patient1View35');
var Patient1View36 = require('views/patient1/gene-expression/Patient1View36');
var Patient1View37 = require('views/patient1/gene-expression/Patient1View37');
var Patient1View37_5 = require('views/patient1/gene-expression/Patient1View37-5');
var Patient1View38 = require('views/patient1/gene-expression/Patient1View38');
var StartView = require('views/StartView');
var StartView2 = require('views/StartView2');
var Patient2View1 = require('views/patient2/Patient2View1');
var Patient2View2 = require('views/patient2/Patient2View2');
var Patient2View3 = require('views/patient2/Patient2View3');
var Patient2View4 = require('views/patient2/Patient2View4');
var Patient2View5 = require('views/patient2/Patient2View5');
var Patient2View6 = require('views/patient2/Patient2View6');
var Patient2View7 = require('views/patient2/Patient2View7');
var Patient2View8 = require('views/patient2/Patient2View8');
var Patient2View9 = require('views/patient2/Patient2View9');
var Patient2View10 = require('views/patient2/Patient2View10');
var Patient2View11 = require('views/patient2/Patient2View11');
var Patient2View12 = require('views/patient2/Patient2View12');
var StartView3 = require('views/StartView3');
var Patient3View1 = require('views/patient3/Patient3View1');
var Patient3View2 = require('views/patient3/Patient3View2');
var Patient3View3 = require('views/patient3/Patient3View3');
var Patient3View4 = require('views/patient3/Patient3View4');
var Patient3View5 = require('views/patient3/Patient3View5');
var Patient3View6 = require('views/patient3/Patient3View6');
var Patient3View7 = require('views/patient3/Patient3View7');
var Patient3View8 = require('views/patient3/Patient3View8');
var Patient3View9 = require('views/patient3/Patient3View9');
var Patient3View10 = require('views/patient3/Patient3View10');
var Patient3View11 = require('views/patient3/Patient3View11');
var Patient3View12 = require('views/patient3/Patient3View12');
var Patient3View13 = require('views/patient3/Patient3View13');
var Patient3View14 = require('views/patient3/Patient3View14');
var Patient3View15 = require('views/patient3/Patient3View15');
var SvgTest = require('views/svg-test');
var EndView = require('views/EndView');


module.exports = Marionette.Controller.extend({

    initialize: function () {
        app.state.set('onload', true);
        this.bootstrap();
    },

    bootstrap: function () {
        this.baseView = new BaseView();
    },

    scrollTop: function() {
      $('button.continue').on('click', function() {
        $(window).scrollTop(300);

      })
    },

    index: function () {
        //TODO -- PLACEHOLDER. HOOK UP ONCE WE KNOW WHAT THE INTRO SCREEN IS LIKE
        // var indexView = new IndexView();
        // app.rootView.regionMain.show(indexView);
        // var sideNavView = new SideNavView();
        // app.rootView.sideNav.show(sideNavView);
    },
    svgtest: function() {
        var svgTest = new SvgTest();
        app.rootView.contentMain.show(svgTest);
    },

    screen1: function() {
        var indexView = new IndexView();
        app.rootView.regionMain.show(indexView);
        var sideNavView = new SideNavView();
        app.rootView.sideNav.show(sideNavView);
        var screen1View = new Screen1IntroView();
        app.rootView.contentMain.show(screen1View);
    },

    screen2: function() {
        var screen2View = new Screen2IntroView();
        app.rootView.contentMain.show(screen2View);
    },

    startview: function() {
        var startView = new StartView();
        app.rootView.regionMain.show(startView);
    },

    patient1view1: function() {
      // var indexView = new IndexView();
      // app.rootView.regionMain.show(indexView);

      var patient1View1 = new Patient1View1();
      app.rootView.regionMain.show(patient1View1);
    },
    patient1view2: function() {
      var patient1View2 = new Patient1View2();
      app.rootView.regionMain.show(patient1View2);
    },
    patient1view3: function() {
      var patient1View3 = new Patient1View3();
      app.rootView.regionMain.show(patient1View3);
    },
    patient1view4: function() {
      var patient1View4 = new Patient1View4();
      app.rootView.regionMain.show(patient1View4);
    },
    patient1view5: function() {
      var patient1View5 = new Patient1View5();
      app.rootView.regionMain.show(patient1View5);
    },
    patient1view6: function() {
      var patient1View6 = new Patient1View6();
      app.rootView.regionMain.show(patient1View6);
    },
    patient1view7: function() {
      var patient1View7 = new Patient1View7();
      app.rootView.regionMain.show(patient1View7);
    },
    patient1view7_2: function() {
      var patient1View7_2 = new Patient1View7_2();
      app.rootView.regionMain.show(patient1View7_2);
    },
    patient1view7_3: function() {
      var patient1View7_3 = new Patient1View7_3();
      app.rootView.regionMain.show(patient1View7_3);
    },
    patient1view8: function() {
      var patient1View8 = new Patient1View8();
      app.rootView.regionMain.show(patient1View8);
    },
    patient1view9: function() {
      var patient1View9 = new Patient1View9();
      app.rootView.regionMain.show(patient1View9);
    },
    patient1view10: function() {
      var patient1View10 = new Patient1View10();
      app.rootView.regionMain.show(patient1View10);
    },
    patient1view11: function() {
      var patient1View11 = new Patient1View11();
      app.rootView.regionMain.show(patient1View11);
    },
    patient1view12: function() {
      var patient1View12 = new Patient1View12();
      app.rootView.regionMain.show(patient1View12);
    },
    patient1view13: function() {
      var patient1View13 = new Patient1View13();
      app.rootView.regionMain.show(patient1View13);
    },
    patient1view13_5: function() {
      var patient1View13_5 = new Patient1View13_5();
      app.rootView.regionMain.show(patient1View13_5);
    },
    patient1view14: function() {
      var patient1View14 = new Patient1View14();
      app.rootView.regionMain.show(patient1View14);
    },
    patient1view15: function() {
      var patient1View15 = new Patient1View15();
      app.rootView.regionMain.show(patient1View15);
    },
    patient1view16: function() {
      var patient1View16 = new Patient1View16();
      app.rootView.regionMain.show(patient1View16);
    },
    patient1view16_5: function() {
      var patient1View16_5 = new Patient1View16_5();
      app.rootView.regionMain.show(patient1View16_5);
    },
    patient1view17: function() {
      var patient1View17 = new Patient1View17();
      app.rootView.regionMain.show(patient1View17);
    },
    patient1view18: function() {
      var patient1View18 = new Patient1View18();
      app.rootView.regionMain.show(patient1View18);
    },
    patient1view19: function() {
      var patient1View19 = new Patient1View19();
      app.rootView.regionMain.show(patient1View19);
    },
    patient1view19_5: function() {
      var patient1View19_5 = new Patient1View19_5();
      app.rootView.regionMain.show(patient1View19_5);
    },
    patient1view20: function() {
      var patient1View20 = new Patient1View20();
      app.rootView.regionMain.show(patient1View20);
    },
    patient1view21: function() {
      var patient1View21 = new Patient1View21();
      app.rootView.regionMain.show(patient1View21);
    },
    patient1view22: function() {
      var patient1View22 = new Patient1View22();
      app.rootView.regionMain.show(patient1View22);
    },
    patient1view23: function() {
      var patient1View23 = new Patient1View23();
      app.rootView.regionMain.show(patient1View23);
    },
    patient1view24: function() {
      var patient1View24 = new Patient1View24();
      app.rootView.regionMain.show(patient1View24);
    },
    patient1view25: function() {
      var patient1View25 = new Patient1View25();
      app.rootView.regionMain.show(patient1View25);
    },
    patient1view26: function() {
      var patient1View26 = new Patient1View26();
      app.rootView.regionMain.show(patient1View26);
    },
    patient1view27: function() {
      var patient1View27 = new Patient1View27();
      app.rootView.regionMain.show(patient1View27);
    },
    patient1view28: function() {
      var patient1View28 = new Patient1View28();
      app.rootView.regionMain.show(patient1View28);
    },
    patient1view29: function() {
      var patient1View29 = new Patient1View29();
      app.rootView.regionMain.show(patient1View29);
    },
    patient1view30: function() {
      var patient1View30 = new Patient1View30();
      app.rootView.regionMain.show(patient1View30);
    },
    patient1view31: function() {
      var patient1View31 = new Patient1View31();
      app.rootView.regionMain.show(patient1View31);
    },
    patient1view31_2: function() {
      var patient1View31_2 = new Patient1View31_2();
      app.rootView.regionMain.show(patient1View31_2);
    },
    patient1view32: function() {
      var patient1View32 = new Patient1View32();
      app.rootView.regionMain.show(patient1View32);
    },
    patient1view33: function() {
      var patient1View33 = new Patient1View33();
      app.rootView.regionMain.show(patient1View33);
    },
    patient1view33_5: function() {
      var patient1View33_5 = new Patient1View33_5();
      app.rootView.regionMain.show(patient1View33_5);
    },
    patient1view34: function() {
      var patient1View34 = new Patient1View34();
      app.rootView.regionMain.show(patient1View34);
    },
    patient1view35: function() {
      var patient1View35 = new Patient1View35();
      app.rootView.regionMain.show(patient1View35);
    },
    patient1view36: function() {
      var patient1View36 = new Patient1View36();
      app.rootView.regionMain.show(patient1View36);
    },
    patient1view37: function() {
      var patient1View37 = new Patient1View37();
      app.rootView.regionMain.show(patient1View37);
    },
    patient1view37_5: function() {
      var patient1View37_5 = new Patient1View37_5();
      app.rootView.regionMain.show(patient1View37_5);
    },
    patient1view38: function() {
      var patient1View38 = new Patient1View38();
      app.rootView.regionMain.show(patient1View38);
    },
    startview2: function() {
      var startView2 = new StartView2();
      app.rootView.regionMain.show(startView2);
    },
    patient2view1: function() {
      var patient2View1 = new Patient2View1();
      app.rootView.regionMain.show(patient2View1);
    },
    patient2view2: function() {
      var patient2View2 = new Patient2View2();
      app.rootView.regionMain.show(patient2View2);
    },
    patient2view3: function() {
      var patient2View3 = new Patient2View3();
      app.rootView.regionMain.show(patient2View3);
    },
    patient2view4: function() {
      var patient2View4 = new Patient2View4();
      app.rootView.regionMain.show(patient2View4);
    },
    patient2view5: function() {
      var patient2View5 = new Patient2View5();
      app.rootView.regionMain.show(patient2View5);
    },
    patient2view6: function() {
      var patient2View6 = new Patient2View6();
      app.rootView.regionMain.show(patient2View6);
    },
    patient2view7: function() {
      var patient2View7 = new Patient2View7();
      app.rootView.regionMain.show(patient2View7);
    },
    patient2view8: function() {
      var patient2View8 = new Patient2View8();
      app.rootView.regionMain.show(patient2View8);
    },
    patient2view9: function() {
      var patient2View9 = new Patient2View9();
      app.rootView.regionMain.show(patient2View9);
    },
    patient2view10: function() {
      var patient2View10 = new Patient2View10();
      app.rootView.regionMain.show(patient2View10);
    },
    patient2view11: function() {
      var patient2View11 = new Patient2View11();
      app.rootView.regionMain.show(patient2View11);
    },
    patient2view12: function() {
      var patient2View12 = new Patient2View12();
      app.rootView.regionMain.show(patient2View12);
    },
    startview3: function() {
      var startView3 = new StartView3();
      app.rootView.regionMain.show(startView3);
    },
    patient3view1: function() {
      var patient3View1 = new Patient3View1();
      app.rootView.regionMain.show(patient3View1);
    },
    patient3view2: function() {
      var patient3View2 = new Patient3View2();
      app.rootView.regionMain.show(patient3View2);
    },
    patient3view3: function() {
      var patient3View3 = new Patient3View3();
      app.rootView.regionMain.show(patient3View3);
    },
    patient3view4: function() {
      var patient3View4 = new Patient3View4();
      app.rootView.regionMain.show(patient3View4);
    },
    patient3view5: function() {
      var patient3View5 = new Patient3View5();
      app.rootView.regionMain.show(patient3View5);
    },
    patient3view6: function() {
      var patient3View6 = new Patient3View6();
      app.rootView.regionMain.show(patient3View6);
    },
    patient3view7: function() {
      var patient3View7 = new Patient3View7();
      app.rootView.regionMain.show(patient3View7);
    },
    patient3view8: function() {
      var patient3View8 = new Patient3View8();
      app.rootView.regionMain.show(patient3View8);
    },
    patient3view9: function() {
      var patient3View9 = new Patient3View9();
      app.rootView.regionMain.show(patient3View9);
    },
    patient3view10: function() {
      var patient3View10 = new Patient3View10();
      app.rootView.regionMain.show(patient3View10);
    },
    patient3view11: function() {
      var patient3View11 = new Patient3View11();
      app.rootView.regionMain.show(patient3View11);
    },
    patient3view12: function() {
      var patient3View12 = new Patient3View12();
      app.rootView.regionMain.show(patient3View12);
    },
    patient3view13: function() {
      var patient3View13 = new Patient3View13();
      app.rootView.regionMain.show(patient3View13);
    },
    patient3view14: function() {
      var patient3View14 = new Patient3View14();
      app.rootView.regionMain.show(patient3View14);
    },
    patient3view15: function() {
      var patient3View15 = new Patient3View15();
      app.rootView.regionMain.show(patient3View15);
    },
    endview: function() {
      var endView = new EndView();
      app.rootView.regionMain.show(endView);
    },

    defaultHandler: function (route) {
        console.log('%cRoute /%s does not exist', 'color:white; background:gray; padding: 0 0.35em', route);
    }

});
