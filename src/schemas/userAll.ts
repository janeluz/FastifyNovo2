const allUsers = {
  response: {
      200: {
          type: 'array',
          items: {
              type: 'object',
              required: ['id', 'name', 'email','password','createdAt', 'updatedAt'],
              properties: {
                  id: {type: 'string',  format: 'uuid'},                                                              
                  name: {type: 'string'}, 
                  email:{ type: 'string'},
                  password:{ type: 'string'},                                         
                  createdAt:{type: 'string',format: "date-time"},   
                  updatedAt:{type: 'string',format: "date-time"},                
                  
          }
      }
  }
}
}

const addUser = {
    body: {
        type: 'object',
        required: ['name','email','password','confirmPassword','avatar', 'isAdmin','departament'],
        properties: {
            name: {type: 'string'},
            email: {type: 'string'},
            password: {type: 'string'},
            confirmPassword:{type:'string'},
            avatar: {type:'string'},
            isAdmin: {type:'boolean'},
            departament: {type: 'enum'},
        }
    },
    response: {
        201: {
            type: 'object',
            properties: {
                created: {type: 'boolean'}
            }
        }
    }

}
export { allUsers, addUser};