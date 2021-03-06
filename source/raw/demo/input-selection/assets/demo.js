KISSY.use('dom,input-selection', function (S, DOM) {
    (function () {
        var t = DOM.get("#t");
        var b = DOM.get("#b");
        var s = DOM.get("#s");
        var e = DOM.get("#e");
        setTimeout(function () {
            t.value = "1\n2\n3\n4\n5\n6\n7";
            t.focus();
            DOM.prop(t, "selectionStart", 1);
            DOM.prop(t, "selectionEnd", t.value.length - 1);
        }, 0);
        b.onclick = function () {
            t.focus();
            S.log(DOM.prop(t, "selectionStart") + " - " + DOM.prop(t, "selectionEnd"));
        };
        s.onclick = function () {
            t.focus();
            var next = DOM.prop(t, "selectionStart") + 1;
            if (typeof t.selectionStart != "number" && t.value.charAt(next) == "\n") {
                next++;
            }
            DOM.prop(t, "selectionStart", next);
        };

        e.onclick = function () {
            t.focus();
            var next = DOM.prop(t, "selectionEnd") - 1;
            if (typeof t.selectionEnd != "number" && t.value.charAt(next) == "\n") {
                next--;
            }
            DOM.prop(t, "selectionEnd", next);
        };
    })();

    (function () {
        var cursor = DOM.create("<div style='width:10px;" +
            "height:10px;" +
            "background-color: red;" +
            "position: absolute;" +
            "left: -9999px;" +
            "top:-9999px;'></div>");
        DOM.prepend(cursor, document.body);

        var t2 = DOM.get("#t2");
        t2.onkeyup = t2.onmouseup = function () {
            var curOffset = DOM.prop(t2, "KsCursorOffset");
            DOM.offset(cursor, curOffset);
        };

        var t3 = DOM.get("#t3");
        t3.onkeyup = t3.onmouseup = function () {
            var curOffset = DOM.prop(t3, "KsCursorOffset");
            DOM.offset(cursor, curOffset);
        };
    })();
});