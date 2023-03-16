const mergeClassName = (...names: (string | undefined)[]) => {
    return names.filter(v => Boolean(v)).join(' ');
}
export default mergeClassName;