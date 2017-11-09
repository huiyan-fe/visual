import Config from '../config/config';

const deleteObject = object => {
    // console.log(object.origin.isActive)
    // let candelete = object.origin
    // console.log(object)
    const deleteObj = object.origin.innerObject;
    let candelete = true;

    // console.log('@@@@@@@@@@@', object.origin, object.origin.index)
    if (deleteObj.listens.willDeletePoint) {
        candelete = deleteObj.listens.willDeletePoint({
            object: object.origin.innerObject,
            index: object.origin.index,
        }) !== false;
    }

    const minPoint = object.origin.innerObject.type === Config.objectTypes.polygon ? 3 : 2;
    if (candelete) {
        if (object.origin.type === 'point' && object.origin.innerObject.path.length > minPoint) {
            object.origin.innerObject.path.splice(object.origin.index, 1);
            if (object.origin.index > object.origin.innerObject.path.length - 1) {
                object.origin.index -= 1;
                object.origin.innerObject.isActive.index -= 1;
            }
        } else {
            object.origin.type = 'object';
        }
    }
};

export default deleteObject;