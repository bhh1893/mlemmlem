import '../index.css'

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

export const getColor = (id) => {
    const defaultKey = 'text-white'
    const rolesMap = {
        'S': 'text-rose-400',
        'A': 'text-orange-400',
        'B': 'text-yellow-400', 
        'C': 'text-green-400',
        'F': 'text-purple-400', 
        0: 'text-rose-400',
        1: 'text-orange-400',
        2: 'text-yellow-400', 
        3: 'text-green-400',
        4: 'text-purple-400', 
    }
    return rolesMap[id] ?? defaultKey
}
