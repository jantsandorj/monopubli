export const ArrayToParentChildJson = (data) => {
    const sortedData = JSON.parse(JSON.stringify(data)).sort(
        (a, b) => a.menuId?.slice(a.menuId?.length - 2, a.menuId?.length) - b.menuId?.slice(a.menuId?.length - 2, a.menuId?.length)
    );

    let { res } = JSON.parse(JSON.stringify(sortedData))?.reduce(
        (acc, curr) => {
            if (acc.parentMap[curr.parentSeq]) {
                (acc.parentMap[curr.parentSeq].children = acc.parentMap[curr.parentSeq].children || []).push(curr);
            } else {
                acc.res.push(curr);
            }
            acc.parentMap[curr.seq] = curr;
            return acc;
        },
        { parentMap: {}, res: [] }
    );

    // Sort the res array by menuId
    res.sort((a, b) => a.menuId?.slice(a.menuId?.length - 2, a.menuId?.length) - b.menuId?.slice(a.menuId?.length - 2, a.menuId?.length));

    return res;
};

export const ParentChildJsonToArray = (data) => {
    const result = [];

    const traverse = (node) => {
        result.push(node);

        if (node.children && node.children.length > 0) {
            node.children.forEach((child) => {
                traverse(child);
            });
        }
    };

    data.forEach((node) => {
        traverse(node);
    });

    return result;
};
