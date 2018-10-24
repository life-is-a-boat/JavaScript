/**
 * Created by admin on 2018/6/8.
 */

function getParentNode(ele) {
    return ele.parentNode||ele.parentElement;
}

function getChildNodes(ele) {
    return ele.childNodes|| ele.children;
}

function getFirstChildNode(ele) {
    return ele.firstElementChild||ele.firstChild;
}

function getLastChildNode(ele) {
    return ele.lastElementChild||ele.lastChild;
}

function getPreSiblingNode(ele) {
    return ele.previousElementSibling||ele.previousSibling;
}

function getNextSiblingNode(ele) {
    return ele.nextElementSibling||ele.nextSibling;
}

function getAllSiblingNodes(ele) {
    var newArr = [];
    var childs = getChildNodes(getParentNode(ele));
    for(var i = 0;i<childs.length;i++){
        if (childs[i]!== ele && childs[i].type === ele.type){
            newArr.push(childs[i]);
        }
    }
    return newArr;
}

function getSiblingNode(ele,index) {
    var newArr = getAllSiblingNode(ele);
    return newArr[index];
}

function removeAllChildren(ele) {
    var childs = getChildNodes(ele);
    for (var i = 0; i < childs.length; i++) {
        ele.removeChild(childs[i]);
    }

}
