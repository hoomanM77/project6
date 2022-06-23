////////////////Variables////////////////////////////////
const $=document
let inputTag=_id('input')
let warningMessage=_q('.warning')
let formTag=_q('.add')
let modal=_id('modal')

////////////Catching element with function///////////////
function _id(tag) {
    return $.getElementById(tag)
}
function _class(tag) {
    return $.getElementsByClassName(tag)
}
function _q(tag) {
    return $.querySelector(tag)
}
function _qAll(tag) {
    return $.querySelectorAll(tag)
}
////////////////// Fire on input/////////////////////////
inputTag.addEventListener('keydown',function (event) {
    if(event.target.value==='' && event.key==='Enter'){
        stop_form()
        warningMessage.style.display='block'
    }else if(event.key==='Enter'){
        let ulTodos=_q('.todos')
        let newLiItem=$.createElement('li')
        let newSpan=$.createElement('span')
        let newIcon=$.createElement('i')
        create_li(newLiItem)
        create_span(newSpan,event.target.value)
        create_icon(newIcon)
        ulTodos.append(newLiItem)
        newLiItem.append(newSpan,newIcon)
        warningMessage.style.display='none'
        event.target.value=''
        stop_form()
    }
})
//////////preventing form to submit/////////////
function stop_form() {
    formTag.addEventListener('submit',function (event) {
        event.preventDefault()
    })
}
///////////////////Managing Li///////////////////
function create_li(tag) {
    tag.classList.add('list-group-item')
    tag.classList.add('d-flex')
    tag.classList.add('justify-content-between')
    tag.classList.add('align-items-center')
}
////////////////////Managing Span//////////////////
function create_span(tag,value) {
    tag.classList.add('text-white')
    tag.innerHTML=value.trim()
}
////////////////////Managing icon//////////////////
function create_icon(tag) {
    tag.classList.add('fa')
    tag.classList.add('fa-trash-o')
    tag.classList.add('delete')
    tag.classList.add('text-white')
    tag.setAttribute('data-bs-toggle','modal')
    tag.setAttribute('data-bs-target','#modal')
    tag.setAttribute('onclick','remove_li(this)')
}
////////////////// remove li//////////////////
function remove_li(tag) {
    tag.parentElement.remove()
}
////////////////// Fire on modal///////////////////
