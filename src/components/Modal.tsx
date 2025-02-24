import { useState, useEffect, useImperativeHandle } from 'react';


export default function Modal({ref, children, callbackClose=null}) {
	var [visible, setVisible] = useState(false);

	useEffect(()=>{
		let body: HTMLHtmlElement | null = document.querySelector("html");
        let modal = document.querySelector(".modal-default");
		let h = body?.getBoundingClientRect().height;
        let top = body.scrollTop + 100;
		let bg = document.querySelector(".modal-bg");

		//body.scrollTop = 0;
		if(bg) bg.setAttribute("style","height:"+h+"px");
        if(modal) modal.setAttribute("style","top:"+top+"px");
		//console.log(bg, h);

	}, [visible]);

	function open() {
		
		//document.querySelector("body").setAttribute("style","overflow-y:hidden");

		setVisible(true);
	}

	function close(e: Event) {
		e.preventDefault();

	    setVisible(false);
	    //document.querySelector("body").setAttribute("style","overflow-y:auto");

	    if(callbackClose) callbackClose();
	}

	useImperativeHandle(ref, (e: Event) => {
		return{
	    	open: open,
	    	close: close.bind(e)
	};
	}, [visible]);

	return(
		<>
			{visible && <div className="modal-default">

	          {children}

	          <a className="modal-close" href="#" onClick={(e)=> close(e)}> X </a>
	        </div>}

	        {visible && <div className="modal-bg"></div>}
        </>
	);
}