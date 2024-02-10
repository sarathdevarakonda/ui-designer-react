const customMiddleware = store => next => action => {
    // Your middleware logic goes here
    console.log('Custom Middleware:', action);
    return next(action);
  };
  
  export const customExtension = {
    middleware: [customMiddleware],
  };
  