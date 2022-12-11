const generalPicture = document.querySelector(".general-picture");
const description = document.querySelector(".description");
const allAnchor =document.querySelectorAll(".coctail-ankor");
function setDatails(anchor)
{
    generalPicture.src = anchor.getAttribute("data-general-picture");
    description.innerHTML = anchor.getAttribute("data-description");
}
for (let i = 0; i < allAnchor.length; i++)
{
    allAnchor[i].addEventListener("click", function ()
    {
        setDatails(allAnchor[i]);
    })
}