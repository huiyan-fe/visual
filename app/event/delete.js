const deleteObject = object => {
    // let candelete = object.origin
    const deleteObj = object.origin.data.object;
    let candelete = true;
    if (deleteObj.listens.willDeletePoint) {
        candelete = deleteObj.listens.willDeletePoint({
            object: object.origin.data,
            index: object.origin.index,
        }) !== false;
    }

    if (candelete) {
        if (object.origin.type === 'point' && object.origin.data.path.length > 2) {
            object.origin.data.path.splice(object.origin.index, 1);
            if (object.origin.index > object.origin.data.path.length - 1) {
                object.origin.index--;
            }
        } else {
            object.origin.type = 'object';
        }
    }
};

export default deleteObject;