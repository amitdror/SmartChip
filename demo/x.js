
// Trade off betwen query performance vs consistency

// Using References (Normalization) -> CONSISTENCY
let author  = {
    name: 'Amit'
}

let course = {
    author: 'id',
}

// Using Embedded Documents (Denormalization) -> PERFORMANCE
let course = {
    author: {
        name: 'Amit'
    }
}

// Hybrid
let author = {
    name: 'Amit'
    // 50 other properties
}

let course = {
    author = {
        id: 'ref',
        name: 'Amit'
    }
}



// Authentication
// Authorization

// Register: POST /api/users {name, email, password}
// Login: POST /api/logins