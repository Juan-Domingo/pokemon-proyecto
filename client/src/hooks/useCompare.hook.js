function useCompareAsc(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
}


function useCompareDes(a, b) {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
}

function useCompareId(a, b) {
    if (parseInt(a.id) < parseInt(b.id)) return -1;
    if (parseInt(a.id) > parseInt(b.id)) return 1;
    return 0;
}

function useCompareHeightAsc(a, b) {
    if (parseInt(a.height) < parseInt(b.height)) return -1;
    if (parseInt(a.height) > parseInt(b.height)) return 1;
    return 0;
}

function useCompareHeightDes(a, b) {
    if (parseInt(a.height) < parseInt(b.height)) return 1;
    if (parseInt(a.height) > parseInt(b.height)) return -1;
    return 0;
}

export {
    useCompareAsc,
    useCompareDes,
    useCompareId,
    useCompareHeightAsc,
    useCompareHeightDes,
};
