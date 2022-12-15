const generalPicture = document.querySelector(".general-picture");
const description = document.querySelector(".description");
const allAnchor =document.querySelectorAll(".coctail-ankor");
const mainDet =document.querySelector(".main-class");
const DISAPPEAR ="disappear";
function showDetails()
{
    mainDet.classList.remove(DISAPPEAR);
}
function disappearDetails()
{
    mainDet.classList.add(DISAPPEAR);
}
function setDatails(anchor)
{
    generalPicture.src = anchor.getAttribute("data-general-picture");
    description.innerHTML = anchor.getAttribute("data-description");
    showDetails();
}
for (let i = 0; i < allAnchor.length; i++)
{
    allAnchor[i].addEventListener("click", function ()
    {
        setDatails(allAnchor[i]);
    }
    )
}