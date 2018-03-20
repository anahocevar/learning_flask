(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("bcfa0aed-ff84-4bfd-a12b-2b4623b3c84e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bcfa0aed-ff84-4bfd-a12b-2b4623b3c84e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"a9284ee0-2a4f-40d5-b6ca-aed25115e507":{"roots":{"references":[{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"7c33feb0-75e5-431b-901b-941d08d062d3","type":"AdaptiveTicker"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"87a0b942-38e2-4cf6-9439-d2b2e1acba81","type":"DaysTicker"},{"attributes":{"source":{"id":"11a08000-fa07-4c3a-a045-5c518a2a40a5","type":"ColumnDataSource"}},"id":"9c294461-0577-4f10-a8c2-4b3fbc426d8a","type":"CDSView"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"048b62d8-2c49-4f2b-ab26-5690e4e8ecd4","type":"DaysTicker"},{"attributes":{},"id":"039e4843-9c6f-47f0-893e-326c656056a6","type":"DatetimeTickFormatter"},{"attributes":{"plot":null,"text":"AAPL closing price in the last month"},"id":"4d0ee9a3-6609-4c98-8802-889c199701eb","type":"Title"},{"attributes":{"days":[1,15]},"id":"b2427d20-c86d-4939-886b-19e7e6356d74","type":"DaysTicker"},{"attributes":{"dimension":1,"plot":{"id":"a7a079b5-050b-45b6-b14c-acf1c318a9b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4e9a56d-9d3d-4900-87b1-677cdf0c92d0","type":"BasicTicker"}},"id":"b66e9fa0-a789-4825-bda8-583f29efc787","type":"Grid"},{"attributes":{},"id":"a1708132-c0d7-4844-a4aa-d7c9c5ae886e","type":"YearsTicker"},{"attributes":{"axis_label":"Closing Price","formatter":{"id":"db1c3ca1-dfa1-4d7f-9b85-0aef03c9bb55","type":"BasicTickFormatter"},"plot":{"id":"a7a079b5-050b-45b6-b14c-acf1c318a9b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"b4e9a56d-9d3d-4900-87b1-677cdf0c92d0","type":"BasicTicker"}},"id":"d44a10dd-877e-4149-b2d6-5925e740d33e","type":"LinearAxis"},{"attributes":{},"id":"53cd44c0-de1a-42df-bb40-d8cc0ec1c176","type":"HelpTool"},{"attributes":{},"id":"e60bd7f3-be45-4250-a67f-6437879dfe02","type":"LinearScale"},{"attributes":{},"id":"db1c3ca1-dfa1-4d7f-9b85-0aef03c9bb55","type":"BasicTickFormatter"},{"attributes":{},"id":"b4e9a56d-9d3d-4900-87b1-677cdf0c92d0","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11a08000-fa07-4c3a-a045-5c518a2a40a5","type":"ColumnDataSource"},"glyph":{"id":"d1aa9569-702f-40c3-996d-2f95abcd4ba9","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e9cf2632-192a-4339-9920-5f16fe96c400","type":"Line"},"selection_glyph":null,"view":{"id":"9c294461-0577-4f10-a8c2-4b3fbc426d8a","type":"CDSView"}},"id":"83410be7-fd3c-4562-b224-5b53207a370d","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"16a76e30-163c-4403-a524-8168186999fb","type":"PanTool"},{"id":"753ba1a2-3690-4a16-be2d-2aee3bb16953","type":"WheelZoomTool"},{"id":"f1e59db4-cdee-4e11-ad56-52b133450fda","type":"BoxZoomTool"},{"id":"59ccc68c-9a08-4494-9778-9c7a2fc22fa9","type":"SaveTool"},{"id":"0f331956-c47d-44ce-ad12-7e8e69cb9d97","type":"ResetTool"},{"id":"53cd44c0-de1a-42df-bb40-d8cc0ec1c176","type":"HelpTool"}]},"id":"6fcc2664-4567-4b7a-9110-d01865a05e65","type":"Toolbar"},{"attributes":{},"id":"218816a5-89c0-4987-9bd4-42f641501211","type":"LinearScale"},{"attributes":{},"id":"0f331956-c47d-44ce-ad12-7e8e69cb9d97","type":"ResetTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"Date"},"y":{"field":"Close"}},"id":"e9cf2632-192a-4339-9920-5f16fe96c400","type":"Line"},{"attributes":{"plot":{"id":"a7a079b5-050b-45b6-b14c-acf1c318a9b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b75010c-f92f-4437-8e28-ad610df6453b","type":"DatetimeTicker"}},"id":"2e9dc8db-1d3e-4946-806a-9a784cfa7e50","type":"Grid"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"Date"},"y":{"field":"Close"}},"id":"d1aa9569-702f-40c3-996d-2f95abcd4ba9","type":"Line"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"e9b9984c-8220-4bed-97bd-30baa617b697","type":"MonthsTicker"},{"attributes":{"overlay":{"id":"9e454a00-bfd6-4df1-8e3a-11c9d8c6149f","type":"BoxAnnotation"}},"id":"f1e59db4-cdee-4e11-ad56-52b133450fda","type":"BoxZoomTool"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"2b7142ba-1d1a-4000-b4ee-98ed329ab966","type":"MonthsTicker"},{"attributes":{"days":[1,8,15,22]},"id":"49f1a27a-6a43-452e-8a81-95ab6b380e92","type":"DaysTicker"},{"attributes":{"axis_label":"Date","formatter":{"id":"039e4843-9c6f-47f0-893e-326c656056a6","type":"DatetimeTickFormatter"},"plot":{"id":"a7a079b5-050b-45b6-b14c-acf1c318a9b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"6b75010c-f92f-4437-8e28-ad610df6453b","type":"DatetimeTicker"}},"id":"deb77e92-1409-4400-a122-5033e8df84ca","type":"DatetimeAxis"},{"attributes":{"label":{"value":"AAPL"},"renderers":[{"id":"83410be7-fd3c-4562-b224-5b53207a370d","type":"GlyphRenderer"}]},"id":"fb1ab8e6-e6e1-4be1-bda9-0903f0a43158","type":"LegendItem"},{"attributes":{"months":[0,6]},"id":"514fa7fb-9c1a-44d2-a409-6981e16c6470","type":"MonthsTicker"},{"attributes":{"months":[0,4,8]},"id":"4c1baa89-fd26-4b3c-9974-f373dba0d1df","type":"MonthsTicker"},{"attributes":{},"id":"753ba1a2-3690-4a16-be2d-2aee3bb16953","type":"WheelZoomTool"},{"attributes":{"items":[{"id":"fb1ab8e6-e6e1-4be1-bda9-0903f0a43158","type":"LegendItem"}],"plot":{"id":"a7a079b5-050b-45b6-b14c-acf1c318a9b4","subtype":"Figure","type":"Plot"}},"id":"2cc5f5bf-0290-4739-aa27-83dcd2d964af","type":"Legend"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"323fcc7f-ced2-461f-8bcc-1234421b2624","type":"AdaptiveTicker"},{"attributes":{"num_minor_ticks":5},"id":"6b75010c-f92f-4437-8e28-ad610df6453b","type":"DatetimeTicker"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"1fa64822-9664-4c29-8543-0e0ceb21d5d9","type":"AdaptiveTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9e454a00-bfd6-4df1-8e3a-11c9d8c6149f","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"25f8ad90-9d55-48c3-bb87-4c797f303d16","type":"DataRange1d"},{"attributes":{"callback":null},"id":"8cc8937f-e35b-4a7c-860f-2d307e64bb52","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["Date","Close","index"],"data":{"Close":{"__ndarray__":"mpmZmZnpZUBxPQrXo0BmQM3MzMzMVGZArkfhehROZkDXo3A9Cn9mQNejcD0Kt2ZAj8L1KFx/ZkCuR+F6FB5mQClcj8L14GVAPQrXo3AVZkAK16NwPRpmQB+F61G4BmZAAAAAAADgZUCkcD0K10NmQBSuR+F6TGZA16NwPQpfZkAAAAAAAPBlQAAAAAAAkGVACtejcD1iZUAzMzMzM3tlQA==","dtype":"float64","shape":[20]},"Date":{"__ndarray__":"AADA47gjdkIAAICywSJ2QgAAwExvInZCAAAA5xwidkIAAECByiF2QgAAgBt4IXZCAABA6oAgdkIAAICELiB2QgAAwB7cH3ZCAAAAuYkfdkIAAEBTNx92QgAAACJAHnZCAABAvO0ddkIAAIBWmx12QgAAwPBIHXZCAAAAi/YcdkIAAMBZ/xt2QgAAAPSsG3ZCAABAjlobdkIAAIAoCBt2Qg==","dtype":"float64","shape":[20]},"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]}},"id":"11a08000-fa07-4c3a-a045-5c518a2a40a5","type":"ColumnDataSource"},{"attributes":{},"id":"59ccc68c-9a08-4494-9778-9c7a2fc22fa9","type":"SaveTool"},{"attributes":{},"id":"16a76e30-163c-4403-a524-8168186999fb","type":"PanTool"},{"attributes":{"below":[{"id":"deb77e92-1409-4400-a122-5033e8df84ca","type":"DatetimeAxis"}],"left":[{"id":"d44a10dd-877e-4149-b2d6-5925e740d33e","type":"LinearAxis"}],"renderers":[{"id":"deb77e92-1409-4400-a122-5033e8df84ca","type":"DatetimeAxis"},{"id":"2e9dc8db-1d3e-4946-806a-9a784cfa7e50","type":"Grid"},{"id":"d44a10dd-877e-4149-b2d6-5925e740d33e","type":"LinearAxis"},{"id":"b66e9fa0-a789-4825-bda8-583f29efc787","type":"Grid"},{"id":"9e454a00-bfd6-4df1-8e3a-11c9d8c6149f","type":"BoxAnnotation"},{"id":"2cc5f5bf-0290-4739-aa27-83dcd2d964af","type":"Legend"},{"id":"83410be7-fd3c-4562-b224-5b53207a370d","type":"GlyphRenderer"}],"title":{"id":"4d0ee9a3-6609-4c98-8802-889c199701eb","type":"Title"},"toolbar":{"id":"6fcc2664-4567-4b7a-9110-d01865a05e65","type":"Toolbar"},"x_range":{"id":"8cc8937f-e35b-4a7c-860f-2d307e64bb52","type":"DataRange1d"},"x_scale":{"id":"218816a5-89c0-4987-9bd4-42f641501211","type":"LinearScale"},"y_range":{"id":"25f8ad90-9d55-48c3-bb87-4c797f303d16","type":"DataRange1d"},"y_scale":{"id":"e60bd7f3-be45-4250-a67f-6437879dfe02","type":"LinearScale"}},"id":"a7a079b5-050b-45b6-b14c-acf1c318a9b4","subtype":"Figure","type":"Plot"}],"root_ids":["a7a079b5-050b-45b6-b14c-acf1c318a9b4"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"a9284ee0-2a4f-40d5-b6ca-aed25115e507","elementid":"bcfa0aed-ff84-4bfd-a12b-2b4623b3c84e","modelid":"a7a079b5-050b-45b6-b14c-acf1c318a9b4"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.7.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
