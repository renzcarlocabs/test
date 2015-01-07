$(function(){
	//should be converted to plugin
	var checkerTmpl = '<span class="checker"><?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" class="label_mark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 10 10"> <path d="M1.43,4.997l2.26,1.753l4.746-6.388c0.261-0.384,0.776-0.477,1.149-0.208l0.063,0.048c0.373,0.269,0.464,0.798,0.202,1.182 L4.672,9.585c-0.196,0.287-0.39,0.387-0.73,0.41c-0.34,0.023-0.546-0.107-0.751-0.317L0.245,6.214c-0.326-0.335-0.326-0.879,0-1.215 l0.004-0.002C0.575,4.662,1.104,4.662,1.43,4.997z"/></svg></span>'
    , chkContainerTmpl = "<div class='check-me-wrap'></div>";
	$(".check-me").each(function(){
		var $self = $(this)
			, $lbl = $self.next()
			, isChecked = $self.is(":checked");
		$self.on("click", function(){
			$(this).parent().toggleClass("checked");
		});

		$self.wrap(chkContainerTmpl)
			.parent()
			.prepend(checkerTmpl)
			.append($lbl)
			.find(".checker").on("click", function(){
				$(this).parent().find(".check-me").click();
			});

		if(isChecked)
			$self.parent().addClass("checked");
	});
});