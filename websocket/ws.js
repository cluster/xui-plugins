//it breaks the chainability, but... returns a websocket object
xui.extend({ 
	ws:function(url, callback){
			var xThis = x$(this[0]);
			//make sure we take the first element
		    var w = new WebSocket(url);
		    w.onopen = function(evt){
		        xThis.fire(xThis[0].id+"_openWS", evt.data);
		    };
		    w.onclose = function(evt){
		        xThis.fire(xThis[0].id+"_closeWS", evt.data);
		    };
		    w.onmessage = function(evt){
		    	if(callback) callback(evt.data, xThis, w);
		    	else xThis.html(evt.data);
		    };
		    w.onerror = function(evt){
		        xThis.fire(xThis[0].id+"_errorWS", evt.data);
		    };
		    return w;
	}	
});