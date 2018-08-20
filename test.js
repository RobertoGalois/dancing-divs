animation();

function contentWrapper(pElem)
{
	this.content = pElem;
	this.expand = true;
}

function animation()
{
	var danceFloor = window.document.querySelector("#danceFloor");
	var contents = window.document.querySelectorAll(".content");

	for (var i = 0, lim = contents.length; i < lim; i++) {
		defineInterv(contents[i]);
	}
}

function defineInterv(pElem)
{
	var wrapped = new contentWrapper(pElem);
	setInterval(function () { grow(wrapped); }, 10);
}

function grow(pElem)
{
	var sizeW = parseInt(getComputedStyle(pElem.content).width)
	var sizeH = parseInt(getComputedStyle(pElem.content).height)
	var addValue = ((pElem.expand) ? (5) : (-5));

	if ((sizeW > 300) || (sizeH > 300)) {
		pElem.expand = false;
	}
		

	else if ((sizeW < 5) || (sizeH < 5)) {
		pElem.expand = true;
	}

	pElem.content.style.width = (sizeW + addValue) + "px";
	pElem.content.style.height = (sizeH + addValue) + "px";

}

function tester(i)
{
	console.log(i);
}