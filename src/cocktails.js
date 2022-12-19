const generalPicture = document.querySelector(".general-picture");
const description = document.querySelector(".description");
const container_details =document.querySelector(".container-details");
const allAnchor =document.querySelectorAll(".coctail-ankor");
const mainDet =document.querySelector(".main-class");
const music =document.querySelector(".music")
const DISAPPEAR ="disappear";
const IS_POINT = "is-point";
function showDetails()
{
    mainDet.classList.remove(DISAPPEAR);
    container_details.classList.add(IS_POINT);
    setTimeout(function ()
    {
    container_details.classList.remove(IS_POINT);
    },50);
}
function disappearDetails()
{
    mainDet.classList.add(DISAPPEAR);
}
function setDatails(anchor)
{
    generalPicture.src = anchor.getAttribute("data-general-picture");
    description.innerHTML = anchor.getAttribute("data-description");
    music.src=anchor.getAttribute("data-music");
    music.play();
    setTimeout(function (){
        music.pause();
        music.currentTime = 0;
    }, 7000)

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