let moreButtonActiveList;
function toggleMoreButtonActiveList(idCard) {
    moreButtonActiveList = document.querySelectorAll(".container_more_button_actions");
    moreButtonActiveList.forEach((element, index) => {
        if (idCard == index) {
            moreButtonActiveList[idCard].classList.remove("d-none");
        }
        if (idCard != index) {
            moreButtonActiveList[index].classList.add("d-none");
        }
    })
}
window.addEventListener("click", function (e) {
    try {
        if (!e.target.classList.contains("more_vertical_icon")) {
            moreButtonActiveList.forEach((element, index) => moreButtonActiveList[index].classList.add("d-none"))
        }
    } catch (e) {
        console.log(e)
    }
})

export { toggleMoreButtonActiveList };