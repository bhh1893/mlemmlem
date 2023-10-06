export const getLevel = (id) => {
    const defaultKey = 'F'
    const rolesMap = {
        'S': 0,
        'A': 1,
        'B': 2,
        'C': 3,
        'F': 4,
        0: 'S',
        1: 'A', 
        2: 'B', 
        3: 'C',
        4: 'F', 
    }
    return rolesMap[id] ?? rolesMap[defaultKey]
}

export const tierListSize = 5
