export const getLevel = (id) => {
    const defaultKey = 'F'
    const rolesMap = {
        'S': 0,
        'F': 1
    }
    return rolesMap[id] ?? rolesMap[defaultKey]
}